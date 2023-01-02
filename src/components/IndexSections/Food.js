import * as React from "react";
import LazyLoad from 'react-lazy-load';
import { ParallaxLayer } from '@react-spring/parallax';

import bread from "../../assets/images/Food/brasserie.jpg";
import cookies from "../../assets/images/Food/gcCookies.jpg";
import doughnut from "../../assets/images/Food/doughluxe.jpg";
import cube from "../../assets/images/Food/cube1.jpg";

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Food = (props) => {

    const columnSpace = "17.5vw";
    const [fontSize, setFontSize] = React.useState("1.25vw");

    React.useEffect(() => {

        if (props.device === "mobile") {
            setFontSize("3.5vw");
        }
        else if (props.device === "tablet") {
            setFontSize("3vw");
        }

    }, [props.device]);

    const imageHeightLoad = props.height * 3.5;


    if (props.device === "desktop") {
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
                            fontSize: fontSize,
                            alignSelf: "center",
                            pointerEvents: "auto",
                        }}
                    >
                        <div
                            style={{
                                height: "50%",
                                display: "flex",
                                justifyContent: "space-evenly",
                                pointerEvents: "auto",
                            }}
                        >

                            <div
                                style={{
                                    width: columnSpace,
                                    display: "flex",
                                    flexDirection: "column-reverse",
                                    pointerEvents: "auto",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        aspectRatio: "1/1",
                                        pointerEvents: "auto",
                                    }}
                                >
                                    <LazyLoad offset={imageHeightLoad} debounce={false}>
                                        <img
                                            src={bread}
                                            alt="Brasserie Bread"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                pointerEvents: "auto",
                                            }}
                                        />
                                    </LazyLoad>
                                </div>
                            </div>

                            <div style={{ width: columnSpace }} />

                            <div
                                style={{
                                    width: columnSpace,
                                    display: "flex",
                                    flexDirection: "column-reverse",
                                    pointerEvents: "auto"
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        aspectRatio: "1/1",
                                        pointerEvents: "auto"
                                    }}
                                >
                                    <LazyLoad offset={imageHeightLoad} debounce={false}>
                                        <img
                                            src={doughnut}
                                            alt="Doughluxe"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                pointerEvents: "auto"
                                            }}
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div style={{ width: columnSpace }} />
                        </div>

                        <div
                            style={{
                                height: "50%",
                                display: "flex",
                                justifyContent: "space-evenly",
                                pointerEvents: "auto"
                            }}
                        >

                            <div
                                style={{
                                    width: columnSpace,
                                    display: "flex",
                                    flexDirection: "column",
                                    pointerEvents: "auto"
                                }}
                            >
                                <p>On Saturday and Sunday at The Boneyard Espresso you will find an assortment of fresh baked pastries delivered daily by <Link href="www.brasseriebread.com.au" text="Brasserie Bread" />.</p>
                            </div>
                            <div style={{ width: columnSpace }} />
                            <div
                                style={{
                                    width: columnSpace,
                                    display: "flex",
                                    flexDirection: "column",
                                    pointerEvents: "auto"
                                }}
                            >
                                <p>If cookies and pastries aren’t enough, pop in store on a Friday, Saturday or Sunday to find small batch, slow rise doughnuts fresh from <Link href='www.doughluxedoughnuts.com.au' text="Doughluxe Doughnuts" />. Flavours rotate daily but you'll always find both fruity and chocolately doughnuts on offer.</p>
                            </div>
                            <div style={{ width: columnSpace }} />
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
                        pointerEvents: "none"
                    }}
                >
                    <div
                        style={{
                            zIndex: 1,
                            width: "90%",
                            height: "100%",
                            fontSize: fontSize,
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

                            <div style={{ width: columnSpace, pointerEvents: "none" }} />

                            <div
                                style={{
                                    width: columnSpace,
                                    display: "flex",
                                    flexDirection: "column-reverse",
                                    pointerEvents: "auto"
                                }}
                            > <p>Throughout the week you will find a variety of cookies baked by <Link href="www.instagram.com/goldcoastcookies" text="Gold Coast Cookies" />.</p>
                            </div>

                            <div style={{ width: columnSpace, pointerEvents: "none" }} />

                            <div
                                style={{
                                    width: columnSpace,
                                    display: "flex",
                                    flexDirection: "column-reverse",
                                    pointerEvents: "auto"
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

                            <div style={{ width: columnSpace, pointerEvents: "none" }} />

                            <div
                                style={{
                                    width: columnSpace,
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
                                    <LazyLoad offset={imageHeightLoad} debounce={false}>
                                        <img
                                            src={cookies}
                                            alt="Gold Coast Cookies"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                pointerEvents: "auto"
                                            }}
                                        />
                                    </LazyLoad>
                                </div>
                            </div>

                            <div style={{ width: columnSpace, pointerEvents: "none", }} />

                            <div
                                style={{
                                    width: columnSpace,
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
                                    <LazyLoad offset={imageHeightLoad} debounce={false}>
                                        <img
                                            src={cube}
                                            alt="MMMORE Raw Treats"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                pointerEvents: "auto"
                                            }}
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                        </div>

                    </div>
                </ParallaxLayer>
            </div >
        )
    }
    else if (props.device === "mobile" || props.device === "tablet") {
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
                            height: "84%",
                            fontSize: fontSize,
                            alignSelf: "center",
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: "space-evenly",

                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignSelf: "center",
                                width: "100%",
                                height: "20%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    width: "50%",
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        aspectRatio: "1/1",
                                        marginRight:"5vw"
                                    }}
                                >
                                    <LazyLoad offset={imageHeightLoad} debounce={false}>
                                        <img
                                            src={bread}
                                            alt="Brasserie Bread"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div
                                style={{
                                    width: "50%",
                                    height: "100%",
                                    display:"flex"
                                }}
                            >
                                <p
                                    style={{
                                        marginTop: 0,
                                        marginBottom: 0,
                                        alignSelf:"center"
                                    }}
                                >
                                    On Saturday and Sunday at The Boneyard Espresso you will find an assortment of fresh baked pastries delivered daily by <Link href="www.brasseriebread.com.au" text="Brasserie Bread" />.
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignSelf: "center",
                                width: "100%",
                                height: "20%",
                            }}
                        >
                            <div
                                style={{
                                    width: "50%",
                                    height: "100%",
                                    display:"flex"
                                }}
                            >
                                <p
                                    style={{
                                        marginTop: 0,
                                        marginBottom: 0,
                                        textAlign: "right",
                                        alignSelf:"center"
                                    }}
                                > Throughout the week you will find a variety of cookies baked by <Link href="www.instagram.com/goldcoastcookies" text="Gold Coast Cookies" />.</p>
                            </div>
                            <div
                                style={{
                                    width: "50%",
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        aspectRatio: "1/1",
                                        alignSelf: "center",
                                        marginLeft:"5vw"
                                    }}
                                >
                                    <LazyLoad style={{ width: "100%", height: "100%" }} offset={imageHeightLoad} debounce={false}>
                                        <img
                                            src={cookies}
                                            alt="Gold Coast Cookies"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </LazyLoad>
                                </div>
                            </div>

                        </div>


                        <div
                            style={{
                                display: "flex",
                                alignSelf: "center",
                                width: "100%",
                                height: "20%",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection:"row-reverse",
                                    width: "50%",
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        aspectRatio: "1/1",
                                        alignSelf: "center",
                                        marginRight:"5vw"
                                    }}
                                >
                                    <LazyLoad offset={imageHeightLoad} debounce={false}>
                                        <img
                                            src={doughnut}
                                            alt="Doughluxe"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </LazyLoad>
                                </div>
                            </div>
                            <div
                                style={{
                                    width: "50%",
                                    height: "100%",
                                    display:"flex"
                                }}
                            >
                                <p
                                    style={{
                                        marginTop: 0,
                                        marginBottom: 0,
                                        alignSelf:"center"
                                    }}
                                >
                                    If cookies and pastries aren’t enough, pop in store on a Friday, Saturday or Sunday to find small batch, slow rise doughnuts fresh from <Link href='www.doughluxedoughnuts.com.au' text="Doughluxe Doughnuts" />.</p>

                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignSelf: "center",
                                width: "100%",
                                height: "20%",
                            }}
                        >
                            <div
                                style={{
                                    display:"flex",
                                    width: "50%",
                                    height: "100%",
                                }}
                            >
                                <p
                                    style={{
                                        marginTop: 0,
                                        marginBottom: 0,
                                        textAlign: "right",
                                        alignSelf:'center',
                                    }}
                                > 
                                Sugary sweet treats not your thing? Try one of our <Link href="mmmore.com.au" text="MMMORE Raw Treats" /> Power Cubes! Refined sugar free, gluten free and vegan.</p></div>
                            <div
                                style={{
                                    width: "50%",
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        aspectRatio: "1/1",
                                        alignSelf: "center",
                                        marginLeft:"5vw"
                                    }}
                                >
                                    <LazyLoad style={{ width: "100%", height: "100%" }} offset={imageHeightLoad} debounce={false}>
                                        <img
                                            src={cube}
                                            alt="MMMORE Raw Treats"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </LazyLoad>
                                </div>
                            </div>

                        </div>


                    </div>
                </ParallaxLayer>
            </div >
        )
    }
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