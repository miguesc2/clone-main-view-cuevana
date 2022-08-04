import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import $ from 'jquery';
import '../assets/styless/Header.scss';

const generos = [ "Acción", "Aventura", "Biografía", "Comedia" ]

function Header() {
  const [ dropdown, setDropdown ] = useState({ 0: false, 1: false });
  let id = '#menu' 
  $(window).scroll(() => ($(id).offset().top > 70) ? $(id).addClass('dark') : $(id).removeClass('dark'));

  return (
    <header className='header fixed-top col-xl-auto mx-auto' id='menu'>
      <div className='container-fluid'>
        <nav className='row text-white pt-3 pb-3'>
          <a href='#x' className='col-10 col-lg-auto mr-lg-0 mr-xl-3'>
            <img src='https://ww3.cuevana.pro/logo.png' alt='NotFound' />
          </a>

          <ul className='nav col-auto col-xl-auto text-reset mr-xl-5'>
            <li className='pt-3'>
              <a href='#x' className='text-reset mr-lg-3 mr-xl-3 d-none d-lg-block'>Inicio</a>
            </li>
            
            <Dropdown isOpen={ dropdown[0] } toggle={ () => setDropdown({0: !dropdown[0]}) } className='caretOne d-none d-lg-block'>
              <DropdownToggle caret className='botonDropdown'>
                <li className='pt-2'>
                  <a href='#x' className='text-reset mr-lg-3 mr-xl-3 d-none d-lg-block'>Géneros</a>
                </li>
              </DropdownToggle>

              <DropdownMenu>
                { generos.map((item, index) => <DropdownItem key={ index }>{ item }</DropdownItem>) }
              </DropdownMenu>
            </Dropdown>

            <Dropdown isOpen={ dropdown[1] } toggle={ () => setDropdown({1: !dropdown[1]}) } className='caretTwo d-none d-lg-block'>
              <DropdownToggle caret className='botonDropdown'>
                <li className='pt-2'>
                  <a href='#x' className='text-reset mr-lg-3 mr-xl-3 d-none d-lg-block'>Películas</a>
                </li>
              </DropdownToggle>
              
              <DropdownMenu>
                { generos.map((item, index) => <DropdownItem key={ index }>{ item }</DropdownItem>) }
              </DropdownMenu>
            </Dropdown>
            
            <li className='pt-3'>
              <a href='#x' className='text-reset mr-xl-3 d-none d-lg-block'>Series</a>
            </li>
          </ul>
          
          <div className='col-12 text-reset col-md-2 col-md-auto widthMax p-lg-0 ml-5 ml-lg-0 ml-xl-5 d-none d-lg-block'>
            <input type='text' placeholder='Buscar películas.' className='form-control searchMovies w-100 mt-2 ml-2 ml-xl-4' />
            <a href='#x'>
              <img src='https://img.icons8.com/nolan/2x/search.png' className='searchMoviesIcon ml-lg-0 ml-xl-3' alt='NotFound' />
              </a>
          </div>
          
          <div className='col-12 col-md-auto text-reset pt-2 ml-xl-5 d-none d-lg-block'>
            <a href='#x' className='text-reset'>Entrar</a>
            <a href='#x' className='buttonRegister text-reset btn btn-primary ml-2 mr-xl-3'>Registro</a>
          </div>

          <div className='col-2 mx-auto text-center triLineBg text-reset pt-2 d-block d-lg-none'>
            <span><i></i><i></i><i></i></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
