import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AttendAI title', () => {
  render(<App />);
  const title = screen.getByText(/AttendAI/i);
  expect(title).toBeInTheDocument();
});

test('renders Today\'s Attendance heading', () => {
  render(<App />);
  const heading = screen.getByText(/Today's Attendance/i);
  expect(heading).toBeInTheDocument();
});

test('renders student name Atharva Dange', () => {
  render(<App />);
  const name = screen.getByText(/Atharva Dange/i);
  expect(name).toBeInTheDocument();
});
