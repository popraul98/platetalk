import {Routes, Route, useLocation, Link} from "react-router-dom";
import React, {useState} from "react";

import Home from "./components/pages/home/Home.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import LandingPage from "./components/layout/LandingPage.jsx";
import SideRight from "./components/layout/SideRight.jsx";
import Footer from "./components/layout/Footer.jsx";
import MyProfile from "./components/pages/profile/MyProfile.jsx";
import LeftMenu from "./components/menu/LeftMenu.jsx";
import MobileMenu from "./components/menu/MobileMenu.jsx";
import AuthMiddleware from "./components/auth/AuthMiddleware.jsx"; // dacă ai

function App() {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const noLayoutRoutes = ["/login", "/register"];
    const isLayoutVisible = !noLayoutRoutes.includes(location.pathname);

    return (
        <>
            {isLayoutVisible ? (
                <div className="pt-20 sm:pt-1 app-content w-full max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
                    {/*<svg className="background-pattern" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <defs>*/}
                    {/*        <pattern id="dot-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">*/}
                    {/*            <circle cx="5" cy="5" r="1" fill="#60a5fa"/>*/}
                    {/*        </pattern>*/}
                    {/*        <pattern id="line-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">*/}
                    {/*            <path d="M0 50 H100 M50 0 V100" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3"/>*/}
                    {/*        </pattern>*/}
                    {/*    </defs>*/}
                    {/*    <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)"/>*/}
                    {/*    <rect x="0" y="0" width="100%" height="100%" fill="url(#line-pattern)"/>*/}
                    {/*</svg>*/}
                    <Navbar/>
                    <LeftMenu/>
                    <MobileMenu/>
                    
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/profile"
                               element={
                                   <AuthMiddleware>
                                       <MyProfile/>
                                   </AuthMiddleware>
                               }
                        />
                    </Routes>
                    {/*<SideRight/>*/}
                </div>
            ) : (

                <div className="pt-16 min-h-screen flex justify-center items-center px-4">
                    <div className="w-full max-w-md">
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                        </Routes>
                        <div className="mt-10 flex justify-center">
                            <Link
                                to="/home"
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <svg
                                    className="w-5 h-5 transform scale-x-[-1]"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                                <span className="sr-only">Back</span>
                            </Link>
                        </div>

                    </div>
                </div>
            )}
            <footer className="bg-gray-900 mt-auto">
                <Footer/>
            </footer>
        </>
    );
}

export default App;
