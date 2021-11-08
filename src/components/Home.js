import React from "react";

const Home = ({user}) => {
    console.log("user in home page", user)
    return <>
        <h1>Welcome to the Programming Kicks</h1>
        {/* {
            user && <h3>You are logged in as {user}</h3>
        } */}
    </>
}

export default Home;