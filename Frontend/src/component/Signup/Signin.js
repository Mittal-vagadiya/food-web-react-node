import React, { useEffect, useState } from 'react';
import './signin.scss';
import { useNavigate } from "react-router-dom";


export const Signup = () => {
  const navigate = useNavigate();
  const [passerror, setPassError] = useState(false);
  const [state, SetState] = useState({
    fname: '',
    lname: "", phone: "",
    username: "",
    pass: '',
    repass: '',
    check: false

  })
  const [check, setCheck] = useState(false);
  const handelChange = (e) => {
    e.preventDefault();

    if (e.target.name == "check") {
      SetState({ ...state, [e.target.name]: e.target.checked })
    } else {
      SetState({ ...state, [e.target.name]: e.target.value })
    }
  }

  useEffect(() => {
    SetState({ ...state, check: check })
  }, [check]);

  const submitdata = (e) => {
    e.preventDefault();
    console.log(state)
}
  return (
    <>
      <div className="landing-page">
        <div className='container '>

          <div className='row d-flex content'>
            {passerror && <div className="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>}
            <div className='col-md-12 left-side'>
              <div className='heading'>
                <h3>Food Website</h3>
                <h5>Create Account</h5>
                <p>Please Fill Details</p>

              </div>
              <div className='form-data'>
                <form onSubmit={(e) => submitdata(e)}>
                  <div className='details'>

                    <div className="form-group p-2">
                      <div className="row">
                        <div className="col">
                          <label htmlFor='fname' className='p-1' >First Name</label>
                          <input type="text"
                            name="fname"
                            value={state.fname}
                            className="form-control"
                            placeholder="Please Enter Your First name"
                            required
                            onChange={(e) => handelChange(e)}
                          />
                        </div>
                        <div className="col">
                          <label htmlFor='lname' className='p-1' >Last Name</label>
                          <input type="text"
                            name="lname"
                            value={state.lname}
                            className="form-control"
                            placeholder="Last name"
                            required
                            onChange={(e) => handelChange(e)} />
                        </div>
                      </div>
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor='phone' className='p-1' >Moblie Number</label>
                      <input type="text"
                        className='form-control'
                        name="phone"
                        value={state.phone}
                        onChange={(e) => handelChange(e)}
                        required
                        placeholder="Please Enter Mobile Number"
                      />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor='email' className='p-1' >Email</label>
                      <input type="text"
                        className='form-control'
                        name="username"
                        value={state.username}
                        onChange={(e) => handelChange(e)}
                        required
                        placeholder="Please Enter Your Email..."
                      />
                    </div>
                    <div className='form-group p-2'>
                      <label htmlFor="text" className='p-1'>Password</label>
                      <input type="password"
                        className='form-control input'
                        name="pass"
                        value={state.pass}
                        onChange={(e) => handelChange(e)}
                        required
                        placeholder="Please Enter Your Password..." />
                    </div>

                    <div className='form-group p-2'>
                      <label htmlFor="text" className='p-1'>Re-type Password</label>
                      <input type="password"
                        className='form-control input'
                        name="repass"
                        value={state.repass}
                        onChange={(e) => handelChange(e)}
                        required
                        placeholder="Please Enter Your Password..." />
                    </div>
                    <div className='form-group p-2'>
                      <label>
                        <input className="box" type="checkbox" value={check} onChange={(e) => setCheck(e.target.checked)} name="check" /> Remember me
                      </label>
                    </div>
                    <div className='buttons'>
                      <button type="button" className="btn btn-success cancel" onClick={() => navigate("/")}>Cancel</button>
                      <button type="submit" className="btn btn-success login" >Create An Account</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className='col-md-7 right-side image-part'>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}