import "isomorphic-fetch"
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./index";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should correctly be mount Home', async () => {
  const initialState = { movieList: {
    list: [],
    refList: [],
    currentList: [],
    ListCategories: [],
    currentCategories: [],
    currentPage: 0,
    perPage: 4,
    totalPage: 1
  }}
  const mockStore = configureStore()
  let store;
  store = mockStore(initialState)

  act(() => {
    render(<Provider store={store}><Home /></Provider>, container);
  });
});



