import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor method");
  }

  componentDidMount() {
    console.log('Parent didMount called');
  }

  render() {
    console.log("Parent render method");
    const userObj = {
      name: "Bhushan Bobhate",
      location: "Kokan",
      handle: "twitter@123",
    };

    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass userDetails={{name: 'First', location: 'Kokan', handle:'twitter@123'}} />
      </div>
    );
  }
}

export default About;
