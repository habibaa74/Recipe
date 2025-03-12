import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import Areas from "./components/Areas/Areas"
import Meals from "./components/Meals/Meals"
import NotFound from "./components/NotFound/NotFound"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import Recipe from "./components/Recipe/Recipe"
import 'flowbite';
import Ingredients from "./components/Ingredients/Ingredients"
<link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
function App() {
const routes=createBrowserRouter([{
  path:"/",element:<Layout/>,children:[{
  index:true,element:<Home/>
  },{
    path:"/Areas",element:<Areas/>
  },{
    path:"/ingredients",element:<Ingredients/>
  },{path:"/meals",element:<Meals/>},{
    path:"/meals/Recipe/:id",element:<Recipe/>
  },
    {
    path:"*",element:<NotFound/>
  }]
}])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App

