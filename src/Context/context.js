import React, { useContext, useState } from "react";
import useFetch from "../useFetch";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

// import React, { useContext, useEffect, useState } from 'react'
// const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
// const AppContext = React.createContext();
// const AppProvider =({children}) => {
//   const[isLoading, setIsLoading] = useState(true);
//   const[movie, setMovie] = useState([]);
//   const[isError, setIsError] = useState({show: "false", msg:" "});
//   const[query, setQuery] = useState("titanic");

//   const getMovies = async(url) => {
//     setIsLoading(true);
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       if(data.response === "True"){
//         setIsLoading(false);
//         setMovie(data.Search)
//       } else{
//         setIsError({
//           show: false,
//           msg: " ",
//         });
//       }
//     }
//     catch(error){
//       console.log(error);
//     }
//   };
//   useEffect (() => {
//     let timerOut = setTimeout(() => {
//       getMovies(`${API_URL}&s=${query}`)
//     }, 800);
//     return() => clearTimeout(timerOut);
//   }, [query]);
  
//   return <AppContext.Provider value={{ isLoading, movie, isError, query, setQuery }}>
//     {children}
//   </AppContext.Provider>
// }

// const useGlobalContext = () => {
//   return useContext(AppContext)
// }
// export { AppContext, AppProvider, useGlobalContext}