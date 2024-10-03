import { useQuery } from "@tanstack/react-query";
import style from './Navbar.module.scss'
import { NavLink } from "react-router-dom";
import { request } from "graphql-request";
import { categories } from '../../queries/categories'
import { useState } from "react";

export function Navbar() {

  const [burgerOpen, setBurgerOpen] = useState(false);

  const BurgerClick = () => {
    setBurgerOpen(!burgerOpen);
  }

  const { data, isLoading, error } = useQuery(
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
      <div className={style.burgerMenu} onClick={BurgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <nav className={`${style.navbarStyling} ${burgerOpen ? style.navOpen : style.navClosed}`}>
        <ul>

          <li>
          <span>|</span>
            {<NavLink to={`/`}>Alle</NavLink>}
          </li>
          {data?.categories?.map((item) => (
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
    </div>
  );
};
