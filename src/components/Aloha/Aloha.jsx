import { Component } from "react";

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }
  switchFunction = () => {
    const { isGreeting } = this.state;
    this.setState({ isGreeting: !isGreeting });
  };
  delete = () => {
    const { userId, deleteUser } = this.props;
    deleteUser(userId);
  };
  render() {
    const { name = "React", deleteUser } = this.props;
    const { isGreeting } = this.state;
    return (
      <>
        <h1 className="heading">
          {isGreeting ? "Hello" : "Goodbye"},{name}
          <button onClick={this.delete}>Delete</button>
        </h1>
        <button onClick={this.switchFunction}>Switch</button>
      </>
    );
  }
}
export default Aloha;
