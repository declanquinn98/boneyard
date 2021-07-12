import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ParallaxLayer } from '@react-spring/parallax';

import bread from "../../assets/images/Food/bread.jpg";
import cookies from "../../assets/images/Food/cookies.jpg";
import doughnut from "../../assets/images/Food/doughluxe.jpg";
import cube from "../../assets/images/Food/cube1.jpg";

import styles from '../../styles/global.css';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Food = () => {


    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                color: offWhite,
                backgroundColor: offBlack,
                textShadow: "0px 0px 25px rgba(0,0,0,1)"
            }}
        >
            <ParallaxLayer
                offset={0.72}
                speed={0.18}
                style={{
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        zIndex: 1,
                        width: "90%",
                        height: "100%",
                        fontSize: "1.25vw",
                        alignSelf: "center",
                    }}
                >
                    <div
                        style={{
                            height: "50%",
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >

                        <div
                            style={{
                                width: "17.5%",
                                display: "flex",
                                flexDirection: "column-reverse",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "1/1"
                                }}
                            >
                                <img
                                    src={bread}
                                    alt="Brasserie Bread"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ width: "17.5%" }} />

                        <div
                            style={{
                                width: "17.5%",
                                display: "flex",
                                flexDirection: "column-reverse",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "1/1"
                                }}
                            >
                                <img
                                    src={doughnut}
                                    alt="Doughluxe"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{ width: "17.5%" }} />
                    </div>

                    <div
                        style={{
                            height: "50%",
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >

                        <div
                            style={{
                                width: "17.5%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <p>On Saturday and Sunday at The Boneyard Espresso you will find an assortment of fresh baked bread and pastries delivered daily by <Link href="www.brasseriebread.com.au" text="Brasserie Bread" />.</p>
                        </div>
                        <div style={{ width: "17.5%" }} />
                        <div
                            style={{
                                width: "17.5%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <p>If cookies and pastries aren’t enough, pop in store on a Friday, Saturday or Sunday to find small batch, slow rise doughnuts fresh from <Link href='www.doughluxedoughnuts.com.au' text="Doughluxe Doughnuts" />. Flavours rotate daily but you'll always find both fruity and chocolately doughnuts on offer.</p>
                        </div>
                        <div style={{ width: "17.5%" }} />
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={-0.9}
                speed={-0.18}
                style={{
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        zIndex: 1,
                        width: "90%",
                        height: "100%",
                        fontSize: "1.25vw",
                        alignSelf: "center",
                    }}
                >

                    <div
                        style={{
                            height: "50%",
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >

                        <div style={{ width: "17.5%" }} />

                        <div
                            style={{
                                width: "17.5%",
                                display: "flex",
                                flexDirection: "column-reverse",
                            }}
                        > <p>Throughout the week you will find a variety of cookies baked especially for The Boneyard Espresso by <Link href="www.instagram.com/cakesbyjordyn" text="Cakes By Jordyn" />. Make sure to try the blueberry and white chocolate flavour made exclusively for The Boneyard!</p>
                        </div>

                        <div style={{ width: "17.5%" }} />

                        <div
                            style={{
                                width: "17.5%",
                                display: "flex",
                                flexDirection: "column-reverse",
                            }}
                        >
                            <p>Sugary sweet treats not your thing? Try one of our <Link href="mmmore.com.au" text="MMMORE Raw Treats" /> Power Cubes! Refined sugar free, gluten free and vegan - the perfect healthy snack alongside your coffee.</p>
                        </div>
                    </div>

                    <div
                        style={{
                            height: "50%",
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >

                        <div style={{ width: "17.5%" }} />

                        <div
                            style={{
                                width: "17.5%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "1/1"
                                }}
                            >
                                <img
                                    src={cookies}
                                    alt="Cakes By Jordyn"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ width: "17.5%" }} />

                        <div
                            style={{
                                width: "17.5%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "1/1"
                                }}
                            >
                                <img
                                    src={cube}
                                    alt="MMMORE Raw Treats"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
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