import React from 'react';
import PropTypes from 'prop-types';
export default function String(props)
{
    const styles={
        display:'inline-block',
        color:props.color,
        fontSize:`${props.textSize}%`,
        backgroundColor:props.bgColor,
        fontWeight:props.bold,
         marginRight:`${props.marginRight}%`, 
        marginLeft:`${props.marginLeft}%`, 
        marginTop:`${props.marginTop}%`
        
    }
    
    return(
        <div style={styles}>{props.text}</div>
    );
}
String.propTypes=
{
    color: PropTypes.string,
    text:PropTypes.string,
    textSize: PropTypes.string,
    bgColor: PropTypes.string,
    bold:PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    marginTop:PropTypes.string
}
String.defaultProps=
{
    color: "black",
    text: "Default Text",
    textSize: "100",
    bgColor:"none",
    bold:"normal",
     marginLeft: "0",
    marginRight:"0",
    marginTop:"0"
}