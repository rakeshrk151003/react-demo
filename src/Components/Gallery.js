import React, { useEffect, useState } from "react";
import axios from "axios";
import "../static/Registration.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [dob, setDOB] = useState("");

  const handlePost = () => {
    axios
      .post("http://localhost:3002/Signup", { name, email, phno, dob })

      .then(() => {
        alert("data saved successfully");
        setName("");
        setEmail("");
        setPhno("");
        setDOB("");
      })
      .catch((e) => {
        console.log("error");
      });
  };

  return (
    <section className="container">
      <span className="title">Registration form</span>
      <form
        action="#"
        className="form"
        method="post"
        name="myform"
        onSubmit={(e) => {
          handlePost();
          // Add form validation or submission logic here
        }}
      >
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter full name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            id="emailid"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phno"
              value={phno}
              onChange={(e) => {
                setPhno(e.target.value);
              }}
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => {
                setDOB(e.target.value);
              }}
              placeholder="Enter birth date"
              required
            />
          </div>
        </div>
        <div className="gender-box">
          <br />
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input
                type="radio"
                id="check-male"
                name="gender"
                value="Male"
                required
              />
              <label htmlFor="check-male">Male</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="check-female"
                name="gender"
                value="Female"
                required
              />
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="check-other"
                name="gender"
                value="Other"
              />
              <label htmlFor="check-other">Prefer not to say</label>
            </div>
          </div>
        </div>
        <div className="input-box address">
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter street address"
            name="address"
            required
          />
          <div className="column">
            <input
              type="text"
              name="city"
              placeholder="Enter City name"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="Enter State name"
              required
            />
          </div>
        </div>
        <div className="input-field">
          <input
            className="password"
            name="password"
            placeholder="Create a Password"
            required
          />
        </div>
        <div className="input-field">
          <input
            className="password"
            name="password1"
            placeholder="Confirm your Password"
            required
          />
        </div>
        <br />
        <button id="submit" type="submit" onClick={handlePost}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default SignUp;
