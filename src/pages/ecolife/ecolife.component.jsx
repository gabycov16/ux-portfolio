import React from "react";
import { withRouter } from "react-router-dom";
import "./ecolife.styles.scss";
import Header from "../../components/header/header.component";
import HorizontalImage from "../../assets/ecolife/banner.png";
import DesignProcess from "../../assets/ecolife/design-process.png";
import Persona1 from "../../assets/ecolife/persona1.png";
import Persona2 from "../../assets/ecolife/persona2.png";
import StoryBoard from "../../assets/story-board.jpg";
import LowFi from "../../assets/ecolife/mid-fidelity.png";
import CardSort from "../../assets/ecolife/card-sorting.png";
import Greenie from "../../assets/ecolife/greenie.png";
import Mejoras from "../../assets/ecolife/mejoras.png";
import Star from "../../assets/green-star.svg";
import Misiones from "../../assets/ecolife/misiones.png";
import Logros from "../../assets/ecolife/logros.png";
import Tutoriales from "../../assets/ecolife/tutoriales.png";
import EcoWisdom from "../../assets/ecolife/ecowisdom.png";
import Tutorial from "../../assets/ecolife/tutorial.png";

const Ecolife = props => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <div className="body">
        <img src={HorizontalImage} className="banner" alt=""></img>
        <p className="cs-title">Overview</p>
        <p className="cs-paragraph">
          Ecolife is a mobile app that helps develop green habits. According to
          my user research, people didn’t know what to do, how to move or what
          was the goal. In this project I managed to revamp the UX design. The
          amazing Michelle Sestier helped create the first wave of icons and
          images.
        </p>

        <div className="quote">
          "I feel many of us want to help the environment but we don’t know how
          or where to begin."
        </div>

        <img src={DesignProcess} className="design-process" alt=""></img>

        <p className="cs-title">1. Understanding Ecolife</p>
        <p className="cs-paragraph">
          The project starts like this: a white board over here and a person on
          the other side of the computer.
        </p>
        <p className="cs-paragraph">
          I interrogated the app creator to understand what were the main goals,
          pain points and possible improvements in line to shine.
        </p>
        <p className="cs-subtitle">Semi-Structured Interviews</p>
        <p className="cs-paragraph">
          After I had the chance to talk with the app developer I wanted to have
          an in-depth understanding of the user’s perceptions, desirabilities
          and challenges.
        </p>
        <a href="/" className="emphasis">
          {"80% of interviewed people said they would like to have guidance."}
        </a>
        <p className="cs-paragraph">
          I interviewed people who were already ecological and people who were
          not. When I asked about their expectative of a green app I found out
          the following
          <a href="/" className="emphasis-bold">
            {" persistent ideas: "}
          </a>
        </p>
        <ul className="cs-paragraph">
          <li>
            Progress on a
            <a href="/" className="emphasis-bold">
              {" visual representation"}
            </a>
            .
          </li>
          <li>
            <a href="/" className="emphasis-bold">
              {"Easy tutorials "}
            </a>
            to follow through because it can feel overwhelming.
          </li>
        </ul>

        <div className="quote">
          <p>
            "Even I, who want to help the environment, get overwhelmed when I
            just don't know what to do."
          </p>
        </div>

        <p className="cs-subtitle">Personas</p>
        <p className="cs-paragraph">
          I found out there where 2 kinds of people who would be interested in
          using the app, therefore I created 2 personas.
        </p>
        <img src={Persona1} className="cs-image" alt="Ecolife persona"></img>
        <img src={Persona2} className="cs-image" alt="Ecolife persona"></img>
        <p className="cs-subtitle">Story Board</p>
        <p className="cs-paragraph">
          On this visual story I illustrated on a simple way the possible
          context where the Ecolife app could be used.
        </p>
        <img src={StoryBoard} className="cs-image" alt="Ecolife persona"></img>

        <ol className="list-bullet">
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
        <p className="cs-title">2. Define</p>
        <p className="cs-paragraph">
          Ecolife is a brand new ecological app with ideas great enough to
          position as the #1 of its kind. The main problem here is users dropout
          as soon as they can’t see the panorama with clarity.
        </p>

        <p className="quote">"I want to know I’m making a change." </p>
        <p className="cs-subtitle">Main Challenges</p>
        <ul className="cs-paragraph">
          <li>
            Make the goals and the missions’ process
            <a href="/" className="emphasis-bold">
              {" as clear as possible."}
            </a>
          </li>
          <li>
            Balance between
            <a href="/" className="emphasis-bold">
              {" credibility "}
            </a>
            and the
            <a href="/" className="emphasis-bold">
              {" emotional "}
            </a>
            sphere.
          </li>
          <li>
            Inspire users to
            <a href="/" className="emphasis-bold">
              {" complete their tasks "}
            </a>
            and make them
            <a href="/" className="emphasis-bold">
              {" feel valuable."}
            </a>
          </li>
        </ul>
        <p className="cs-title">3. Ideate</p>
        <p className="cs-paragraph">
          This is the part of the process where everything gets more exciting.
          The app creator and I make a brainstorming session for possible
          solutions and classify them by the different sections and priorities.
          <br></br>
        </p>
        <img src={CardSort} className="cs-image" alt="card sorting"></img>
        <p className="cs-subtitle">Low-Fidelity Prototype</p>
        <p className="cs-paragraph">
          I started to draw what I had in my mind in order to shape the ideas we
          got, reducing the product lifecycle complexity applying a user-centred
          design.
        </p>
        <img src={LowFi} className="cs-image" alt=""></img>

        <p className="cs-subtitle">High-Fidelity Prototype</p>

        <p className="cs-paragraph">
          Once we arrived to the desired mobile design patterns and a neat
          information architecture I worked on the high-fidelity prototype to do
          a couple guerrilla testings.
        </p>

        <img src={Greenie} className="persona" alt=""></img>

        <p className="cs-title">4. Test</p>
        <p className="cs-paragraph">
          Usability testing was key in this project not just to redefine and
          iterate the app design, but also to measure:
        </p>
        <ul className="cs-paragraph">
          <li>Behaviour.</li>
          <li>Goal fulfillment.</li>
          <li>Expectation matching.</li>
          <li>Thoughts and opinions.</li>
        </ul>

        <p className="cs-subtitle">What changed after testing?</p>

        <ul className="cs-paragraph">
          <li>I added a "Skip " button in the Tutorial section.</li>
          <li>
            Finished tasks were marked so users could know what they had already
            done.
          </li>
          <li>
            I moved up the "Sign out" button in Settings, this way users would
            not click it instead of the "Go back" button by mistake.
          </li>
        </ul>
        <img src={Mejoras} className="persona" alt=""></img>
        <p className="cs-paragraph">
          After applying these changes I tested again with new users and these
          were the insights:
        </p>
        <p className="cs-subtitle">Post-Test Questionnair Results</p>

        <p className="cs-paragraph-q">
          Why would you continue to use this app or what would stop you from
          using it in the future?
        </p>
        <p className="quote-response">
          "I would continue to use it because it gives me ideas on how can I
          take care of nature and after I complete them I feel better".
        </p>
        <p className="quote-response">
          "This app gives you the opportunity to relax, it communicates peace."
        </p>

        <p className="cs-paragraph-q">
          What one thing do you think makes Ecolife outstand?
        </p>
        <p className="quote-response">
          "I can notice they really care about the environment".
        </p>
        <p className="quote-response">
          "The way it talks to you, it makes you feel like someone cares about
          you".
        </p>
        <p className="cs-paragraph-q">
          On a scale from 1 to 5, how many stars would you give the aesthetics?
        </p>
        <div className="stars">
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
          <img src={Star} className="star" alt=""></img>
        </div>
        <p className="cs-title">Results</p>
        <p className="cs-subtitle ">Missions</p>
        <img src={Misiones} className="persona" alt=""></img>
        <ul className="cs-paragraph">
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
        <p className="cs-subtitle">Achievements</p>
        <img src={Logros} className="persona" alt=""></img>
        <ul className="cs-paragraph">
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
        <p className="cs-subtitle">Tutorials</p>
        <img src={Tutoriales} className="persona" alt=""></img>
        <ul className="cs-paragraph">
          <li>This is a feature people asked for.</li>
          <li>They are going to be unlocked as they complete missions.</li>
        </ul>
        <p className="cs-subtitle">EcoWisdom</p>
        <img src={EcoWisdom} className="persona" alt=""></img>
        <ul className="cs-paragraph">
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
        <p className="cs-subtitle">Tutorial</p>
        <img src={Tutorial} className="persona" alt=""></img>
        <ul className="cs-paragraph">
          <li>The objective here was to make clear the path for the users.</li>
          <li>
            Specific elements were highlighted to make explicit where to do
            what.
          </li>
          <li>A friendly tone is important for the brand identity.</li>
        </ul>
        <p className="cs-title">Reflections & Lessons</p>
        <p className="cs-paragraph">
          When the project started we had one main goal:
          <a href="/" className="emphasis">
            {" Gain users' loyalty. "}
          </a>
          We managed this by designing a product people enjoyed using, a mobile
          app people looked forward to.
        </p>

        <p className="cs-paragraph">
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
        <p className="cs-paragraph">
          The new Ecolife version is coming soon, (and an analytics report
          too!).
        </p>
        <p className="cs-subtitle">What comes next?</p>
        <p className="cs-paragraph">
          This is just the beginning of a lifelong project. We are planning on
          enhancing our content quality primarily.
        </p>
        <p className="cs-paragraph">
          Ecolife started with mobile but we are thinking about expanding our
          love to tablets too.
        </p>
        <p className="cs-paragraph">
          We live in the most exciting time, but also the scariest for dreamers.
          The eternal question is: How can we help life on Earth?
        </p>
        <div style={{ height: "3rem" }}></div>
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

export default withRouter(Ecolife);
