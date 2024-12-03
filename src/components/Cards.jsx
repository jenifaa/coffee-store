import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
import { BsCup } from "react-icons/bs";
import backImg from '../assets/images/more/1.png'

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <div
    className=""
    style={{
      backgroundImage: `url(${backImg})`,
      
    }}
    
  >
      <div className="text-center my-5 bg-base-200 py-10 w-10/12">
        <div className="">
          <h2 className="text-3xl mb-6">Our Popular Product</h2>
          <div className="flex justify-center items-center">
            <button className="p-2 rounded-md bg-[#E3B577] border-2 border-[#331A15] flex items-center gap-2">
              <Link to="/addcoffee">Add Coffee </Link>
              <BsCup className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-8/12 mx-auto gap-5 my-10">
        {cards.map((card) => (
          <Card key={card._id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
