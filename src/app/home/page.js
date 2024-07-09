import React from 'react';
import Intro from "../../components/Intro";
import Signup from "../../components/SignUp";
import Login from "../../components/Login";

export default function Home() {

    return (
        <div>
            <Intro />
            <Login />
            <Signup />
        </div>
    )
};