const INCREMENT = "bulbs/INCREMENT";
const DECREMENT = "bulbs/DECREMENT";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

const initialState = {
  count: 1,
};

export default function bulbsReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count > 0 && state.count - 1
      };
    }
    default:
      return state;
  }
}
