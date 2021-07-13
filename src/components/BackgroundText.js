import * as React from "react";

export const BackgroundText = (props) => {

    const fontSize = props.sus ? "25vw" : props.size ? props.size : "30vw";

    return (
        <h2
            style={{
                position: "absolute",
                color: props.color,
                fontFamily: "Stereofidelic",
                fontSize: fontSize,
                alignSelf: "center",
                opacity: "50%"
            }}
        >
            {props.text}
        </h2>
    )
}