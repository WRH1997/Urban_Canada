import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';
export default function Button(props)
{
   
    const styleDiv={
        display:'inline-block',
        width: `${props.width}%`,
        height: `${props.height}%`,
        marginLeft:`${props.mL}%`,
    };
    const styleBut={
         width: '100%',
        height: '100%',
        fontSize:`${props.textSize}%`,
        fontFamily: "Monaco"
    };
    return (
        <div style={styleDiv}><button style={styleBut}  className="but" id={props.id} onClick={props.onClick}>{props.text}</button></div>
    );

    
}
Button.propTypes=
{
    textSize: PropTypes.string,
    height:PropTypes.string,
    width:PropTypes.string,
    text:PropTypes.string,
    id:PropTypes.string,
    mL:PropTypes.string,
    handle:PropTypes.bool,
    onClick:PropTypes.string,
}
Button.defaultProps={
    textSize: "100",
    height:"100",
    width:"100",
    text:"Default Text",
    id:"mybut",
    mL:"0",
    handle:false,
    onClick:"noCall",
}