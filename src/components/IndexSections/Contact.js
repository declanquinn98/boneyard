import * as React from "react";
import { useRef, useEffect, useState, Component } from "react";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import GoogleMap from 'google-map-react';

import fb from "../../assets/images/facebook.png"
import insta from "../../assets/images/insta.png"

import mapStyle from "../../styles/map.js"
import styles from '../../styles/marker.css';

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

export const Contact = () => {


    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                color: offWhite,
                backgroundColor: offBlack
            }}
        >
            <ParallaxLayer
                offset={0.55}
                speed={0.1}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 1,
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
                        <h4
                            style={{
                                fontFamily: "Oswald",
                                fontSize: "2.5vw",
                                marginBottom: 0
                            }}
                        >
                            Open Wed-Sun 6am-2pm
                            <br />
                            0413 442 321
                            <br />
                            hello@boneyardespresso.com <span style={{ fontSize: "1.5vw", color: "red" }}>(or whatever you want the email to be)</span>
                        </h4>

                        <div
                            style={{
                                marginTop: "9%",
                                marginLeft: "17.5%",
                                display: "flex",
                            }}
                        >
                            <a
                                href="https://www.facebook.com/boneyardespresso"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    width: "4%"
                                }}
                            >
                                <img
                                    src={fb}
                                    alt="Facebook"
                                    style={{
                                        width: "100%",
                                        objectFit: "contain"
                                    }}
                                />

                            </a>

                            <a
                                href="https://www.instagram.com/boneyardespresso"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    marginLeft: "4%",
                                    width: "4%",
                                }}
                            >
                                <img
                                    src={insta}
                                    alt="Instagram"
                                    style={{
                                        width: "100%",
                                        objectFit: "contain"
                                    }}
                                />
                            </a>
                        </div>


                        <div
                            style={{
                                width: "100%",
                                height: "25%",
                                marginTop: "auto",
                                backgroundColor: "red"
                            }}
                        >

                        </div>
                    </div>


                    <div
                        style={{
                            flex: 5,
                            display: "flex",
                            flexDirection: "column-reverse",
                        }}
                    >
                        <Map w="100%" h="55%" />
                        <h4
                            style={{
                                fontFamily: "Oswald",
                                textAlign: "center",
                                fontSize: "2.5vw",
                                marginTop: 0,
                                marginBottom: 0
                            }}
                        >
                            1 - 13 Redcliffe Parade,
                            <br />
                            Redcliffe QLD 4020
                        </h4>
                    </div>

                </div>
            </ParallaxLayer>




        </div >
    )
}

const Map = (props) => {

    const center = {
        lat: -27.230883,
        lng: 153.115957
    }

    return (
        <div style={{ height: props.h, width: props.w }}>

            <GoogleMap
                bootstrapURLKeys={{ key: "AIzaSyBSTv5d3daWx5vdROnH9LN0vG6EReHyZeA" }}
                defaultCenter={center}
                defaultZoom={18}
                options={{
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    styles: mapStyle
                }}
            >
                <Marker lat={center.lat} lng={center.lng} text="The Boneyard Espresso" />
            </GoogleMap>

        </div>
    );
}

const Marker = props => {
    return <>
        <div className="pin"></div>
        <div className="pulse"></div>
    </>
}