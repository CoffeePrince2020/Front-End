const initialState = {
  frequency: {
    items: [],
    search: {
      cafe: "",
      min: 1,
      max: 10,
    },
  },
};

const getFrequencyListAction = (data) => {
  return {
    type: "GET_FREQUENCY_LIST",
    data,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FREQUENCY_LIST":
      return {
        ...state,
        search: action.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
