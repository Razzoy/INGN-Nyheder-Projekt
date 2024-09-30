import { navLinks } from "../../navLinks";
import { Paths } from "../../router/Paths";
import style from './Navbar.module.scss'
import { NavLink } from "react-router-dom";

export function Navbar() {

  return (
    <div className={style.navbarContainer}>
      <header>
        <h1>INGN</h1>
      </header>
      <nav className={style.navbarStyling}>
        {navLinks.map((item) => (
          <NavLink key={item.title}>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
