import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../assets/styless/CarouselPopular.scss';

export class CarouselPopular extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row col-12 col-xl-9 justify-content-center float-left'>
          <div className='col-12 col-sm-6 mt-4 text-center text-sm-left mb-sm-0'>
            <h3 className='font-weight-bold'>Categorías Populares</h3>
          </div>
          <div className='col-12 text-center col-sm-6 mt-0 mt-sm-4 mb-3 text-right'>
            <a href='/' className='text-reset btn btn-primary btnRegisterTwo'>VER MAS SERIES</a>
          </div>

          <Carousel className='secondCarousel mb-5 w-100'>
            <Carousel.Item>
              <a href='/' className='float-left col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset'>
                <img className='imgMoreWidth' src='https://cuevana3.io/wp-content/uploads/2021/04/the-walking-dead-71119-episode-22-season-10.jpg' alt='NotFound' />
                <p className='text-center'>The Walking Dead</p>
              </a>

              <a href='/' className='float-left col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset'>
                <img className='imgMoreWidth' src='https://cuevana3.io/wp-content/uploads/2021/04/el-joven-sheldon-71104-episode-12-season-4.jpg' alt='NotFound' />
                <p className='text-center'>El joven Sheldon</p>
              </a>

              <a href='/' className='float-left d-none d-sm-block col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset'>
                <img className='imgMoreWidth' src='https://cuevana3.io/wp-content/uploads/2021/04/tell-me-your-secrets-71100-episode-7-season-1.jpg' alt='NotFound' />
                <p className='text-center'>Tell Me Your Secrets</p>
              </a>

              <a href='/' className='float-left d-none d-lg-block col-lg-3 col-xl-3 text-reset'>
                <img className='imgMoreWidth' src='https://cuevana3.io/wp-content/uploads/2021/04/tell-me-your-secrets-71099-episode-6-season-1.jpg' alt='NotFound' />
                <p className='text-center'>Tell Me Your Secrets II</p>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href='/' className='float-left col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset'>
                <img className='imgMoreWidth' src='https://cuevana3.io/wp-content/uploads/2021/04/the-walking-dead-71119-episode-22-season-10.jpg' alt='NotFound' />
                <p className='text-center'>The Walking Dead</p>
              </a>

              <a href='/' className='float-left col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset'>
                <img className='imgMoreWidth' src='https://cuevana3.io/wp-content/uploads/2021/04/el-joven-sheldon-71104-episode-12-season-4.jpg' alt='NotFound' />
                <p className='text-center'>El joven Sheldon</p>
              </a>

              <a href='/' className='float-left d-none d-sm-block col-sm-4 col-md-4 col-lg-3 col-xl-3 text-reset'>
                <img className='imgMoreWidth' src='https://cuevana3.io/wp-content/uploads/2021/04/tell-me-your-secrets-71100-episode-7-season-1.jpg' alt='NotFound' />
                <p className='text-center'>Tell Me Your Secrets</p>
              </a>

              <a href='/' className='float-left d-none d-lg-block col-lg-3 col-xl-3 text-reset'>
                <img className='imgMoreWidth' src='https://cuevana3.io/wp-content/uploads/2021/04/tell-me-your-secrets-71099-episode-6-season-1.jpg' alt='NotFound' />
                <p className='text-center'>Tell Me Your Secrets II</p>
              </a>
            </Carousel.Item>
          </Carousel>

          <div className='col-sm-12 col-lg-4 mt-4 text-center text-sm-left'>
            <h3 className='font-weight-bold'>Películas Online</h3>
          </div>

          <div className='d-none d-sm-block col-sm-12 col-lg-8 menuMovieOnline mt-2 mt-lg-4 mb-4 mb-lg-0'>
            <a href='/' className='d-inline text-reset font-weight-bold mr-4'>ÚLTIMAS</a>
            <a href='/' className='d-inline text-reset font-weight-bold mr-4'>ESTRENOS</a>
            <a href='/' className='d-inline text-reset font-weight-bold mr-4'>RANKING</a>
            <a href='/' className='d-inline text-reset font-weight-bold '>MAS VISTAS</a>
          </div>

          <div className='pOnline text-center'>
            <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/love-under-the-olive-tree-40736-poster-200x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Love Under the Oliver Tree</p>
            </a>

            <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/girl-cops-40732-poster-210x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Girl Cops</p>
            </a>

            <a href='/' className='float-left d-none d-md-block col-md-4 col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/el-verano-que-vivimos-40728-poster-200x300.jpg' alt='NotFound' />
              <p className='mx-auto'>El verano que  vivimos</p>
            </a>

            <a href='/' className='float-left d-none d-lg-block col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/embrion-40725-poster-200x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Embrión</p>
            </a>
          </div>
          <div className='pOnline text-center'>
            <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2020/07/impetigore-31295-poster-202x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Impetigore</p>
            </a>

            <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/los-octonautas-y-el-cinturon-de-fuego-40717-poster-214x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Los Octonautas y el Cinturon de Fuego</p>
            </a>

            <a href='/' className='float-left d-none d-md-block col-md-4 col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/bleed-40713-poster-203x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Bleed</p>
            </a>

            <a href='/' className='float-left d-none d-lg-block col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/free-byrd-40710-poster-200x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Free Byrd</p>
            </a>
          </div>
          <div className='pOnline text-center'>
            <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/un-angel-en-nuestras-vidas-40707-poster-204x300.jpg' alt='NotFound' />
              <p className='mx-auto'> Un Angel en Nuestras Vidas</p>
            </a>
            <a href='/' className='float-left col-12 col-sm-6 col-md-4 col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/dawn-of-the-beast-40704-poster-200x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Dawn of the Beast</p>
            </a>
            <a href='/' className='float-left d-none d-md-block col-md-4 col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/miedo-a-volar-40700-poster-200x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Miedo a Volar</p>
            </a>
            <a href='/' className='float-left d-none d-lg-block col-lg-3 text-reset'>
              <img src='https://cuevana3.io/wp-content/uploads/2021/04/enfant-terrible-40696-poster-200x300.jpg' alt='NotFound' />
              <p className='mx-auto'>Enfant Terrible</p>
            </a>
          </div>
        </div>

        <div className='row d-none d-sm-block col-sm-12 col-xl-3 float-xl-left mt-4 ml-3'>
          <div className='col-12 col-md-6 col-xl-12'>
            <img className='d-none d-xl-block' src='https://cuevana3.io/wp-content/themes/cuevana3/public/img/xgot.png.pagespeed.ic.kXvqsjr_iM.webp' alt='NotFound' />
            <p className='alignCenterObjects mt-5'>
              <small>FILTRAR PELÍCULAS POR IDIOMA</small>
            </p>
            <div className='alignCenterObjects mt-4'>
              <a href='/' className='mr-4'><img src='https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/latino.svg' alt='NotFound' /></a>
              <a href='/' className='mr-4'><img src='https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/espana.svg' alt='NotFound' /></a>
              <a href='/'><img src='https://cuevana3.io/wp-content/themes/cuevana3/public/img/cnt/subti.svg' alt='NotFound' /></a>
            </div>
            <p className='alignCenterObjects mt-5' id='alignCenterObjectsId'>
              <small>TOP ESTRENOS</small>
            </p>
          </div>

          <div className='col-12 w-100 col-md-6 col-xl-12 mt-3 sectionRight'>
            <div>
              <img className='float-left' src='https://cuevana3.io/wp-content/uploads/2019/04/vengadores-endgame-13310-poster-100x100.jpg' alt='NotFound' />
              <p className='float-left col-6'>Avengers:Endgame / Vengadores 4</p>
            </div>
            <div>
              <img className='float-left' src='https://cuevana3.io/wp-content/uploads/2019/10/joker-21711-poster-100x100.jpg' alt='NotFound' />
              <p className='float-left col-6'>Joker</p>
            </div>
            <div>
              <img className='float-left' src='https://cuevana3.io/wp-content/uploads/2021/03/la-liga-de-la-justicia-de-zack-snyder-39793-poster-100x100.jpg' alt='NotFound' />
              <p className='float-left col-6'>Liga de la Justicia de Zack Snyder</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CarouselPopular;
