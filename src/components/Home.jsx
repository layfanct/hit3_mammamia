import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../assets/pizza'; 


const Home = () => {
  return (
    <div className="pizza-list">
      {pizzas.map((pizza) => (
        <CardPizza 
          key={pizza.id} 
          name={pizza.name} 
          desc={pizza.desc} 
          ingredients={pizza.ingredients} 
          price={pizza.price} 
          img={pizza.img} 
        />
      ))}
    </div>
  );
};

export default Home;


