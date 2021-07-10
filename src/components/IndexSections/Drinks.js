import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import styles from '../../styles/global.css';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Drinks = () => {


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
                offset={0.25}
                speed={0.1}
                style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    zIndex: 1
                }}
            >
                <div
                    style={{
                        width: "90%",
                        height: "85%",
                        alignSelf: "center",
                        display: "flex",
                        zIndex: 1,
                    }}
                >

                    <div
                        style={{
                            flex: 12,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "Oswald",
                                textAlign: "center",
                                fontSize: "5vw",
                                marginTop: 0,
                                marginBottom: 0,
                            }}
                        >
                            Drinks
                        </h3>

                        <div
                            style={{
                                flex: 1,
                                width: "95%",
                                alignSelf: "center",
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <div
                                style={{
                                    width: "30%",
                                    height: "100%",
                                    display: 'flex',
                                    flexDirection: "column",
                                }}
                            >

                                <h4
                                    style={{
                                        fontFamily: "Oswald",
                                        textAlign: "center",
                                        fontSize: "2.5vw",
                                        marginTop: 0,
                                        marginBottom: 0
                                    }}
                                >
                                    The Usual<br />Suspects
                                </h4>

                                <p
                                    style={{
                                        fontSize: "1.25vw",
                                        marginLeft: "12.5%"
                                    }}
                                >
                                    Latte
                                    <br />
                                    Cappuchino
                                    <br />
                                    Flat White
                                    <br />
                                    Long Black
                                    <br />
                                    Hot Chocolate/White
                                    <br />
                                    Chai Latte
                                    <br />
                                    Assorted Teas
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        fontSize: "1.5vw",
                                        fontFamily: "Bebas",
                                    }}
                                >
                                    <p style={{ marginTop: 0 }}>SML 4</p>
                                    <p style={{ marginTop: 0 }}>MED 4.5</p>
                                    <p style={{ marginTop: 0 }}>LRG 5</p>
                                </div>

                            </div>
                            <div
                                style={{
                                    width: "30%",
                                    height: "100%",
                                    display: 'flex',
                                    flexDirection: "column",
                                }}
                            >

                                <h4
                                    style={{
                                        fontFamily: "Oswald",
                                        textAlign: "center",
                                        fontSize: "2.5vw",
                                        marginTop: 0,
                                        marginBottom: 0
                                    }}
                                >
                                    Boneyard <br /> Specialties
                                </h4>

                                <p
                                    style={{
                                        fontSize: "1.25vw",
                                        marginLeft: "12.5%"
                                    }}
                                >
                                    Mocha
                                    <br />
                                    White Choc Mocha
                                    <br />
                                    Nutella Mocha
                                    <br />
                                    Caramel Latte
                                    <br />
                                    Vanilla Latte
                                    <br />
                                    Crème Brûlée Latte
                                    <br />
                                    Dirty Chai Latte
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        fontSize: "1.5vw",
                                        fontFamily: "Bebas",
                                    }}
                                >
                                    <p style={{ marginTop: 0 }}>SML 4.5</p>
                                    <p style={{ marginTop: 0 }}>MED 5</p>
                                    <p style={{ marginTop: 0 }}>LRG 5.5</p>
                                </div>

                                <p
                                    style={{
                                        fontSize: "1.5vw",
                                        fontFamily: "Bebas",
                                        textAlign: "center",
                                        marginTop: 0
                                    }}
                                >
                                    Decaf, Soy, Oat, Almond, Zymil, Coconut, <br />  Macadamia, Extra Shot, Syrups 0.5
                                </p>

                                <p
                                    style={{
                                        fontSize: "1.5vw",
                                        fontFamily: "Bebas",
                                        textAlign: "center",
                                        marginTop:"auto"
                                    }}
                                >
                                    Add ice cream to any drink 0.5
                                </p>

                            </div>
                            <div
                                style={{
                                    width: "30%",
                                    height: "100%",
                                    display: 'flex',
                                    flexDirection: "column",
                                }}
                            >

                                <h4
                                    style={{
                                        fontFamily: "Oswald",
                                        textAlign: "center",
                                        fontSize: "2.5vw",
                                        marginTop: 0,
                                        marginBottom: "0.35vw"
                                    }}
                                >
                                    Cold Ones
                                </h4>

                                <p
                                    style={{
                                        fontSize: "1.25vw",
                                        marginLeft: "12.5%"
                                    }}
                                >
                                    Iced Latte
                                    <br />
                                    Iced Vanilla Latte
                                    <br />
                                    Iced Caramel Latte
                                    <br />
                                    Iced Long Black
                                    <br />
                                    Iced Mocha
                                    <br />
                                    Iced White Mocha
                                    <br />
                                    Iced Chai Latte
                                    <br />
                                    Iced Chocolate
                                    <br />
                                    Cold Brew Black/Latte
                                </p>

                                <p style={{
                                    marginTop: 0,
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    fontSize: "1.5vw",
                                    fontFamily: "Bebas",
                                }}
                                >
                                    Reg 5.5
                                </p>

                                <p
                                    style={{
                                        fontSize: "1.25vw",
                                        marginLeft: "12.5%",
                                        marginTop: 0
                                    }}
                                >
                                    Milkshakes (Chocolate, Vanilla, Caramel & Strawberry)
                                </p>

                                <p
                                    style={{
                                        marginTop: 0,
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        fontSize: "1.5vw",
                                        fontFamily: "Bebas",
                                    }}
                                >
                                    Reg 6
                                </p>


                            </div>


                        </div>
                    </div>


                </div>
            </ParallaxLayer>
        </div >
    )
}

const Link = (props) => {

    return (
        <a
            style={{ color: offWhite }}
            href={"https://" + props.href}
            target="_blank"
            rel="noreferrer"
        >
            {props.text}
        </a>
    )
}