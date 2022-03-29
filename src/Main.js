import React from 'react'
import pic from "./Assets/Capture.png"
import image7 from "./Assets/image7.png"
import slider1 from "./Assets/slider1.gif"
import image14 from "./Assets/image14.png"
import slider2 from "./Assets/slider2.gif"
import _5 from "./Assets/5.png"
import _3 from "./Assets/3.png"
import _7 from "./Assets/image7.png"
import Ballon5 from "./Assets/Ballon5.gif"
import _9 from "./Assets/9.png"
import _10 from "./Assets/10.png"

import _15 from "./Assets/image15.png"
import _16 from "./Assets/image16.png"
import _17 from "./Assets/image17.png"
import _18 from "./Assets/image18.png"
import Fish4 from "./Assets/Fish4.gif"
import Micky from "./Assets/team/Micky.jpg"
import Karen from "./Assets/team/Karen.jpg"
import Anthony from "./Assets/team/Anthony.jpg"
import Steve from "./Assets/team/Steve.jpg"
import Roopanshi from "./Assets/team/Roopanshi.jpg"
import video4 from "./Assets/Balloon_2_demo_3.mp4"
import footerLogo from "./Assets/footer_logo.png"
import { Link, useParams } from 'react-router-dom';

export default function Main() {
    const {referrer} = useParams()
    var linktoInvest = referrer ==undefined? "Invest" : `Invest/${referrer}`
  return (
    <div>
          <header className="sticky-top">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 pr-lg-0 header-container">
          <nav className="navbar navbar-expand-lg navbar-light px-0 py-md-0">
            <a className="navbar-brand" href="index.html">
              <img src={pic} title="The Fair Trust" alt="The Fair Trust" width="200" height="21" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">
                    Resources
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="coming-soon.html">faq</a>
                    <a className="dropdown-item" href="coming-soon.html">blog</a>
                    <a className="dropdown-item" href="coming-soon.html">white paper</a>
                  </div>
                </li>
              </ul>

              <div className="pt-2 pb-0 py-md-0 social-media-main-container">
                <div className="row mx-0 align-items-center">
                  <ul className="social-media-container d-flex flex-wrap list-unstyled mb-0">
                    <li>
                      <a href="https://twitter.com/thefairtrust?s=21" target="_blank"
                        className="d-flex flex-wrap justify-content-center align-items-center">
                        <i className="fab fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/TheFairTrust" target="_blank"
                        className="d-flex flex-wrap justify-content-center align-items-center">
                        <span className="icon-icons8-telegram-app font-weight-bold"></span>
                      </a>
                    </li>
                     <li>
                      <a href="#" className="d-flex flex-wrap justify-content-center align-items-center">
                        <i className="fab fa-brands fa-instagram"></i>
                      </a>
                    </li> 
                    <li>
                      <a href="https://discord.gg/v8r55zcWsr" target="_blank" className="d-flex flex-wrap justify-content-center align-items-center">
                        <i className="fab fa-discord"></i>
                      </a>
                    </li>
                  </ul>


                  {/* <Link to={linktoInvest} className="form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn">INVEST NOW</Link> */}
                  {referrer? 
                    <Link 
                    className="form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn" 
                    to={`/Invest/${referrer}`}>INVEST NOW</Link> 
            
                    :<Link 
                    className="form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn"
                    to="/Invest">INVEST NOW</Link>}
                </div>
              </div>

            </div>
          </nav>
        </div>


      </div>
    </div>
  </header>

  <section id="homeslider" className="container">
    <div className="owl-carousel">
      <div className="item first-item">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 left-content">
            <img src={image7} className="img-fluid mb-2 left-image d-block d-md-inline mx-auto" width="800" height="56" />
            <p className="text-center text-md-left">Built with a simple goal-give back to its stakeholders. Guaranteed passive income of 10% quarterly in BUSD.</p>
          </div>
          <div className="col-12 col-md-6 right-content justify-content-center">
            <img src={slider1} className="img-fluid right-image first-slide-image d-block mx-auto" width="500" height="375" />
          </div>
        </div>
      </div>
      <div className="item second-item">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 left-content">
            <img src={image14} className="img-fluid mb-2 left-image d-block d-md-inline mx-auto" width="800" height="56" />
            <p className="text-center text-md-left">Introducing world's first interest paying loan.
              Stake TFT as collateral and borrow 50% BUSD, and the best part is WE PAY YOU
              0.2% interest every single day.</p>
          </div>
          <div className="col-12 col-md-6 right-content justify-content-center">
            <img src={slider2} className="img-fluid right-image second-slide-image d-block mx-auto" width="500" height="375" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="invest-now-container orange-bg d-none">
    <div className="container text-center text-white">
       <h3 className="text-white mb-0">INVEST NOW</h3>
      <p className="mb-0 text-uppercase">We Made it riskfree for you to invest. Well almost.</p>
      <p className="mb-2 text-uppercase">We Made it riskfree for you to invest, Well almost.</p>
      <p className="mb-0 text-uppercase">{referrer? 
                    <Link 
                    className="form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn" 
                    to={`/Invest/${referrer}`}>INVEST NOW</Link> 
            
                    :<Link 
                    className="form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn"
                    to="/Invest">INVEST NOW</Link>}</p>
    </div>
  </section>

  <section className="rock-solid-container">
    <div className="container mb-3 mb-md-5">
      <div className="row">
        <div className="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-left">
          <h4 className="text-uppercase mb-2 mb-md-3">No Fine Print</h4>
          <p>Keeping things simple & transparent. Daily rewards, guaranteed dividends, no lock-ins.</p>
        </div>
        <div className="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-left">
          <h4 className="text-uppercase mb-2 mb-md-3">Value Innovation</h4>
          <p>Growth from constant innovation, breaking norms and expanding across various sectors.</p>
        </div>
        <div className="col-12 col-md-4 mb-md-0 text-center text-md-left">
          <h4 className="text-uppercase mb-2 mb-md-3">Community Focused</h4>
          <p>Strength in the diversity of our community & team. Protocol built by and for the people.</p>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <img src={_5} className="rock-solid-img" width="2000" height="205" />
        </div>
      </div>
    </div>
  </section>

  <section className="tft-token-container orange-bg">
    <div className="container text-left text-md-center">
      <h1 className="title text-white">TFT TOKEN </h1>
      <p className="mb-0 text-white">The native cryptocurrency of The Fair Trust, backed by the cumulative potential of all of The Fair Trust Investments and the value of its treasury. Tradable on the Binance Blockchain.</p>
    </div>
  </section>

  <section className="about-us-container">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="left-content mb-4 mb-md-0">
            <img src={_3} className="img-fluid lazy" width="1000" height="728" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="right-content text-left">
            <h1 className="title">Our <span className="text-blue">Story</span></h1>
            <p>It’s a jungle out there, where people get scammed every day, they pay crazy interest rates, get sold overrated bonds, where opportunities to invest in great projects are given to the big players first… it’s time to change that.</p>
            <p>The goal of The Fair Trust is simple, unbank the banking system. Create a financial platform like none other, one that gives profit back to its stakeholders and is constantly evolving.</p>
            <p className="mb-0">We are here to build a borderless and democratic community of investors funding the next generations of revolutionary blockchain projects. Projects that span across various sectors: New Age Banking, Real Estate, Digital Marketplace, Gaming… the possibilities are endless. Investing in The Fair Trust is like investing in all of these sectors at once.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="how-it-work-container">
    <div className="container text-left text-md-center text-white">
      <h1 className="title">How it <span className="text-blue">Works</span></h1>
      <p className="mb-0 text-blue">The Fair Trust is designed to be fair and equally rewarding, what you choose will depend on your financial goal. To start with we will have two options: The Fair Investment and The Fair Loan.</p>
    </div>
  </section>

  <section className="invest-in-yourself-container">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="left-content">
            <img src={_7} />
            <div className="content mt-4">
              <p className="mb-0" style={{textAlign:"left"}}>A portion of The Fair Trust treasury will be utilized to kickstart leading-edge projects across varying sectors. The returns from these investments will be rewarded back to The Fair Trust Stakeholders in the form of: </p>
              <ul style={{textAlign:"left"}} className="mb-0 mt-1 list-unstyled">
                <li><span className="text-orange">-</span> Daily Interest of 0.16%</li>
                <li><span className="text-orange">-</span> Monthly bonus of 5%</li>
                <li><span className="text-orange">-</span> Guaranteed 10% quarterly dividend in BUSD</li>
                <li><span className="text-orange">-</span> New project tokens</li>
              </ul>
              <blockquote style={{textAlign:"left"}} className="quote">"You may just have the next unicorn in your portfolio"</blockquote>

            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <div className="rewards-image-content mt-4 mt-md-0">
             <video playsInline autoplay muted loop className="w-100" style={{height:"450px", width:"300px",border:"none"}} src={video4}>
              {/* <source src="video/Balloon_2_demo_3.mp4" type="video/mp4">
              Your browser does not support the video tag.</source> */}
            </video>
            {/* <img data-src={Ballon5} className="lazy img-fluid" alt="" width="1500" height="2012" /> */}
          </div>
        </div>
         <div className="col-12 col-md-6">
          {/* <div className="right-content text-center">
            <h2 className="mb-0 pb-2">Invest in yourself,</h2>
            <h2 className="mb-0 pb-2">it pays the best interest</h2>
          </div> */}
        </div> 
      </div>

      <div className="row">
        <div className="col-12 col-md-6 order-1 order-md-2">
          <div className="left-content" style={{textAlign:"left"}}>
            <img src={_9} className="lazy fair-loan-image" width="800"
              height="96" />
            <div className="fair-loan-image-content mt-4" style={{textAlign:"left"}}>
              <p>Want to stay invested in The Fair Trust but need to free up some cash for those unexpected bills or opportunities, you can have both and earn while doing so.</p>
              <p className="mb-0">With The Fair Loan, we pay you interest when you to take a loan from us, yes you heard us right. The way it works is straightforward. Deposit TFT and borrow up to 50% in BUSD. In addition to that we will pay you daily 0.2% fixed interest on the TFT deposited. No credit checks, no liquidation, it is that simple.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 order-2 order-md-1 mt-4 mt-md-0">
          <div className="right-image-content text-center">
            <img src={_10} className="img-fluid" width="500" height="418" />
          </div>
        </div>
      </div>

    </div>
  </section>

  <section className="we-made-it-riskfree-container orange-bg">
    <div className="container text-center text-white">
      <p className="mb-0 text-uppercase">We Made it riskfree for you to invest, Well almost. Learn How, {referrer? 
                    <Link 
  
                    to={`/Invest/${referrer}`}><span style={{color:"white"}}>INVEST NOW</span></Link> 
            
                    :<Link 
                     to="/Invest"><span style={{color:"white"}}>INVEST NOW</span></Link>}</p>
       <p className="mb-0 text-uppercase"></p>
    </div>
  </section>

  <section className="road-map-container">
    <div className="container">

      <div className="col-12 px-0">
        <h1 className="title mb-3 mb-md-0 text-left">Road<span className="text-blue">Map</span></h1>
      </div>

      <div className="row">
        

        <div className="col-12 col-md-6 road-map-content">
          <div className="content-box-container first-content-box-container">
            <div className="content-box mt-4 mt-md-0 mb-md-3 order-2 order-md-1">
              <div className="box box1">
                <h1 className="title mb-1">Q2</h1>
                <h3 className="sub-title">2022</h3>
              </div>
              <div className="box box2">
                <ul className="pl-0 list-unstyled mb-0 content">
                  <li>Community Seed Round</li>
                  <li>Public Pre-Sale</li>
                </ul>
              </div>
            </div>
            <div className="content-image order-1 order-md-2">
              <img src={_15} className="first-image img-fluid" width="1182" height="871" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 road-map-content">
          <div className="content-box-container second-content-box-container">
            <div className="content-box mt-4 mt-md-0 order-2 order-md-1">
              <div className="box box1">
                <h1 className="title mb-1">Q3</h1>
                <h3 className="sub-title">2022</h3>
              </div>
              <div className="box box2">
                <ul className="pl-0 list-unstyled mb-0 content">
                  <li>Audit of Entire Project</li>
                  <li>Launch The Fair Trust &amp; Fair Loan</li>
                  <li>Launch The Fair Fund</li>
                </ul>
              </div>
            </div>
            <div className="content-image order-1 order-md-2">
              <img src={_16} className="second-image img-fluid" width="1182" height="871" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 road-map-content">
          <div className="content-box-container third-content-box-container">
            <div className="content-box mt-4 mt-md-0 order-2 order-md-1">
              <div className="box box1">
                <h1 className="title mb-1">Q4</h1>
                <h3 className="sub-title">2022</h3>
              </div>
              <div className="box box2">
                <ul className="pl-0 list-unstyled mb-0 content">
                  <li>Open application for outsider investments</li>
                  <li>Expand the Fair Loan (lending &amp; borrowing) for other tokens</li>
                  <li>Governance Integration</li>
                </ul>
              </div>
            </div>
            <div className="content-image order-1 order-md-2">
              <img src={_17} className="third-image img-fluid" width="1182" height="871" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 road-map-content">
          <div className="content-box-container fourth-content-box-container">
            <div className="content-box mt-4 mt-md-0 order-2 order-md-1">
              <div className="box box1">
                <h1 className="title mb-1">Q1</h1>
                <h3 className="sub-title">2023</h3>
              </div>
              <div className="box box2">
                <ul className="pl-0 list-unstyled mb-0 content">
                  <li>Beta Testing of Fair Trust Wallet</li>
                  <li>Launch The Fair Casino</li>
                  <li>Launch The Fair Studio</li>
                </ul>
              </div>
            </div>
            <div className="content-image order-1 order-md-2 text-center">
              <img src={_18} className="fourth-image img-fluid" width="1182" height="871" />
            </div>
          </div>
        </div>

      </div>

      <div className="row">
        <div className="col-12 text-right">
          <p className="more-to-come-text">More To Come...</p>
        </div>
      </div>

    </div>
  </section>

  <section className="tokenomics-container">
    <div className="container">
      <div className="row">

        <div className="col-12 col-md-6"  style={{textAlign:"left"}}>
          <h1 className="title mb-4">Token<span className="text-blue">omics</span></h1>
          <p className="tag-line-text">A fair and equitable distribution of tokens keeping future utility, the viability of the project and its stakeholders in mind.</p>
          <ul className="list-unstyled">
            <li><span className="text-orange">-</span> Periodic burning of tokens</li>
            <li><span className="text-orange">-</span> Fixed and low circulating supply</li>
            <li><span className="text-orange">-</span> Team token vested across 2 years</li>
            <li><span className="text-orange">-</span> Built-in anti-whale &amp; day trading measures</li>
          </ul>
        </div>

        <div className="d-none d-md-block col-1"></div>

        <div className="col-12 col-md-5">
          <ul className="tokenomics-list">
            <li>Team</li>
            <li>External Strategic Advisor</li>
            <li>Community Seed Launch</li>
            <li>Strategic Pre-Launch</li>
            <li>Liquidity Pool</li>
            <li>Marketing / Community Airdrop</li>
            <li>Leftover for Community</li>
          </ul>
        </div>

      </div>

      {/* <div className="row">
        <div className="col-12 mt-3">
          <img data={Fish4}  />
        </div>
      </div> */}
      <img src={Fish4} style={{width:"1000px",height:"400px"}}></img>

    </div>
  </section>

  <section className="team-container">
    <div className="container-fluid">
      <div className="row align-items-center">

        <div className="col-12 col-md-4">
          <h1 className="title mb-4 text-left">Core <span className="text-blue">Team</span></h1>
          <p className="mb-0 text-left mb-4 mb-md-0">Powered by passion and fueled with the need to make a change. Our team has decades of combined experience from working within leaders such as Deloitte, IBM to founding multiple eCommerce and multi-chain service brands. We are a team of makers and thinkers that constantly challenge the status quo.</p>
        </div>

        <div className="col-12 col-md-8">
          <div className="team-image-container">
            <div className="team-content text-center">
              <img src={Micky} className="lazy img-fluid" width="500" height="500" />
              <p className="mb-1">Micky P.</p>
              <span>Technology</span>
            </div>
            <div className="team-content text-center">
              <img src={Karen} className="lazy img-fluid" width="500" height="500" />
              <p className="mb-1">Karen F.</p>
              <span>Operations</span>
            </div>
            <div className="team-content text-center">
              <img src={Anthony} className="lazy img-fluid" width="500" height="500" />
              <p className="mb-1">Anthony D.</p>
              <span>Finance</span>
            </div>
            <div className="team-content text-center">
              <img src={Roopanshi} className="lazy img-fluid" width="500" height="500" />
              <p className="mb-1">Roopanshi B.</p>
              <span>Marketing</span>
            </div>
            <div className="team-content text-center">
              <img src={Steve} className="lazy img-fluid" width="500" height="500" />
              <p className="mb-1">Steve D.</p>
              <span>Development</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section className="be-a-part-container orange-bg">
    <div className="container text-center text-white">
      <p className="mb-0 text-uppercase">Be a part of our Journey, {referrer? 
                    <Link 

                    to={`/Invest/${referrer}`}><span style={{color:"white"}}>INVEST NOW</span></Link> 
            
                    :<Link 

                    to="/Invest"><span style={{color:"white"}}>INVEST NOW</span></Link>}</p>
    </div>
  </section>

  <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4 mb-md-0 text-center text-md-left first-item item">
          <a href="index.html"><img src={footerLogo} className="img-fluid footer-logo" width="500"
              height="474" /></a>
        </div>

         <div className="col-2 d-none d-lg-block"></div> 
              
        <div className="col-12 col-md-6 mb-md-0 text-center text-md-left second-item item" style={{position:"absolute",left:"550px"}}>
          <div className="social-media-main-container">
            <p className="social-text mb-2 mb-md-3 footer-title">Let's get social</p>
            <ul
              className="social-media-container d-flex flex-wrap list-unstyled justify-content-center justify-content-md-start mb-0">
              <li>
                <a href="https://t.me/TheFairTrust" target="_blank"
                  className="d-flex flex-wrap justify-content-center align-items-center">
                  <span className="icon-icons8-telegram-app font-weight-bold"></span>
                </a>
              </li>
              <li>
                <a href="#" className="d-flex flex-wrap justify-content-center align-items-center">
                  <i className="fab fa-discord"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/thefairtrust?s=21" target="_blank"
                  className="d-flex flex-wrap justify-content-center align-items-center">
                  <i className="fab fa-brands fa-twitter"></i>
                </a>
              </li>
               <li>
                <a href="#" className="d-flex flex-wrap justify-content-center align-items-center">
                  <i className="fab fa-brands fa-instagram"></i>
                </a>
              </li>

            </ul>
          </div>

          <div className="contact-detail" style={{position:"absolute",top:"100px"}}>
            <p className="contact-text mb-2 mb-md-3 footer-title">Contact</p>
            <a href="mailto:Info@TheFairTrust.com">Info@TheFairTrust.com</a>
          </div>

        </div>

        <div className="col-12 col-md-2 text-center text-md-left mb-sm-0 third-item item" style={{position:"relative",left:"500px"}}>
          <div className="quick-link-container list-unstyled">
            <p className="contact-text mb-3 footer-title">NAVIGATION</p>
            <ul className="mb-0">
              <li><a href="coming-soon.html">Faq</a></li>
              <li><a href="coming-soon.html">Blog</a></li>
              <li><a href="coming-soon.html">Whitepaper</a></li>
              <li><a href="file/COOKIE_POLICY.pdf" target="_blank">Cookie Policy</a></li>
              <li className="mb-0"><a href="file/PRIVACY_POLICY.pdf" target="_blank">Privacy Policy</a></li>

            </ul>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3 align-self-end fourth-item item">
          <div className="copyright-container text-center text-sm-right">
            {/* <p className="mb-0">Copyright &#169; <span className="font-weight-bold">The Fair Trust</span></p> */}
          </div>
        </div> 

      </div>
    </div>
  </footer>




  {/* <!-- scroll to top --> */}
  <button className="back-to-top" type="button">
    <i className="fas fa-regular fa-angle-up"></i>
  </button>

        
        </div>
  )
}
