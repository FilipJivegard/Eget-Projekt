const STORAGE_KEY = "golfLosses";

// Hämta och spara data
function getData(){ return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
function saveData(data){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

// Sätt dagens datum som standard
const roundDate = document.getElementById("roundDate");
const today = new Date().toISOString().split("T")[0];
roundDate.value = today;

// Formulär och loggning
const form = document.getElementById("ballForm");
form.addEventListener("submit", function(e){
  e.preventDefault();
  if(!roundDate.value){
    alert("Välj datum för rundan först!");
    return;
  }
  const entry = {
    id: Date.now(),
    date: roundDate.value, // rundans datum
    course: course.value,
    hole: Number(hole.value),
    shotType: shotType.value,
    cause: cause.value,
    ballType: ballType.value,
    note: note.value
  };
  const data = getData();
  data.push(entry);
  saveData(data);
  form.reset();
  ballImages.forEach(i=>i.classList.remove("selected")); // ta bort markering
  showToast();
  updateAll();
});

// Bolltyp via bildval
const ballImages = document.querySelectorAll("#ballSelector img");
const ballTypeInput = document.getElementById("ballType");
ballImages.forEach(img => {
  img.addEventListener("click", () => {
    ballImages.forEach(i => i.classList.remove("selected"));
    img.classList.add("selected");
    ballTypeInput.value = img.dataset.type;
  });
});

// Statistik
function updateStats(data){
  const total = data.length;
  const rounds = new Set(data.map(d => d.date + d.course)).size;
  const avg = rounds ? (total / rounds).toFixed(2) : 0;

  const causeCount = {};
  const holeCount = {};
  data.forEach(d => {
    causeCount[d.cause] = (causeCount[d.cause] || 0) + 1;
    holeCount[d.hole] = (holeCount[d.hole] || 0) + 1;
  });

  const topCause = Object.keys(causeCount).length
    ? Object.keys(causeCount).reduce((a,b)=> causeCount[a]>causeCount[b]?a:b)
    : "-";

  const worstHole = Object.keys(holeCount).length
    ? Object.keys(holeCount).reduce((a,b)=> holeCount[a]>holeCount[b]?a:b)
    : null;
  const worstHoleText = worstHole ? `Hål ${worstHole}` : "Ingen data";

 stats.innerHTML = `
  <div>
    <strong>Totalt</strong>
    <span class="total-number">${total}</span>
  </div>

  <div>
    <strong>Rundor</strong>
    <span class="stat-value">${rounds}</span>
  </div>

  <div>
    <strong>Snitt</strong>
    <span class="stat-value">${avg}</span>
  </div>

  <div>
    <strong>Vanligaste orsak</strong>
    <span class="stat-value">${topCause}</span>
  </div>

  <div>
    <strong>Värsta hål</strong>
    <span class="stat-value">${worstHoleText}</span>
  </div>
`;
}

// Rendera rundor och bollar
function renderRounds(data){
  if(data.length===0){ 
    tableContainer.innerHTML = `<div class="empty-state">Ingen data registrerad</div>`; 
    return; 
  }

  // Gruppera efter runda: datum + bana
  const roundsMap = {};
  data.forEach(d=>{
    const key = `${d.date} | ${d.course}`;
    if(!roundsMap[key]) roundsMap[key] = [];
    roundsMap[key].push(d);
  });

  tableContainer.innerHTML = "";

  Object.keys(roundsMap).sort((a,b)=> new Date(b.split(" | ")[0]) - new Date(a.split(" | ")[0]))
    .forEach(roundKey => {
      const balls = roundsMap[roundKey];
      const roundDiv = document.createElement("div");
      roundDiv.classList.add("round-card");

      const toggleBtn = document.createElement("button");
      toggleBtn.classList.add("round-toggle");
      toggleBtn.textContent = roundKey + ` (${balls.length} boll${balls.length>1?"ar":""})`;
      roundDiv.appendChild(toggleBtn);

      const ballsDiv = document.createElement("div");
      ballsDiv.classList.add("round-balls");

      const table = document.createElement("table");
      table.innerHTML = `
        <thead>
          <tr>
            <th>Hål</th>
            <th>Slagtyp</th>
            <th>Orsak</th>
            <th>Boll</th>
            <th>Anteckning</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${balls.map(d=>`
            <tr>
              <td>${d.hole}</td>
              <td>${d.shotType}</td>
              <td>${d.cause}</td>
              <td>${d.ballType}</td>
              <td>${d.note||""}</td>
              <td><button onclick="deleteEntry(${d.id})">Radera</button></td>
            </tr>
          `).join("")}
        </tbody>
      `;
      ballsDiv.appendChild(table);
      ballsDiv.style.display = "none"; // starta dolt
      toggleBtn.addEventListener("click", ()=> {
        ballsDiv.style.display = ballsDiv.style.display==="none"?"block":"none";
      });

      roundDiv.appendChild(ballsDiv);
      tableContainer.appendChild(roundDiv);
  });
}

// Radera post
function deleteEntry(id){
  if(!confirm("Radera posten?")) return;
  saveData(getData().filter(d=>d.id!==id));
  updateAll();
}

// Diagram
let holeChart, causeChart, trendChart, ballsPerTypeChart;
function updateCharts(data){
  const holeData=Array(18).fill(0), causeData={}, trendData={}, ballsTypeData={};
  data.forEach(d=>{
    holeData[d.hole-1]++;
    causeData[d.cause]=(causeData[d.cause]||0)+1;
    trendData[d.date]=(trendData[d.date]||0)+1;
    ballsTypeData[d.ballType]=(ballsTypeData[d.ballType]||0)+1;
  });

  const sortedDates = Object.keys(trendData).sort();

  if(holeChart) holeChart.destroy();
  if(causeChart) causeChart.destroy();
  if(trendChart) trendChart.destroy();
  if(ballsPerTypeChart) ballsPerTypeChart.destroy();

  holeChart = new Chart(document.getElementById("holeChart"), { 
    type:"bar", 
    data:{ labels:[...Array(18).keys()].map(i=>i+1), datasets:[{data:holeData}] },
    options:{ plugins:{ title:{ display:true, text:"Bollar förlorade per hål" } } }
  });

  causeChart = new Chart(document.getElementById("causeChart"), { 
    type:"pie", 
    data:{ labels:Object.keys(causeData), datasets:[{data:Object.values(causeData)}] },
    options:{ plugins:{ title:{ display:true, text:"Orsak till förlust" } } }
  });

  trendChart = new Chart(document.getElementById("trendChart"), { 
    type:"line", 
    data:{ labels:sortedDates, datasets:[{data:sortedDates.map(d=>trendData[d])}] },
    options:{ plugins:{ title:{ display:true, text:"Utveckling över tid" } } }
  });

  ballsPerTypeChart = new Chart(document.getElementById("ballsPerTypeChart"), {
    type:"pie",
    data:{ labels:Object.keys(ballsTypeData), datasets:[{data:Object.values(ballsTypeData)}] },
    options:{ plugins:{ title:{ display:true, text:"Bollar per typ" } } }
  });
}

// Toast
function showToast(){ toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"),2000); }

// Uppdatera allt
function updateAll(){ 
  const data=getData(); 
  updateStats(data);
  renderRounds(data); 
  updateCharts(data); 
}

// Rensa all data
clearAll.addEventListener("click", function(){ 
  if(!confirm("Rensa all data?")) return; 
  localStorage.removeItem(STORAGE_KEY); 
  updateAll(); 
});

// Hålnummer dropdown
for(let i=1;i<=18;i++){ hole.innerHTML += `<option value="${i}">${i}</option>`; }

// Initial uppdatering
updateAll();