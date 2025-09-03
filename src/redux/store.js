import { createStore } from "redux";

// Action creators
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const updateSearchString = (payload) => ({
  type: "UPDATE_SEARCHSTRING",
  payload,
});

// Helper for card id
const cardMaxId = (state) =>
  state.cards.length ? Math.max(...state.cards.map((card) => card.id)) : 0;

// Initial state (example structure, adjust as needed)
const initialState = {
  columns: [],
  cards: [],
  searchString: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COLUMN":
      return { ...state, columns: [...state.columns, action.payload] };
    case "ADD_CARD": {
      const newCard = { ...action.payload, id: cardMaxId(state) + 1 };
      return { ...state, cards: [...state.cards, newCard] };
    }
    case "UPDATE_SEARCHSTRING":
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
