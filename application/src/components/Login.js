import React, { useState } from "react";

const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("localhost:3300/api/auth/login", user)
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
          value={user.username}
          onChange={(event) => handleChange(event)}
        ></input>
        <input
          id="password"
          type="text"
          name="password"
          placeholder="Enter Your Password"
          value={user.password}
          onChange={(event) => handleChange(event)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;