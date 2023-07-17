import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';
export default function Comment(props)
{
    const style= {
        width:`${props.width}%`,
        height:`${props.height}%` ,
        display:'inline-block'
    };
    const styleText={
        width:'100%',
        height:'100%',
        fontSize:`${props.textSize}px`
    };
    return (<div style={style}><form id="myform"><input className="comment" style={styleText} type="text" ></input></form></div>);
}
Comment.propTypes={
    height: PropTypes.string,
    width: PropTypes.string,
    textSize:PropTypes.string
}
Comment.defaultProps={
    height:"5",
    width:"90",
    textSize:"25"
}