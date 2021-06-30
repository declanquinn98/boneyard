import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { Textfit } from 'react-textfit';

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
            <ParallaxLayer
                offset={0.25}
                speed={0.1}
                style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    zIndex:1
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
                                marginBottom: 0
                            }}
                        >
                            Drinks
                        </h3>

                        <div
                            style={{
                                width: "15%",
                                alignSelf: "center"
                            }}
                        >
                        </div>

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
                                    The Usual Suspects
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
                                    Boneyard Specialties
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
                                    Hazelnut Mocha
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
                                    Soy, Almond, Oat, Zymil,<br />Extra Shot, Syrups 0.5
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

                    <div
                        style={{
                            flex: 5,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                         <h3
                            style={{
                                fontFamily: "Oswald",
                                fontSize: "5vw",
                                marginTop: 0,
                                marginBottom: 0
                            }}
                        >
                            Not Drinks
                        </h3>
                        <div
                            style={{
                                fontSize: "1.145vw",
                            }}
                        >
                            <p>On Saturday and Sunday at The Boneyard Espresso you will find an assortment of fresh baked bread and pastries delivered daily by <Link href="www.brasseriebread.com.au" text="Brasserie Bread" />.</p>
                            <p>Throughout the week you will find a variety of cookies baked especially for The Boneyard Espresso by <Link href="www.instagram.com/cakesbyjordyn" text="Cakes By Jordyn" />. Make sure to try the blueberry and white chocolate flavour made exclusively for The Boneyard!</p>
                            <p>If cookies and pastries aren’t enough, pop in store on a Friday, Saturday or Sunday to find small batch, slow rise doughnuts fresh from <Link href='www.doughluxedoughnuts.com.au' text="Doughluxe Doughnuts" />. Flavours rotate daily but you'll always find both fruity and chocolately doughnuts on offer.</p>
                            <p>Sugary sweet treats not your thing? Try one of our <Link href="mmmore.com.au" text="MMMORE Raw Treats" /> Power Cubes! Refined sugar free, gluten free and vegan - the perfect healthy snack alongside your coffee.</p>
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