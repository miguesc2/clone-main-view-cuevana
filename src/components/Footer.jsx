import React from 'react';
import '../assets/styless/Footer.scss';

const Footer = () => (
  <div>
    <footer className='footer container'>
      <nav className='row text-white float-left footerSpace text-center justify-content-between align-items-center'>
        <figure href='#x' className='col-12 col-lg-3 col-xl-3'>
          <img src='https://ww3.cuevana.pro/logo.png' alt='Cuevana' />
        </figure>

        <div className='col-12 col-md-8 col-lg-6 col-xl-6 infoText'>
          <a href='#x' className='text-reset mr-4'>Aviso legal</a>
          <a href='#x' className='text-reset mr-4'>DMCA</a>
          <a href='#x' className='text-reset mr-4'>Cuevana</a>
          <a href='#x' className='text-reset'>Cuevana Online</a>
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
          <p><small>CUEVANA es un servico de distribucion de peliculas y series gratis. En CUEVANA no se almacena ningún vídeo, estos se encuentran alojados en sitios de terceros. © CUEVANA. Todos los derechos reservados.</small></p>
        </div>
      </nav>
    </footer>
  </div>
);

export default Footer;
