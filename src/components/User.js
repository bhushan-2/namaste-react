import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  const { name, location, handle } = props.userDetails;
  return (
    <div className="user-info">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h1>{name}</h1>
      <h3>{location}</h3>
      <h3>{handle}</h3>
    </div>
  );
};

export default User;
