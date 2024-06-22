import React from 'react';

interface KursProps {
  onKupi?: () => void;
}

const Kurs: React.FC<KursProps> = ({ onKupi }) => {
  const handleKupiClick = () => {
    if (onKupi) {
      onKupi();
    }
  };

  return (
    <div className="kurs">
      <h1>JavaScript: Dinamicne Web Stranice</h1>
      <p>Naučite osnove JavaScript-a i kako da kreirate interaktivne veb stranice kroz praktične primere i vežbe.
        Ovaj kurs pokriva sve od sintakse i manipulacije HTML/CSS elemenata do rukovanja događajima i osnovama rada sa API-jevima</p>
      <img src="../slike/donjaslika.png" alt="Slika kursa" />
      <button onClick={handleKupiClick}>Kupi kurs</button>
    </div>
  );
};

export default Kurs;