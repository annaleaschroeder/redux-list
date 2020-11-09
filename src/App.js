import React from "react";
import { ConnectedList } from "./features/list/List";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ConnectedList />
    </Provider>
  );
}

export default App;
