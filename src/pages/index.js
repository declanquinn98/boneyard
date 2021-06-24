import * as React from "react";
import { useState, useRef, createRef, useEffect } from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as THREE from 'three';


import bg from "../assets/images/backgrounds/light.jpg";
import { CremaTitle } from "../components/CremaTitle.js";


const IndexPage = () => {
    /*
    const [yOffset, setYOffset] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    const UpdateScreenDimensions = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    }
    const UpdateYOffset = () => {
        setYOffset(window.pageYOffset);
    }
    useEffect(() => {
        window.addEventListener("scroll", UpdateYOffset);
        window.addEventListener("resize", UpdateScreenDimensions);
        return () => {
            window.removeEventListener("scroll", UpdateYOffset, false);
            window.removeEventListener("resize", UpdateScreenDimensions, false);
        };
    }, []);



    */

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                margin:0
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100vh",
                    width: "100vw",
                    maxWidth: "100%",
                    display: "flex",
                    backgroundImage: 'url(' + bg + ')',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <CremaTitle />
            </div>
            <div
                style={{
                    height: "100vh",
                    backgroundColor: "red",
                }}
            />
        </div>
    )
}

export default IndexPage
