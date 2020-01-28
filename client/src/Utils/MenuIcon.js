import React from 'react'
import { animated, useSpring, config } from 'react-spring'

const openedTransformationConfig = {
    top: 'translate(2, 7) rotate(0)',
    center: 'translate(2, 19) rotate(0)',
    bottom: 'translate(2, 31) rotate(0)',
    color: 'rgb(0,0,0)', // Add color
}

const closedTransformationConfig = {
    top: 'translate(5, 32) rotate(-45)',
    center: 'translate(10, 4) rotate(45)',
    bottom: 'translate(5, 32) rotate(-45)',
    color: 'rgb(0,0,0)', // Add color
}

const  MenuIcon = (props) => {
    const { top, center, bottom, color } = useSpring({
        to: props.isOpened ? closedTransformationConfig : openedTransformationConfig,
        config: config.stiff,
    })
    return (
        <div onClick={props.showNav} style={{zIndex: "1", display: props.isMobile ? "block" : "none" }}>
            <animated.svg width="44" height="44" viewBox="0 0 44 44" fill={color} xmlns="http://www.w3.org/2000/svg">
                <animated.rect width="40" height=".4em" rx="3" transform={top} />
                <animated.rect width="40" height=".4em" rx="3" transform={center} />
                <animated.rect width="40" height=".4em" rx="3" transform={bottom} />
            </animated.svg>
        </div>
    )
}
export default MenuIcon