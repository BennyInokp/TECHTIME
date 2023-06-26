import React from "react";
import "./Component/style.css";
import mappedUsers from "./Image/mappedUsers.svg";
import logo from "./Image/logo.svg";
import hero1 from "./Image/hero1.svg";
import hero2 from "./Image/hero2.svg";
import zoom from "./Image/zoom.svg";
import stripe from "./Image/stripe.svg";
import monday from "./Image/monday.svg";
import dropbox from "./Image/dropbox.svg";
import slack from "./Image/slack.svg";
import frame1 from "./Image/frame1.svg";
import frame2 from "./Image/frame2.svg";
import frame3 from "./Image/frame3.svg";
import frame4 from "./Image/frame4.svg";
import hero3 from "./Image/hero3.svg";
import frame5 from "./Image/frame5.svg";
import frame6 from "./Image/frame6.svg";
import frame7 from "./Image/frame7.svg";
import frame8 from "./Image/frame8.svg";
import Catty1 from "./Image/Catty1.svg";
import Catty2 from "./Image/Catty2.svg";
import Catty3 from "./Image/Catty3.svg";
import cardProfile1 from "./Image/cardProfile1.svg";
import cardProfile2 from "./Image/cardProfile2.svg";
import cardProfile3 from "./Image/cardProfile3.svg";
import Catty4 from "./Image/Catty4.svg";
import Catty5 from "./Image/Catty5.svg";
import Catty6 from "./Image/Catty6.svg";
import cardProfile4 from "./Image/cardProfile4.svg";
import cardProfile5 from "./Image/cardProfile5.svg";
import cardProfile6 from "./Image/cardProfile6.svg";
import carouse1 from "./Image/carouse1.svg";
import carouse2 from "./Image/carouse2.svg";
import carouse3 from "./Image/carouse3.svg";
import community from "./Image/community.svg";
import logo2 from "./Image/logo2.svg";
import facebook from "./Image/facebook.svg";
import twitter from "./Image/twitter.svg";
import youtube from "./Image/youtube.svg";
import instagram from "./Image/instagram.svg";
import discord from "./Image/discord.svg";

function App() {
  return (
    <div class="whole">
      <div className="nave">
        <div>
          <img src={logo} alt="tech" />
        </div>
        <div className="second-header">
          <p>Home</p>
          <p>Courses</p>
          <p>Testimonial</p>
          <p>Community</p>
          <button className="enrol">Enroll Now</button>
        </div>
      </div>

      <div className="first">
        <div>
          <h3>
            <p>
              <strong>
                {" "}
                Grow your skills to <br></br> to advance your career<br></br>
                path
              </strong>
            </p>
          </h3>
          <p>
            Build Your Future With Our Quality Education. The Best And Largest
            All-In-One Online Tutoring <br></br>Platform In The World
          </p>
          <button>Get Started Now </button> <button>Enroll Now</button>
          <img src={mappedUsers} alt="users" /> 225k+ Preview
        </div>
        <div className="hero">
          <img src={hero1} alt="hero" />
        </div>
      </div>

      <section>
        <div>
          <img src={zoom} alt="zoom" />
        </div>
        <div>
          <img src={stripe} alt="stripe" />
        </div>
        <div>
          <img src={monday} alt="monday" />
        </div>
        <div>
          <img src={slack} alt="slack" />
        </div>
        <div>
          <img src={dropbox} alt="dropbox" />
        </div>
      </section>

      <div class="second">
        <div>
          <h2>
            <strong>High quality video, audio & live classes</strong>
          </h2>

          <p>
            High-Definition Video Is Video Of Higher Resolution And Quality Than
            Standard<br></br> Definition. While There’s No Standard Meaning For
            High Definition, Generally <br></br>Any Standard Video Image
          </p>
          <button>
            <a href="/View Courses/">View Course</a>
          </button>

          <div>
            <image src={frame1} alt="frame1" Audio Classes />{" "}
            <image src={frame3} alt="frame3" Recorded Classes />
          </div>
          <div>
            <image src={frame2} alt="frame2" Live Classes />{" "}
            <image src={frame4} alt="frame4" />
            <p>
              50+ <br></br>Note
            </p>
          </div>
        </div>

        <div>
          <img src={mappedUsers} alt="Users" />
          <img src={hero2} alt="hero2" />
        </div>
      </div>

      <div className="third">
        <div>
          <h2> This Is Why We Are Best From Others</h2>
          <p>
            High-Definition Video Is Video Of Higher Resolution And Quality Than
            Standard<br></br> Definition. While There’s No Standard Meaning For
            High Definition, Generally <br></br>Any Standard Video Image
          </p>
          <img src={hero3} alt="hero3" />
        </div>

        <div>
          <img src={frame5} alt="frame5" />
          <h3>Experienced Mentors</h3>
          <p>
            High-Definition Video Is Video Of<br></br> Higher Resolution And
            Quality<br></br>Than Standard Definition.<br></br> High-Definition
            Video Is Video Of Higher Resolution<br></br> And Quality Than
            Standard Definition.
          </p>

          <img src={frame6} alt="frame6" />
          <h3>One-On-One Meetings</h3>
          <p>
            High-Definition Video Is Video Of<br></br> Higher Resolution And
            Quality
            <br></br>Than Standard Definition.<br></br> High-Definition Video Is
            Video Of Higher Resolution<br></br> And Quality Than Standard
            Definition.
          </p>
        </div>

        <div>
          <img src={frame7} alt="frame7" />
          <h3>One-On-One Meetings</h3>
          <p>
            High-Definition Video Is Video Of<br></br> Higher Resolution And
            Quality
            <br></br>Than Standard Definition.<br></br> High-Definition Video Is
            Video Of Higher Resolution<br></br> And Quality Than Standard
            Definition.
          </p>

          <img src={frame8} alt="frame8" />
          <h3>Affordable Prices</h3>
          <p>
            High-Definition Video Is Video Of<br></br> Higher Resolution And
            Quality
            <br></br>Than Standard Definition.<br></br> High-Definition Video Is
            Video Of Higher Resolution<br></br> And Quality Than Standard
            Definition.
          </p>
        </div>
      </div>

      <div className="title">
        <h1>Browse Our Popular Courses</h1>
        <p>
          High-Definition Video Is Video Of Higher Resolution And QualityThan
          Standard<br></br> Definition. While There’s No Standard Meaning For
          High Definition, Generally <br></br>Any Standard Video Image
        </p>
        <button>
          <a href="/All Categories/">All Categories</a>{" "}
        </button>{" "}
        <button>
          {" "}
          <a href="/Design/">Design</a>
        </button>{" "}
        <button>
          {" "}
          <a href="/Development/">Development</a>
        </button>{" "}
        <button>
          <a href="/Marketing/">Marketing</a>
        </button>
      </div>

      <div className="fourth">
        <img src={Catty1} alt="catty" />
        <div>
          <button>
            <a href="/Design/">Design</a> 4.7k (32.7k+)
          </button>
        </div>
        <p>
          Introduction To User Research<br></br> In Ux Design
        </p>
        <div>
          <img src={cardProfile1} alt="CardProfile1" /> $15.00
        </div>
        <img src={Catty2} alt="catty" />
        <div>
          <button>
            <a href="/Marketing/">Marketing</a> 8.7k (32.7k+)
          </button>
        </div>
        <p>
          Introduction To New<br></br> Marketing Audience
        </p>
        <img src={cardProfile2} alt="CardProfile2" /> $32.00
        <img src={Catty3} alt="catty" />
        <div>
          <button>
            <a href="/Development/">Development</a>
          </button>
        </div>
        <p>
          Introduction To Html, Css &<br></br> Bootstrap
        </p>
        <img src={cardProfile3} alt="CardProfile3" />
      </div>
      <div className="fifth">
        <img src={Catty4} alt="catty" />
        <div>
          <button>
            <a href="/Development/">Development</a>
          </button>
        </div>
        <p>
          Introduction To Javascript,<br></br> Git & GitHub
        </p>
        <img src={cardProfile4} alt="CardProfile4" />

        <img src={Catty5} alt="catty" />
        <div>
          <button>
            <a href="/Marketing/">Marketing</a>
          </button>
        </div>
        <p>
          Introduction To Out room<br></br> Marketing Analysis
        </p>
        <img src={cardProfile5} alt="CardProfile5" />

        <img src={Catty6} alt="catty" />
        <div>
          <button>
            <a href="/Marketing/">Marketing</a>
          </button>
        </div>
        <p>
          Introduction To Live<br></br> Marketing Analysis
        </p>
        <img src={cardProfile6} alt="CardProfile6" />
      </div>
      <div className=" fourth-button">
        <button>
          <a href="/Explore All Courses/">Explore All Courses</a>
        </button>
      </div>

      <div className="sixth">
        <h1>What Our Clients Are Saying</h1>
        <p>
          High-Definition Video Is Video Of Higher Resolution And Quality Than
          Standard Definition. While<br></br> There’s No Standard Meaning For
          High Definition, Generally Any Standard Video Image
        </p>
      </div>
      <div className="six">
        <div>
          <p>
            High-Definition Video Is Video Of Higher Resolution And Quality
            <br></br> Than Standard Definition. High-Definition Video Is Video
            Of
            <br></br> Higher Resolution And Quality Than Standard Definition.
            Build<br></br> Your Future With Our Quality Education. The Best And
            Largest<br></br> All-In-One Online Tutoring Platform In The World
            Definition.
            <br></br>
            High-Definition Video Is Video Of Higher Resolution And Quality
            <br></br> Than Standard Definition. Build Your Future With Our
            Quality
            <br></br> Education. The Best And Largest All-In-One Online Tutoring
            <br></br> Platform In The World
          </p>
        </div>
        <img src={carouse1} alt="carouse1" />
        <div>
          <p>
            High-Definition Video Is Video Of Higher Resolution And Quality
            <br></br> Than Standard Definition. High-Definition Video Is Video
            Of
            <br></br> Higher Resolution And Quality Than Standard Definition.
            Build<br></br> Your Future With Our Quality Education. The Best And
            Largest<br></br> All-In-One Online Tutoring Platform In The World
            Definition.<br></br>
            High-Definition Video Is Video Of Higher Resolution And Quality
            <br></br> Than Standard Definition. Build Your Future With Our
            Quality
            <br></br> Education. The Best And Largest All-In-One Online Tutoring
            <br></br> Platform In The World
            <img src={carouse2} alt="carouse2" />
          </p>
        </div>
        <div>
          <p>
            High-Definition Video Is Video Of Higher Resolution And Quality
            <br></br> Than Standard Definition. High-Definition Video Is Video
            Of
            <br></br> Higher Resolution And Quality Than Standard Definition.
            Build<br></br> Your Future With Our Quality Education. The Best And
            Largest<br></br> All-In-One Online Tutoring Platform In The World
            Definition.
            <br></br>
            High-Definition Video Is Video Of Higher Resolution And Quality
            <br></br> Than Standard Definition. Build Your Future With Our
            Quality
            <br></br> Education. The Best And Largest All-In-One Online Tutoring
            <br></br> Platform In The World
            <img src={carouse3} alt="carouse3" />
          </p>
        </div>
      </div>

      <div className="seven">
        <div className="community">
          <p>Join Our Community</p>
          <h1>
            Are You Ready To Connect With The<br></br> Future Talent Of The Tech
            World
          </h1>
          <p>Meet Up With Other Tech Stars And Grow Together</p>
          <img src={community} alt="community" />
        </div>
        <button>
          <a href="/Join Our Community/">Join Our Community</a>
        </button>
      </div>

      <div className="Question">
        <div className="asked questions">
          <h1>Frequently Asked Questions</h1>
          <p>
            High-Definition Video Is Video Of Higher Resolution And Quality Than
            Standard<br></br> Definition. While There’s No Standard Meaning For
            High Definition, Generally Any
            <br></br>
            Standard Video Image
          </p>
        </div>
        <div>
          <h2>
            <strong>Is There A Free Trial Available? </strong>
          </h2>
          <hr></hr>
          <h2>
            <strong>Is There A Free Trial Available? </strong>
          </h2>
          <hr></hr>
          <h2>
            <strong>Do I Get Certified After Taking Courses?</strong>
          </h2>
          <hr></hr>
          <h2>
            <strong>How Do I Reach Out To Mentors?</strong>
          </h2>
          <hr></hr>
          <h2>
            <strong>Do We Get Job Ready After Taking Courses?</strong>
          </h2>
          <hr></hr>
        </div>
      </div>
      <footer>
        <div class="footer">
          <div class="bottom">
            <img src={logo2} alt="logo2" />
            <p>
              Reach Out To Us On Any Of Our Social<br></br> Media Networks
            </p>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
            <img src={instagram} alt="instagram" />
            <img src={discord} alt="discord" />
          </div>

          <div>
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="/Home/">Home</a>
              </li>
              <li>
                <a href="/About Us/">About Us</a>
              </li>
              <li>
                <a href="/Our Courses/">Our Courses</a>
              </li>
              <li>
                <a href="/Testimonial/">Testimonial</a>
              </li>
              <li>
                <a href="/Our Community/">Our Community</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Community</h4>
            <ul>
              <li>
                <a href="/Help Center/">Help Center</a>
              </li>
              <li>
                <a href="/Partners/">Partners</a>
              </li>
              <li>
                <a href="/Suggestion/">Suggestion</a>
              </li>
              <li>
                <a href="/Blog/">Blog</a>
              </li>
              <li>
                <a href="/Newsletter/">Newsletter</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Subscribe Us</h4>
            <button>
              <a href="/nft123@gmail.com/">nft123@gmail.com</a>
            </button>
            <button>
              <a href="/Send Message/">Send Message</a>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
