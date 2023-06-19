import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './servicedashboard.css';
import prof from './assets/prof.png'
import down from './assets/down.png';
import down2 from './assets/down2.png';
import servImg from './assets/service.jpeg';
import Header from '../header/header';
import Footer from "../footer/footer";

export const ServiceDashboardPage = () => (
  <body class='servicedashbod'>
  <Header currentPage='/ServiceDashboardPage'/>
  <div class='cont'>
      <div class='filter-box'>
        <label class='filter-lbl'>Filters</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src={down2} class="down2" alt="X" />
        <hr></hr>
        <form class='filter-form'>
          <input type="checkbox" id="cat1" name="cat1" class='serverdashinput'></input>
          <label for="cat1">Category 1</label>
          <br></br>
          <input type="checkbox" id="cat2" name="cat2" class='serverdashinput'></input>
          <label for="cat2">Category 2</label>
          <br></br>
          <input type="checkbox" id="cat3" name="cat3" class='serverdashinput'></input>
          <label for="cat1">Category 3</label>
          <br></br>
          <input type="checkbox" id="cat4" name="cat4" class='serverdashinput'></input>
          <label for="cat1">Category 4</label>
          <br></br>
          <input type="checkbox" id="cat5" name="cat5" class='serverdashinput'></input>
          <label for="cat5">Category 5</label>
          <br></br>
          <input type="checkbox" id="cat6" name="cat6" class='serverdashinput'></input>
          <label for="cat6">Category 6</label>
          <br></br>
          <button class='filter-btn'>
            <Link to="/ServiceDashErr1" class='filter-link'>Apply Filter</Link>
          </button>
        </form>
      </div>
      <div class='serv-dash'>
        <div class='service1'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1x'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1x'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1x'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <div class='service1x'>
          <center><label class='serv-lbl'>Service Name</label></center>
          <center><img src={servImg} class="serv-img" alt="X" /></center>
          <div class='serv-info'>
            <b>Vendor Name</b>
            <br></br>
            <i>Vendor Location</i>
            <br></br>
            <u>Price Per Hour</u>
            <hr class='serv-sep'></hr>
            <div class='serv-desc'>
            (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
            </div>
            <center>
            <button class='book-serv' type='button'>
              <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
            </button>
            <button class='view-vendor' type='button'>
              <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
            </button>
            </center>
          </div>
        </div>
        <center>
          <div class='page-nav'>
          <a class='back'>Back</a>
          &nbsp;&nbsp;&nbsp;
          <a class='p1'>1</a>
          &nbsp;&nbsp;
          <Link to="/ServiceDashboardPage2" class='p2'>2</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/ServiceDashboardPage2" class='next'>Next</Link>
        </div></center>
      </div>
  </div>
  <Footer/>
</body>
);

export const ServiceDashboardPage2 = () => (
    <body class='servicedashbod'>
     <Header/>
    <div class='cont'>
        <div class='filter-box'>
          <label class='filter-lbl'>Filters</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <img src={down2} class="down2" alt="X" />
          <hr></hr>
          <form class='filter-form'>
            <input type="checkbox" id="cat1" name="cat1" class='serverdashinput'></input>
            <label for="cat1">Category 1</label>
            <br></br>
            <input type="checkbox" id="cat2" name="cat2" class='serverdashinput'></input>
            <label for="cat2">Category 2</label>
            <br></br>
            <input type="checkbox" id="cat3" name="cat3" class='serverdashinput'></input>
            <label for="cat1">Category 3</label>
            <br></br>
            <input type="checkbox" id="cat4" name="cat4" class='serverdashinput'></input>
            <label for="cat1">Category 4</label>
            <br></br>
            <input type="checkbox" id="cat5" name="cat5" class='serverdashinput'></input>
            <label for="cat5">Category 5</label>
            <br></br>
            <input type="checkbox" id="cat6" name="cat6" class='serverdashinput'></input>
            <label for="cat6">Category 6</label>
            <br></br>
            <button class='filter-btn'>
              <Link to="/ServiceDashErr1" class='filter-link'>Apply Filter</Link>
            </button>
          </form>
        </div>
        <div class='serv-dash'>
          <div class='service1'>
            <center><label class='serv-lbl'>Service Name</label></center>
            <center><img src={servImg} class="serv-img" alt="X" /></center>
            <div class='serv-info'>
              <b>Vendor Name</b>
              <br></br>
              <i>Vendor Location</i>
              <br></br>
              <u>Price Per Hour</u>
              <hr class='serv-sep'></hr>
              <div class='serv-desc'>
              (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
              </div>
              <center>
              <button class='book-serv' type='button'>
                <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
              </button>
              <button class='view-vendor' type='button'>
                <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
              </button>
              </center>
            </div>
          </div>
          <div class='service1x'>
            <center><label class='serv-lbl'>Service Name</label></center>
            <center><img src={servImg} class="serv-img" alt="X" /></center>
            <div class='serv-info'>
              <b>Vendor Name</b>
              <br></br>
              <i>Vendor Location</i>
              <br></br>
              <u>Price Per Hour</u>
              <hr class='serv-sep'></hr>
              <div class='serv-desc'>
              (Service Description) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui...
              </div>
              <center>
              <button class='book-serv' type='button'>
                <Link to="/ServiceDashErr2" class="book-link">Book Service</Link>
              </button>
              <button class='view-vendor' type='button'>
                <Link to="/ServiceDashErr3" class="vend-link">Vendor Profile</Link>
              </button>
              </center>
            </div>
          </div>
          <center><div class='page-nav'>
            <Link to="/ServiceDashboardPage" class='back1'>Back</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/ServiceDashboardPage" class='p11'>1</Link>
            &nbsp;&nbsp;
            <a class='p21'>2</a>
            &nbsp;&nbsp;&nbsp;
            <a class='next1'>Next</a>
          </div></center>
        </div>
    </div>
    <Footer/>
  </body>
  );

  export const ServiceDashErr1 = () => {
    return(
      <body>
        <center>
          <div class='err-box'>
            <br></br><br></br>
            <h1>The Filtering Services Task is Separate from the "Listing/Browsing Services" Task <br></br>(i.e., it is outside of this task's scope).</h1>
            <br></br>
            <button class="back-btn">
              <Link to="/ServiceDashboardPage" class="back-link">Back</Link>
            </button>
          </div>
        </center>
      </body>
    );
  };

  export const ServiceDashErr2 = () => {
    return(
      <body class='servicedashbod'>
        <center>
        <div class='err-box'>
          <br></br><br></br>
          <h1>The Book Service Feature is outside the scope of this Feature</h1>
          <br></br>
          <button class="back-btn">
            <Link to="/ServiceDashboardPage" class="back-link">Back</Link>
          </button>
        </div>
        </center>
      </body>
    );
  }

  export const ServiceDashErr3 = () => {
    return(
      <body class='servicedashbod'>
        <center>
        <div class='err-box'>
          <br></br><br></br>
          <h1>The Vendor Profile Feature is outside the scope of this Feature</h1>
          <br></br>
          <button class="back-btn">
            <Link to="/ServiceDashboardPage" class="back-link">Back</Link>
          </button>
        </div>
        </center>
      </body>
    );
  }

  export const ServiceDashErr4 = () => {
    return(
      <body class='servicedashbod'>
        <center>
        <div class='err-box'>
          <br></br><br></br>
          <h1>The Manage Bookings Feature is outside the scope of this Feature</h1>
          <br></br>
          <button class="back-btn">
            <Link to="/ServiceDashboardPage" class="back-link">Back</Link>
          </button>
        </div>
        </center>
      </body>
    );
  }

  export const ServiceDashErr5 = () => {
    return(
      <body class='servicedashbod'>
        <center>
        <div class='err-box'>
          <br></br><br></br>
          <h1 class='sdh1'>Home/Landing Page Outside of Scope of this Feature</h1>
          <br></br>
          <button class="back-btn">
            <Link to="/ServiceDashboardPage" class="back-link">Back</Link>
          </button>
        </div>
        </center>
      </body>
    );
  }