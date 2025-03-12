import React from 'react'
import styles from "./Home.module.css"
import hero from "../../assets/hero.png"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    
    <div className='flex'>
      <div className="w-1/2 relative">
      <h1 className='block text-7xl text-white font-bold pl-2 absolute top-[30%]'>Enjoy Our
      Delicious Recipes</h1>
      <Link to="meals"><button className='bg-[orangered] text-white py-2 px-7 absolute top-[65%] left-5 font-semibold font-[Kanit] text-2xl cursor-pointer'>Recipes <i className="fa-solid fa-arrow-right"></i></button>
</Link>
      </div>
      <div className="w-1/2 overflow-hidden">
      <img src={hero} className={styles.img} alt="hero image" />
      </div>
    </div>
  )
}
