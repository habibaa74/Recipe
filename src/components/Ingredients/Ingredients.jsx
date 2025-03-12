import React, { useEffect, useState } from "react";
import styles from "./Ingredients.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import 'flowbite';
export default function Ingredients() {
  const [Ingredient, setIngredient] = useState();
  const [selectedIngredients, setselectedIngredients] = useState("ALL");
  const [selectedIngredientsData, setselectedIngredientsData] = useState([]);
    const [isLoading, setisLoading] = useState(true)
  async function getIngredients() {
    return await axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((data) => {
        setIngredient(data.data.meals);
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false)
      });
  }
  async function getSelectedIngredients(selectedIngredients) {
    return await axios
      .get(
        `${
          selectedIngredients === "ALL"
            ? "https://www.themealdb.com/api/json/v1/1/search.php?s= "
            : `https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredients}`
        }`
      )
      .then((data) => {
        console.log(data.data.meals);
        setselectedIngredientsData(data.data.meals)
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false)
      });
  }
  useEffect(() => {
    getIngredients();
  }, []);
  useEffect(() => {
    getSelectedIngredients(selectedIngredients);
  }, [selectedIngredients]);
  return (
    <>
      <div>
        {isLoading ? <Loader/> :null}
        <div className="flex flex-col p-7 w-fit">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-[orangered] text-white hover:bg-orange-600  focus:ring-orange-700 cursor-pointer"
            type="button"
          >
            Select Ingredient
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-gray-700"
          >
            <ul
              className="py-2 text-sm font-semibold text-[orangered]"
              aria-labelledby="dropdownDefaultButton"
            > 
            <li onClick={()=>setselectedIngredients("ALL")} className={`${selectedIngredients==="ALL"? `${styles.active} block px-4 py-2  hover:bg-gray-600` :"block px-4 py-2  hover:bg-gray-600 hover:text-white"}`}>ALL</li>
            {Ingredient?.map((item, index) => (
              <li  key={index}>
                  <p
                  onClick={()=>{setselectedIngredients(item.strIngredient);window.scrollTo({ top: 0, behavior: "smooth" });}}
               
                    className={`${selectedIngredients=== `${item.strIngredient}` ? `${styles.active} block px-4 py-2  hover:bg-gray-600` :"block px-4 py-2  hover:bg-gray-600 hover:text-white"}`}
                  >
                    {item.strIngredient}
                  </p>
             
              </li>   ))}
            </ul>
          </div>
        </div>
     <div className="flex flex-wrap gap-5 relative top-7 overflow-hidden flex-1/6 justify-center">
 {selectedIngredientsData ===null ? <div className="p-4 mb-4 text-2xl rounded-lg bg-gray-800 text-[orangered]" role="alert">
  <span className="font-medium">Oops!!</span> There's No Recipe For This Ingredient
</div>
: null}
 {selectedIngredientsData?.map((item)=>
<div key={item.idMeal} className={`sm:w-full md:w-1/4 lg:w-1/6 bg-gray-800 border border-gray-700 rounded-lg shadow-sm ${styles.card}`}>
    <img className="rounded-t-lg" src={item.strMealThumb} alt="" />
  <div className="p-5">
      <h5 className="mb-2 text-lg font-bold tracking-tight text-white">{item.strMeal.split(" ").slice(0,3).join(" ")}</h5>
    <Link to={`/meals/Recipe/${item.idMeal}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[orangered] rounded-lg hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-950 ">
      Recipe
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </Link>
  </div>
</div>

)}
     </div>
      </div>
    </>
  );
}
