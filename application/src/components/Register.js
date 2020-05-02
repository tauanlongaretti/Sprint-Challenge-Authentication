import React, { useState } from "react";

const Register = (props) => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("localhost:3300/api/auth/register", newUser)
      .then((res) => {
        console.log("res", res);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
    props.history.push("/login");
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter Your Username"
          value={newUser.username}
          onChange={(event) => handleChange(event)}
        ></input>
        <input
          id="password"
          type="text"
          name="password"
          placeholder="Enter Your Password"
          value={newUser.password}
          onChange={(event) => handleChange(event)}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;