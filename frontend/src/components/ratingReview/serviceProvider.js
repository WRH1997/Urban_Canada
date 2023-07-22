import React from 'react';
import man from '../../assets/images/man.jpg'
import woman from '../../assets/images/woman.jpg'
import Navbar from './navigation';
// import Rating from './rating';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


// For Style....

// import Button from '@mui/material/Button';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/sass/style.scss';
import { Rating } from '@mui/material';

function Footer(){
    return(
        <div className='footer'>
          
        </div>
    );
  
  }


function CardContent(props){
    return(
    <div className='content'>
      <img className="img" src={props.image} alt="man" />
        <h3>Name: {props.name}</h3>
        <h4>Rating: {props.star}</h4>

    </div>
    );
}


function Card(props){
    return (
        <div class="rating-card">
            
            <CardContent image={props.image} star={props.star} name={props.name}/>
            {/* <Stars star={props.star}/> */}
        </div>
    );
}

function CardGrid(props){
    return(
        <div class="card-grid">

            <Card  value={1} image={man} star={3} name={"Darshil Patel"} service={"Electrician"}/>
            <Card  value={2} image={woman}star={4.2} name={"Nand kadivar"} service={"Painter"}/>
            <Card  value={3} image={man} star={5} name={"Muskan"} service={"Cheff."}/>
            <Card  value={4} image={woman} star={3.5} name={"Walid"} service={"Accountant"}/>
            <Card  value={5} image={man} star={2} name={"Harsh kathiriya"} service={"Party Organizar"}/>
            <Card  value={6} image={woman} star={1.6}name={"Donald Trump"} service={"Historian"}/> 
            <Card  value={5} image={man} star={5} name={"Ryan"} service={"Unknown"}/>
            

        </div>
    );
}


// function Stars(props) {


//     let val = 5;

//     let element  = '<div>';

//     for (let index = 0; index < props.star; index++) {
//         element += '<span class="fa fa-star checked"></span>';
        
//     }

//     for (let index = 0; index < val - props.star; index++) {
//         element += '<span class="fa fa-star"></span>';
//     }

//     element += '</div>'

//     console.log(element);

//   return (
//     element
//   );
// }

// function Stars4() {
//     return (
//       <div>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star"></span>
//       </div>
//     );
//   }

//   function Stars5() {
//     return (
//       <div>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star checked"></span>
//       </div>
//     );
//   }

//   function Stars2() {
//     return (
//       <div>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star"></span>
//         <span className="fa fa-star"></span>
//         <span className="fa fa-star"></span>
//       </div>
//     );
//   }

//   function Stars1() {
//     return (
//       <div>
//         <span className="fa fa-star checked"></span>
//         <span className="fa fa-star"></span>
//         <span className="fa fa-star"></span>
//         <span className="fa fa-star"></span>
//         <span className="fa fa-star"></span>
//       </div>
//     );
//   }




function Container(){
    return(
        <div className='mega-container bg-darshil-blue'>
            H
            <Navbar />
            <div className='container'>
                <CardGrid />
                <Rating />
            </div>
            <Footer />
        </div>
    );
}

export default Container;



