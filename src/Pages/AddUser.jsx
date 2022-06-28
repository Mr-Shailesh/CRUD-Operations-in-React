import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, phone, email, website } = data;

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", data);

    navigate("/");
  };
  return (
    <div>
      <div>
        <h1 className="text-center my-5">Add User</h1>
      </div>
      <div className="add_user">
        <form className="text-center" onSubmit={submitHandler}>
          <div className="-3">
            <input
              type="text"
              onChange={inputHandler}
              className="form-control"
              required
              name="name"
              value={name}
              placeholder="Enter Your Name"
            />
            <br />
            <input
              type="text"
              onChange={inputHandler}
              className="form-control"
              required
              name="username"
              value={username}
              placeholder="Enter Your Username"
            />
            <br />
            <input
              type="email"
              onChange={inputHandler}
              className="form-control"
              required
              name="email"
              value={email}
              placeholder="Enter Your E-mail Address"
            />
            <br />
            <input
              type="text"
              onChange={inputHandler}
              className="form-control"
              required
              name="phone"
              value={phone}
              placeholder="Enter Your Phone Number"
            />
            <br />
            <input
              type="text"
              onChange={inputHandler}
              className="form-control"
              required
              name="website"
              value={website}
              placeholder="Enter Your Website Name"
            />
            <br />
          </div>

          <button type="submit" className="btn btn-primary button">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
