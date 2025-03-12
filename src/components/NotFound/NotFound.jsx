import React from 'react'
import styles from "./NotFound.module.css"
import error from "../../assets/NotFound.webp"
import { Link } from 'react-router-dom'
<link href="https://fonts.googleapis.com/css2?family=Emblema+One&display=swap" rel="stylesheet"/>
export default function NotFound() {
  return (
    <div className='container bg-white text-center rounded-2xl p-5 mt-8' style={{fontFamily:"Emblema One"}}>
      <h1 className=' my-8 text-6xl font-semibold text-black'>404: Page Not Found</h1>
       <img src={error} className='w-[20%] relative left-[40%]' alt="" />
       <h2 className='mt-8 text-3xl font-semibold text-black'>Oops, we burned our cookies!</h2>
       <p className='text-lg font-normal text-black mt-3'>The page you're looking for is unavailable.Please Check Our Component!!</p>
       <Link to="/">
       <button className='bg-[orangered] text-white py-2 px-7 relative top-[65%] left-5 font-semibold font-[Kanit] text-2xl cursor-pointer mt-3'>Home<i className="fa-solid fa-arrow-right ml-3"></i></button>
       </Link>
    </div>
  )
}
