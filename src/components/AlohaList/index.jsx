import { getByTitle } from "@testing-library/dom";
import { Component } from "react";
import Aloha from "../Aloha/Aloha";

function AlohaList({ users, deleteUser }) {
  const userGreeting = users.map(({ id, fName, lName }) => (
    <li key={id}>
      <Aloha name={`${fName} ${lName}`} userId={id} deleteUser={deleteUser} />
    </li>
  ));
  return <ul>{userGreeting}</ul>;
}
export default AlohaList;
