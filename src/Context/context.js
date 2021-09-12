import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { reducerFunc } from "./reducer";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

const initialState = {
  cart:[],
  saveLater: []
}

  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setProducts(myJson.productData);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("hell",state)
  return (
    <GlobalContext.Provider value={{ products, state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
