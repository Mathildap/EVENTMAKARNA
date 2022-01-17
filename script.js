let main = document.querySelector('main');

printStartPage();

document.addEventListener('click', (evt) => {
    switch (evt.target.id) {
        case 'navHome':
            printStartPage();
            break;
        case 'navPortfolio':
            printPortfolio();
            break;
        case 'dropdownWedding':
            printWeddingPage();
            break;
        case 'dropdownEvent':
            printEventPage();
            break;
        case 'navContact':
            printContactPage();
            break;
    }
});

// PRINT FUNCTIONS
function printStartPage() {
    main.innerHTML = `
        <header>
            <div class="sp-logo-div"></div>
            <nav>
                <li id="navHome">Hem</li>
                <li id="navPortfolio">Portfolio</li>
                <div class="services-item"><li>Tjänster</li>
                    <div class="dropdown-content">
                        <li id="dropdownWedding" class="dropdown-item">Bröllop</li>
                        <li id="dropdownEvent" class="dropdown-item">Event & Fest</li>
                    </div>
                </div>
                <li id="navContact">Kontakt</li>
            </nav>
        </header>
    <section id="mainContent">
        <section id="startPageSection" class="startpage-section">
            <article class="sp-image-article" id="spImageContainer">
                <img id="imgSlide" class="sp-image">
            </article>

            <article class="sp-info-article">
                <h3>Välkomna till oss!</h3>
                <p>
                Eventmakarna drivs av Elin Wallgren & Alina Alm, företaget växte fram under tiden som vi både var föräldralediga. Vi bor i Eskilstuna och hjälper till att skapa bröllop och Event över hela Sverige. Vi båda har länge haft en dröm om att få göra det vi brinner för och det är att hjälpa andra människor med att skapa deras drömbröllop och andra event. Vi har båda ett intresse för att tänka utanför boxen och att tänka kreativt.
                </br>
                </br>

                Vi utför koordinering av bröllop, hjälper till med dekor samt projektledare vid andra event och tillställningar.
                </br>
                </br>

                Vi har utbildat oss via Great Weddings Academy under 2020 till bröllopskoordinatorer. Vi finns här för er och ser till att era drömmar blir förverkliga. Lär mer om våra olika tjänster vi erbjuder här på hemsidan.
                <br>
                <br>
                Varmt välkomna till oss!</p>
            </article>
    </section>
    </section>
    <footer>
      <div class='footer-sm-container'>
        <a href='mailto:eventmakarna.eskilstuna@gmail.com' target='_blank' rel='noreferrer'>
          <i class="footer-icons far fa-envelope"></i></a>
        <a href='https://www.instagram.com/eventmakarna/' target='_blank' rel='noreferrer'>
          <i class="footer-icons fab fa-instagram"></i></a>
        <a href="tel:"><i class="footer-icons fas fa-phone"></i></a>
      </div>

      <div class='footer-text'>
        Eventmakarna i Eskilstuna AB<br>
        Hemsida skapad av <a href='mailto:mathildapetterssonn@hotmail.com'
        target='_blank'
        rel='noreferrer'>
        Mathilda Pettersson
        </a>
      </div>
    </footer>`;

    changeImg();
}

function changeImg() {
    let imgSlide = document.getElementById('imgSlide');
    let i = 0;
    let images = [];
    let time = 2700;

    images[0] = './photos/startpage/228A8068.jpg';
    images[1] = './photos/startpage/228A8093.jpg';
    images[2] = './photos/startpage/228A8281.jpg';
    images[3] = './photos/startpage/table-cake.jpg';

    imgSlide.src = images[i];

    setInterval(function () {
        imgSlide.src = images[i];

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
    }, time);
}

function printPortfolio() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
    <section class="portfolio-page">
      <h2>Portfolio</h2>
      <section class="portfolio-section">
      <article class="portfolio-article" id="styledPSBtn">
        <div class="portfolio-img" id="styledPhotoShoot"></div>
        <div class="portfolio-text">
          <h4>Stylad fotografering</h4>
          <p>Wäsby magasin<br>
          23/5-21
          </p>
          <p class="portfolio-names">Alina & Elin</p>
        </div>
      </article>
      </section>
    </section>`;

    // WHEN MORE PORTFOLIO IMAGES
    // <article class="portfolio-article">
    //   <div class="portfolio-img"></div>
    //   <div class="portfolio-text">
    //     <p>"Lorem ipsum dolor sit amet   consectetur adipisicing elit. Eum similique delectus quidem ea voluptate a. Sapiente, aliquid neque illum, expedita inventore odio voluptas, asperiores iste molestias dolores nesciunt perferendis. "
    //     </p>
    //     <p class="portfolio-names">Sara & Erik</p>
    //   </div>
    // </article>
    // <article class="portfolio-article">
    //   <div class="portfolio-img"></div>
    //   <div class="portfolio-text">
    //     <p>"Lorem ipsum dolor sit amet   consectetur adipisicing elit. Eum similique delectus quidem ea voluptate a. Sapiente, aliquid neque illum, expedita inventore odio voluptas, asperiores iste molestias dolores nesciunt perferendis. "
    //     </p>
    //     <p class="portfolio-names">Sara & Erik</p>
    //   </div>
    // </article>
    // <article class="portfolio-article">
    //   <div class="portfolio-img"></div>
    //   <div class="portfolio-text">
    //     <p>"Lorem ipsum dolor sit amet   consectetur adipisicing elit. Eum similique delectus quidem ea voluptate a. Sapiente, aliquid neque illum, expedita inventore odio voluptas, asperiores iste molestias dolores nesciunt perferendis. "
    //     </p>
    //     <p class="portfolio-names">Sara & Erik</p>
    //   </div>
    // </article>
    // <article class="portfolio-article">
    //   <div class="portfolio-img"></div>
    //   <div class="portfolio-text">
    //     <p>"Lorem ipsum dolor sit amet   consectetur adipisicing elit. Eum similique delectus quidem ea voluptate a. Sapiente, aliquid neque illum, expedita inventore odio voluptas, asperiores iste molestias dolores nesciunt perferendis. "
    //     </p>
    //     <p class="portfolio-names">Sara & Erik</p>
    //   </div>
    // </article>
    // <article class="portfolio-article">
    //   <div class="portfolio-img"></div>
    //   <div class="portfolio-text">
    //     <p>"Lorem ipsum dolor sit amet   consectetur adipisicing elit. Eum similique delectus quidem ea voluptate a. Sapiente, aliquid neque illum, expedita inventore odio voluptas, asperiores iste molestias dolores nesciunt perferendis. "
    //     </p>
    //     <p class="portfolio-names">Sara & Erik</p>
    //   </div>
    // </article>

    document.getElementById('styledPSBtn').addEventListener('click', (evt) => {
        printPortfolioStyledPS(evt.target.id);
    });
}

function printPortfolioStyledPS(id) {
    if (id == 'styledPhotoShoot') {
        let mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = `
    <section class="portfolioImages">
      <h2>Stylad fotografering</h2>
      <section class="portfolio-images-section">
        <article class="portfolio-images-article" id="styledPSImages">
          <div class="images1">
            <img src="../photos/portfolio/228A8019.jpg" class="images1width">
            <img src="../photos/portfolio/228A8142.jpg" class="images1width">
          </div>  
          <div class="images2">
            <img src="../photos/portfolio/228A7913.jpg" class="images2width">
            <img src="../photos/portfolio/228A8071.jpg" class="images2width">
            <img src="../photos/portfolio/228A7918.jpg" class="images2width">
          </div>
          <div class="images1">
            <img src="../photos/portfolio/228A8119.jpg" class="images1width">
            <img src="../photos/portfolio/228A8190.jpg" class="images1width">
          </div> 
          <div class="images3">
            <img src="../photos/portfolio/228A8212.jpg" class="images3width">
            <img src="../photos/portfolio/228A7989.jpg" class="images3width">
            <img src="../photos/portfolio/228A8135.jpg" class="images3width">
            <img src="../photos/portfolio/228A7929.jpg" class="images3width">
          </div>  
        </article>
      </section>
      <section class="portfolio-photoshootinfo">
        <div>
        <h2>Stort tack!</h2>
        <p>
        Koordinator/ Design: 
        <a href='https://www.instagram.com/eventmakarna/' target='_blank' rel='noreferrer'>
        @Eventmakarna
        </a><br>
        Fotograf: 
        <a href='https://www.instagram.com/photographermariaeberfors/' target='_blank' rel='noreferrer'>
        @photographermariaeberfors</a>
        <br>
        Tårta: <a href='https://www.instagram.com/sottmedsamira/' target='_blank' rel='noreferrer'> @sottmedsamira </a><br>
        Plats: <a href='https://www.instagram.com/wasbymagasin/' target='_blank' rel='noreferrer'>
        @wasbymagasin
        </a><br>
        Blommor: <a href='https://www.instagram.com/blommorbrie/' target='_blank' rel='noreferrer'>
        @blommorbrie
        </a><br>
        Dekoration: <a href='https://www.brollopsdekorationer.com/' target='_blank' rel='noreferrer'>
        @Bröllopsdekorationer 
        </a><br>
        Ringaskar: <a href='https://www.instagram.com/enlitenask/' target='_blank' rel='noreferrer'>
        @enlitenask
        </a><br>
        Trycksaker: <a href='https://www.instagram.com/annagorandesign/' target='_blank' rel='noreferrer'>
        @annagorandesign 
        </a><br>
        </p>
        </div>
      </section>
    </section>`;
    }
}

function printWeddingPage() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
    <section class="wedding-page">
      <article class="services">
          <h2>Tjänster</h2>
          <p>Här kan ni se olika paket som vi erbjuder. Självklart kan vi skräddarsy utifrån era behov då alla önskar olika lösningar och har olika drömmar. Varmt välkomna att kontakta oss för att ta ert första steg till en kostnadsfri konsultation med oss. Vi ser framemot att höra från er. Läs mer om våra olika tjänster och paket nedan.</p>
        </article>

      <h2>Bröllop</h2>
      <article class='wedding'>
        <p style='font-style: italic'>Har du ett kommande bröllop som behöver planeras?</p>

        <p>Att gifta sig är något av det största man kan göra. En dag för dig och din partner att tillsammans fira er kärlek och bli en för framtiden. Inför ert bröllop är det mycket att tänka på och det är därför vi finns här. Vi hjälper er att fokusera på rätt saker, styra upp planeringen och få kontroll.
        <br>
        <br>
        Alla bröllop är olika och alla bröllopspar vill ha olika upplägg och ingenting är rätt eller fel.
        <br>
        <br>
        <p style='font-style: italic'>Ni får inte glömma bort att planeringen ska vara rolig! Vår vision är att ni ska kunna vara gäster under ert egna bröllop.</p>
      </article>
      <section class="wedding-section" id="weddingSection">
        <article class="wedding-article">
          <div class="wedding-img-con"></div>
          <div class="wedding-text">
            <h4>Bröllopskonsulation</h4>
            <h5>Uppstart</h5>
            <p>Passar er som vill leda planeringen själva men få stöd och hjälp av oss.
            </p>
          </div>
          <div class="wedding-btn-div">
            <button class="wedding-readmore-btn" id="weConsulation">Läs mer</button>
          </div>
        </article>
        <article class="wedding-article">
          <div class="wedding-img-wee"></div>
          <div class="wedding-text">
            <h4>Bröllopsveckan</h4>
            <h5>Den stora dagen</h5>
            <p>Vill ni planera bröllopet själva men kunna släppa allt veckan innan och under bröllopsdagen?
            </p>
          </div>
          <div class="wedding-btn-div">
            <button class="wedding-readmore-btn" id="weWeek">Läs mer</button>
          </div>
        </article>
        <article class="wedding-article">
          <div class="wedding-img-yea"></div>
          <div class="wedding-text">
            <h4>Bröllopsåret</h4>
            <h5>Tillsammans hela vägen</h5>
            <p>Passar er som vill ha hjälp med all planering från start till bröllopsdagen, ni får hjälp från början till mål med stöttning i varje steg av planeringen.
            </p>
          </div>
          <div class="wedding-btn-div">
            <button class="wedding-readmore-btn" id="weYear">Läs mer</button>
          </div>
        </article>
        <article class="wedding-article">
          <div class="wedding-img-dec"></div>
          <div class="wedding-text">
            <h4>Dekoration</h4>
            <p>Vill ni ha hjälp med dekor så har ni möjlighet att lägga till det till ert bröllopspaket eller så kan ni enbart boka oss för att utföra dekorationsbiten.
            </p>
          </div>
          <div class="wedding-btn-div">
            <button class="wedding-readmore-btn" id="weDeco">Läs mer</button>
          </div>
        </article>
        <article class="wedding-article">
          <div class="wedding-img-tm"></div>
          <div class="wedding-text">
            <h4>Toastmaster-<br>konsulation</h4>
            <h5>Experthjälp</h5>
            <p>Har du fått det ärofyllda uppdraget att vara toastmaster och känner att du behöver lite hjälp och stöttning med planeringen passar detta paket bra.
            </p>
          </div>
          <div class="wedding-btn-div">
            <button class="wedding-readmore-btn" id="tmConsulation">Läs mer</button>
          </div>
        </article>
        <article class="wedding-article">
          <div class="wedding-img-rad"></div>
          <div class="wedding-text">
            <h4>Bröllopsrådgivning</h4>
            <h5>När ni vill under planeringen</h5>
            <p>Har ni kommit långt in i planeringen men känner att ni fastnat med något eller bara önskar experthjälp med specifika delar passar detta bra för er.
            </p>
          </div>
          <div class="wedding-btn-div">
            <button class="wedding-readmore-btn" id="weRadgivning">Läs mer</button>
          </div>
        </article>
      </section>
      <article>
        <p style='font-style: italic'>Har ni svårt att veta vilket paket som passar er eller vill kombinera flera paket? Tveka inte att höra av er så kan vi hjälpa er att skräddarsy något efter era önskemål.</p>
      </article>
    </section>`;

    document.addEventListener('click', (evt) => {
        switch (evt.target.id) {
            case 'weConsulation':
                printWeConsulation();
                break;
            case 'weWeek':
                printWeWeek();
                break;
            case 'weYear':
                printWeYear();
                break;
            case 'weDeco':
                printWeDeco();
                break;
            case 'tmConsulation':
                printTMConsulation();
                break;
            case 'weRadgivning':
                printWeRadvigning();
                break;
        }
    });
}

function printWeConsulation() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
  <section class="wed-con-page wed-page">
        <h2>Bröllopskonsultation – <span class='color-italic'>Kickstart 2995:-<span></h2>
        <article class="wed-con-article">
            <div class="con-text">
            
            <p>Passar er som vill leda planeringen själva men få stöd och hjälp av oss.
            <br>
            <br>

            · 2 timmar bröllopsmöte där vi går igenom planeringen inför bröllopet och viktiga detaljer att tänka på.
            <br>
            <br>
            
            · Ni får material i form av personlig moodboard att använda under bröllopsplaneringen, checklista, budgetmall, prioriteringslista, trycksakslista och unika leverantörsförslag.
            <br>
            <br>
            <span style ='font-style: italic'>Vi ger er de rätta verktygen och kunskapen som behövs för att ni ska kunna planera ert bröllop själva.</span></p>
            </div>
        </article>
    </section>`;
}
function printWeWeek() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
  <section class="wed-week-page wed-page">
        <h2>Bröllopsveckan - <span class='color-italic'>den stora dagen från 9995:-</span></h2>
        <article class="wed-week-article">
            <div class="wed-text">
                <p>Vill ni planera bröllopet själva men kunna släppa allt veckan innan och under bröllopsdagen? Då passar detta koncept er, ni planerar bröllopet själva och vi tar över som era projektledare under bröllopsveckan. Två till tre veckor innan bröllopet har vi ett avstämningsmöte inför den stora dagen.
                <br>
                <br>
                · Vi sätter körscheman för alla involverade<br>
                
                · Kvalitetssäkrar leverantörer och tar över kontakten<br>
                
                · Fri mailkontakt fram till bröllopsdagen.<br>
                
                · Bröllopsdagskoordinering, 10-20 timmar.<br>
                <br>
                <br>
                <span style='font-style: italic'>Släpp ansvaret och njut av er bröllopsvecka.</span>
                </p>
            </div>
        </article>
    </section>`;
}
function printWeYear() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
  <section class="wed-year-page wed-page">
        <h2>Bröllopsåret - <span class='color-italic'>tillsammans hela vägen från 24 995:-</span></h2>
        <article class="wed-year-article">
            <div class="wed-text">
                <p>Passar er som vill ha hjälp med all planering från start till bröllopsdagen, ni får hjälp från början till mål med stöttning i varje steg av planeringen. Ni får möjlighet att släppa över ansvaret av planeringen till oss och vi hjälper er och guidar er genom planering och gör detta till en rolig tid.
                <br>
                <br>
                · Bröllopskonsultation
                <br>
                · Bröllopskoncept med färgtema
                <br>
                · Checklista
                <br>
                · Budgetmall
                <br>
                · Prioriteringslista
                <br>
                · Vägledning av trycksaker
                <br>
                · Unika leverantörsförslag
                <br>
                · Körscheman för alla inblandade
                <br>
                · Uppföljande möten längs hela planeringen fram till bröllopet 6-10
                <br>
                · Fri mailkontakt.
                <br>
                · Bröllopsdagskoordinering, 10-20 timmar.
                <br>
                <br>
                <span style='font-style: italic'>Ni väljer själva hur involverade ni vill vara och tillsammans lägger vi upp en tydlig planering utifrån era önskemål.</span>
                </p>
            </div>
        </article>
    </section>`;
}
function printWeDeco() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
<section class="wed-deco-page wed-page">
<h2>Dekoration - <span class='color-italic'>från 6995:-</span></h2>
      <article class="wed-con-article">
          <div class="wed-text">
          <p>
          Vill ni ha hjälp med dekor så har ni möjlighet att lägga till det till ert bröllopspaket eller så kan ni enbart boka oss för att utföra dekorationsbiten.
          <br>
          <br>
          Med hjälp av oss tar vi tillsammans fram ett koncept med tema och färgkod. Ni gör inköpen och vi kommer på plats och ser till att dekorationen blir som vi har kommit överens om.</p>
          </div>
      </article>
  </section>`;
}
function printTMConsulation() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
  <section class="wed-tm-page wed-page">
        <h2>Toastmasterkonsulation - <span class='color-italic'>experthjälp</span></h2>
        <article class="wed-tm-article">
            <div class="wed-text">
            <p>
            Har du fått det ärofyllda uppdraget att vara toastmaster och känner att du behöver lite hjälp och stöttning med planeringen passar detta paket bra.
            <br>
            <br>
            · Två timmar möte med uppföljande mailkontakt längs vägen.<br>
            
            · Hjälp med talplanering, körschema och coachning.<br>
            <br>
            <br>
            <span style='font-style: italic'>Utifrån dina/era önskemål skräddarsyr vi detta paket så att det passar just dig/er.</span>
                </p>
            </div>
        </article>
    </section>`;
}
function printWeRadvigning() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
  <section class="wed-rad-page wed-page">
        <h2>Bröllopsrådgivning - <span class='color-italic'>när ni vill under planeringen 3995:-</span></h2>
        <article class="wed-rad-article">
            <div class="wed-text">
                <p>Har ni kommit långt in i planeringen men känner att ni fastnat med något eller bara önskar experthjälp med specifika delar passar detta bra för er.<br><br> Ni för möjlighet till ett skräddarsytt 2 timmar långt möte tillsammans med oss där vi utgår från era personliga önskemål.
                </p>
            </div>
        </article>
    </section>
    `;
}

function printEventPage() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
  <section class="wedding-page">
  <article class="services">
      <h2>Tjänster</h2>
      <p>Här kan ni se olika paket som vi erbjuder. Självklart kan vi skräddarsy utifrån era behov då alla önskar olika lösningar och har olika drömmar. Varmt välkomna att kontakta oss för att ta ert första steg till en kostnadsfri konsultation med oss. Vi ser framemot att höra från er. Läs mer om våra olika tjänster och paket nedan.</p>
      </article>
    <h2>Event & Fest</h2>
    <section class="wedding-section" id="weddingSection">
      <div class="wedding-evt">
        <article class="wedding-article-evt">
          <div class="wedding-text">
            <h4>Babyshower</h4>
            <p>Passar er som vill skämma bort er gravida vän med en oförglömlig babyshower. <br><br>
            Skicka förfrågan via kontaktformuläret och beskriv vad ni vill ha hjälp med så återkommer vi med offert.
            </p>
          </div>
        </article>
        <article class="wedding-article-evt">
          <div class="wedding-text">
            <h4>Möhippa / Svensexa</h4>
            <p>Ska ni planera en möhippa/ svensexa och behöver hjälp som finns vi här. 
            <br>
            <br>
            Skicka förfrågan via kontaktformuläret så återkommer vi med offert.
            </p>
          </div>
        </article>
        <article class="wedding-article-evt">
          <div class="wedding-text">
            <h4>Företagsevent</h4>
            <p>Passar er som vill ha hjälp med planering eller utförande av event eller företagsfest. Finns möjlighet till hjälp av uppstart av planering, ansvar för hela planeringen och leverantörsförslag. Utifrån era personliga önskemål skräddarsyr vi en offert utifrån omfattning och behov.
            </p>
          </div>
        </article>
      </div>
      <article>
      <p style='font-style: italic'>Har ni svårt att veta vilket paket som passar er eller vill kombinera flera paket? Tveka inte att höra av er så kan vi hjälpa er att skräddarsy något efter era önskemål.</p>
      </article>
    </section>
  </section>`;
}

function printContactPage() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
  <section class="contact-page">
    <h2>Kontakta oss</h2>
    <article class="contact-article">
       <div id="aboutImgContainer"></div>
       <div class='form-sm-container'>
        <p>Hör gärna av er med frågor till oss!</p>
          <div class="form">
          <form action="https://formsubmit.co/eventmakarna.eskilstuna@gmail.com" 
          method="POST"
          >
            <input type="hidden" name="_subject" value="Mail från kontakt-formulär!">
            <input type="hidden" name="_next" value="https://eventmakarna.com/thankyou.html">
            <input type="text" placeholder="Namn" name="name" required >
            <input type="email" placeholder="E-mail" name="email" required>
            <input type="text" placeholder="Meddelande" name="message" required>
            <br>
            <button type='submit' id="contactBtn">Skicka</button>
            <p id="tyText"></p>
          </form>
          </div>
          <div class='footer-sm-container'>
        <a href='mailto:eventmakarna.eskilstuna@gmail.com' target='_blank' rel='noreferrer'>
          <i class="footer-icons far fa-envelope"></i></a>
        <a href='https://www.instagram.com/eventmakarna/' target='_blank' rel='noreferrer'>
          <i class="footer-icons fab fa-instagram"></i></a>
        <a href="tel:0709436630"><i class="footer-icons fas fa-phone"></i></a>
      </div>
        <div>
    </article>
  </section>
  <section id="aboutUsPage" class="about-us-page">
  <h3>Grundarna bakom Eventmakarna</h3>
    <article id="aboutUsArticle" class="about-us-article">
      <article id="aboutAlina" class="about-me">
        <div class="about-profile-img" id="aboutAlinaImg"></div>
        <div class="about-profile-text">
          <h4>Alina Alm</h4>
          <p>CEO & wedding designer</p>
        </div>
      </article>

      <article id="aboutElin" class="about-me">
        <div class="about-profile-img" id="aboutElinImg"></div>
        <div class="about-profile-text">
          <h4>Elin Wallgren</h4>
          <p>Decor designer & Wedding designer</p>
        </div>
      </article>
    </article>
  `;
}
