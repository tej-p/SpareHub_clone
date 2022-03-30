const header = () => {
       return `
        <!-------------------------------------  header-1  ------------------------------------------->
    
        <div id="header1">
          <span>WELCOME AT SPARESHUB.COM !</span>|<a href=""> CONTACT US </a> |
          <a href="">SIGN IN</a> | <a href="">CREATE AN ACCOUNT</a>
        </div>
    
        <!-------------------------------------  header-2  ------------------------------------------->
    
        <div id="header2">
          <div id="header21">
            <div style="margin-top: 25px">
              <a class="navbar-brand" href="#"
                ><img src="../images/logo.png.webp" alt=""
              /></a>
            </div>
    
            <!---------------------search bar ------------>
    
            <div id="search-container">
              <form class="search">
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search entire store here...."
                  name="search"
                  onclick="changeColor()"
                />
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
          </div>
    
          <!---------------------contact details------------>
          <div id="header22">
            <p>
              Call us - <span><i class="fas fa-phone-alt"></i> 919307901479</span>
            </p>
            <p>
              Whatsapp us - <span><i class="fab fa-whatsapp"></i> 9307901458</span>
            </p>
            <p>
              Email us -
              <span><i class="fas fa-envelope"></i> care@spareshub.com</span>
            </p>
          </div>
    
          <i class="bi bi-cart-fill"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#0088cc"
            class="bi bi-cart-fill"
            viewBox="0 0 16 16"
            style="margin-left: 20px; margin-top: 30px"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
        </div>
    
        <!---------------------------------------header 3 - Navbar---------------------------------------------->
    
        <div id="dropdown-nav">
          <!----------------- Navbar Brands-------------------------------------------->
          <div class="dropdown">
            <button class="dropbtn">
              BRANDS <i class="fas fa-angle-down"></i>
            </button>
            <div class="dropdown-content">
              <div>
                <img src="../images/car.jpg" alt="" />
                <div style="margin-top: 30px">
                  <p style="color: white; font-size: 16px; font-weight: bold">
                    Car Brands
                  </p>
                  <p style="color: white; font-size: 13px">
                    Get replacement parts for any car brand and model at
                    <br />SparesHub.com...
                  </p>
                  <!-- <p style="color: white; font-size: 13px;"></p> -->
                </div>
              </div>
              <div>
                <a href="#">AUDI</a>
                <a href="#">DATSUN</a>
                <a href="#">HINDUSTAN MOTORS</a>
                <a href="#">LAND ROVER</a>
                <a href="#">MERCEDES BENZ</a>
                <a href="#">PREMIER</a>
                <a href="#">TOYOTA</a>
                <a href="#">HYUNDAI</a>
                <!-- <a href="#">HINDUSTAN MOTORS</a> -->
              </div>
              <div>
                <a href="#">BMW</a>
                <a href="#">FIAT</a>
                <a href="#">HONDA</a>
                <a href="#">MINI</a>
                <a href="#">MITSUBISHI</a>
                <a href="#">RENAULT</a>
              </div>
              <div>
                <a href="#">CHEVROLET</a>
                <a href="#">GENERAL</a>
                <a href="#">JEEP</a>
                <a href="#">ICML</a>
                <a href="#">MAHINDRA</a>
                <a href="#">SKODA</a>
              </div>
              <div>
                <a href="#">NISSAN</a>
                <a href="#">FORD</a>
                <a href="#">JAGUAR</a>
                <a href="#">MARRUTI</a>
                <a href="#">TATA</a>
                <a href="#">VOLVO</a>
              </div>
            </div>
          </div>
    
          <!----------------- Navbar Categories-------------------------------------------->
    
          <div class="dropdown">
            <button class="dropbtn">
              CATEGORIES <i class="fas fa-angle-down"></i>
            </button>
            <div class="dropdown-content">
              <div>
                <img src="../images/spare1.png.webp" alt="" />
                <div style="margin-top: 30px">
                  <p style="color: white; font-size: 16px; font-weight: bold">
                    Car Brands
                  </p>
                  <p style="color: white; font-size: 13px">
                    Get replacement parts for any car brand and model at
                    <br />SparesHub.com...
                  </p>
                  <!-- <p style="color: white; font-size: 13px;"></p> -->
                </div>
              </div>
              <div>
                <a href="#">BUSHES</a>
                <a href="#">CLUTCH SYSTEM</a>
                <a href="#">STEERING SYSTEM</a>
                <a href="#">SENSORS</a>
                <!-- <a href="#"></a>
                  <a href="#">PREMIER</a>
                  <a href="#">TOYOTA</a>
                  <a href="#">HYUNDAI</a> -->
                <!-- <a href="#">HINDUSTAN MOTORS</a> -->
              </div>
              <div>
                <a href="#">BELTS</a>
                <a href="#">ELECTRICALS</a>
                <a href="#">HEATING & COOLING</a>
                <a href="#">SUSPENSION SYSTEM</a>
                <!-- <a href="#">MITSUBISHI</a> -->
                <!-- <a href="#">RENAULT</a> -->
              </div>
              <div>
                <a href="#">BODY PARTS</a>
                <a href="#">ENGYNE PARTS</a>
                <a href="#">LIGHTING SYSTEM</a>
                <a href="#">TRANSMISSION</a>
                <!-- <a href="#">MAHINDRA</a> -->
                <!-- <a href="#">SKODA</a> -->
              </div>
              <div>
                <a href="#">BRAKING SYSTEM</a>
                <a href="#">FILTERS</a>
                <a href="#">LUBES & FLUIDS</a>
                <a href="#">TURBOCHARGER</a>
                <!-- <a href="#">TATA</a> -->
                <!-- <a href="#">VOLVO</a> -->
              </div>
            </div>
          </div>
    
          <!----------------- Navbar MANUFACTURERS-------------------------------------------->
    
          <div class="dropdown">
            <button class="dropbtn">
              MANUFACTURERS <i class="fas fa-angle-down"></i>
            </button>
            <div class="dropdown-content">
              <div>
                <a href="#">BRAVO</a>
                <a href="#">DEPO</a>
                <a href="#">FENNER</a>
                <a href="#">LUK</a>
                <a href="#">NTN</a>
                <a href="#">TRW</a>
                <!-- <a href="#">TOYOTA</a> -->
                <!-- <a href="#">HYUNDAI</a> -->
                <!-- <a href="#">HINDUSTAN MOTORS</a> -->
              </div>
              <div>
                <a href="#">GSP</a>
                <a href="#">ZIP</a>
                <a href="#">KBX</a>
                <a href="#">BOSCH</a>
                <a href="#">DAIKIN</a>
                <a href="#">TVS</a>
              </div>
              <div>
                <a href="#">EXEDY</a>
                <a href="#">KYD</a>
                <a href="#">HELLA</a>
                <a href="#">NGK</a>
                <a href="#">RANE</a>
                <a href="#">PHILIPS</a>
              </div>
              <div>
                <a href="#">COFAP</a>
                <a href="#">DENSO</a>
                <a href="#">NMK</a>
                <a href="#">MATIC</a>
                <a href="#">SANDEN</a>
                <a href="#">BANDO</a>
              </div>
            </div>
          </div>
    
          <!----------------- Navbar FRANCHISE-------------------------------------------->
          <button class="dropbtn dropButton" onclick="goToFranchise()">
            FRANCHISE
          </button>
    
          <!----------------- Navbar CAREERS-------------------------------------------->
          <button class="dropbtn dropButton" onclick="goToCareers()">
            CAREERS
          </button>
        </div>
    
        <!----------------- below Navbar -------------------------------------------->
    
        <div id="warranty">
          <img src="../images/LARGEST.webp" alt="" />
          <p>LARGEST COLLECTION</p>
          <img src="../images/HIGH.webp" alt="" />
          <p>HIGH QUALITY PARTS WITH WARRANTY</p>
          <img src="../images/SSL.webp" alt="" />
          <p>SSL CERTIFIED TRANSACTION</p>
          <img src="../images/ONtime.webp" alt="" />
          <p>ON-TIME DELIVERY</p>
        </div>`
}


export default header;