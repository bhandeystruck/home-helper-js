"use client";
import Hero from "./componenets/hero";
import GlobalApi from "./services/GlobalApi";
import { useEffect, useState } from "react";
import ReviewSection from "./componenets/reviews";
import Hero2 from "./componenets/herov2";
import Category2 from "./componenets/categoryv2";


export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [allHelperList, setallHelperList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getAllHelperList();
  }, []);

  //getting the category data from global api and displaying
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp);
    });
  };


  const getAllHelperList = () => {
    GlobalApi.getAllHelperList().then((resp) => {
      setallHelperList(resp);
    });
  };

  return (
    <>
    <div className="min-h-max bg-gradient-to-b bg-[#CCC5B7] text-primary-foreground">
        <Hero />
        <Hero2/>
        <Category2 categoryList={categoryList} helperList={allHelperList}/>
        {/*<CategoryList categoryList={categoryList}/> */}    
        {/*<CategoryGrid categoryList={categoryList}/> */}
        {/*<HelperList helperList={allHelperList} /> */}
        <ReviewSection/>
    </div>     
    </>
  );
}

