import { useQuery } from "@tanstack/react-query";
import style from './Navbar.module.scss'
import { NavLink } from "react-router-dom";
import { request } from "graphql-request";
import { categories } from '../../queries/categories'
import { useState } from "react";
import { FaUser } from "react-icons/fa";

export function Navbar() {

  const [burgerOpen, setBurgerOpen] = useState(false); //opretter en state på om burger menuen er lukket eller åbnet.

  const BurgerClick = () => { //funktion der skifter burgermenuen's usestate imellem true og false.
    setBurgerOpen(!burgerOpen); //f.eks. hvis false, så ! = modsat
  }

  const { data, isLoading, error } = useQuery( //fetcher efter selvlavet API fra Hygraph
    {
      queryKey: ['categories'],
      queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, categories)
    }
  );

  if (isLoading) {
    return <p>Loading Categories....</p>
  }
  if (error) {
    return <p>Error!!</p>
  }


  return (
    <div className={style.navbarContainer}>
      <header>
        <h1>INGN</h1>
      </header>
      <nav className={`${style.navbarStyling} ${burgerOpen ? style.navOpen : style.navClosed}`}>
        <ul>

          <li>
            <span>|</span>
            {<NavLink to={`/`}>Alle</NavLink>}
          </li>
          {data?.categories?.map((item) => ( //Mapper dataen ud fra API'en
            <li key={item.category}>
              <span>|</span>
              <NavLink to={`/categories/${item.category}`}>
                {item.category}
              </NavLink>
            </li>
          ))}
          <li>
            <span>|</span>
          </li>
        </ul>
      </nav>
      <div className={style.iconBurgerContainer}>
        {<NavLink className={style.iconLogin} to={`/login`}><FaUser /></NavLink>}
        <div className={`${style.burgerMenu} ${burgerOpen ? style.open : ''}`} onClick={BurgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
