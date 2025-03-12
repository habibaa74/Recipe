import React from 'react'
import styles from "./Home.module.css"
import hero from "../../assets/hero.png"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    
    <div className='flex justify-between items-center gap-2'>
      <div className="w-1/2">
      <h1 className='block text-4xl md:text-7xl text-white font-bold pl-2 sm:w-full'>Enjoy Our
      Delicious Recipes</h1>
      <Link to="meals"><button className='block bg-[orangered] text-white py-2 px-7 font-semibold font-[Kanit] text-2xl cursor-pointer mt-7'>Recipes <i className="fa-solid fa-arrow-right"></i></button>
</Link>
      </div>
      <div className="w-1/2 overflow-hidden">
      <img src={hero} className={`${styles.img} w-full`} alt="hero image" />
      </div>
    </div>
  )
}
