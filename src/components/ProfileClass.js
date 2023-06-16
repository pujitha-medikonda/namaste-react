import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    console.log("Child DIDmount " + this.props.cnt);
    let res = await fetch("https://api.github.com/users/akshaymarch7");
    let data = await res.json();
    console.log(data);
    this.setState({
      userInfo: data,
      ...this.setState,
    });
    console.log("Child Didmount " + this.props.cnt);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Child Component Update" + this.props.cnt);
  }
  render() {
    console.log("Child render " + this.props.cnt);
    return (
      <div>
        Im Profile Page
        <h1>{this.props.name}</h1>
        <button
          onClick={() => {
            this.setState({ cnt: this.state.cnt + 1 });
          }}
        >
          Counter
        </button>
      </div>
    );
  }
}

export default Profile;
