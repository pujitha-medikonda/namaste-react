import React, { useEffect } from "react";
import Header from "./Header";
import Profile from "./ProfileClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Parent Component Update");
  }
  componentDidMount() {
    console.log("Parent Component");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <Header></Header>
        <h1>Its all about us in React Web Series</h1>
        <Profile cnt={1} />
        <Profile cnt={2} />
      </div>
    );
  }
}

export default AboutUs;
