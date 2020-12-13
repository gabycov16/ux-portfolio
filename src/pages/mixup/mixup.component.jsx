import React from "react";
import "./mixup.styles.scss";
import Header from "../../components/header/header.component";
import Banner from "../../assets/mixup/banner4.png";
import DesignProcess from "../../assets/mixup/design-process.png";
import Persona from "../../assets/mixup/persona.png";
import CustomerJourney from "../../assets/mixup/customerjourney.png";
import SuccessRate from "../../assets/success-rate-mixup.png";
import SuccessRateAfter from "../../assets/mixup/success-rate-after.png";
import Star from "../../assets/green-star.svg";
import StarVoid from "../../assets/green-star-void.svg";
import ProblemSpots from "../../assets/problem-spots.png";
import Matrix2x2 from "../../assets/mixup/2x2 analysis matrix.png";
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

const Mixup = props => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <div className="body">
        <img src={Banner} className="banner" alt=""></img>
        <p className="cs-title">Overview</p>
        <p className="cs-paragraph">
          Not so long ago Mixup was a high-ranking music and technology
          enterprise. Everyday people relied first on Mixup to buy their
          favourite CDs and vinyls, among other things.
        </p>
        <p className="cs-paragraph">
          One day, important competitors took over the preference from the users
          but Mixup still had something to offer. The main problem was clients
          got a lot of confusions when they tried to buy something from the
          website and many times they got stuck.
        </p>
        <p className="cs-paragraph">
          Here I will carry out a usability test for the Mixup e-commerce and
          give a possible solution for users to go through these transitions as
          smoothly as possible.
        </p>
        <img src={DesignProcess} className="design-process" alt=""></img>
        <p className="cs-title">1. Empathise</p>
        <p className="cs-paragraph">
          To undertake this project I first walked in the shoes of people who
          would like to buy in Mixup.
        </p>
        <p className="cs-paragraph">
          Thus, I created a "persona", to represent the target group, and their
          customer journey.
        </p>

        <p className="cs-subtitle">Persona</p>
        <img src={Persona} className="persona" alt=""></img>
        <p className="cs-subtitle">Customer Journey</p>
        <img
          src={CustomerJourney}
          className="cs-image"
          alt="Customer journey"
        ></img>
        <p className="cs-title">2. Test</p>
        <p className="cs-paragraph">
          After analysing the business and users' objectives I prioritized the
          important areas to focus on.
        </p>
        <ul className="cs-paragraph">
          <li>Number of tasks per test: 9.</li>
          <li>
            Users recruited: 7. (This was based on psychographics and some
            demographics).
          </li>
        </ul>
        <div className="quote">
          <p>"It looks weird, I don’t know if I can trust it."</p>
        </div>
        <p className="cs-subtitle">Post-Test Questionnair Results</p>

        <p className="cs-paragraph-q">
          Finding your favourite music genre was:
        </p>
        <div className="stars">
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
        </div>
        <p className="cs-paragraph-q">
          How easy was it to navigate the website?
        </p>
        <div className="stars">
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
          <img src={StarVoid} className="star" alt=""></img>
        </div>
        <p className="cs-paragraph-q">
          If you had to keep one thing and delete the rest, what would it be?
        </p>
        <p className="quote-response">
          “The animation when you add a product to the shopping cart”
        </p>
        <p className="cs-paragraph-q">
          If you had to delete one thing and keep the rest, what would it be?
        </p>
        <p className="quote-response">
          <ul className="">
            <li>“The Sales button”</li>
            <li>“The multiple options given”</li>
            <li>“The menu All the categories”</li>
          </ul>
        </p>
        <p className="cs-paragraph-q">Would you use this website again?</p>
        <p className="quote-response">
          <ul className="">
            <li>
              <a href="/" className="emphasis-bold">
                {"71% of users said “no”."}
              </a>
            </li>
            <li>28% of users said “they would if it was more beautiful”.</li>
          </ul>
        </p>
        <div className="quote">
          <p>“There are too many options”</p>
        </div>
        <p className="cs-subtitle">Errors & confusions</p>
        <div className="cs-paragraph">
          <ul className="">
            <li>5/7 of users didn’t find their desired music genre.</li>
            <li>3/7 of users went to the shopping cart to save an item.</li>
            <li>
              6/7 of users looked for discounts on the header and did not find
              them.
            </li>
          </ul>
        </div>
        <p className="cs-subtitle">Success Rate</p>
        <p className="cs-paragraph-q">How many users finished the task?</p>
        <img src={SuccessRate} className="cs-image" alt="Mixup persona"></img>

        <div className="quote">
          <p>“You need to be familiarised with it to know how to navigate”</p>
        </div>
        <p className="cs-title">3. Define</p>
        <p className="cs-paragraph">
          Once I carried out the test in a group of people and empathised with
          them, it was time to delineate the user’s needs, their problems and
          the insights.
        </p>
        <p className="cs-subtitle">Main Challenges</p>
        <p className="cs-paragraph">
          The webpage is
          <a href="/" className="emphasis-bold">
            {" difficult "}
          </a>
          as well as
          <a href="/" className="emphasis-bold">
            {" confusing "}
          </a>
          for any user, experimented or not.
        </p>
        <p className="cs-paragraph">
          It is
          <a href="/" className="emphasis-bold">
            {" cluttered "}
          </a>
          with options to choose from, (specially in the header), which leads to
          an
          <a href="/" className="emphasis-bold">
            {" unfriendly amount of time "}
          </a>
          of guessing where the desired product is.
        </p>
        <img src={ProblemSpots} className="persona" alt=""></img>
        <p className="cs-subtitle">2x2 Analysis</p>

        <p className="cs-paragraph">
          After analysing the possible tasks in the customer journey I narrowed
          what was more important for the users and for Mixup to improve.
        </p>
        <img src={Matrix2x2} className="persona" alt=""></img>
        <ul className="cs-paragraph">
          <li>
            Redefine the
            <a href="/" className="emphasis-bold">
              {" aesthetics"}
            </a>
            .
          </li>
          <li>
            <a href="/" className="emphasis-bold">
              {"Reduce "}
            </a>
            the categories.
          </li>
          <li>
            Redefine the
            <a href="/" className="emphasis-bold">
              {" aesthetics"}
            </a>
            .
          </li>
          <li>
            Add the option to
            <a href="/" className="emphasis-bold">
              {" register "}
            </a>{" "}
            in a single click with
            <a href="/" className="emphasis-bold">
              {" Google "}
            </a>{" "}
            or Facebook.
          </li>
          <li>
            Show
            <a href="/" className="emphasis-bold">
              {" more music genres"}
            </a>
            .
          </li>
        </ul>
        <p className="cs-title">4. Ideate</p>
        <p className="cs-paragraph">
          Before I started creating the low-fi prototypes I regrouped the
          categories into more friendly ones (from 13 to 6), enabling the user
          to dive into their product search without trouble.
        </p>

        <p className="cs-subtitle">High-Fidelity Prototype</p>
        <p className="cs-paragraph">
          Once I had the page structure and the content organisation, I made
          some close-up magic to turn my scribbles into something lovely to the
          eye…
        </p>
        <img src={Blueish} className="cs-image" alt=""></img>
        <p className="cs-subtitle">Retrospectives</p>
        <p className="cs-paragraph">
          The path through this journey has been a vital and educational
          experience so far.
        </p>
        <p className="cs-paragraph">
          Aiming to increase the usability I focused on…
        </p>
        <p className="cs-paragraph">
          <ul className="">
            <li>
              How quickly a user could
              <a href="/" className="emphasis-bold">
                {" buy a product"}
              </a>
              .
            </li>
            <li>
              How fast could someone
              <a href="/" className="emphasis-bold">
                {" find "}
              </a>
              what they are looking for.
            </li>
            <li>
              Can a person who is not familiarised with e-commerces
              <a href="/" className="emphasis-bold">
                {" walk smoothly to the checkout "}
              </a>
              stage?.
            </li>
            <li>
              What can I do to make the person{" "}
              <a href="/" className="emphasis-bold">
                {" feel welcomed?."}
              </a>
            </li>
          </ul>
        </p>
        <p className="cs-paragraph">
          I could simply assume my design decisions were the right ones, but it
          would not have fulfilled my
          <a href="/" className="emphasis-bold">
            {" curiosity "}
          </a>{" "}
          to know
          <a href="/" className="emphasis-bold">
            {" how would users interact with it "}
          </a>
          , and I could as well be biased.
        </p>
        <p className="cs-paragraph">
          For this reason why I decided to test it on 7 more users.
        </p>
        <p className="cs-title">Results</p>
        <p className="cs-subtitle">Success Rate Before & After Redesigning</p>
        <img src={SuccessRateAfter} className="cs-image" alt=""></img>
        <p className="cs-subtitle">Home Page</p>
        <p className="emphasis">Before</p>
        <img
          src={BeforeHomepage}
          className="cs-image"
          alt="Ecolife persona"
        ></img>
        <p className="emphasis">After</p>
        <img
          src={AfterHomepage}
          className="cs-image"
          alt="Ecolife persona"
        ></img>
        <p className="cs-paragraph">
          <ul>
            <li>
              I rearranged the
              <a href="/" className="emphasis-bold">
                {" categories "}
              </a>
              to simplify the search.
            </li>
            <li>
              The
              <a href="/" className="emphasis-bold">
                {" slideshow "}
              </a>
              is more
              <a href="/" className="emphasis-bold">
                {" accesible "}
              </a>
              and I erased those buttons that were easily found within the
              categories or below the slideshow.
            </li>
            <li>
              I added a one-colour background to the header to
              <a href="/" className="emphasis-bold">
                {" contrast "}
              </a>
              it with the rest of the site and add
              <a href="/" className="emphasis-bold">
                {" consistency"}
              </a>
              .
            </li>
            <li>
              <a href="/" className="emphasis-bold">
                {"Center stage"}
              </a>
              : to help users
              <a href="/" className="emphasis-bold">
                {" focus their attention "}
              </a>
              on what is important for them.
            </li>
            <li>
              <a href="/" className="emphasis-bold">
                {"Search box"}
              </a>
              : I placed it in the middle and top of the header so the users
              could find it easier.
            </li>
          </ul>
        </p>
        <p className="cs-subtitle">Music Genres' Menu</p>
        <p className="emphasis">Before</p>

        <img
          src={BeforeMusicGenres}
          className="cs-image-b"
          alt="Ecolife persona"
        ></img>
        <p className="emphasis"> After </p>
        <img
          src={AfterMusicGenres}
          className="cs-image"
          alt="Ecolife persona"
        ></img>
        <p className="cs-paragraph">
          <ul>
            <li>
              I
              <a href="/" className="emphasis-bold">
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
        <p className="cs-subtitle">CDs & Vinyls</p>
        <div className="emphasis">Before</div>
        <img src={BeforeCDs} className="cs-image" alt="Ecolife persona"></img>
        <div className="emphasis">After</div>
        <img src={AfterCDs} className="cs-image" alt="Ecolife persona"></img>

        <p className="cs-paragraph">
          <ul>
            <li>
              In order to
              <a href="/" className="emphasis-bold">
                {" give more freedom to the user "}
              </a>
              I implemented a
              <a href="/" className="emphasis-bold">
                {" navigation bar "}
              </a>
              in the right side. Here I placed a “PRIDE” tab to attract the
              LGBT+ community during June.
            </li>
            <li>
              It is possible that users would like to look for a specific album
              title, to
              <a href="/" className="emphasis-bold">
                {" facilitate the task "}
              </a>
              I added a
              <a href="/" className="emphasis-bold">
                {" search box "}
              </a>
              with the hint “Search an album”.
            </li>
            <li>
              I decided to include
              <a href="/" className="emphasis-bold">
                {" pagination"}
              </a>
              , this way the user
              <a href="/" className="emphasis-bold">
                {" wouldn’t feel overwhelmed  "}
              </a>
              by the amount of information in one single page.
            </li>
            <li>
              To
              <a href="/" className="emphasis-bold">
                {" reduce the amount of clicks "}
              </a>
              o buy something I put in each product a button to add to the
              shopping cart and another to save to Wish-List
            </li>
          </ul>
        </p>
        <p className="cs-subtitle">Sign In</p>
        <div className="emphasis">Before</div>
        <img
          src={BeforeSignIn}
          className="cs-image"
          alt="Ecolife persona"
        ></img>
        <div className="emphasis">After</div>
        <img src={AfterSignIn} className="cs-image" alt="Ecolife persona"></img>
        <p className="quote-response text-column">
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
        <p className="cs-subtitle">Register</p>
          <div className="emphasis">
            Before
            
          </div>
          <img
              src={BeforeRegister}
              className="cs-image"
              alt="Ecolife persona"
            ></img>
          <div className="emphasis">
            After
            
          </div>
          <img
              src={AfterRegister}
              className="cs-image"
              alt="Ecolife persona"
            ></img>
        <p className="cs-paragraph">
          Filling forms can be tedious, reducing the steps to a couple per
          screen helped to be undemanding.
        </p>
        <p className="cs-subtitle">Checkout</p>
        <div className="cs-image">
          <div className="emphasis">
            Before
            <img
              src={BeforeCheckout}
              className="cs-image"
              alt="Ecolife persona"
            ></img>
          </div>
          <div className="emphasis">
            After
            <img
              src={AfterCheckout}
              className="cs-image"
              alt="Ecolife persona"
            ></img>
          </div>
        </div>
        <p className="cs-paragraph">
          I decided to minimise the number of elements when checking out while
          being
          <a href="/" className="emphasis-bold">
            {" transparent "}
          </a>
          with the information. This way the users can focus on what is
          important for them
        </p>

        <p className="cs-title">Reflections & Lessons</p>
        <p className="cs-paragraph">
          The redesigned webpage had a usability
          <a href="/" className="emphasis-bold">
            {" improvement of 28.16% "}
          </a>
          . When all the options shown to the users are displayed at once, they
          <a href="/" className="emphasis-bold">
            {" spend a lot of energy "}
          </a>
          to scan the page.
        </p>
        <p className="cs-paragraph">
          This was the first time I carried out a UX project. As I went by I
          tried not to obstruct my creativity by observing and developing
          <a href="/" className="emphasis-bold">
            {" empathy "}
          </a>
          with the target user.
        </p>
        <p className="cs-paragraph">
          However, not everything was rainbows and unicorns. While I was
          applying the usability tests I discovered I made a mistake linking one
          scenario to another because this stops the user to continue with the
          linked tasks.
        </p>
        <p className="cs-paragraph">
          With this project I vindicated the main focus is the{" "}
          <a href="/" className="emphasis-bold">
            {" human-centric approach "}
          </a>
          , as we are creating to help them achieve their tasks with the minimum
          effort possible. I am looking forward to expand my knowledge and
          creativity as I continue to work on different UX puzzles.
        </p>
        <div style={{ height: "2rem" }}></div>
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

export default Mixup;
