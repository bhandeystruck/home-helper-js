"use client"
import GlobalApi from '@/app/services/GlobalApi';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'


export default function categoriesPage() {
    const [categories, setCategories] = useState([]);
    const pathname = usePathname()
  
    // Process the pathname and extract the last segment
    const lastSegment = pathname.split('/').filter(Boolean).pop() || 'No segment found'

    console.log(lastSegment)

    useEffect(() => {
      getAllHelperList();
    }, [])
    
    const getAllHelperList = () => {
        GlobalApi.getCategoryData(lastSegment).then((resp) => {
          setCategories(resp.categories);
        });
      };
      console.log(categories);  
    return (
      <>
        <div>
        {categories.map((category) => <p key={category.id}>{category.name}</p> )}
        </div> 
      </>
    );
 }