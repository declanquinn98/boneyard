import * as React from "react";
import { useState } from "react";
import { ParallaxLayer } from '@react-spring/parallax';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Drinks = (props) => {

    const [t1Size, setT1Size] = useState("2.5vw");
    const [t2Size, setT2Size] = useState("1.5vw");
    const [pSize, setPSize] = useState("1.25vw");
    const [columnSpace, setColumnSpace] = useState("75%");

    React.useEffect(() => {

        if (props.device === "mobile") {
            setT1Size("6.25vw");
            setT2Size("4.25vw");
            setPSize("3.25vw");
            setColumnSpace("95%")
        }
        else if (props.device === "tablet") {
            setT1Size("5vw");
            setT2Size("3vw");
            setPSize("2.5vw");
            setColumnSpace("95%")
        }

    }, [props.device]);


    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                textShadow: "0px 0px 25px rgba(0,0,0,1)",
                color: offWhite,
                backgroundColor: offBlack,
                fontSize: t2Size
            }}
        >
            <ParallaxLayer
                offset={0.25}
                speed={0.1}
                style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        zIndex: 1,
                        width: columnSpace,
                        height: "70%",
                        display: "flex",
                        alignSelf: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            alignSelf: "center",
                            justifyContent: "space-between",
                        }}
                    >

                        <div
                            style={{
                                width: "30%",
                                display: 'flex',
                                flexDirection: "column",
                            }}
                        >

                            <h4
                                style={{
                                    fontFamily: "Oswald",
                                    textAlign: "center",
                                    fontSize: t1Size,
                                    marginTop: 0,
                                    marginBottom: 0
                                }}
                            >
                                The Usual<br />Suspects
                            </h4>

                            <p
                                style={{
                                    fontSize: pSize,
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
                                display: 'flex',
                                flexDirection: "column",
                            }}
                        >
                            <h4
                                style={{
                                    fontFamily: "Oswald",
                                    textAlign: "center",
                                    fontSize: t1Size,
                                    marginTop: 0,
                                    marginBottom: 0
                                }}
                            >
                                Boneyard <br /> Specialties
                            </h4>

                            <p
                                style={{
                                    fontSize: pSize,
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
                                    fontFamily: "Bebas",
                                }}
                            >
                                <p style={{ marginTop: 0 }}>SML 4.5</p>
                                <p style={{ marginTop: 0 }}>MED 5</p>
                                <p style={{ marginTop: 0 }}>LRG 5.5</p>
                            </div>

                            <p
                                style={{
                                    fontFamily: "Bebas",
                                    textAlign: "center",
                                    marginTop: 0
                                }}
                            >
                                Decaf, Soy, Oat, Almond, Zymil, Coconut, <br />  Macadamia, Extra Shot, Syrups 0.5
                            </p>

                            <p
                                style={{
                                    fontFamily: "Bebas",
                                    textAlign: "center",
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
                                    fontSize: t1Size,
                                    marginTop: 0,
                                    marginBottom: "0.35vw"
                                }}
                            >
                                Cold Ones
                            </h4>

                            <p
                                style={{
                                    fontSize: pSize,
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
                                fontFamily: "Bebas",
                            }}
                            >
                                Reg 5.5
                            </p>

                            <p
                                style={{
                                    fontSize: pSize,
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
                                    fontFamily: "Bebas",
                                }}
                            >
                                Reg 6
                            </p>


                        </div>

                    </div>
                </div>

            </ParallaxLayer>
        </div >
    )
}