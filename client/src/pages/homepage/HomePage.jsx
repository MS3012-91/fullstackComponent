import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../components/logo";
import "./home.css";
import Greeting from "../../components/greetingSection";

export default function HomePage() {
  return (
    <div className='homepage'>
      <div className='left-block'>
        <Link to={"/"}>
          <Logo />
        </Link>
        <Greeting className='greeting-section' />
      </div>
      <div className="right-block">
        <Outlet/>
      </div>
    </div>
  );
}
