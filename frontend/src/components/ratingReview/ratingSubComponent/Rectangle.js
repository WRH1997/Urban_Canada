import React from 'react';
import PropTypes from 'prop-types';
export default function Rectangle(props)
{
    const style1 = {
        width: `${props.width}%`,
        height: `${props.height}%`,
        display:'inline-block' ,
        marginRight:`${props.marginRight}%`, 
        marginLeft:`${props.marginLeft}%`, 
        marginTop:`${props.marginTop}%`
    };
    const style2 = {
       backgroundColor:props.color, 
       width: `${props.fillQuan}%`,
        height: `${props.height}%`,
       display:'inline-block'
    };
    const style3 = {
       backgroundColor:'#999999',
        height: `${props.height}%`, 
        width: `${100-props.fillQuan}%`,
       display:'inline-block'
    };
    return (
        <div className="rectangle" style={style1}><div style={style2}><p></p></div><div style={style3}><p></p></div></div>
    );
}
Rectangle.propTypes={
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    marginTop:PropTypes.string,
    fillQuan:PropTypes.string
}
Rectangle.defaultProps={
    height: "15",
    width: "80",
    color: "#008040",
    marginLeft: "0",
    marginRight:"0",
    marginTop:"0",
    fillQuan: "0"
}
