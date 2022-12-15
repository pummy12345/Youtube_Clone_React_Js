import React,{createContext,useState,useEffect} from "react";
import {fetchDataFromApi} from"../utils/api";
 export const Context=createContext();
  export const AppContext=(props)=> {
      const[loading,setLoading]=useState(0);
      const[searchResults,setSearchResults]=useState([]);
      const[selectedCategories,setSelectedCategories]=useState("New");
      const[mobileMenu,setMobileMenu]=useState(0);
      useEffect(()=>{
          fetchSelectedCategoryData(selectedCategories)
        
      },[selectedCategories]);
      const fetchSelectedCategoryData=(query)=> {
         setLoading(true);
         fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
         })
      }
       return (
         <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectedCategories,
            setSelectedCategories,
            mobileMenu,
            setMobileMenu,

         }}>
            {props.children}
            </Context.Provider>
       )
        }
