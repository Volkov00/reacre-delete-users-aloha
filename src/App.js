import "./App.css";
import Aloha from "./components/Aloha/Aloha";
import React from "react";
import AlohaDashboard from "./components/AlohaDashboard";
import AlohaList from "./components/AlohaList/index";
import SortedAlohaList from "./components/AlohaSorted/index";

function App() {
  /* return (
    <>
      <Aloha name="Mark" />
      <Aloha name="Andry" />
      <Aloha />
    </>
  );*/
  return <AlohaDashboard />;
}

export default App;
