import React from "react";
import Signin from "../components/Signin/Signin";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


function SigninPage() {
    return (
        <div>
            <Navbar/>
            <Signin />
            
            <Footer />
        </div>
    );
}

export default SigninPage;
