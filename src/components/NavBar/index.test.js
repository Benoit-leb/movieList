import "isomorphic-fetch"
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NavBar from "./index";
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


it('should correctly be mount navBar', async() => {
  const initialState = { theme:{value: "light"} }
  const mockStore = configureStore()
  let store;
  store = mockStore(initialState)

  act(() => {
    render(<Provider store={store}><NavBar /></Provider>, container);
  });
});


