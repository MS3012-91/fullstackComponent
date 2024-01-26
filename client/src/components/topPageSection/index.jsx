import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function TopPageSection() {
  const navigate = useNavigate();
  const currentPage = useSelector((state) => state.navigationData.selectedCard);
  return (
    <div className='top-page-section'>
      <button className='go-back-btn' onClick={() => navigate(-1)}>
        <img src='app-images/arrow-left-1.svg' alt='back to previous page' />
      </button>
      <div className='header-div'>
        <h2>{`${currentPage}`}</h2>
      </div>
    </div>
  );
}
