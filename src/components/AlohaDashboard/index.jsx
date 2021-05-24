import { Component } from "react";
import Aloha from "../Aloha/Aloha";
import AlohaList from "../AlohaList";
import SortedAlohaList from "../AlohaSorted/index";

class AlohaDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          fName: "Mark",
          lName: "Smith",
        },
        {
          id: 2,
          fName: "Andry",
          lName: "Geer",
        },
        {
          id: 3,
          fName: "Ger",
          lName: "Li",
        },
        {
          id: 4,
          fName: "super",
          lName: "man",
        },
      ],
    };
  }
  setUsers = (users) => {
    this.setState({ users });
  };
  deleteUser = (userId) => {
    const { users } = this.state;
    this.setState({
      users: users.filter((item) => item.id !== userId),
    });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <SortedAlohaList
          users={users}
          setUsers={this.setUsers}
          deleteUser={this.deleteUser}
        />
      </>
    );
  }
}
export default AlohaDashboard;
