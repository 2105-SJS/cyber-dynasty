import React from "react"
import { callApi } from "./util"

const Test = () => {
    
    return (
        <button onClick = { async() => {
                try {
                  const user = await callApi({ 
                  url: '/users/register',
                  method: "POST",
                  body: {
                      firstName: "Xavier",
                      lastName: "Florex",
                      email: "Xavier514@gmail.com",
                      username: "Xavier514",
                      password: "xavierXavier"
                  } });
                  console.log(user, "it worked");
                //   if (user) {
                //     // localStorage.setItem("token", token);
                //     // setToken(user.token);
                //     // setUser(user.username);
                //   }
                } catch (error) {
                  console.error(error);
                }

        }}>Register</button>
    )


}

export default Test;