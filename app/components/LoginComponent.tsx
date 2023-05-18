import { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { LoginAPI } from "~/firebase/authClient"




export default function LoginComponent () {
    return (
        <Form method="post" action="/login">
            <div className="login-wrapper">
                
                <div className="login-wrapper-inner">
                    <h1 className="heading">Sign in</h1>
                    <p className="sub-heading">Stay updated on your professional world</p>

                    <div className="auth-inputs">
                        <input
                        
                        type="email"
                        name="email"
                        className="common-input"
                        placeholder="jaehyu@hotmail.com"
                        />
                        <input
                        type="password"
                        name="password"
                        className="common-input"
                        placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        Sign in
                    </button>
                </div>
            </div>
        </Form>

      )
}