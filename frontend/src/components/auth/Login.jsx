import React from 'react';

import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Link, useNavigate} from 'react-router-dom';

import {LOGIN} from "../../config/endpoints.js";
import axios from "axios";

import {useSelector, useDispatch} from 'react-redux'
import {login, authorization, selectUser} from '../../store/userSlice.js'

const Login = () => {

    const userData = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
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
            const res = await axios.post(LOGIN, values, {
                headers: {
                    'X-API-KEY': import.meta.env.VITE_API_KEY,
                },
            }).then(response => {
                    dispatch(login({
                        user: response.data.user,
                    }));
                    dispatch(authorization({
                        access_token: response.data.token,
                    }));
                }
            ).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data.message, 'error00');
                    formik.values.error_messages = error.response.data.message;
                }
                console.log(formik.values.error_messages, 'error_messages');

            })
        },
    });

    React.useEffect(() => {
        if (userData) {
            navigate("/")
        }
    });

    return (

        <section className="h-full w-full flex items-center justify-center">

            <div className="w-full max-w-md p-6 space-y-4 md:space-y-6 sm:p-8">

                <div className="rounded-lg">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
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
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div>{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-blue-500 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-400">
                                Don’t have an account yet?{' '}
                                <Link to="/register" className="font-medium text-blue-500 hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;