import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="p-5 text-white mx-auto">
            <h1 className="text-2xl">Footer</h1>
            <div className="flex">
                <div className="flex-grow flex flex-col">
                    <a href="/#home">Boom</a>
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                </div>
                <div className="flex-grow flex flex-col">
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                </div>
                <div className="flex-grow flex flex-col">
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                </div>
                <div className="flex-grow flex flex-col">
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                    <a href="#">Boom</a>
                </div>
            </div>
            <div className="text-right text-xs py-4">
                <a href="">&copy;2021 Someco Inc.</a>
            </div>
        </div>
    );
};

export default Footer;
