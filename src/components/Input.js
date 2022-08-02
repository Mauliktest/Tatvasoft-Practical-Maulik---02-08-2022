import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../store/slice/userSlice";

const Input = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });
  const [error, setError] = useState({});
  const getData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setError(validation(data));
    if (Object.keys(error).length === 0) {
      dispatch(addData(data));
    }
  };

  const validation = (value) => {
    const message = {};
    if (!value.firstname) {
      message.firstname = "firstname is required";
    }
    return message;
  };

  return (
    <div style={{ marginTop: "20px", width: "50%" }}>
      <h2>Input Component</h2>
      <div>
        <form onSubmit={handelSubmit}>
          <div className="mb-3 col-auto">
            <input
              type="text"
              className="form-control "
              placeholder="firstname"
              name="firstname"
              value={data.firstname}
              onChange={getData}
              style={{ width: "250px" }}
            />
            <p>{error.firstname}</p>
          </div>
          <div className="mb-3 col-auto">
            <input
              type="text"
              className="form-control "
              placeholder="lastname"
              name="lastname"
              value={data.lastname}
              onChange={getData}
              style={{ width: "250px" }}
            />
          </div>
          <div className="mb-3 col-auto">
            <select
              className="form-select"
              name="gender"
              value={data.gender}
              onChange={getData}
              style={{ width: "250px" }}
            >
              <option selected>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
