import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={14}
            height={14}
            {...props}
        >
            <Path fill="none" d="M0 0h24v24H0z" />
            <Path
                d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z"
                fill="rgba(255,255,255,1)"
            />
        </Svg>
    )
}

export default SvgComponent
