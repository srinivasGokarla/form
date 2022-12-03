import "./styles.css";
import React, { useState } from "react";

export default function SimpleForm() {
  const [fullname, setFullname] = useState({
    username: "",
    fullname: "",
    age: ""
  });
  const [display, setDisplay] = useState(false);
  const InputChange = (e) => {
    //    const name = e.target.name;
    //    const value = e.target.value;
    const { name, value } = e.target;
    setFullname((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    setDisplay(true);

    alert("Form Submited Successfully");
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={OnSubmit}>
        <lable>Username:</lable>
        <input
          type="text"
          name="username"
          placeholder="Enter Your User Name"
          onChange={InputChange}
          value={fullname.username}
        />
        <br />
        <br />
        <lable> Full Name: </lable>
        <input
          type="text"
          name="fullname"
          placeholder="Enter Your Full Name"
          onChange={InputChange}
          value={fullname.fullname}
        />
        <br />
        <br />

        <lable>Age: </lable>
        <input
          type="number"
          name="age"
          placeholder="Enter Your Phone Number"
          onChange={InputChange}
          value={fullname.age}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        {display && (
          <>
            <h4>Request Sent to DB with below request data</h4>
            <ul>
              <li>UserName: {fullname.username.toUpperCase()}</li>
              <li>FullName: {fullname.fullname.toUpperCase()}</li>
              <li>Age: {fullname.age}</li>
            </ul>
          </>
        )}
      </form>
    </div>
  );
}
