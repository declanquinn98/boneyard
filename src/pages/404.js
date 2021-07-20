import * as React from "react"
import Seo from "../components/seo";

const offBlack = "#1f1d1e";
const offWhite = "#f4f4f9";

const NotFoundPage = () => (
    <>
        <Seo title="404: Not found" />
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                color: offWhite,
                backgroundColor: offBlack,
                alignItems: "center",
                fontFamily: "Bebas",
                fontSize: "5vw"
            }}
        >
            <h1>You're lost. <a style={{ color: offWhite }} href={"https://boneyardespresso.com"}> Go home.</a></h1>
        </div>
    </>
)

export default NotFoundPage
