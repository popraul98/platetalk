import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../store/userSlice.js";

const Navbar = () => {

    const userData = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login")
    };

    useEffect(() => {
        import('flowbite').then((module) => {
            const {initFlowbite} = module;
            initFlowbite();
        });
    }, []);

    return (
        <nav className="fixed top-0 z-50  bg-gray-800 bg-transparent sm:hidden">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        {/* Buton hamburger pentru sidebar pe mobil */}
                        <button
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg sm:hidden hover:bg-gray-700 "
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd"
                                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <Link to="/home" className="flex ms-2 md:me-24">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8 me-3"
                                alt="Flowbite Logo"
                            />
                            <span
                                className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                PlateTalk
              </span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <div>
                                <button
                                    type="button"
                                    className="flex text-sm bg-transparent"
                                    aria-expanded="false"
                                    data-dropdown-toggle="dropdown-user"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    {userData ? (
                                        <img
                                            className="w-8 h-8 rounded-md object-cover"
                                            src={`http://localhost:8000/storage/${userData.user.profile_image}`}
                                            alt="user photo"
                                        />
                                    ) : (
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src={`http://localhost:8000/storage/profile_images/profile_pic_placeholder.jpg`}
                                            alt="user photo"
                                        />
                                    )}
                                </button>
                            </div>
                            <div className="z-50 hidden my-4 text-base list-none bg-gray-700 divide-y divide-gray-600 rounded-sm shadow-sm" id="dropdown-user">
                                {userData && (
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-white" role="none">
                                            {userData.user.name}
                                        </p>
                                        <p className="text-sm font-medium text-gray-300 truncate" role="none">
                                            {userData.user.email}
                                        </p>
                                    </div>
                                )}
                                <ul className="py-1" role="none">
                                    {!userData ? (
                                        <>
                                            <li>
                                                <Link
                                                    to="/login"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Sign In
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/register"
                                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                                                    role="menuitem"
                                                >
                                                    Register
                                                </Link>
                                            </li>
                                        </>
                                    ) : (
                                        <li>
                                            <button
                                                onClick={handleLogout}
                                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                                                role="menuitem"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    )}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;