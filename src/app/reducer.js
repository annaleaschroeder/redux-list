export default function catFactReducer(
  state = { catfacts: [{ text: "you have not loaded any catfacts yet" }] },
  action
) {
  switch (action.type) {
    case "catfacts/loadedCatFacts":
      return { ...state, catfacts: action.catfacts };
    default:
      return state;
  }
}
