import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { translate } from "../i18n";
import { createUser } from "../actions/auth";
import { Link } from "react-router-dom";
import "../styles/Register.css";

interface RegisterProps {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);

  const [formData, setFormData] = useState<RegisterProps>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      formData.password === "" ||
      formData.confirmPassword === "" ||
      formData.userName === "" ||
      formData.email === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword)
      alert("Passwords do not match");

    const userData = JSON.stringify(formData);

    dispatch(createUser(userData));
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>{translate("register", language)}</h1>
        <input
          className="input"
          type="text"
          name="userName"
          placeholder="User Name"
          onChange={handleFormData}
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleFormData}
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleFormData}
        />
        <input
          className="input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleFormData}
        />
        <button onClick={handleSubmit} className="button">
          {translate("register", language)}
        </button>
        <p>
          Do you already have account?{" "}
          <Link to={translate("login_route", language)}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
