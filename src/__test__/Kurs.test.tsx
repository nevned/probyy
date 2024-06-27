import { render, screen } from '@testing-library/react';
import Kurs from '../../components/Kurs'; 

test('renders "Kupi kurs" button', () => {
  const mockProps = {
    naziv: 'Naziv kursa',
    opis: 'Opis kursa',
    cena: 100,
    onKupi: jest.fn(), 
  };

  render(<Kurs {...mockProps} />);
  
  const buttonElement = screen.getByRole('button', { name: 'Kupi kurs' });
  expect(buttonElement).toBeInTheDocument();
});
