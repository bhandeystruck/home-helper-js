"use client"
import Hero from "./componenets/hero";
import CategoryList from "./componenets/categoryList";
import GlobalApi from "./services/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {

  const [categoryList,setCategoryList] = useState([]);


  useEffect(()=>{
    getCategoryList();
  },[])

   //getting the category data from global api and displaying
   const getCategoryList = () =>{
        GlobalApi.getCategory().then(resp=>{
          setCategoryList(resp.categories);
        })
   }
   

  return (
   <>
   <Hero/>
   <CategoryList categoryList={categoryList}/>
   </>
  );
}
