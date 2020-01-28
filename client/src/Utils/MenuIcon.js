import React from 'react'
import { animated, useSpring, config } from 'react-spring'

const openedTransformationConfig = {
    top: 'translate(2, 7) rotate(0)',
    center: 'translate(2, 19) rotate(0)',
    bottom: 'translate(2, 31) rotate(0)',
    color: 'rgba(0,0,0, .9)', // Add color
}

const closedTransformationConfig = {
    top: 'translate(2, 19) rotate(0)',
    center: 'translate(2, 19) rotate(0)',
    bottom: 'translate(2, 19) rotate(0)',
    color: 'rgba(0,0,0, .4)', // Add color
}

const  MenuIcon = (props) => {
    const { top, center, bottom, color } = useSpring({
        to: props.isOpened ? closedTransformationConfig : openedTransformationConfig,
        config: config.stiff,
    })
    return (
        <div onClick={props.showNav} style={{zIndex: "1", display: props.isMobile ? "block" : "none" }}>
            <animated.svg width="62" height="25" viewBox="0 0 44 35" fill={color} xmlns="http://www.w3.org/2000/svg" style={{marginTop: ".5em", marginLeft: "-10px",}}>
                <animated.rect width="58" height=".2em" rx="3" transform={top}/>
                <animated.rect width="58" height=".2em" rx="3" transform={center} />
                <animated.rect width="58" height=".2em" rx="3" transform={bottom} />
            </animated.svg>
        </div>
    )
}
export default MenuIcon