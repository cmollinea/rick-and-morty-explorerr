import { useReducer, useEffect } from "react";
import { appReducer } from "./appReducer";

function useGetCharacter(url) {
  const [appState, dispatch] = useReducer(appReducer, {
    data: {},
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    const getCharacter = async (url) => {
      dispatch({ type: "FETCH-START" });
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("a");
        console.log(appState.isLoading);
        dispatch({ type: "GET-CHARACTER-SUCESS", payload: data });
      } catch {
        dispatch({ type: "SOMETHING-WENT-WRONG" });
      }
    };
    getCharacter(url);
  }, [url]);

  return { appState };
}

export default useGetCharacter;
