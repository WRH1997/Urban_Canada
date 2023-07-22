import React from 'react';
import PropTypes from 'prop-types';

export default function ImageSpecific(props)
{
  const images={
    width: `${props.width}%`,
    height: `${props.height}%`,
    objectFit: "stretch",
    borderRadius:`${props.bradius}%`,
    alignSelf:"center"
  }

  return (
     <img style={images}  src={require(`${props.src}`)} alt=""/>
  );
}
ImageSpecific.propTypes={
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  bradius:PropTypes.string

}
ImageSpecific.defaultProps = {
  src: "./temp4.jpg",
  bradius:"0",
  width:"100",
  height:"100"
}

