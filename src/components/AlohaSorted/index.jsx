import { Component } from "react";
import AlohaList from "../AlohaList/index";

class SortedAlohaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDerectSort: true,
    };
  }
  sortUser = () => {
    const { isDerectSort } = this.state;
    const { users, setUsers } = this.props;
    const usersCopy = [...users];
    setUsers(
      usersCopy.sort((a, b) => (isDerectSort ? b.id - a.id : a.id - b.id))
    );
    this.setState({ isDerectSort: !isDerectSort });
  };

  render() {
    const { users, deleteUser } = this.props;
    return (
      <>
        <AlohaList users={users} deleteUser={deleteUser} />
        <button onClick={this.sortUser}>SortUser</button>
      </>
    );
  }
}

export default SortedAlohaList;
