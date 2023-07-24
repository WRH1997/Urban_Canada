// author: Darshil Patel

import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

export default function Star(props)
{
  const style={
  }
  const [rating,setRating] = useState(props.sel_quan);
   const handleRating = (value) => {
    setRating(value);
    if (props.onStarChange) {
      props.onStarChange(value);
    }
  };
  const data = [];
  let flag = false;
  for (let i = 1; i <= props.quan; i++) {
    
    if(props.editable === true){
      if(i <= rating){
        data.push(<FaStar key={i} className="star-sel" style={style} color={props.sel_color} size={props.selSize} onClick={() => handleRating(i)}/>);
      }
      else{
        data.push(<FaStar key={i} className="star-nsel" style={style} color={props.nsel_color} size={props.nselSize} onClick={() => handleRating(i)}/>);
      }
    }
    else{
      
      let wholeFill = 0,halfFill= 0.00;
      wholeFill = Math.trunc(props.sel_quan);
      halfFill = Math.round((props.sel_quan % 1) * 100);
     
      if(i <= wholeFill){
        data.push(<FaStar key={i} className="stars" style={style} color={props.sel_color} size={props.selSize}/>);
        if (i === wholeFill && halfFill > 0)
        {
          flag = true;
          continue;
        }
      }
      else if(flag === true)
      {
        let str = halfFill+"%";

         data.push( 
          <div style={{display:'inline-block'}}>
              <FaStar color={props.nsel_color} size = {props.selSize}  style={{fill: 'url(#starGrad)'}}/>
              <svg style={{ position: 'absolute', height: 0 }}>
                <defs>
                  <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset={str} stopColor={props.sel_color} />
                    <stop stopColor={props.nsel_color} />
                  </linearGradient>
                </defs>
              </svg>
            </div>  
          );
         flag = false;
      }
      else{
        data.push(<FaStar key={i} className="stars" color={props.nsel_color} size={props.selSize}/>);
      }
    }
  }
  return (
   
    <div className="5star" style={{ background:props.bgColor,display: 'flex',paddingLeft:'1%' }}>{data}</div>
  );
}
Star.propTypes={
  selSize: PropTypes.string,
  nselSize:PropTypes.string,
  sel_color: PropTypes.string,
  nsel_color: PropTypes.string,
  quan: PropTypes.number,
  sel_quan: PropTypes.number,
  bgColor:PropTypes.string,
  fillQuan: PropTypes.string,
  editable: PropTypes.bool,
  border:PropTypes.string
}
Star.defaultProps = {
  selSize:"40",
  nselSize:"35",
  sel_color:"rgb(251 191 36)",
  nsel_color: "grey ",
  quan: 5,
  sel_quan:0,
  bgcolor: "white",
  fillQuan: "0",
  editable:true,
  border:"1px solid black"
}