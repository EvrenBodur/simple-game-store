import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { translate } from "../i18n";
import { Link } from "react-router-dom";
import { login } from "../actions/auth";
import "../styles/Login.css";

interface LoginProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: RootState) => state.language);
  const { user, error } = useSelector((state: RootState) => state.auth);
  const [parsedUser, setParsedUser] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState<LoginProps>({
    email: parsedUser.email,
    password: parsedUser.password,
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formData.password === "" || formData.email === "") {
      alert("Please fill all fields");
      return;
    }

    const userData = JSON.stringify(formData);

    dispatch(login(userData));
  };

  useEffect(() => {
    if (user.length > 0) {
      setParsedUser(JSON.parse(user));
    }
  }, [user]);
  return (
    <div className="container">
      <div className="form-container">
        <h1>{translate("login", language)}</h1>
        <input
          className="input"
          type="text"
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
        {error && <p>{error}</p>}
        <button onClick={handleSubmit} className="button">
          {translate("login", language)}
        </button>
        <p>
          Dont have account?{" "}
          <Link to={translate("register_route", language)}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
