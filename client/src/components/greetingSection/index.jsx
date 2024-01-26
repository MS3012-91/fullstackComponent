import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCard } from "../../store/slices/pagesNavigateSlice";
import { Link } from "react-router-dom";
import "./styles.css";

const navigationCards = [
  {
    id: "characteristics",
    pathToImage: "app-images/vote-table.png",
  },
  {
    id: "breeds",
    pathToImage: "app-images/pet-breeds.png",
  },
  { id: "gallery", pathToImage: "app-images/pets-gallery.png" },
];

export default function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectedCard);
  }, [dispatch]);

  return (
    <>
      <div className='greeting-block'>
        <p className='hi'>Hi!👋</p>
        <p className='welcome'>Welcome to MacPaw Bootcamp 2023 </p>
      </div>
      <div className='navigate-block'>
        <p className='lets-start'>Lets start using The Cat API</p>
        <ul className='start-img-block'>
          {navigationCards.map((card) => (
            <li className='card-container' key={`${card.id}`}>
              <Link
                to={`${card.id}`}
                onClick={() => dispatch(setSelectedCard(`${card.id}`))}
              >
                <div className={`cards ${card.id}`}>
                  <img src={`${card.pathToImage}`} alt={`${card.id}`} />
                </div>
                <div className='navigate-button'>{`${card.id}`}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
