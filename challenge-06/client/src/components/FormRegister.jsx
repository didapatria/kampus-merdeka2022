import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";

import { Link } from 'react-router-dom'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const FormRegister = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeFullname = (e) => {
    const fullname = e.target.value;
    setFullname(fullname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(fullname, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="md:w-96">
      <h1 className="text-xl font-bold mb-5">Sign Up</h1>
      <Form onSubmit={handleRegister} ref={form}>
        {!successful && (
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullname">Name</label>
                <Input
                  type="text"
                  className="bg-white rounded border px-3 py-2 w-full"
                  name="fullname"
                  value={fullname}
                  onChange={onChangeFullname}
                  validations={[required]}
                  placeholder="Nama Lengkap"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="bg-white rounded border px-3 py-2 w-full"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                  placeholder="Contoh: johndee@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="password">Create Password</label>
                <Input
                  type="password"
                  className="bg-white rounded border px-3 py-2 w-full"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                  placeholder="6+ karakter"
                />
              </div>
            </div>
            
            <div className="mt-8">
              <button className="bg-primary text-white rounded px-5 py-2 w-full">Sign Up</button>
            </div>

            <div className="flex mt-8">
              <p>Already have an account?</p>
              <Link to = '/login' className='font-medium text-primary pl-2'>Sign In here</Link>
            </div>
          </div>
        )}

        {message && (
          <div className="absolute top-5">
            <div className={ successful ? "bg-green-600 text-white px-3 py-2" : "bg-red-600 text-white px-3 py-2" } role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default FormRegister;
