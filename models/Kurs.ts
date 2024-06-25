export interface KursI {
  cena: number;
  naziv: string;
  opis: string;
}

export const kurseviPocetni: KursI[] = [
  {
    cena: 30,
    naziv: '1.JavaScript: Dinamicne Web Stranice',
    opis: 'Naučite osnove JavaScript-a i kako da kreirate interaktivne veb stranice',
  },
  {
    cena: 20,
    naziv: '2.Osnove SQL-a za Početnike',
    opis: 'Savladajte osnove SQL-a i naučite kako da kreirate, pretražujete i upravljate bazama podataka kroz praktične primere i vežbe.',
  },
  {
    cena: 40,
    naziv: '3.Docker Domen',
    opis: 'Kurs obuhvata osnovne koncepte Docker arhitektura, rad sa Docker slikama i kontejnerima, kao i napredne tehnike poput orkestracije sa Docker Compose i Kubernetesom.',
  },
  {
    cena: 50,
    naziv: '4.React Typescript',
    opis: 'Kurs obuhvata osnovne koncepte Docker arhitektura, rad sa Docker slikama i kontejnerima, kao i napredne tehnike poput orkestracije sa Docker Compose i Kubernetesom.',
  },
  {
    cena: 35,
    naziv: '5.Vue & Angular',
    opis: 'Kurs obuhvata osnovne koncepte Docker arhitektura, rad sa Docker slikama i kontejnerima, kao i napredne tehnike poput orkestracije sa Docker Compose i Kubernetesom.',
  },
  {
    cena: 20,
    naziv: '6. HTML & CSS',
    opis: 'Kurs obuhvata osnovne koncepte Docker arhitektura, rad sa Docker slikama i kontejnerima, kao i napredne tehnike poput orkestracije sa Docker Compose i Kubernetesom.',
  },
];
