import React from 'react'

export default function Login(props) {
  return (
    <div className="content-area">
        <div className="login-bg access-login"></div>

        <div className="container login-area">
        <div className="section">

            <h3 className="bot-20 center">Login</h3>
            {/* <h5 class="bot-20 sec-tit  ">Login</h5> */}

            <div className="row">

            <div className="input-field col s10 offset-s1">
                <input id="email311" type="email" className="validate" />
                <label for="email311">Email</label>
            </div>

            </div>

            <div className="row">

            <div className="input-field col s10 offset-s1">
                <input id="pass311" type="password" className="validate"/>
                <label for="pass311">Password</label>
            </div>

            </div>    
        <div className="row center">
        <a className="waves-light waves-light btn-large bg-primary lighten-2 white-text" onClick={props.logIn}>Login</a>
        
        <div className="spacer"></div>
        <div className="links">

            <a href="#" className='black-text'>Forgot Password</a><span className="sep black-text">|</span><a href="#" className='black-text'>Register</a>  </div>

            <div className="spacer"></div>
    
        </div>
        </div>
        </div>
    </div>
  )
}
