import { useQuery } from "@tanstack/react-query";
import style from './Navbar.module.scss'
import { NavLink } from "react-router-dom";
import { request } from "graphql-request";
import { categories } from '../../queries/categories'

export function Navbar() {

  const { data, isLoading, error } = useQuery(
    {
      queryKey: ['categories'],
      queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, categories)
    }
  );

  if (isLoading) {
    return <p>Loading Categories....</p>
  }
  console.log(data);


  return (
    <div className={style.navbarContainer}>
      <header>
        <h1>INGN</h1>
      </header>
      <nav className={style.navbarStyling}>
        <ul>
          <li>{<NavLink to={`/`}>Alle</NavLink>}</li>
          {data?.categories?.map((item) => (
            <li key={item.category}>
              <NavLink to={`/categories/${item.category}`}>
                {item.category}
              </NavLink>
            </li>
          ))}
        </ul>

      </nav>
    </div>
  );
};
