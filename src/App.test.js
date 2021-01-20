import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
    render( < App / > );
    const linkElement = screen.getByText(/React Weather App/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders Image ", () => {
    render( < App / > );
    expect(screen.getByAltText("Weather")).toBeInTheDocument();
});

test("Footer Note", () => {
    render( < App / > );
    expect(screen.getByText("Hand crafted by Shubham")).toBeInTheDocument();
});