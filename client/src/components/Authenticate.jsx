import React, { useState } from 'react';
import "../styles/auth.css";
import profile1 from "../media/login-avatar.png";
import profile2 from "../media/register-avatar.png";
import axios from 'axios';

const LoginForm = () => (
  <>

  </>
);

const RegisterForm = () => (
  <>

  </>
);



export default function Authentication() {
  const [form, setForm] = useState(true);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForm = (isLogin) => {
    setForm(isLogin);
  };

  const handleLoginSubmit = () => {
    console.log("Hii from login")


    axios.post("http://localhost:8080/user/login", {
      email: email,
      password: password
    })
      .then(res => {
        console.log(res); // Access the response data directly
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  };

  // const handleRegisterSubmit = () => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);

  //   const data = {};
  //   formData.forEach((value, key) => {
  //     data[key] = value;
  //   });

  //   console.log(data); // Log the data to check if the form data is captured correctly
  // };

  return (
    <div className="authentication">
      <div className="form">
        <div className="form-btn">
          <div className={form ? 'active' : 'absent'} onClick={() => handleForm(true)}>Login</div>
          <div className={!form ? 'active' : 'absent'} onClick={() => handleForm(false)}>Register</div>
        </div>
        <div >
          {form ? (<div className='form-info'> <img src={profile1} alt="Login" className='profile' />
            <input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="btn" onClick={handleLoginSubmit}>Login</button></div>) : (<div className='form-info'>
              <img src={profile2} alt="Register" className='profile' />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="username" placeholder="Username" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="password" name="re-password" placeholder="Confirm Password" required />
              <button className="btn">Register</button>
            </div>)}
        </div>
      </div>
    </div>
  );
}
