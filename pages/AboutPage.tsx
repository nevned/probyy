import React from 'react';
import '../styles/AboutPage.css'; 

const AboutPage: React.FC = () => {
  return (
    <div className="kontejner55">
        <div className="heroSekcija">
            <div className="heroTekst1">
                <p className="heroTekst11">NAŠA PRIČA:</p>
                <p className="heroTekst12">PUTOVANJE EduSfere!</p>
            </div>
            <div className="heroTekst2">
                <p className="heroTekst21">Verujemo u učenje kao ključ za lični i profesionalni razvoj, i radujemo se što možemo biti deo vaše edukativne avanture.</p>
            </div>
        </div>

        <div className="dobrodosli">
            <div className="dobrodosli-levo">
                <p className="dobrodosliTekst1">Dobrodošli u EduSferu!</p>
                <p className="dobrodosliTekst2">Mi smo strastveni tim entuzijasta za obrazovanje koji veruje
   `                u snagu učenja bez granica. Naša misija je da omogućimo pristup
                    visokokvalitetnom obrazovanju svima, bilo gde u svetu, bilo kada.`
                </p>
            </div>
            <div className="dobrodosli-desno">
                <img src="../slike/onama1.png" className="onamaslika1"/>
            </div>
        </div>

        <div className="sekcija2A">
            <div className="sekcija21">
                <p className="sekcija21tekst">
                Kroz našu platformu, nudimo širok spektar online kurseva koji su pažljivo osmišljeni i kreirani od strane stručnih instruktora iz različitih oblasti. Bez obzira da li ste student koji želi da unapredi svoje veštine, profesionalac koji traži nova znanja, tu smo da vam pružimo alate i resurse koje vam trebaju za uspeh.
                
                </p>
                <img src="../slike/onama2.png" className="onamaslika2"/>
            </div>

            <div className="sekcija22">
            <p className="sekcija22tekst">
                Pratite nas dok gradimo zajednicu učenja bez granica i menjamo način na koji svet uči i napreduje.
            </p>
            <div className="onama3div">
                <img src="../slike/onama3.png" className="onamaslika3"/>
            </div>
               
            </div>
        </div>

        <div className="sekcija3">
            <p className="sekcija3tekst">
                Hvala vam što ste deo naše priče!
            </p>
        </div>
    </div>
  );
};

export default AboutPage;