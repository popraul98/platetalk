import React, {useEffect, useState} from "react";
import {GET_ALL_POSTS} from "../../../config/endpoints.js";
import axios from "axios";
import {useSelector} from "react-redux";
import {selectTokens, selectUser} from "../../../store/userSlice.js";
import CountySelector from "./CountySelector.jsx";

const Home = () => {

    const userData = useSelector(selectUser)
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetchPosts()

        import('flowbite').then((module) => {
            const {initFlowbite} = module;
            initFlowbite();
        });
    }, []);

    const fetchPosts = async () => {
        await axios.get(GET_ALL_POSTS, {
            headers: {
                'X-API-KEY': import.meta.env.VITE_API_KEY,
            },
        }).then(function (response) {
            setPosts(response.data.data)
        }).catch(function (error) {
            console.log(error.response.status, 'error show posts')
        });
    }

    return (
        <main role="main" className="w-full flex-grow px-1 md:py-10">
            <div className="max-w-md px-4 sm:px-0">

                <form className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows="4"
                                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                  placeholder="Write a post..." required></textarea>
                    </div>
                    <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-1 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-blue-800">
                        Adauga o postare
                    </button>
                </form>
                
                <CountySelector/>
                
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {posts.length > 0 ? posts.map((post) => (
                        <li className="" key={post.id}>
                            <article className="py-6 text-base rounded-lg">
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                            <img
                                                className="mr-2 w-8 h-8 rounded-full"
                                                src={`http://localhost:8000/storage/${post.user.profile_image}`}
                                                alt="Michael Gough"/>
                                            {post.user.name}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            <time dateTime="2022-02-08" title="February 8th, 2022">{post.created}</time>
                                        </p>
                                    </div>
                                    <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            type="button">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor" viewBox="0 0 16 3">
                                            <path
                                                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                        </svg>
                                        <span className="sr-only">Comment settings</span>
                                    </button>
                                    <div id="dropdownComment1"
                                         className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#"
                                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {post.content}
                                </p>
                                <div className="flex justify-between items-center mt-4 space-x-4">
                                    <div className="flex gap-6">
                                        <div className="flex gap-1">
                                            <button type="button"
                                                    className="cursor-pointer flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                                                <svg className="w-[19px] h-[19px] text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                                </svg>
                                            </button>
                                            {post.likes_count}
                                        </div>
                                        <button type="button"
                                                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                                            <svg className="mr-1.5 w-4 h-4" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                                            </svg>
                                            Reply
                                        </button>
                                    </div>
                                    <div className="codepen-wrapper text-black float-right">
                                        <span className="registration-ui">{post.number_plate.number}</span>
                                    </div>
                                </div>
                            </article>
                        </li>
                    )) : null}
                </ul>
            </div>
        </main>
    );
};

export default Home;