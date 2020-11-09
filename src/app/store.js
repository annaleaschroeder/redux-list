import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

fetch("https://cat-fact.herokuapp.com/facts/random?amount=20")
  .then((res) => res.json())
  .then((data) => {
    store.dispatch({
      type: "catfacts/loadedCatFacts",
      catfacts: data,
    });
  });

export default store;
