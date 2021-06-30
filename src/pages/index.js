import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { CremaTitle } from "../components/CremaTitle.js";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

import { Arrow } from "../components/Arrow.js";
import { Menu } from "../components/IndexSections/Menu.js";
import styles from '../styles/global.css';
import landingBG from "../assets/images/backgrounds/espressoBlack.jpg";
import cookiesBG from "../assets/images/backgrounds/cookies.jpg";
import keepcupBG from "../assets/images/backgrounds/keepcup.jpg";
import outsideBG from "../assets/images/backgrounds/outside.jpg";


/*
https://codepen.io/manelroig/pen/rJMVRO
https://codepen.io/GioAc96/pen/QarEQM
https://codepen.io/Podgro/pen/GoRyZV
https://codepen.io/raf187/pen/BvgGRQ
*/


const IndexPage = () => {

    const offBlack = "#1f1d1e";
    const offWhite = "#f4f4f9";
    const green = "#5d9835";
    const orange = "#f2a541";
    const red = "#db4451"; //3b0d11

    const parallax = useRef(null);
    const ScrollTo = (page) => {
        parallax.current.scrollTo(page);
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                fontFamily: "Playfair"
            }}
        >

            <Parallax
                pages={6.5}
                config={config.fast}
                ref={parallax}
                style={{
                    top: 0,
                    left: 0,
                }}
            >

                <ParallaxLayer offset={0}>
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundImage: 'url(' + landingBG + ')',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            position: "relative",
                            zIndex: -2,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <CremaTitle />
                        <div
                            style={{
                                position: "absolute",
                                width: "5vh",
                                height: "5vh",
                                bottom: "2.5vh",
                                zIndex: 2,
                            }}
                            onClick={() => ScrollTo(1)}
                        >
                            <Arrow
                                up={false}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    style={{
                        display:"flex",
                        justifyContent:'center'
                    }}
                >

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
                            offset={0.125}
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
                                    Let Us Explain
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
                                        <p> There's a cool record store and a cool coffee shop next door. IDK, whatever you want to put here Ruby. filler---> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


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

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2
                            style={{
                                color: orange,
                                fontSize: 400,
                                fontFamily: "Bebas",
                                alignSelf: "center",
                                position: "relative",
                                left: "-45%",
                                opacity: "50%"
                            }}
                        >
                            HELLO
                        </h2>
                    </ParallaxLayer>



                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            top: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(0)}
                    >
                        <Arrow
                            up={true}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            bottom: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(2.5)}
                    >
                        <Arrow
                            up={false}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>




                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.85}
                    speed={0.15}
                    style={{
                        zIndex: -1
                    }}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundImage: 'url(' + cookiesBG + ')',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    <Menu/>
                   
                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2
                            style={{
                                color: red,
                                fontSize: 400,
                                fontFamily: "Bebas",
                                alignSelf: "center",
                                position: "absolute",
                                left: "-195%",
                                opacity: "25%"
                            }}
                        >
                            MENU
                        </h2>
                    </ParallaxLayer>

                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            top: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(1)}
                    >
                        <Arrow
                            up={true}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            bottom: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(4)}
                    >
                        <Arrow
                            up={false}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>


                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.35}
                    speed={0.15}
                    style={{
                        zIndex: -1
                    }}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundImage: 'url(' + keepcupBG + ')',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                >

                    <div
                        style={{
                            position: "relative",
                            height: "100vh",
                            width: "100vw",
                            color: offWhite,
                            backgroundColor: offBlack,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <ParallaxLayer
                            offset={0.5}
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
                                    We like this planet
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

                    </div>

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2
                            style={{
                                color: green,
                                fontSize: 230,
                                fontFamily: "Bebas",
                                alignSelf: "center",
                                position: "absolute",
                                left: "-360%",
                                opacity: "50%"
                            }}
                        >
                            SUSTAINABILITY
                        </h2>
                    </ParallaxLayer>



                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            top: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(2.5)}
                    >
                        <Arrow
                            up={true}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            bottom: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(5.5)}
                    >
                        <Arrow
                            up={false}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>



                </ParallaxLayer>

                <ParallaxLayer
                    offset={4.85}
                    speed={0.15}
                    style={{
                        zIndex: -1
                    }}
                >
                    <div
                        style={{
                            height: "100vh",
                            width: "100vw",
                            backgroundImage: 'url(' + outsideBG + ')',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={5.5}
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            height: "100vh",
                            width: "100vw",
                            color: offWhite,
                            backgroundColor: offBlack,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <ParallaxLayer
                            offset={0.6}
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
                                    Contact
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

                    <ParallaxLayer
                        speed={-1}
                        horizontal
                        style={{
                            display: "flex",
                        }}
                    >
                        <h2
                            style={{
                                color: offWhite,
                                fontSize: 250,
                                fontFamily: "Bebas",
                                alignSelf: "center",
                                position: "absolute",
                                left: "-505%",
                                opacity: "20%"
                            }}
                        >
                            FIND US
                        </h2>
                    </ParallaxLayer>




                    <div
                        style={{
                            position: "absolute",
                            width: "5vh",
                            height: "5vh",
                            top: "2.5vh",
                            zIndex: 2,
                        }}
                        onClick={() => ScrollTo(4)}
                    >
                        <Arrow
                            up={true}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>


                </ParallaxLayer>

            </Parallax>


        </div>
    )

}


export default IndexPage