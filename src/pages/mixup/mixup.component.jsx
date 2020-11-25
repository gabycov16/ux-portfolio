import React from "react";
import "./mixup.styles.scss";
import Header from "../../components/header/header.component";
import Banner from "../../assets/mixup/banner4.png";
import DesignProcess from "../../assets/design-process-mixup.png";
import Persona from "../../assets/persona-mixup.png";
import CustomerJourney from "../../assets/customer-journey.png";
import SuccessRate from "../../assets/success-rate-mixup.png";
import SuccessRateAfter from "../../assets/mixup/success-rate-after.png";
import Star from "../../assets/green-star.svg";
import StarVoid from "../../assets/green-star-void.svg";
import ProblemSpots from "../../assets/problem-spots.png";
import Matrix2x2 from "../../assets/mixup/2x2 analysis matrix.png";
import MagicWand from "../../assets/magic-wand.png";
import BeforeHomepage from "../../assets/mixup/before-homepage.png";
import AfterHomepage from "../../assets/mixup/homepage.png";
import BeforeMusicGenres from "../../assets/mixup/before-genres.png";
import AfterMusicGenres from "../../assets/mixup/after-genres.png";
import BeforeCDs from "../../assets/mixup/before-cd-vinyl.png";
import AfterCDs from "../../assets/mixup/after-cd-vinyl.png";
import BeforeSignIn from "../../assets/mixup/before-signin.png";
import AfterSignIn from "../../assets/mixup/after-signin.png";
import BeforeRegister from "../../assets/mixup/before-register.png";
import AfterRegister from "../../assets/mixup/after-register.png";
import BeforeCheckout from "../../assets/mixup/before-checkout.png";
import AfterCheckout from "../../assets/mixup/after-checkout.png";
import Blueish from "../../assets/mixup/blueish.png";
import Conversation from "../../assets/conversation2.svg";

const Mixup = props => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <div className="body">
        <p className="title-name">Mixup:</p>
        <p className="title-alternative">Usability Testing · UX Design</p>
        <img src={Banner} className="banner" alt=""></img>
        <p className="section-title pad-container">Overview</p>
        <p className="text-e">
          Not so long ago Mixup was a high-ranking music and technology
          enterprise. Everyday people relied first on Mixup to buy their
          favourite CDs and vinyls, among other things.
        </p>
        <p className="text-e">
          One day, important competitors took over the preference from the users
          but Mixup still had something to offer. The main problem was clients
          got a lot of confusions when they tried to buy something from the
          website and many times they got stuck.
        </p>
        <p className="text-e">
          Here I will carry out a usability test for the Mixup e-commerce and
          give a possible solution for users to go through these transitions as
          smoothly as possible.
        </p>
        <p className="section-title pad-container">Design Process</p>
        <img src={DesignProcess} className="design-process" alt=""></img>
        <p className="section-title-a">Empathise</p>
        <p className="text-e">
          To undertake this project I first walked in the shoes of people who
          would like to buy in Mixup.
        </p>
        <p className="text-e">
          Thus, I created a "persona", to represent the target group, and their
          customer journey.
        </p>

        <p className="section-title pad-container">Persona</p>
        <img src={Persona} className="persona" alt=""></img>
        <p className="section-title pad-container">Customer Journey</p>
        <img
          src={CustomerJourney}
          className="persona"
          alt="Customer journey"
        ></img>
        <p className="section-title-a">Test</p>
        <p className="text-e">
          After analysing the business and users' objectives I prioritized the
          important areas to focus on.
        </p>
        <ul className="text-e">
          <li>Number of tasks per test: 9.</li>
          <li>
            Users recruited: 7. (This was based on psychographics and some
            demographics).
          </li>
        </ul>
        <div
          className="quote"
          style={{ backgroundImage: `url(${Conversation})` }}
        >
          <p>It looks weird, I don’t know if I can trust it.</p>
        </div>
        <p className="section-title pad-container">Post-Test Questionnair Results</p>

        <p className="text-e">Finding your favourite music genre was:</p>
        <div className="stars">
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
        </div>
        <p className="text-e">How easy was it to navigate the website?</p>
        <div className="stars">
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
        </div>
        <p className="text-e">
          If you had to keep one thing and delete the rest, what would it be?
        </p>
        <p className="response">
          “The animation when you add a product to the shopping cart”
        </p>
        <p className="text-e">
          If you had to delete one thing and keep the rest, what would it be?
        </p>
        <p className="response">
          <ul className="">
            <li>“The Sales button”</li>
            <li>“The multiple options given”</li>
            <li>“The menu All the categories”</li>
          </ul>
        </p>
        <p className="text-e">Would you use this website again?</p>
        <p className="response">
          <ul className="">
            <li>
              <a href="/" className="emphasis">
                {"71% of users said “no”."}
              </a>
            </li>
            <li>28% of users said “they would if it was more beautiful”.</li>
          </ul>
        </p>
        <div
          className="quote"
          style={{ backgroundImage: `url(${Conversation})` }}
        >
          <p>“There are too many options”</p>
        </div>
        <p className="section-title pad-container">Errors & confusions</p>
        <div className="text-e">
          <ul className="">
            <li>5/7 of users didn’t find their desired music genre.</li>
            <li>3/7 of users went to the shopping cart to save an item.</li>
            <li>
              6/7 of users looked for discounts on the header and did not find
              them.
            </li>
          </ul>
        </div>
        <p className="section-title pad-container">Success Rate</p>
        <p className="subtitle2">How many users finished the task?</p>
        <img src={SuccessRate} className="persona" alt="Mixup persona"></img>

        <div
          className="quote"
          style={{ backgroundImage: `url(${Conversation})` }}
        >
          <p>“You need to be familiarised with it to know how to navigate”</p>
        </div>
        <p className="section-title-a">Define</p>
        <p className="text-e">
          Once I carried out the test in a group of people and empathised with
          them, it was time to delineate the user’s needs, their problems and
          the insights.
        </p>
        <p className="section-title pad-container">Main Challenges</p>
        <p className="text-e">
          The webpage is
          <a href="/" className="emphasis">
            {" difficult "}
          </a>
          as well as
          <a href="/" className="emphasis">
            {" confusing "}
          </a>
          for any user, experimented or not.
        </p>
        <p className="text-e">
          It is
          <a href="/" className="emphasis">
            {" cluttered "}
          </a>
          with options to choose from, (specially in the header), which leads to
          an
          <a href="/" className="emphasis">
            {" unfriendly amount of time "}
          </a>
          of guessing where the desired product is.
        </p>
        <img src={ProblemSpots} className="persona" alt=""></img>
        <p className="section-title pad-container">2x2 Analysis</p>

        <p className="text-e">
          After analysing the possible tasks in the customer journey I narrowed
          what was more important for the users and for Mixup to improve.
        </p>
        <img src={Matrix2x2} className="persona" alt=""></img>
        <ul className="text-e">
          <li>
            Redefine the
            <a href="/" className="emphasis">
              {" aesthetics"}
            </a>
            .
          </li>
          <li>
            <a href="/" className="emphasis">
              {"Reduce "}
            </a>
            the categories.
          </li>
          <li>
            Redefine the
            <a href="/" className="emphasis">
              {" aesthetics"}
            </a>
            .
          </li>
          <li>
            Add the option to
            <a href="/" className="emphasis">
              {" register "}
            </a>{" "}
            in a single click with
            <a href="/" className="emphasis">
              {" Google "}
            </a>{" "}
            or Facebook.
          </li>
          <li>
            Show
            <a href="/" className="emphasis">
              {" more music genres"}
            </a>
            .
          </li>
        </ul>
        <p className="section-title-a">Ideate</p>
        <p className="text-e">
          Before I started creating the low-fi prototypes I regrouped the
          categories into more friendly ones (from 13 to 6), enabling the user
          to dive into their product search without trouble.
        </p>

        <p className="section-title pad-container">High-Fidelity Prototype</p>
        <div className="image-text-horizontal">
          <img src={MagicWand} className="magic-wand" alt=""></img>
          <p className="text-i">
            Once I had the page structure and the content organisation, I made
            some close-up magic to turn my scribbles into something lovely to
            the eye…
          </p>
        </div>
        <img src={Blueish} className="persona" alt=""></img>
        <p className="section-title pad-container">Retrospectives</p>
        <p className="text-e">
          The path through this journey has been a vital and educational
          experience so far.
        </p>
        <p className="text-e">Aiming to increase the usability I focused on…</p>
        <p className="response">
          <ul className="">
            <li>
              How quickly a user could
              <a href="/" className="emphasis">
                {" buy a product"}
              </a>
              .
            </li>
            <li>
              How fast could someone
              <a href="/" className="emphasis">
                {" find "}
              </a>
              what they are looking for.
            </li>
            <li>
              Can a person who is not familiarised with e-commerces
              <a href="/" className="emphasis">
                {" walk smoothly to the checkout "}
              </a>
              stage?.
            </li>
            <li>
              What can I do to make the person{" "}
              <a href="/" className="emphasis">
                {" feel welcomed?."}
              </a>
            </li>
          </ul>
        </p>
        <p className="text-e">
          I could simply assume my design decisions were the right ones, but it
          would not have fulfilled my
          <a href="/" className="emphasis">
            {" curiosity "}
          </a>{" "}
          to know
          <a href="/" className="emphasis">
            {" how would users interact with it "}
          </a>
          , and I could as well be biased.
        </p>
        <p className="text-e">
          For this reason why I decided to test it on 7 more users.
        </p>
        <p className="section-title-a">Results</p>
        <p className="section-title pad-container">Success Rate Before & After Redesigning</p>
        <img src={SuccessRateAfter} className="persona" alt=""></img>
        <p className="section-title pad-container">Home Page</p>
        <div className="personas">
          <div className="cont">
            BEFORE
            <img
              src={BeforeHomepage}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
          <div className="cont">
            AFTER
            <img
              src={AfterHomepage}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
        </div>
        <p className="response">
          <ul className="text-column">
            <li>
              I rearranged the
              <a href="/" className="emphasis">
                {" categories "}
              </a>
              to simplify the search.
            </li>
            <li>
              The
              <a href="/" className="emphasis">
                {" slideshow "}
              </a>
              is more
              <a href="/" className="emphasis">
                {" accesible "}
              </a>
              and I erased those buttons that were easily found within the
              categories or below the slideshow.
            </li>
            <li>
              I added a one-colour background to the header to
              <a href="/" className="emphasis">
                {" contrast "}
              </a>
              it with the rest of the site and add
              <a href="/" className="emphasis">
                {" consistency"}
              </a>
              .
            </li>
            <li>
              <a href="/" className="emphasis">
                {"Center stage"}
              </a>
              : to help users
              <a href="/" className="emphasis">
                {" focus their attention "}
              </a>
              on what is important for them.
            </li>
            <li>
              <a href="/" className="emphasis">
                {"Search box"}
              </a>
              : I placed it in the middle and top of the header so the users
              could find it easier.
            </li>
          </ul>
        </p>
        <p className="section-title pad-container">Music Genres' Menu</p>
        <div className="personas">
          <div className="cont">
            BEFORE
            <img
              src={BeforeMusicGenres}
              className="smaller-image"
              alt="Ecolife persona"
            ></img>
          </div>
          <div className="cont">
            AFTER
            <img
              src={AfterMusicGenres}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
        </div>
        <p className="response">
          <ul className="text-column">
            <li>
              I
              <a href="/" className="emphasis">
                {" restructured "}
              </a>
              the sub-categories, sorting them by most clicked genres, (in this
              case), and added space between each of them.
            </li>
            <li>
              At the end of the sub-categories I decided to place a “MORE…”
              option, this way users could keep looking for what they are
              searching for if they hadn’t found it yet.
            </li>
          </ul>
        </p>
        <p className="section-title pad-container">CDs & Vinyls</p>
        <div className="personas">
          <div className="cont">
            BEFORE
            <img
              src={BeforeCDs}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
          <div className="cont">
            AFTER
            <img src={AfterCDs} className="persona" alt="Ecolife persona"></img>
          </div>
        </div>
        <p className="response">
          <ul className="text-column">
            <li>
              In order to
              <a href="/" className="emphasis">
                {" give more freedom to the user "}
              </a>
              I implemented a
              <a href="/" className="emphasis">
                {" navigation bar "}
              </a>
              in the right side. Here I placed a “PRIDE” tab to attract the
              LGBT+ community during June.
            </li>
            <li>
              It is possible that users would like to look for a specific album
              title, to
              <a href="/" className="emphasis">
                {" facilitate the task "}
              </a>
              I added a
              <a href="/" className="emphasis">
                {" search box "}
              </a>
              with the hint “Search an album”.
            </li>
            <li>
              I decided to include
              <a href="/" className="emphasis">
                {" pagination"}
              </a>
              , this way the user
              <a href="/" className="emphasis">
                {" wouldn’t feel overwhelmed  "}
              </a>
              by the amount of information in one single page.
            </li>
            <li>
              To
              <a href="/" className="emphasis">
                {" reduce the amount of clicks "}
              </a>
              o buy something I put in each product a button to add to the
              shopping cart and another to save to Wish-List
            </li>
          </ul>
        </p>
        <p className="section-title pad-container">Sign In</p>
        <div className="personas">
          <div className="cont">
            BEFORE
            <img
              src={BeforeSignIn}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
          <div className="cont">
            AFTER
            <img
              src={AfterSignIn}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
        </div>
        <p className="response text-column">
          I know how important it is for users to
          <a href="/" className="emphasis">
            {" return as soon as possible "}
          </a>
          to what they were doing, this is the reason I decided to use a
          <a href="/" className="emphasis">
            {" modal "}
          </a>
          to sign in and register. This way when they are finished the modal
          would close and the current page wouldn’t change.
        </p>
        <p className="section-title pad-container">Register</p>
        <div className="personas">
          <div className="cont">
            BEFORE
            <img
              src={BeforeRegister}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
          <div className="cont">
            AFTER
            <img
              src={AfterRegister}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
        </div>
        <p className="response text-column">
          Filling forms can be tedious, reducing the steps to a couple per
          screen helped to be undemanding.
        </p>
        <p className="section-title pad-container">Checkout</p>
        <div className="personas">
          <div className="cont">
            BEFORE
            <img
              src={BeforeCheckout}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
          <div className="cont">
            AFTER
            <img
              src={AfterCheckout}
              className="persona"
              alt="Ecolife persona"
            ></img>
          </div>
        </div>
        <p className="response text-column">
          I decided to minimise the number of elements when checking out while
          being
          <a href="/" className="emphasis">
            {" transparent "}
          </a>
          with the information. This way the users can focus on what is
          important for them
        </p>

        <p className="section-title-a">Reflections & Lessons</p>
        <p className="text-e">
          The redesigned webpage had a usability
          <a href="/" className="emphasis">
            {" improvement of 28.16% "}
          </a>
          . When all the options shown to the users are displayed at once, they
          <a href="/" className="emphasis">
            {" spend a lot of energy "}
          </a>
          to scan the page.
        </p>
        <p className="text-e">
          This was the first time I carried out a UX project. As I went by I
          tried not to obstruct my creativity by observing and developing
          <a href="/" className="emphasis">
            {" empathy "}
          </a>
          with the target user.
        </p>
        <p className="text-e">
          However, not everything was rainbows and unicorns. While I was
          applying the usability tests I discovered I made a mistake linking one
          scenario to another because this stops the user to continue with the
          linked tasks.
        </p>
        <p className="text-e">
          With this project I vindicated the main focus is the{" "}
          <a href="/" className="emphasis">
            {" human-centric approach "}
          </a>
          , as we are creating to help them achieve their tasks with the minimum
          effort possible. I am looking forward to expand my knowledge and
          creativity as I continue to work on different UX puzzles.
        </p>
        <div style={{height: "2rem"}}></div>
      </div>
      
    </div>
    <div className="overlay"></div>
  </div>
);

export default Mixup;
