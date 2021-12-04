import { render, fireEvent, getByAltText } from '@testing-library/react';
import CoinFlip from './CoinFlip';

it("should render", () => {
    render(<CoinFlip />);
});

beforeEach(function() {
    jest
      .spyOn(Math, "random")
      .mockReturnValueOnce(0.25)
      .mockReturnValueOnce(0.75);
  });
  
  afterEach(function() {
    Math.random.mockRestore();
  });

it("should flip the coin when the button is pressed", () => {
    let { getByText, getByAltText } = render(<CoinFlip />);
    let button = getByText("Flip Me!");
    fireEvent.click(button);
    let img = getByAltText("coin");
    expect(img.src).toContain("tail");
    fireEvent.click(button);
    expect(img.src).toContain("head");

});