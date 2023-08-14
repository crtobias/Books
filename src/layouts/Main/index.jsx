import { Outlet } from "react-router-dom"
import { Nav } from "../../component"


export const Main = () => {


  return (
    <>
      <Nav/>
      <main>
        <Outlet/>
      </main>
      
    </>
  )
}