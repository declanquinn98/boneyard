import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import styles from '../../styles/global.css';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Food = () => {


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
                            Food
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