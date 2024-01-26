import React from "react";
import "./styles.css";

export default function FullPageHeader() {
  return (
    <div className='full-page-header'>
      <div className='search-block'>
        <input
          className='search-input'
          placeholder='Search for breeds by characteristics'
          type='text'
          name='search input'
          id='search'
        />
        <button className='search-button' onClick={() => {
          
        }}>
          <img
            className='search-image'
            src='app-images/search.svg'
            alt='search image'
          />
        </button>
      </div>
      <ul className='favourites'>
        <li>
          <button className='btn'>
            <img className='emoji' src='app-images/smile.svg' alt='smile' />
          </button>
        </li>
        <li>
          <button className='btn'>
            <img
              className='emoji'
              src='app-images/favourite.svg'
              alt='favourite'
            />
          </button>
        </li>
        <li>
          <button className='btn'>
            <img className='emoji' src='app-images/dislike.svg' alt='dislike' />
          </button>
        </li>
      </ul>
    </div>
  );
}
