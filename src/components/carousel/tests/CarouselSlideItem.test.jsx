import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import * as router from "react-router";

import { CarouselSlideItem } from "../CarouselSlideItem";
import { MOCK_DATA } from "../../../mock/data";

const navigate = jest.fn();

describe("<CarouselSlideItem />", () => {
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });
  it("should render CarouselSlideItem", () => {
    const { getByTestId } = render(
      <CarouselSlideItem
        pos={1}
        idx={2}
        activeIdx={1}
        _items={MOCK_DATA}
        length={5}
      />
    );
    const item = getByTestId("test-carousel_item");
    expect(item).toBeInTheDocument();
  });
  it("should fire navigate event onclick item", () => {
    const { getByTestId } = render(
      <CarouselSlideItem
        pos={1}
        idx={2}
        activeIdx={1}
        _items={MOCK_DATA}
        length={5}
      />
    );
    const item = getByTestId("test-carousel_item");
    expect(item).toBeInTheDocument();
    fireEvent.click(item);
    expect(navigate).toHaveBeenCalled();
  });
  it("should have movie title", () => {
    const id = 2;
    const { getByTestId } = render(
      <CarouselSlideItem
        pos={1}
        idx={id}
        activeIdx={1}
        _items={MOCK_DATA}
        length={5}
      />
    );
    const item = getByTestId("test-movie_title");
    expect(item.textContent).toBe(MOCK_DATA[id].player.title)
  });

});
