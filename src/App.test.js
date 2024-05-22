import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




gsap.from("#cards-container,#cards1,#card2,#card3",{
    x: 50,
    opacity: 0,
    duration: 2,
    stagger: 1,
})

