/* ==========================================================================
   SPRÅKVÄXLING (SV / EN)
   ==========================================================================
   Lägg till attributet data-i18n="nyckel" på vilket element som helst i
   HTML:en för att göra det översättningsbart. Lägg sedan till samma nyckel
   under både "sv" och "en" nedan.
   ========================================================================== */

(function () {
  const translations = {
    sv: {
      "nav.home": "Hem",
      "nav.portfolio": "Portfölj",
      "nav.about": "Om mig",
      "nav.contact": "Kontakt",

      "hero.title": "Tja! Filip här.",
      "hero.text": `Efter att ha pluggat marknadsföring och digital handel kände jag ganska snabbt att jag ville ut i den riktiga världen direkt.
                Det är genom mina jobb och praktiker som jag har fattat vad som faktiskt fungerar i en digital butik och vad som får folk att vilja trycka på köpknappen.
                <br>
                För att kunna ta mina idéer hela vägen har jag dessutom pluggat webbutveckling. Så förutom marknadsföringen har jag koll på HTML och CSS vilket gör att jag inte bara kan snacka om hur en sajt borde se ut,
                utan faktiskt kan bygga och skruva på den själv.<br><br>
                Istället för att bara sitta och snacka i oändliga möten är jag en sån som hellre testar nya idéer, driver egna projekt och ser till att saker faktiskt blir gjorda.<br><br>
                Kika gärna in mina case här på sidan! Det är en blandning av egna koncept, fiktiva projekt och skarpa grejer från mitt arbetsliv. De visar rätt bra hur jag tänker: det ska vara snyggt,
                det ska sälja och det ska framförallt kännas äkta.<br><br>
                Jag lägger ner mycket tid och energi på det jag gör, men vägrar att ha tråkigt under tiden.
                Så om du vill ha en nyfiken och driven person till ditt team, eller bara vill ta en kaffe och snacka om hur vi kan lyfta dina grejer:<br><br>
                <b>Hör av dig. Jag svarar oftast sjukt snabbt!</b>`,

      "portfolio.heading": "PORTFÖLJ",

      "portfolio1.title": "Utvecklingen av produktsida",
      "portfolio1.text": `I samband med rebrandingen från IAMRUNBOX till Kilometer Studios
                var jag med och tog fram en ny produktsida från grunden. Det var en spännande fas där mycket handlade
                om att översätta ett nytt varumärke och en ny riktning till en tydlig digital upplevelse.
                <br><br>
                Jag arbetade med allt från design och struktur till hur produkter presenterades och paketerades i bundles.
                För mig var det viktigt att sidan inte bara speglade den nya visuella identiteten,
                utan också gjorde det enkelt för kunden att förstå erbjudandet och hitta rätt.`,

      "portfolio2.title": "Email Marketing",
      "portfolio2.text": `På Bernt i Lund fick jag möjlighet att ta ett större grepp om e-mailmarknadsföringen och vara med och utveckla kanalen mer strukturerat.
                Jag tog initiativ till både design och innehåll i utskick och arbetade löpande med A/B-tester för att förstå vad som engagerade mottagarna och gav bäst resultat.
                <br><br>
                En viktig del var att bygga upp en stabil tillväxt av prenumeranter. Där jobbade jag med pop-ups på hemsidan, tydligare nyhetsbrevsflöden och kampanjer via sociala medier för att nå nya målgrupper och driva fler registreringar.
                Det gjorde att e-maillistan växte och att vi kunde arbeta mer kontinuerligt med kanalen.`,

      "showcase.heading": "Egna projekt",

      "tabs.email": "Email",
      "tabs.ads": "Ads",
      "tabs.webb": "Webb",

      "slide1.title": "Välkomst email",
      "slide1.text": `Det här är ett eget koncept jag har designat för "ASKA" för att visa hur jag tänker kring e-postmarknadsföring och visuell layout.
                    Min idé här var att bygga en ren och skandinavisk känsla som lyfter fram produkterna utan att kompromissa med användarupplevelsen.`,

      "slide2.title": "Säljande Kaffebryggare",
      "slide2.text": `Det här är ett eget koncept jag har designat för Kaffe Maskin.png för att testa ett mer säljdrivet upplägg med starka köpknappar och kundbetyg.
                    Min idé här var att skapa en varm, inbjudande känsla som snabbt bygger förtroende och pushar för ett direkt avslut.`,

      "slide3.title": "Veckans Meny",
      "slide3.text": `Det här konceptet tog jag fram för en fiktiv restaurang för att testa hur man presenterar en stor mängd information och text på ett aptitretande och strukturerat sätt. Utmaningen här låg i att fånga restaurangens unika atmosfär visuellt,
                    samtidigt som veckans rätter behåller ett tydligt och lättläst fokus för gästen.`,

      "slide4.title": "Konceptuell Kampanjgrafik: Blågula drömmar",
      "slide4.text": `Det här är ett konceptuellt reklamuppdrag jag har formgivit inför VM 2026 på en fiktiv "Kanal Jive". Min idé här var att fånga den laddade och känslosamma landslagskänslan i en högkvalitativ sportgrafik,
                    där färgval och typografi samspelar för att skapa maximal uppmärksamhet i flödet.`,

      "slide5.title": "Hörlurar",
      "slide5.text": `Det här är ett fiktivt designprojekt där jag har formgett en konverteringsfokuserad kampanjbild för varumärket ZERO. Genom att kombinera en stark visuell kontrast mellan ljust och mörkt med eleganta gulddetaljer,
                    har jag velat skapa en exklusiv känsla som sätter produkten i centrum och samtidigt driver ett tydligt köpbehov.`,

      "slide6.title": "Denna hemsida",
      "slide6.text": `Den här hemsidan är faktiskt ett litet projekt i sig. Istället för att ta den enkla vägen via en färdig mall har jag kodat allt från grunden med HTML, CSS och Javascript för att få det precis som jag vill ha det.
        Sajten ligger live via GitHub, vilket gör att jag hela tiden kan snygga till koden och testa nya idéer live.`,

      "about.title": "När datorn är avstängd...",
      "about.text": `När skärmen slocknar och jag lägger undan allt vad digital handel och HTML heter, hittar du mig oftast på helt andra ställen. <br>
            Antingen är jag ute i vildmarken, vilket i mitt fall oftast betyder golfbanan, där jag försöker hitta den perfekta balansen mellan total avkoppling och extrem frustration över mitt dåliga spel. <br><br>
            Andra dagar sätter jag mig hellre ner med ett schackbräde för att utmana hjärnan lite. Där är det nästan alltid Italian Game som gäller som öppning.
            Om det däremot är helg sitter jag garanterat bänkad framför TV:n med nerverna på utsidan som trogen Tottenham-supporter. Det är en ren känslomässig bergochdalbana, men jag byter inte ut det mot något. <br>
            När fotbollen är slut eller vädret suger blir det istället en hel del film och serier, allt från tunga klassiker till sköna rullar där man bara kan koppla bort allt i två timmar.
            <br><br>
            Kort sagt: Jag är en ganska vanlig, schysst kille som gillar sport, spel och att ha det gött. Så om du vill utmana mig på ett parti schack, diskutera Tottenhams senaste match eller tipsa om en bra film, då vet du vem du ska skriva till!`,

      "footer.totop": "Till Toppen ↑"
    },

    en: {
      "nav.home": "Home",
      "nav.portfolio": "Portfolio",
      "nav.about": "About Me",
      "nav.contact": "Contact",

      "hero.title": "Hey! Filip here.",
      "hero.text": `After studying marketing and digital commerce, I pretty quickly felt like I wanted to get out into the real world right away.
                It's through my jobs and internships that I've figured out what actually works in a digital store and what makes people want to hit that buy button.
                <br>
                To be able to take my ideas all the way, I've also studied web development. So besides marketing, I know my way around HTML and CSS, which means I don't just talk about how a site should look —
                I can actually build and tweak it myself.<br><br>
                Instead of just sitting around in endless meetings, I'm someone who'd rather test new ideas, run my own projects, and make sure things actually get done.<br><br>
                Feel free to check out my case studies here on the site! It's a mix of my own concepts, fictional projects, and real work from my career. They show pretty well how I think: it has to look great,
                it has to sell, and above all, it has to feel genuine.<br><br>
                I put a lot of time and energy into what I do, but I refuse to be bored while doing it.
                So if you want a curious, driven person on your team, or just want to grab a coffee and talk about how we can elevate your stuff:<br><br>
                <b>Get in touch. I usually reply crazy fast!</b>`,

      "portfolio.heading": "PORTFOLIO",

      "portfolio1.title": "Developing a Product Page",
      "portfolio1.text": `As part of the rebrand from IAMRUNBOX to Kilometer Studios, I helped build a new product page from the ground up. It was an exciting phase that was largely about
                translating a new brand and direction into a clear digital experience.
                <br><br>
                I worked on everything from design and structure to how products were presented and packaged into bundles.
                For me, it was important that the page didn't just reflect the new visual identity,
                but also made it easy for customers to understand the offer and find what they were looking for.`,

      "portfolio2.title": "Email Marketing",
      "portfolio2.text": `At Bernt i Lund, I got the chance to take a bigger role in email marketing and help develop the channel more strategically.
                I took the initiative on both design and content for campaigns, and worked continuously with A/B testing to understand what engaged recipients and delivered the best results.
                <br><br>
                A key part of the job was building steady subscriber growth. I worked with website pop-ups, clearer newsletter flows, and social media campaigns to reach new audiences and drive more sign-ups.
                As a result, the email list grew and we were able to work with the channel more consistently.`,

      "showcase.heading": "My Projects",

      "tabs.email": "Email",
      "tabs.ads": "Ads",
      "tabs.webb": "Web",

      "slide1.title": "Welcome Email",
      "slide1.text": `This is a personal concept I designed for "ASKA" to show how I think about email marketing and visual layout.
                    My idea here was to build a clean, Scandinavian feel that highlights the products without compromising the user experience.`,

      "slide2.title": "Coffee Maker That Sells",
      "slide2.text": `This is a personal concept I designed for a coffee machine to test a more sales-driven approach with strong CTAs and customer reviews.
                    My idea here was to create a warm, inviting feel that quickly builds trust and pushes toward a direct conversion.`,

      "slide3.title": "Weekly Menu",
      "slide3.text": `I created this concept for a fictional restaurant to test how to present a large amount of information and text in an appetizing and structured way.
                    The challenge here was to capture the restaurant's unique atmosphere visually, while keeping the week's dishes clear and easy to read for the guest.`,

      "slide4.title": "Conceptual Campaign Graphic: Blue and Yellow Dreams",
      "slide4.text": `This is a conceptual ad project I designed ahead of the 2026 World Cup for a fictional "Kanal Jive". My idea here was to capture the charged, emotional national-team feeling in a high-quality sports graphic,
                    where color choices and typography work together to create maximum attention in the feed.`,

      "slide5.title": "Headphones",
      "slide5.text": `This is a fictional design project where I created a conversion-focused campaign image for the brand ZERO. By combining a strong visual contrast between light and dark with elegant gold details,
                    I wanted to create an exclusive feel that puts the product front and center while driving a clear urge to buy.`,

      "slide6.title": "This Website",
      "slide6.text": `This website is actually a little project in itself. Instead of taking the easy route with a ready-made template, I've coded everything from scratch with HTML, CSS, and JavaScript to get it exactly how I want it.
        The site is live via GitHub, which lets me keep tweaking the code and testing new ideas live.`,

      "about.title": "When the computer's off...",
      "about.text": `When the screen goes dark and I put away everything digital commerce and HTML related, you'll usually find me in completely different places. <br>
            Either I'm out in the wild, which in my case usually means the golf course, where I try to find the perfect balance between total relaxation and extreme frustration over my bad game. <br><br>
            Other days I'd rather sit down with a chessboard to challenge my brain a bit. It's almost always the Italian Game as my opening.
            If it's the weekend, though, you'll definitely find me glued to the TV with my nerves on edge as a loyal Tottenham supporter. It's a pure emotional rollercoaster, but I wouldn't trade it for anything. <br>
            When football's over or the weather sucks, it's a lot of movies and shows instead — everything from heavy classics to easy watches where you can just switch off for two hours.
            <br><br>
            In short: I'm a pretty normal, easygoing guy who likes sports, games, and having a good time. So if you want to challenge me to a game of chess, discuss Tottenham's latest match, or recommend a good movie, now you know who to write to!`,

      "footer.totop": "To the Top ↑"
    }
  };

  const STORAGE_KEY = "site-lang";

  function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = translations[lang] && translations[lang][key];
      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function getInitialLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "sv" || stored === "en") {
      return stored;
    }
    const browserLang = (navigator.language || "sv").toLowerCase();
    return browserLang.startsWith("en") ? "en" : "sv";
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getInitialLanguage());

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });
  });
})();