import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import '../assets/styless/CarouselOne.scss';

export class CarouselOne extends Component {
  render() {
    return (
      <Carousel className='principalCarousel vhh-50'>
        <Carousel.Item>
          <img
            src='https://image.tmdb.org/t/p/w1280/egtcnLhyj2A56uLmmfYX2p73Eky.jpg'
            alt='NotFound'
            className='d-block imgCarouselOne w-100'
          />
          <Carousel.Caption>
            <div className='text-left col-12 vh-50 mx-auto'>
              <h1 className='mb-3'>La Liga de la Justicia de Zack Snyder</h1>
              <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!</p>
              <button type='button' className='btn btn-primary btnRegisterO'>
                Ver Película
                <a href='/'>
                  <img src='https://i.ibb.co/HNh0gM4/playarrow.png' className='playIcon' alt='NotFound' />
                </a>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src='https://image.tmdb.org/t/p/w1280/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg'
            alt='NotFound'
            className='d-block imgCarouselOne w-100'
          />
          <Carousel.Caption>
            <div className='text-left col-12 vh-50 mx-auto'>
              <h1 className='mb-3'>Raya y el último Dragón</h1>
              <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!</p>
              <button type='button' className='btn btn-primary btnRegisterO'>
                Ver Película
                <a href='/'>
                  <img src='https://i.ibb.co/HNh0gM4/playarrow.png' className='playIcon' alt='NotFound' />
                </a>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src='https://image.tmdb.org/t/p/w1280/fAJuZDEkrqmYQUUDrro8wRqb2Tn.jpg'
            alt='NotFound'
            className='d-block imgCarouselOne w-100'
          />
          <Carousel.Caption>
            <div className='text-left col-12 vh-50 mx-auto'>
              <h1 className='mb-3'>A todos los chicos: Para siempre</h1>
              <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!</p>
              <button type='button' className='btn btn-primary btnRegisterO'>
                Ver Película
                <a href='/'>
                  <img src='https://i.ibb.co/HNh0gM4/playarrow.png' className='playIcon' alt='NotFound' />
                </a>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src='https://image.tmdb.org/t/p/w1280/srYya1ZlI97Au4jUYAktDe3avyA.jpg'
            alt='NotFound'
            className='d-block imgCarouselOne w-100'
          />
          <Carousel.Caption>
            <div className='text-left col-12 vh-50 mx-auto'>
              <h1 className='mb-3'>Wonder Woman 1984 (La mujer maravilla 2)</h1>
              <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!</p>
              <button type='button' className='btn btn-primary btnRegisterO'>
                Ver Película
                <a href='/'>
                  <img src='https://i.ibb.co/HNh0gM4/playarrow.png' className='playIcon' alt='NotFound' />
                </a>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src='https://image.tmdb.org/t/p/w1280/iopYFB1b6Bh7FWZh3onQhph1sih.jpg'
            alt='NotFound'
            className='d-block imgCarouselOne w-100'
          />
          <Carousel.Caption>
            <div className='text-left col-12 vh-50 mx-auto'>
              <h1 className='mb-3'>Godzilla vs Kong</h1>
              <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minima obcaecati accusantium voluptas iusto laudantium? Dolorem, debitis libero, minus eligendi dignissimos iure quia numquam nobis, voluptatum quos laborum saepe. Delectus!</p>
              <button type='button' className='btn btn-primary btnRegisterO'>
                Ver Película
                <a href='/'>
                  <img src='https://i.ibb.co/HNh0gM4/playarrow.png' className='playIcon' alt='NotFound' />
                </a>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselOne;
