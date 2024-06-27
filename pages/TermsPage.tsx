import React from 'react';

const TermsPage: React.FC = () => {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
  return (
    <div className="usloviKoriscenja">
        <div className="politikaPrivatnosti">
            <p className="politikaNaslov">POLITIKA PRIVATNOSTI</p>
            <img src="../slike/uslovi2.png" className="uslovi2SLIKA"/>
        </div>

        <div className="politikaPrivatnostiSekcija">
            <div className="politikaPrivatnostiNaslovi">
                <p className="nasloviPolitika" onClick={() => handleScroll('prikupljanje')}>Prikupljanje i korišćenje informacija</p>
                <p className="nasloviPolitika" onClick={() => handleScroll('otkrivanje')}>Otkrivanje informacija trećim stranama</p>
                <p className="nasloviPolitika" onClick={() => handleScroll('kolacici')}>Kolačići (Cookies)</p>
                <p className="nasloviPolitika" onClick={() => handleScroll('promene')}>Promene politike privatnosti</p>
                <p className="nasloviPolitika" onClick={() => handleScroll('zastita')}>Zaštita informacija</p>
            </div>
            <div className="politikaPrivatnostiTekstovi">
                <div className="ppSekcija" id="prikupljanje">
                    <p className="naslovPolitika">Prikupljanje i korišćenje informacija</p>
                    <p className="opisPolitika">
                    Kada koristite našu veb stranicu, možemo prikupljati određene lične informacije od vas, uključujući, ali ne ograničavajući se na, vaše ime, adresu e-pošte, podatke o plaćanju, adrese IP i druge podatke koji se mogu koristiti za identifikaciju. Ove informacije prikupljamo samo onda kada nam ih dobrovoljno dostavite i koristimo ih isključivo za pružanje usluga koje ste zatražili, kao i za poboljšanje naše veb stranice i prilagođavanje iskustva korisnika.
                    </p>
                </div>
                <div className="ppSekcija" id="otkrivanje">
                    <p className="naslovPolitika">Otkrivanje informacija trećim stranama</p>
                    <p className="opisPolitika">
                    Vaše lične informacije nećemo prodavati, trgovati ili prenositi trećim stranama bez vaše saglasnosti, osim u slučajevima gde je to neophodno radi pružanja usluga koje ste zatražili (na primer, za procesiranje plaćanja) ili u skladu sa zakonskim zahtevima.
                    </p>
                </div>
                <div className="ppSekcija" id="kolacici">
                    <p className="naslovPolitika">Kolačići (Cookies)</p>
                    <p className="opisPolitika">
                    Naša veb stranica može koristiti kolačiće radi poboljšanja korisničkog iskustva. Kolačići su male tekstualne datoteke koje se čuvaju na vašem uređaju i omogućavaju nam da pratimo informacije o vašim aktivnostima na veb stranici.
                    </p>
                </div>
                <div className="ppSekcija" id="promene">
                    <p className="naslovPolitika">Promene politike privatnosti</p>
                    <p className="opisPolitika">
                    Zadržavamo pravo da povremeno ažuriramo ovu Politiku privatnosti kako bismo odražavali promene u načinu na koji obrađujemo vaše informacije ili promene u zakonodavstvu. Molimo vas da redovno proveravate ovu stranicu radi najnovijih informacija o našim praksama privatnosti.
                    </p>
                </div>
                <div className="ppSekcija" id="zastita">
                    <p className="naslovPolitika">Zaštita informacija</p>
                    <p className="opisPolitika">
                    Implementiramo odgovarajuće tehničke, fizičke i organizacione mere za zaštitu vaših ličnih informacija od gubitka, zloupotrebe ili neovlašćenog pristupa.
                    </p>
                </div>

            </div>
        </div>
      
    </div>
  );
};

export default TermsPage;