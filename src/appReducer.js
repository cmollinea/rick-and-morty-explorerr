export function appReducer(state, action) {
  switch (action.type) {
    case "FETCH-START":
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: {},
      };

    case "GET-CHARACTER-SUCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };

    case "SOMETHING-WENT-WRONG":
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: {},
      };
    default:
      return new Error("Somthing breaks. Its not our Fault");
  }
}
