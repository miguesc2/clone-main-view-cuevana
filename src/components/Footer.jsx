import React from 'react';
import '../assets/styless/Footer.scss';

function Footer() {
  return (
    <div>
      <footer className='footer container'>
        <nav className='row text-white float-left footerSpace text-center justify-content-between align-items-center'>
          <figure href='/' className='col-12 col-lg-3 col-xl-3'>
            <img src='https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/cuevana-logo.png' alt='Cuevana' />
          </figure>

          <div className='col-12 col-md-8 col-lg-6 col-xl-6 infoText'>
            <a href='/' className='text-reset mr-4'>Aviso legal</a>
            <a href='/' className='text-reset mr-4'>DMCA</a>
            <a href='/' className='text-reset mr-4'>Cuevana</a>
            <a href='/' className='text-reset'>Cuevana Online</a>
          </div>

          <div className='imageSocial col-4 mx-auto mx-xl-0 col-md-3 col-lg-2 col-xl-3'>
            <a href='/'>
              <img src='https://cdn.icon-icons.com/icons2/642/PNG/128/facebook_icon-icons.com_59205.png' alt='NotFound' />
            </a>
            <a href='/'>
              <img src='https://i.ibb.co/YXcrN3z/twittericon.png' alt='NotFound' />
            </a>
          </div>
          <div className='footerText mx-auto mt-4 mt-lg-0'>
            <p><small>© 2019 Cuevana 3 Peliculas Online, Todos los derechos reservados. Hay 4849 películas disponibles</small></p>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
