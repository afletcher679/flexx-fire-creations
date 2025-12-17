import { NavLink } from "react-router";
import type { Route } from "./+types/home";

function Header(){
  return(
    <>
      <button>
        <NavLink to="/">Home</NavLink>
      </button>
      <button className="ml-2">
        <NavLink to="/Catalog">Catalog</NavLink>
      </button>
    </>
  )
}

export default function Home() {
  return(
  <>
    <Header />
    <h1 className="text-2xl font-bold text-center">Welcome to Flexx Fire Creations!</h1>
  </> 
  )
}
