import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };

    console.log(this.props.userDetails.name + "Child constructor called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/bhushan-2");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(this.props.userDetails.name + "Child didMount Called");
  }

  componentWillUnmount() {
    console.log(this.props.userDetails.name + "Child willUnMount Called");
  }

  render() {
    console.log(this.props.userDetails.name + "Child render called");
    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className="user-info">
        <img src={avatar_url} className="avatar"/>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default UserClass;
