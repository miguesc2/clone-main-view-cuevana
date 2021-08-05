import React, { useState } from 'react';
import '../assets/styless/Header.scss';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'; //install reactstrap para el dropdown
import $ from 'jquery';

function Header() {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };
  const [dropdownO, setDropdownO] = useState(false);
  const abrirCerrarDropdownO = () => {
    setDropdownO(!dropdownO);
  };
  $(window).scroll(() => {
    if ($('#menu').offset().top > 70) {
      $('#menu').addClass('scrollEffect');
    } else {
      $('#menu').removeClass('scrollEffect');
    }
  });

  return (
    <header className='header fixed-top col-xl-auto mx-auto' id='menu'>
      <div className='container-fluid'>
        <nav className='row text-white pt-3 pb-3'>
          <a href='/' className='col-10 col-lg-auto mr-lg-0 mr-xl-3'>
            <img src='https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/cuevana3.png' alt='NotFound' />
          </a>

          <ul className='nav col-auto col-xl-auto text-reset mr-xl-5'>
            <li className='pt-3'><a href='/' className='text-reset mr-lg-3 mr-xl-3 d-none d-lg-block'>Inicio</a></li>
            <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} className='caretOne d-none d-lg-block'>
              <DropdownToggle caret className='botonDropdown'>
                <li className='pt-2'><a href='/' className='text-reset mr-lg-3 mr-xl-3 d-none d-lg-block'>Géneros</a></li>
              </DropdownToggle>

              <DropdownMenu>
                <DropdownItem> Acción </DropdownItem>
                <DropdownItem> Aventura </DropdownItem>
                <DropdownItem> Biografía </DropdownItem>
                <DropdownItem> Comedia </DropdownItem>
                <DropdownItem> Documentales </DropdownItem>
                <DropdownItem> Familiar </DropdownItem>
                <DropdownItem> Misterio </DropdownItem>
                <DropdownItem> Romance </DropdownItem>
                <DropdownItem> Thriller </DropdownItem>
                <DropdownItem> Animación </DropdownItem>
                <DropdownItem> Bélico Guerra </DropdownItem>
                <DropdownItem> Ciencia Ficción </DropdownItem>
                <DropdownItem> Ciencia Ficción </DropdownItem>
                <DropdownItem> Crimen </DropdownItem>
                <DropdownItem> Drama </DropdownItem>
                <DropdownItem> Fantasía </DropdownItem>
                <DropdownItem> Musical </DropdownItem>
                <DropdownItem> Terror </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={dropdownO} toggle={abrirCerrarDropdownO} className='caretTwo d-none d-lg-block'>
              <DropdownToggle caret className='botonDropdown'>
                <li className='pt-2'><a href='/' className='text-reset mr-lg-3 mr-xl-3 d-none d-lg-block'>Películas</a></li>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem> Estrenos </DropdownItem>
                <DropdownItem> Ranking </DropdownItem>
                <DropdownItem> Mas Vistas </DropdownItem>
                <DropdownItem> Películas </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <li className='pt-3'><a href='/' className='text-reset mr-xl-3 d-none d-lg-block'>Series</a></li>
          </ul>
          <div className='col-12 text-reset col-md-2 col-md-auto widthMax p-lg-0 ml-5 ml-lg-0 ml-xl-5 d-none d-lg-block'>
            <input type='text' placeholder='Buscar películas.' className='form-control searchMovies w-100 mt-2 ml-2 ml-xl-4' />
            <a href='/'><img src='https://img.icons8.com/nolan/2x/search.png' className='searchMoviesIcon ml-lg-0 ml-xl-3' alt='NotFound' /></a>
          </div>
          <div className='col-12 col-md-auto text-reset pt-2 ml-xl-5 d-none d-lg-block'>
            <a href='/' className='text-reset'>Entrar</a>
            <a href='/' className='buttonRegister text-reset btn btn-primary ml-2 mr-xl-3'>Registro</a>
          </div>

          <div className='col-2 mx-auto text-center triLineBg text-reset pt-2 d-block d-lg-none'>
            <span>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
