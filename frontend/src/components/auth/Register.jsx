import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {authorization, login, selectUser} from "../../store/userSlice.js";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {

    const userData = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirm_password: '',
            term_and_cond: 0,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
        }),
        onSubmit: async values => {
            // const res = await axios.post(LOGIN, values)
            //     .then(response => {
            //             dispatch(login({
            //                 user: response.data.user,
            //             }));
            //             dispatch(authorization({
            //                 access_token: response.data.token,
            //             }));
            //         }
            //     ).catch(function (error) {
            //         if (error.response) {
            //             console.log(error.response.data.message, 'error00');
            //             formik.values.error_messages = error.response.data.message;
            //         }
            //         console.log(formik.values.error_messages, 'error_messages');
            //
            //     })
        },
    });

    React.useEffect(() => {
        if (userData) {
            navigate("/login")
        }
    });
    
    return (
        <section className="h-full w-full flex items-center justify-center">

            <div className="w-full max-w-md p-6 space-y-4 md:space-y-6 sm:p-8">

                <div className="rounded-lg">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                    required
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-300">
                                        I accept the{' '}
                                        <a className="font-medium text-blue-500 hover:underline" href="#">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-400">
                                Already have an account?{' '}
                                <Link to="/login" className="font-medium text-blue-500 hover:underline">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
        
    );
};

export default Register;