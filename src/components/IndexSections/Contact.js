import * as React from "react";
import { useRef, useEffect, useState, Component } from "react";
import { config } from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import GoogleMap from 'google-map-react';
import { useStaticQuery, graphql } from "gatsby"

import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

import fb from "../../assets/images/facebook.png"
import insta from "../../assets/images/insta.png"

import mapStyle from "../../styles/map.js"
import styles from '../../styles/marker.css';


const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

const instajson = {
    "data": [
        {
            "media_type": "IMAGE",
            "permalink": "https://www.instagram.com/p/BiiNFxVh_OW/",
            "media_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/31686867_367427683744705_6208149349742936064_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=fFpDGSF9jAoAX-g8qLu&_nc_ht=scontent-syd2-1.cdninstagram.com&oh=e01150d3e9e4484745d62a0380fce915&oe=60E31688",
            "id": "17930853136099183"
        },
        {
            "media_type": "IMAGE",
            "permalink": "https://www.instagram.com/p/BiiNER0BzuG/",
            "media_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/31975899_579558162426588_3435362293586591744_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=ieHqZ1GVzQ4AX9Ob1vt&_nc_ht=scontent-syd2-1.cdninstagram.com&oh=06dd2288baf4a778c2bba648e8f5b76b&oe=60E2307F",
            "id": "17948267479034212"
        },
        {
            "media_type": "IMAGE",
            "permalink": "https://www.instagram.com/p/BiiNCeBBVhq/",
            "media_url": "https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/31412207_203581533583116_4920453601043677184_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=PcbpmQsStcsAX96g4-l&_nc_ht=scontent-syd2-1.cdninstagram.com&oh=035ee1bbcb94c7146ac785e5b5541cf0&oe=60E24F22",
            "id": "17844666418263549"
        }
    ],
    "paging": {
        "cursors": {
            "before": "QVFIUldjUjlhY1NvWGpkcWU2Q3IzXzh1bVcxMDBNRUpCTVdvendNb2wyY0ptcjhHUU1zbjF0Y0kwY1RVaWhnRV9JRjdWMThqYlFmWjVHSi14MGs4MV9KaHdR",
            "after": "QVFIUjUtd0ZA0RHp3X0Q1ZAE1sMVEtOTUxRUhtWjlLMmVHbl9sM0VlTnBhSF9UMWpKQlNBYmFvUTlhZAjFwRzQzY1FfUi1uZA2ttSFVCcmduUDBKalJ2TlN1Xzh3"
        }
    }
};


export const Contact = () => {

    const [instaArray, setInstaArray] = useState([]);

    useEffect(() => {
        FetchInstaFeed();
    }, [])

    const FetchInstaFeed = async () => {

        const url = process.env.INSTAGRAM_URL + "" + process.env.INSTAGRAM_TOKEN

        setInstaArray(instajson);
        /*
        await fetch(url)
            .then(response => response.json())
            .then(json => {
                //Doesnt work on localhost??
                //setInstaArray(json.data);
            });
            */
    }

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
                offset={0.75}
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
                            Open Tuesday - Sunday 7am-2pm
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
                                backgroundColor:"red"
                            }}
                        >
                            <InstagramFeed
                                counter="6"
                                token={process.env.INSTAGRAM_TOKEN}
                            />
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
                            18 Anzac ave,
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