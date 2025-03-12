import React, { useEffect, useState } from 'react'
import styles from "./Meals.module.css"
import axios from 'axios'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
export default function Meals() {
  const [categories, setcategories] = useState()
  const [selectedCategoey, setSelectedCategoey] = useState("ALL")
  const [selectedCategoeyData, setSelectedCategoeyData] = useState([])
  const [isLoading, setisLoading] = useState(true)
async function getCategory(){
return await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then((data)=>{
  setcategories(data.data.meals)
}).catch((err)=>{
  console.log(err);})
}
async function getSelectedCategory(selectedCategoey){
return await axios.get(`${selectedCategoey==="ALL" ? "https://www.themealdb.com/api/json/v1/1/search.php?s= ":`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategoey}`}`).then((data)=>{

  setSelectedCategoeyData(data.data.meals)
  setisLoading(false)
}).catch((err)=>{
  console.log(err);
  // setisLoading(false)
})
}
useEffect(()=>{
  getCategory()
},[])
useEffect(()=>{
  getSelectedCategory(selectedCategoey)
},[selectedCategoey])
  return (
    <>
    <div className="container my-4">
    <button type="button" onClick={()=>setSelectedCategoey("ALL")} className={`${selectedCategoey==="ALL" ? styles.active : "text-[orangered] hover:text-white border border-[orangered] hover:bg-[orangered] focus:ring-4 focus:outline-none focus:ring-[orangered] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer" } `}>ALL</button>
      {categories?.map((category,index)=><button onClick={()=>setSelectedCategoey(category.strCategory)} key={index} type="button" className={`${selectedCategoey=== category.strCategory ? styles.active : "text-[orangered] hover:text-white border border-[orangered] hover:bg-[orangered] focus:ring-4 focus:outline-none focus:ring-[orangered] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer" } `}>{category.strCategory}</button>
)}
    </div>
    <div className="flex flex-wrap gap-5 justify-around items-center overflow-hidden flex-1/6">
      {isLoading ? <Loader/> : null}

      
      {selectedCategoeyData.map((item)=>
<div key={item.idMeal} className={`sm:w-full md:w-1/4 lg:w-1/7 bg-gray-800 border border-gray-700 rounded-lg shadow-sm ${styles.card}`}>
    <img className="rounded-t-lg" src={item.strMealThumb} alt="" />
  <div className="p-5">
      <h5 className="mb-2 text-lg font-bold tracking-tight text-white">{item.strMeal.split(" ").slice(0,4).join(" ")}</h5>
    <Link to={`Recipe/${item.idMeal}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[orangered] rounded-lg hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-950 ">
      Recipe
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </Link>
  </div>
</div>

)}
    </div>
    </>
  )
}
