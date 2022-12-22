import React from "react";
import { render, screen } from "@testing-library/react";
import * as router from "react-router";
import * as services from "./../../services";

import MovieListScreen from "../MovieListScreen";
import { MOCK_DATA_SERVER } from "../../mock/data";

const navigate = jest.fn();

describe("<MovieListScreen />", () => {
  beforeEach(() => {
    jest.spyOn(services, "getMovieList").mockResolvedValue(MOCK_DATA_SERVER);
  });
  it("should render MovieListScreen", async () => {
    render(<MovieListScreen />);
    const carousel = await screen.findAllByTestId("test-carousel_list");
    expect(carousel.length).toBe(3);
  });
});
