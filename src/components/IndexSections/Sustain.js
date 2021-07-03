import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import styles from '../../styles/global.css';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Sustain = () => {


    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                textShadow: "0px 0px 25px rgba(0,0,0,1)",
                color: offWhite,
                backgroundColor: offBlack
            }}
        >
            <ParallaxLayer
                offset={0.5}
                speed={0.1}
                style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    zIndex: 2,
                }}
            >
                <div
                    style={{
                        width: "90%",
                        height: "85%",
                        alignSelf: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <h3
                        style={{
                            fontSize: "5vw",
                            fontFamily: "Oswald",
                            marginBottom: 0,
                            marginTop: 0
                        }}
                    >
                        We like this planet
                    </h3>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            fontSize: "1.5vw",
                        }}
                    >
                        <div
                            style={{
                                width: "40%",
                                height: "100%",
                            }}
                        >
                            <p>Again up to you obviously what goes here. Something about the keepcup discount and advertising the fonzie abbot cups I assume. filler---> I Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div
                            style={{
                                width: "5%",
                            }}
                        />

                        <div
                            style={{
                                width: "40%",
                                height: "100%",
                            }}
                        >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                    </div>

                            



                </div>
            </ParallaxLayer>
        </div >
    )
}