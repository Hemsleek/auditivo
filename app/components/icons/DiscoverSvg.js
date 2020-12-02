import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 40 50"

            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M26.46 10.38c.5 1.07 5.53 11.36 1.22 10.54C23.38 20.1 17 7.56 17.8 0c0 0-8.14 6.08-6.64 15.02 1.5 8.94 3.63 15.54-2 15.32-5.66-.22-2.44-7.1-1.26-10.4-9.42 5.57-8 14.9-7.55 18 .38 2.57 1.57 8.57 8 11 9.8 2.15 13.64-14.08 13.3-19.52 2.67 3.15 4.4 7.57 4.05 10.5-.7 5.7-5.5 10.22-.9 9.72 6.95-.76 12.07-4.12 13.98-12.7 2.08-9.36-.3-20.86-12.32-26.56"

                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h39.45v49.68H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default SvgComponent