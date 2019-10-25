import React from 'react';
import {render, cleanup, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from '../pages/index';

afterEach(cleanup);

it("matches snapshot", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
});

it('allows input', () => {
    const { getByTestId } = render(<Home />)
    let item = 'New York'
    const searchInputElement = getByTestId('search-input')
    searchInputElement.value = item;
    fireEvent.change(searchInputElement)
    expect(searchInputElement.value).toBe('New York')
})
