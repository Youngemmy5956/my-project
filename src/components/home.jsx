import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './home.css'
import Logo from '../images/Beere_logo.png'
import Imag from '../images/darklogo.png'
import Asds from '../images/Ellipse 1.png'
import Asdse from '../images/beere pho.png'
import Asdses from '../images/beere pho.png'
import Asdsess from '../images/Union.png'
import Asdsesss from '../images/beere pho3.png'
import Asdsessss from '../images/Component 1.png'
import Asdsesssss from '../images/Group 1707477977.png'
import Asdsessssss from '../images/section.png'
import Pics from '../images/022-1.jpg'




export default function home() {
  return (
    <>
        <div class="first-section">

            <img src={Logo} alt="" style={{paddingLeft: "10rem", paddingBottom:"10px"}}/>

      <ul>

  <li> <a class="first-section-link" href=""><b>HOME</b></a> </li>
<li><a class="first-section-link" href=""><b>FEATURES</b></a> </li>
<li><a class="first-section-link" href=""><b>TESTIMONIAL</b></a></li>

<li><a class="first-section-link" href=""><b style={{color:"white"}}>FAQ</b></a></li>


      </ul>
    
               <img src={Imag} alt="" style={{paddingRight:"10rem", paddingBottom:"10px"}}/>

            </div>


            <div class="imgs">
                  <img src={Asds} alt=""/>

                  <img src={Asdse} alt=""/> 

           </div>

           
      <div class="banner">

        <h1>Introducing Beere, the <br />  Ultimate Search App.   <button class="btn">Talk to vendor</button> </h1> 

        <p style={{color: "white"}}>sssssssssssssssssssssssssssssssssssssss</p>

        
        <img src={Asdses} alt=""/> <img src={Asdses} alt=""/> <img src={Asdses} alt=""/>

      </div>


      {/* <!-- features starting point --> */}

  <div class="container text-center">
    <div class="row">
      <h1 style={{color:" rgba(53, 162, 208, 1)" }} >FEATURES</h1>
      <div class="col">
        <h1 style={{paddingLeft: "2rem", color: "rgba(53, 162, 208, 1)" }} >Awesome App Features</h1>
        <p>Beere app is loaded with awesome features that make shopping  and browsing for products easier and more enjoyable than ever. With our platform, you can:</p>
      </div>
      <div class="col">
        <h1 style={{paddingLeft: "2rem", color: "rgba(53, 162, 208, 1)" }} >Awesome App Features</h1>
        <p>Beere app is loaded with awesome features that make shopping  and browsing for products easier and more enjoyable than ever. With our platform, you can:</p>
      </div>
      <div class="col">
        <h1 style={{paddingLeft: "2rem", color: "rgba(53, 162, 208, 1)" }} >Awesome App Features</h1>
        <p>Beere app is loaded with awesome features that make shopping  and browsing for products easier and more enjoyable than ever. With our platform, you can:</p>
      </div>
    </div>
  </div>

   {/* <!-- features ending point --> */}



   {/* <!-- HOW IT WORKS STARTING SECTION --> */}


   <div class="img">
    <img src={Asdsess} alt=""/>  <img src={Asdsesss} alt=""/>  

    {/* <!-- <button class="btn">Apple Store</button>      <button class="btn">Google play</button> --> */}


    

    <img src={Asdsessss} alt=""/>


  </div>

  <div class="imgse">

  <img src={Asdsessss} alt=""/>
  <img src={Asdsess} alt=""/>  <img src={Asdsesss} alt=""/> 

    {/* <!-- <button class="btn">Apple Store</button>      <button class="btn">Google play</button> --> */}

  </div>


  <div class="img">
    <img src={Asdsesssss} alt="" style={{height:"700px"}} padd/>

    {/* <!-- <button class="btn">Apple Store</button>      <button class="btn">Google play</button> --> */}


    

    <img src={Asdsessss} alt="" style={{height:"500px"}}/>


  </div>

   {/* <!-- HOW IT WORKS ENDING SECTION --> */}


   {/* <!-- THE STARTING VIDEO SECTION --> */}
{/* 
   <a href="https://lh4.googleusercontent.com/proxy/d1Zd63eEfaPRt9DzVkpmvvCA7TsXpGoOwQ1r8hG8RfMb1fKmzg_8Xf1WQu7xWI6j2eVoDM88TMFpWRae0Qm3gfu9MKyXPCjAvi5fMNoQUpezJWUcrOAWF4goC0lQuQWozZtBiW5Sq4fk=w1152-h603-s-nd""> */}
   <img src={Asdsessssss} alt="" style={{width:"100%"}}/> 

   



      {/* <!-- THE STARTING VIDEO SECTION --> */}

  <p style={{color:"white"}}>gggggggg</p>



  {/* <!-- THE STARTING TESTIMONIAL SECTION --> */}



 


   <h3 style={{color: "rgba(53, 162, 208, 1)", textAlign:"center"}}>TESTIMONIAL</h3>

   <h2 style={{textAlign:"center"}}>See What Our Users Are <br/> Saying About Us</h2>

   <h6 style={{textAlign: "center"}}><i>We take pride in providing an exceptional experience for our users, and we're <br/>
    thrilled to share their feedback with you. Here are just a few of the many  <br/> positive things that our users have to say about us:</i></h6>


    <div class="container-lg">
      <div class="row">
          <div class="col-sm-12">			
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                  <h2 style={{color:"white"}}>gg <b></b></h2>
                  {/* <!-- Carousel indicators --> */}
                  <ol class="carousel-indicators">
                      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
                      <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
                  </ol>   
                  {/* <!-- Wrapper for carousel items --> */}
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <div class="row">
                              <div class="col-sm-6">
                                  <div class="testimonial">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                                  </div>
                                  <div class="media">
                                      <img src={Pics} class="mr-3" alt=""/>
                                      <div class="media-body">
                                          <div class="overview">
                                              <div class="name"><b>Paula Wilson</b></div>
                                              <div class="details">Media Analyst / SkyNet</div>
                                              
                                          </div>										
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-6">
                                  <div class="testimonial">
                                      <p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
                                  </div>
                                  <div class="media">
                                      <img src={Pics} class="mr-3" alt=""/>
                                      <div class="media-body">
                                          <div class="overview">
                                              <div class="name"><b>Antonio Moreno</b></div>
                                              <div class="details">Web Developer / SoftBee</div>
                                          </div>										
                                      </div>
                                  </div>
                              </div>
                          </div>			
                      </div>
                      <div class="carousel-item">
                          <div class="row">
                              <div class="col-sm-6">
                                  <div class="testimonial">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                                  </div>
                                  <div class="media">
                                      <img src={Pics} class="mr-3" alt=""/>
                                      <div class="media-body">
                                          <div class="overview">
                                              <div class="name"><b>Michael Holz</b></div>
                                              <div class="details">Web Developer / DevCorp</div>											
                                          </div>										
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-6">
                                  <div class="testimonial">
                                      <p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
                                  </div>
                                  <div class="media">
                                      <img src={Pics} class="mr-3" alt=""/>
                                      <div class="media-body">
                                          <div class="overview">
                                              <div class="name"><b>Mary Saveley</b></div>
                                              <div class="details">Graphic Designer / MarsMedia</div>
                                          </div>										
                                      </div>
                                  </div>
                              </div>
                          </div>			
                      </div>
                      <div class="carousel-item">
                          <div class="row">
                              <div class="col-sm-6">
                                  <div class="testimonial">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                                  </div>
                                  <div class="media">
                                      <img src={Pics} class="mr-3" alt=""/>
                                      <div class="media-body">
                                          <div class="overview">
                                              <div class="name"><b>Martin Sommer</b></div>
                                              <div class="details">SEO Analyst / RealSearch</div>
                                          </div>										
                                      </div>
                                  </div>
                              </div>
                              <div class="col-sm-6">
                                  <div class="testimonial">
                                      <p>Vestibulum quis quam ut magna consequat faucibu. Eget mi suscipit tincidunt. Utmtc tempus dictum. Pellentesque virra. Quis quam ut magna consequat faucibus quam.</p>
                                  </div>
                                  <div class="media">
                                      <div class="media-left d-flex mr-3">
                                          <img src={Pics}alt=""/>										
                                      </div>
                                      <div class="media-body">
                                          <div class="overview">
                                              <div class="name"><b>John Williams</b></div>
                                              <div class="details">Web Designer / UniqueDesign</div>
                                          </div>										
                                      </div>
                                  </div>
                              </div>
                          </div>			
                      </div>
                  </div>
                  {/* <!-- Carousel controls --> */}
                  <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                      <i class="fa fa-chevron-left"></i>
                  </a>
                  <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                      <i class="fa fa-chevron-right"></i>
                  </a>
              </div>
          </div>
      </div>
  </div>


   {/* <!-- THE ENDING TESTIMONIAL SECTION --></i> */}
   


    </>
  )
}
