import React, { useState } from 'react'
import '../../Assets/landing.scss';
import booktable from '../../Assets/pictures/front-food.jpg';
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [success ,setSuccess] = useState(false)

  const login = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({  email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    if (result.success == true) {
      let local = {
          email:result.email,
          userID:result.userId,
          token: result.token,
      }
      setSuccess(result.message)
      localStorage.setItem('user', JSON.stringify(local));
      setTimeout(() => {
        navigate("/")
      },[1000])
    } else {
      setError(result.message)
    }
  } 
  setTimeout(() => {
      setError(false);
  },2000);

  const signup = () => {
    navigate('/signin')
  }
 
  return (
    <>
      <div className="landing-page">
        <div className='container'>
          <div className='row d-flex content'>
            {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>{error}</strong>
            </div>}
            {success && <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{success}</strong>
            </div>}
            <div className='col-md-5 left-side'>
              <div className='heading'>
                <h3>Food Website</h3>
                <h5>Login Page</h5>
                <p>SignIn With Your Email And Password</p>

              </div>
              <div className='form-data'>
                <form>
                  <div className='details'>
                    <div className='form-group p-1'>
                      <label htmlFor='email' className='p-1' >Email</label>
                      <input type="text" className='form-control'
                        value={email} onChange={(e) => setEmail(e.target.value)} name="email" required
                        placeholder="Please Enter Your Email..."
                      />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group p-1'>
                      <label htmlFor="text" className='p-1'>Password</label>
                      <input type="password" className='form-control input'
                        value={password} onChange={(e) => setPassword(e.target.value)} name="password" required placeholder="Please Enter Your Password..." />
                    </div>
                    <div className='buttons'>
                      <button type="button" className="btn btn-success login" onClick={(e) => login(e)}>Login</button>
                      <button type="button" className="btn btn-success sign" onClick={(e) => signup(e)}>Sign Up</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-md-7 right-side'>
              <img src={booktable} alt="bookTable"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
