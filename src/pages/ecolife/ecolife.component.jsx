import React from "react";
import { withRouter} from 'react-router-dom';
import "./ecolife.styles.scss";
import Header from "../../components/header/header.component";
import HorizontalImage from "../../assets/ecolife/banner.png";
import DesignProcess from "../../assets/design-process-ecolife.png";
import Persona1 from "../../assets/persona1-ecolife.png";
import Persona2 from "../../assets/persona2-ecolife.png";
import StoryBoard from "../../assets/story-board.jpg";
import LowFi from "../../assets/ecolife/low-fi.jpg";
import CardSort from "../../assets/card-sorting.jpg";
import MagicWand from "../../assets/magic-wand.png";
import Conversation from "../../assets/conversation2.svg";
import Greenie from "../../assets/ecolife/greenie.png";
import Mejoras from "../../assets/ecolife/mejoras.png";
import Star from "../../assets/green-star.svg";
import Misiones from "../../assets/ecolife/misiones.png";
import Logros from "../../assets/ecolife/logros.png";
import Tutoriales from "../../assets/ecolife/tutoriales.png";
import EcoWisdom from "../../assets/ecolife/ecowisdom.png";
import Settings from "../../assets/ecolife/settings.png";
import Tutorial from "../../assets/ecolife/tutorial.png";

const Ecolife = props => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <div className="body">
        <p className="title-name">Ecolife:</p>
        <p className="title-alternative">UX Redesign</p>
        <img src={HorizontalImage} className="banner" alt=""></img>
        <p className="text-app-description">
          <a href="/" className="emphasis">
            {"Ecolife "}
          </a>
          is a mobile app that helps people develop
          <a href="/" className="emphasis">
            {" green habits "}
          </a>
          through missions and tasks.
        </p>
        <p className="text-e">
          As I started to delve into it, I realised people didn’t know what to
          do, how to move or what were the goals.
        </p>
        <p className="text-e">
          In this project I managed to revamp the UX design in order to provide
          an efficient user experience through information architecture and
          usability.
        </p>
        <p className="text-e">
          As the principal designer for Ecolife, I worked on every milestone of
          the new design system, including visual & interaction design. The
          amazing Michelle Sestier helped create the first wave of icons and
          images.
        </p>
        <div
          className="quote"
          style={{ backgroundImage: `url(${Conversation})` }}
        >
          <p>
            I feel many of us want to help the environment but we don’t know how
            or where to begin.
          </p>
        </div>
        <p className="section-title">Design Process</p>
        <img src={DesignProcess} className="design-process" alt=""></img>
        <p className="section-title-a">Understand</p>
        <div className="text-columns-right">
          <p className="text-e">
            The project starts like this: a white board over here and a person
            on the other side of the computer.
          </p>
          <p className="text-e">
            I interrogated the app creator to understand what were the main
            goals, pain points and possible improvements in line to shine.
          </p>
        </div>
        <p className="section-title">Semi-Structured Interviews</p>
        <p className="text-e text-column-p">
          After I had the chance to talk with the app developer I wanted to have
          an in-depth understanding of the user’s perceptions, desirabilities
          and challenges.
        </p>
        <p className="text-e">
          <a href="/" className="emphasis">
            {"80% of interviewed people said they would like to have guidance."}
          </a>
        </p>
        <div className="text-columns-left">
          <p className="text-e">
            I interviewed people who were already ecological and people who were
            not. When I asked about their expectative of a green app I found out
            the following
            <a href="/" className="emphasis">
              {" persistent ideas: "}
            </a>
          </p>
          <ul className="text-e">
            <li>
              Progress on a
              <a href="/" className="emphasis">
                {" visual representation"}
              </a>
              .
            </li>
            <li>
              <a href="/" className="emphasis">
                {"Easy tutorials "}
              </a>
              to follow through because it can feel overwhelming.
            </li>
          </ul>
        </div>

        <div
          className="quote"
          style={{ backgroundImage: `url(${Conversation})` }}
        >
          <p>
            Even I, who want to help the environment, get overwhelmed when I
            just don't know what to do.
          </p>
        </div>

        <p className="section-title">Personas</p>
        <p className="text-e">
          I found out there where 2 kinds of people who would be interested in
          using the app, therefore I created 2 personas.
        </p>
        <div className="personas">
          <img src={Persona1} className="persona" alt="Ecolife persona"></img>
          <img src={Persona2} className="persona" alt="Ecolife persona"></img>
        </div>
        <p className="section-title">Story Board</p>
        <p className="text-e">
          On this visual story I illustrated on a simple way the possible
          context where the Ecolife app could be used.
        </p>
        <img
          src={StoryBoard}
          className="story-board"
          alt="Ecolife persona"
        ></img>

        <ol className="text-e">
          <li> Mario wants to help the environment but does not know how.</li>

          <li> Mario opens Ecolife and gets ideas.</li>

          <li> After choosing a mission he takes a rest to see a tutorial.</li>

          <li> Mario gets down to business.</li>

          <li> Now he feels better for his achievement.</li>

          <li>
            {" "}
            Mario questions himself what will the next green mission be and
            looks for it on the app.
          </li>
        </ol>
        <p className="section-title-a">Define</p>
        <p className="text-e">
          Ecolife is a brand new ecological app with ideas great enough to
          position as the #1 of its kind.
        </p>
        <p className="text-e">
          The main problem here is users dropout as soon as they can’t see the
          panorama with clarity.
        </p>
        <div
          className="quote"
          style={{ backgroundImage: `url(${Conversation})` }}
        >
          <p className="quote">I want to know I’m making a change. </p>
        </div>
        <p className="section-title">Main Challenges</p>
        <ul className="text-e">
          <li>
            Make the goals and the missions’ process
            <a href="/" className="emphasis">
              {" as clear as possible."}
            </a>
          </li>
          <li>
            Balance between
            <a href="/" className="emphasis">
              {" credibility "}
            </a>
            and the
            <a href="/" className="emphasis">
              {" emotional "}
            </a>
            sphere.
          </li>
          <li>
            Inspire users to
            <a href="/" className="emphasis">
              {" complete their tasks "}
            </a>
            and make them
            <a href="/" className="emphasis">
              {" feel valuable."}
            </a>
          </li>
        </ul>
        <p className="section-title-a">Ideate</p>
        <p className="text-e">
          This is the part of the process where everything gets more exciting.
          The app creator and I make a brainstorming session for possible
          solutions and classify them by the different sections and priorities.
          <br></br>
        </p>
        <img src={CardSort} className="card-sort" alt="card sorting"></img>
        <p className="section-title">Low-Fidelity Prototype</p>
        <img src={LowFi} className="card-sort" alt=""></img>

        <p className="text-e">
          I started to draw what I had in my mind in order to shape the ideas we
          got, reducing the product lifecycle complexity applying a user-centred
          design.
        </p>
        <p className="section-title">High-Fidelity Prototype</p>
        <div className="image-text-horizontal">
          <img src={MagicWand} className="magic-wand" alt=""></img>
          <p className="text-i">
            Once we arrived to the desired mobile design patterns and a neat
            information architecture I worked on the high-fidelity prototype to
            do a couple guerrilla testings.
          </p>
        </div>

        <img src={Greenie} className="card-sort" alt=""></img>

        <p className="section-title-a">Test</p>
        <p className="text-e">
          Usability testing was key in this project not just to redefine and
          iterate the app design, but also to measure:
        </p>
        <ul className="text-e">
          <li>Behaviour.</li>
          <li>Goal fulfillment.</li>
          <li>Expectation matching.</li>
          <li>Thoughts and opinions.</li>
        </ul>

        <p className="section-title">What changed after testing?</p>

        <ul className="text-e">
          <li>I added a "Skip tutorial" button in the Tutorial section.</li>
          <li>
            Finished tasks were marked so users could know what they had already
            done.
          </li>
          <li>
            I moved up the "Sign out" button in Settings, this way users would
            not click it instead of the "Go back" button by mistake.
          </li>
        </ul>
        <img src={Mejoras} className="card-sort" alt=""></img>
        <p className="text-e">
          After applying these changes I tested again with new users and these
          were the insights:
        </p>
        <p className="section-title">Post-Test Questionnair Results</p>

        <p className="text-e">
          Why would you continue to use this app or what would stop you from
          using it in the future?
        </p>
        <p className="response">
          "I would continue to use it because it gives me ideas on how can I
          take care of nature and after I complete them I feel better".
        </p>
        <p className="response">
          "This app gives you the opportunity to relax, it communicates peace."
        </p>

        <p className="text-e">
          On a scale from 1 to 5, how many stars would you give the aesthetics?
        </p>
        <div className="stars">
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
        </div>
        <p className="text-e">
          What one thing do you think makes Ecolife outstand?
        </p>
        <p className="response">
          "I can notice they really care about the environment".
        </p>
        <p className="response">
          "The way it talks to you, it makes you feel like someone cares about
          you".
        </p>
        <p className="section-title-a">Results</p>
        <p className="section-title">Missions</p>
        <img src={Misiones} className="card-sort" alt=""></img>
        <ul className="text-e">
          <li>
            I included directions for when a user is new they know they have to
            add a mission to start their journey.
          </li>
          <li>
            We took in consideration content is key, thus we added little
            descriptions about how doing a task makes a difference.
          </li>
          <li>
            How can we tell the users their progress on a mission? Nothing
            better than a graphic.
          </li>
        </ul>
        <p className="section-title">Achievements</p>
        <img src={Logros} className="card-sort" alt=""></img>
        <ul className="text-e">
          <li>
            The Achievements section includes 3 tabs: Unlocked, Badges and
            Locked.
          </li>
          <li>
            Here the Badges tab gives to the users an incentive to persevere in
            their quest for a green life. Indicating what the user has to do in
            order to achieve the selected badge.
          </li>
        </ul>
        <p className="section-title">Tutorials</p>
        <img src={Tutoriales} className="card-sort" alt=""></img>
        <ul className="text-e">
          <li>This is a feature people asked for.</li>
          <li>They are going to be unlocked as they complete missions.</li>
        </ul>
        <p className="section-title">EcoWisdom</p>
        <img src={EcoWisdom} className="card-sort" alt=""></img>
        <ul className="text-e">
          <li>
            For the EcoWisdom section I wanted to keep it simple: Image, Title
            and Date
          </li>
          <li>
            We considered adding information like references and image authors
            would be important for credibility.
          </li>
          <li>And decided to use the whole screen to present the article.</li>
        </ul>
        <p className="section-title">Settings</p>
        <img src={Settings} className="card-sort" alt=""></img>
        <p className="section-title">Tutorial</p>
        <img src={Tutorial} className="card-sort" alt=""></img>
        <ul className="text-e">
          <li>The objective here was to make clear the path for the users.</li>
          <li>
            Specific elements were highlighted to make explicit where to do
            what.
          </li>
          <li>A friendly tone is important for the brand identity.</li>
        </ul>
        <p className="section-title-a">Reflections & Lessons</p>
        <p className="text-e">
          When the project started we had one main goal:
          <a href="/" className="emphasis">
            {" Gain users' loyalty. "}
          </a>
          We managed this by designing a product people enjoyed using, a mobile
          app people looked forward to.
        </p>

        <p className="text-e">
          With this project I learnt many things, considered ideas I have not
          thought of before, such as:
          <ul>
            <li>
              <a href="/" className="emphasis">
                {"Context is key for mobile. "}
              </a>
            </li>
            <li>How different it is to apply a usability test for mobile.</li>
          </ul>
        </p>
        <p className="text-e">
          The new Ecolife version is coming soon, (and an analytics report
          too!).
        </p>
        <p className="section-title-a">What comes next?</p>
        <p className="text-e">
          This is just the beginning of a lifelong project. We are planning on
          enhancing our content quality primarily.
        </p>
        <p className="text-e">
          Ecolife started with mobile but we are thinking about expanding our
          love to tablets too.
        </p>
        <p className="text-e">
          We live in the most exciting time, but also the scariest for dreamers.
          The eternal question is: How can we help life on Earth?
        </p>
        <div style={{height: "3rem"}}></div>  
      </div>
      </div>
    <div className="overlay"></div>
  </div>
);

export default  withRouter(Ecolife);
