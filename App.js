import React, { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  //initial useState's state= posts
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    //removes useEffect on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //anything inside arrow function is executed every time app renders
  //  useEffect(() => {
  //  console.log("onMount");
  //when value is passed in array hook runs, empty array = runs only when mounted
  //}, []);

  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
};

export default App;
