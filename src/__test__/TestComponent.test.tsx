// TestComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import TestComponent from '../../components/TestComponent'; // Import TestComponentProps

test('renders a button', () => {
  render(<TestComponent onClick={() => {}} />); // Provide onClick prop
  const button = screen.getByRole('button', { name: 'Test' });
  expect(button).toBeInTheDocument();
});

test('calls onClick prop when the button is clicked', async () => {
  const onClick = jest.fn(); // Mock function

  render(<TestComponent onClick={onClick} />); // Provide onClick prop

  await fireEvent.click(screen.getByRole('button', { name: 'Test' }));

  expect(onClick).toHaveBeenCalled();
});
