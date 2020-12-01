import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={7}
            height={7}
            viewBox="0 0 32 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1.79 35A1.79 1.79 0 010 33.21V1.866C0 .876.802.076 1.79.076l29.104 16.118s1.344 1.343 0 2.686C29.55 20.225 1.79 35 1.79 35z"
                fill="orange"
            />
        </Svg>
    )
}

export default SvgComponent