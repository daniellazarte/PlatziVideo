import React, {useState, useEffect} from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Categories from '../Components/Categories';
import Carousel from '../Components/Carousel';
import CarouselItem from '../Components/CarouselItem';
import Footer from '../Components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState'

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length ===0 ? <h1>Loading...</h1> : (
  <div className="App">
    <Header />
    <Search />
    {initialState.mylist.length > 0 &&
        <Categories title="Mi Primera Lista de Videos">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
    }

    <Categories title="Tendencias">
      <Carousel>
        {initialState.trends.map(item =>
          <CarouselItem key={item.id} {...item} />
        
        )};
        </Carousel>
    </Categories>

    <Categories title="Originales de PLatzi Videos">
      <Carousel>
        {initialState.originals.map(item =>
          <CarouselItem key={item.id} {...item} />
        
        )};
        </Carousel>
    </Categories>
    <Footer />
  </div>
)};

export default App;