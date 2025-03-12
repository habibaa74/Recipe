import React, { useEffect, useState } from 'react'
import styles from "./Recipe.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Recipe() {
  const [recipe, setRecipe] = useState([])
  const {id}=useParams()
  async function getRecipe(){
  return await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((data)=>{
    setRecipe(data.data.meals)
  }).catch((err)=>{
    console.log(err);
    
  })
  }
  useEffect(()=>{
    getRecipe()
  },[])
  return (
    <>
    <div className={`container my-5 bg-white p-8 rounded text-[orangered] ${styles.card}`}>
   {recipe.map((meal)=> <div key={meal.idMeal} className="meal">
    <div className="flex sm:w-full md:w-1/2 justify-start relative gap-3">
    <img src={meal.strMealThumb} className='w-[30%]' alt="" />
     <div className="data">
     <h3 className='font-bold text-2xl'>Meal: <span className='text-black font-semibold font-[Kanit]'>{meal.strMeal}</span> </h3>
     <h3 className='font-bold text-2xl'>Country: <span className='text-black font-semibold font-[Kanit]'>{meal.strArea}</span> </h3>
     </div>
    </div>
    <div className="recipe my-3">
      <h4 className='text-black font-bold text-4xl font-[Kanit]'>Recipe:</h4>
      <p className='text-gray-800'>{meal.strInstructions}</p>
    </div>
    <a target='_blank' href={meal.strYoutube}><button className='bg-[orangered] text-white py-2 px-4 font-semibold font-[Kanit] text-2xl cursor-pointer mt-4 rounded'><i className="fa-brands fa-youtube me-2"></i>Youtube Video</button>
    </a>
    <a target='_blank' href={meal.strSource}><button className='bg-[orangered] text-white py-2 px-4 font-semibold font-[Kanit] text-2xl cursor-pointer mt-4 ms-3 rounded'><i className="fa-solid fa-globe me-2"></i>Source</button>
    </a>
   </div> )}
    </div>
    </>
  )
}
