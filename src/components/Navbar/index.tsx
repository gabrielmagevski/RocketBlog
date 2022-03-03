import './navbar.scss';

import LogoRocketBlog from '../../assets/logo.svg';
import Search from '../../assets/search.svg';

export function Navbar() {
  return(
    <>
      <header>
        <nav className="container">
          <div>
            <img className="logo" src={LogoRocketBlog} alt="LogoRocketBlog" />
          </div>
          <div>
            <ul className="list">
              <li><a href='#'>Home</a></li>
              <li>Sobre</li>
              <li>Categorias</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <form className="container">
              <input className="areaSearch" placeholder="Buscar" type="search" />
              <button type="submit" className="buttonSearch">
                <img src={Search} alt="search"/>
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  )
}