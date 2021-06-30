import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import styles from '../../styles/global.css';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Menu = () => {


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
            <div
                style={{
                    width: "90%",
                    height: "85%",
                    alignSelf: "center",
                    display: "flex",
                    zIndex: 1
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
                            fontSize: 100,
                            fontFamily: "Oswald",
                            textAlign: "center",
                            marginBottom: 0,
                            marginTop: 0
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
                            justifyContent: "space-between"
                        }}
                    >
                        <div
                            style={{
                                width: "30%",
                                height: "100%",
                                display: 'flex',
                                flexDirection: "column"
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: 50,
                                    fontFamily: "Oswald",
                                    textAlign: "center",
                                    marginBottom: 0,
                                    marginTop: 0
                                }}
                            >
                                The Usual Suspects
                            </h3>

                            <ul
                                style={{
                                    listStyleType: "none",
                                    fontSize: 25
                                }}
                            >
                                <li>Latte</li>
                                <li>Cappuchino</li>
                                <li>Flat White</li>
                                <li>Long Black</li>
                                <li>Hot Chocolate/White</li>
                                <li>Chai Latte</li>
                                <li>Assorted Teas</li>
                            </ul>

                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    fontSize: 30,
                                    fontFamily: "Bebas",
                                }}
                            >
                                <p>SML 4</p>
                                <p>MED 4.5</p>
                                <p>LRG 5</p>
                            </div>
                        </div>

                        <div
                            style={{
                                width: "30%",
                                height: "100%",
                                display: 'flex',
                                flexDirection: "column"
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: 50,
                                    fontFamily: "Oswald",
                                    textAlign: "center",
                                    marginBottom: 0,
                                    marginTop: 0
                                }}
                            >
                                Boneyard Specialties
                            </h3>

                            <ul
                                style={{
                                    listStyleType: "none",
                                    fontSize: 25
                                }}
                            >
                                <li>Mocha</li>
                                <li>White Choc Mocha</li>
                                <li>Hazelnut Mocha</li>
                                <li>Caramel Latte</li>
                                <li>Vanilla Latte</li>
                                <li>Crème Brûlée Latte</li>
                                <li>Dirty Chai Latte</li>
                            </ul>


                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    fontSize: 30,
                                    fontFamily: "Bebas",
                                }}
                            >
                                <p style={{ marginBottom: 0 }}>SML 4.5</p>
                                <p style={{ marginBottom: 0 }}>MED 5</p>
                                <p style={{ marginBottom: 0 }}>LRG 5.5</p>
                            </div>
                            <p
                                style={{
                                    fontSize: 30,
                                    fontFamily: "Bebas",
                                    textAlign: "center"
                                }}
                            >
                                Soy, Almond, Oat, Zymil,<br />Extra Shot, Syrups 0.5
                            </p>



                        </div>

                        <div
                            style={{
                                width: "30%",
                                height: "100%",
                                display: 'flex',
                                flexDirection: "column"
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: 50,
                                    fontFamily: "Oswald",
                                    textAlign: "center",
                                    marginBottom: 8,
                                    marginTop: 0
                                }}
                            >
                                Cold Ones
                            </h3>

                            <ul
                                style={{
                                    listStyleType: "none",
                                    fontSize: 25
                                }}
                            >
                                <li>Iced Latte</li>
                                <li>Iced Vanilla Latte</li>
                                <li>Iced Caramel Latte</li>
                                <li>Iced Long Black</li>
                                <li>Iced Mocha</li>
                                <li>Iced White Mocha</li>
                                <li>Iced Chai Latte</li>
                                <li>Iced Chocolate</li>
                                <li>Cold Brew Black/Latte</li>
                            </ul>

                            <p
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    fontSize: 30,
                                    fontFamily: "Bebas",
                                }}
                            >REG 5.5
                            </p>



                            <ul
                                style={{
                                    listStyleType: "none",
                                    fontSize: 25,
                                    marginTop: 0
                                }}
                            >
                                <li>Milkshakes (Chocolate, Vanilla, Caramel & Strawberry)</li>
                            </ul>

                            <p
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    fontSize: 30,
                                    fontFamily: "Bebas",
                                }}
                            >REG 6
                            </p>



                        </div>

                    </div>
                </div>



                <div
                    style={{
                        flex: 5,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <h3
                        style={{
                            fontSize: 100,
                            fontFamily: "Oswald",
                            marginBottom: 0,
                            marginTop: 0
                        }}
                    >
                        Not Drinks
                    </h3>
                    <div
                        style={{
                            flex: 1,
                            width: "100%",
                            alignSelf: "center",
                            display: "flex",
                            flexDirection: "column",
                            fontSize: 22
                        }}
                    >
                        <p>On Saturday and Sunday at The Boneyard Espresso you will find an assortment of fresh baked bread and pastries delivered daily by <Link href="www.brasseriebread.com.au" text="Brasserie Bread" />.</p>
                        <p>Throughout the week you will find a variety of cookies baked especially for The Boneyard Espresso by <Link href="www.instagram.com/cakesbyjordyn" text="Cakes By Jordyn" />. Make sure to try the blueberry and white chocolate flavour made exclusively for The Boneyard!</p>
                        <p>If cookies and pastries aren’t enough, pop in store on a Friday, Saturday or Sunday to find small batch, slow rise doughnuts fresh from <Link href='www.doughluxedoughnuts.com.au' text="Doughluxe Doughnuts" />. Flavours rotate daily but you'll always find both fruity and chocolately doughnuts on offer.</p>
                        <p>Sugary sweet treats not your thing? Try one of our <Link href="mmmore.com.au" text="MMMORE Raw Treats" /> Power Cubes! Refined sugar free, gluten free and vegan - the perfect healthy snack alongside your coffee.</p>
                    </div>


                </div>

            </div>
        </div>
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

/*
 <div
                        style={{
                            position: "relative",
                            height: "100vh",
                            width: "100vw",
                            backgroundColor: offBlack,
                            display: "flex",
                            justifyContent: "center",
                            color: offWhite,
                        }}
                    >
                        <ParallaxLayer
                            offset={0.275}
                            speed={0.1}
                            config={config.default}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                zIndex: 1
                            }}
                        >

                            <div
                                style={{
                                    width: "75%",
                                    height: "80%",
                                    alignSelf: "center",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >

                                <h3
                                    style={{
                                        fontSize: 100,
                                        fontFamily: "Oswald",
                                        marginBottom: 0,
                                        marginTop: 0
                                    }}>
                                    Coffee
                                </h3>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        fontSize: 30
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "40%",
                                            height: "100%",
                                        }}
                                    >
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


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

                    </div>
                    */