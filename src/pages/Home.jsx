import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";
import {
  clearNotif,
  registerUser,
} from "../redux/features/register/registerSlice";

const Home = () => {
  const [name, setname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { value } = useSelector((state) => state.counter);
  const { submit, loadingRegister, error } = useSelector(
    (state) => state.register
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [error]);
  console.log(
    "state =",
    value,
    "submit =",
    submit,
    "loading =",
    loadingRegister,
    "error =",
    error
  );

  const handleAdd = () => {
    dispatch(increment());
  };
  const handleMinus = () => {
    dispatch(decrement());
  };

  const handleName = (e) => {
    setname(e.target.value);
    dispatch(clearNotif());
    // console.log(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
    dispatch(clearNotif());
    // console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    dispatch(clearNotif());
    // console.log(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      name: name,
      username: username,
      password: password,
      roleId: 1,
    };

    dispatch(registerUser(data));
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <p>Conter : {value}</p>
      <div className="d-flex gap-3">
        <button className="btn btn-primary" onClick={handleAdd}>
          increase +
        </button>
        <button className="btn btn-danger" onClick={handleMinus}>
          decrease -
        </button>
      </div>
      <div className="col d-flex flex-column gap-3 mt-2" id="register">
        <label>Name</label>
        <input
          onChange={handleName}
          type="text"
          placeholder="input your name"
        />
        <label>Username</label>
        <input
          onChange={handleUsername}
          type="text"
          placeholder="input your username"
        />
        <label>Password</label>
        <input onChange={handlePassword} placeholder="input your password" />

        <button
          className="btn btn-primary"
          disabled={!(username && password && name)}
          onClick={handleSubmit}
        >
          {loadingRegister ? "Loading..." : "Submit"}
        </button>
        {!loadingRegister ? <p>{submit}</p> : <p>{error}</p>}
      </div>
    </div>
  );
};

export default Home;
