import React from "react";
import { withRouter } from "react-router-dom";
import "./soft-skills.styles.scss";
import Header from "../../components/header/header.component";
import HorizontalImage from "../../assets/soft-skills/banner.png";
import DesignProcess from "../../assets/ecolife/design-process.png";
import Persona from "../../assets/soft-skills/persona.png";
import AffinityMapInterview from "../../assets/soft-skills/afinnity-map-interviews.png";
import ScenarioMapping from "../../assets/soft-skills/scenariomapping.png";
import FourWs from "../../assets/soft-skills/4ws.png";
import HowMightWe from "../../assets/soft-skills/howmightwe.png";
import FiveWhys from "../../assets/soft-skills/5whys.png";
import RoundRobin from "../../assets/soft-skills/roundrobin.png";
import ImportanceDifficulty from "../../assets/soft-skills/importance_difficulty.png";
import ConceptPoster from "../../assets/soft-skills/concept_poster.png";
import ProductBacklog from "../../assets/soft-skills/product_backlog.png";
import UserStories from "../../assets/soft-skills/user_stories.png";
import LowScreen1 from "../../assets/soft-skills/screen1_homepage.png";
import LowScreen2 from "../../assets/soft-skills/screen2_perfil.png";
import LowScreen3 from "../../assets/soft-skills/screen3_contacto.png";
import LowScreen4 from "../../assets/soft-skills/screen4_detallecurso.png";
import InformationArchitectureSorting from "../../assets/soft-skills/sorting.png";
import HomePageHighFi from "../../assets/soft-skills/homepage.png";
import SignedInHighFi from "../../assets/soft-skills/signed_in.png";
import ProfileHighFi from "../../assets/soft-skills/profile.png";
import CourseHighFi from "../../assets/soft-skills/course_detailed.png";
import ContactHighFi from "../../assets/soft-skills/contact.png";

const SoftSkills = props => (
  <div className="king-container">
    <div className="homepage">
      <Header />
      <div className="body">
        <img src={HorizontalImage} className="banner" alt=""></img>
        <p className="cs-title">Overview</p>
        <p className="cs-paragraph">
          Humanity's life has taken an unexpected turn in history and the world
          keeps evolving in hands of technology.
        </p>
        <p className="cs-paragraph">
          The purpose of this webpage is to help young people get soft and
          technical skills that will help them access the professional market
          after COVID-19.
        </p>
        <div className="quote">
          <p>
            "I haven't looked for a job in the computer, I just go to the place
            and look for job offers posted"
          </p>
          <p>- Gloria, an interviewee.</p>
        </div>
        <img src={DesignProcess} className="design-process" alt=""></img>
        <p className="cs-title">1. Understanding </p>
        <p className="cs-paragraph">
          We took off this project with a series of interviews, starting with
          Mariana, an expert who works with Corporate Citizenship, to give us a
          broader look of the opportunities, needs and user context
        </p>
        <a href="/" className="emphasis">
          {"66% of interviewed people do not prepare for an interview."}
        </a>
        <p className="cs-paragraph">
          Next we made a
          <a href="/" className="emphasis-bold">
            {" brainstorming "}
          </a>
          session and structured the
          <a href="/" className="emphasis-bold">
            {" interview script"}
          </a>
          , this time for possible users. We wanted to know:
        </p>
        <ul className="cs-paragraph">
          <li>Who is the user and how do they think?</li>
          <li>
            What is the user's process to find a job and develop their
            abilities?
          </li>
        </ul>
        <div className="cs-paragraph">
          <p>
            After completing the interviews with target users the team and I
            started to
            <a href="/" className="emphasis-bold">
              {" analyse"}
            </a>{" "}
            the information we had with an
            <a href="/" className="emphasis-bold">
              {" affinity map"}
            </a>
            .
          </p>
        </div>
        <p className="cs-subtitle">Affinity Map</p>
        <img src={AffinityMapInterview} className="persona" alt=""></img>
        <p className="cs-subtitle">Persona</p>
        <div className="cs-paragraph">
          <p>
            Which led us to build our persona, in this case: Omar, a teenager
            who needs help to get a job.
          </p>
        </div>
        <img src={Persona} className="persona" alt=""></img>
        <p className="cs-subtitle">Scenario Mapping</p>
        <div className="cs-paragraph">
          <p>
            Once we knew more about Omar and understood him better the team and
            I visualised his journey for a job application. This way, we could
            ease the process for him and people alike.
          </p>
        </div>
        <img src={ScenarioMapping} className="persona" alt=""></img>
        <p className="cs-title">2. Define - Problem definition</p>
        <div className="quote">
          <p>
            "To apply for a job I go to the stationery to buy a job request,
            fill it with pen."{" "}
          </p>
          <p>- José, an interviewee.</p>
        </div>
        <p className="cs-paragraph">
          Now it was time to challenge assumptions and create an strategy to
          follow with innovative solutions. For this, we worked on the
          following:
        </p>
        <p className="cs-subtitle">4W's</p>
        <img src={FourWs} className="design-process" alt=""></img>
        <ul className="cs-paragraph">
          <li>
            <a href="/" className="emphasis-bold">
              {"Who "}
            </a>
            suffers?
          </li>
          <li>
            <a href="/" className="emphasis-bold">
              {"When "}
            </a>
            does the stakeholder or the user have a pain moment on their
            journey?
          </li>
          <li>
            <a href="/" className="emphasis-bold">
              {"What "}
            </a>
            is the main challenge faced by the user or stakeholder?
          </li>
          <li>
            <a href="/" className="emphasis-bold">
              {"Why "}
            </a>
            does it add value?
          </li>
        </ul>
        <p className="cs-paragraph">
          Based on the information we got from the 4W's exercise, we wanted to
          break it down and get to the root of the user's problem.
        </p>
        <p className="cs-subtitle">How might we...?</p>
        <img src={HowMightWe} className="persona" alt=""></img>
        <p className="cs-subtitle">5 Why's</p>
        <img src={FiveWhys} className="persona" alt=""></img>
        <p className="cs-title">3. Ideate</p>
        <p className="cs-paragraph">
          Once we had the issues well understood, we came up with solutions for
          the obstacles the users faced:
        </p>
        <p className="cs-subtitle">Round Robin</p>
        <p className="cs-paragraph">
          Here, the answers each member of the team proposed were challenged. We
          thought of possible scenarios that could go wrong and then again these
          scenarios were challenged with solutions for each of them.
        </p>
        <img src={RoundRobin} className="persona" alt=""></img>
        <p className="cs-subtitle">Importance/Difficulty matrix</p>
        <p className="cs-paragraph">
          We placed the results from the Round Robin in a matrix to clear our
          vision and focus on what was vital.
        </p>
        <img src={ImportanceDifficulty} className="persona" alt=""></img>
        <p className="cs-paragraph">
          <a href="/" className="emphasis-bold">
            {"Winner ideas: "}
          </a>
        </p>
        <ul className="cs-paragraph">
          <li>Onboarding digital tools.</li>
          <li>Personalized learning.</li>
        </ul>
        <p className="cs-subtitle">Concept Poster</p>
        <p className="cs-paragraph">
          Once we had in mind where we wanted to center our attention we created
          a Concept Poster to present our ideas and product strategy in a visual
          manner.
        </p>
        <img src={ConceptPoster} className="persona" alt=""></img>
        <p className="cs-title">User Story Mapping</p>
        <p className="cs-subtitle">Product Backlog</p>
        <img src={ProductBacklog} className="persona" alt=""></img>
        <p className="cs-subtitle">User Stories</p>
        <p className="cs-paragraph">
          Next, we worked on User Stories to keep our project user-centered and
          goal-focused.
        </p>
        <img src={UserStories} className="persona" alt=""></img>
        <p className="cs-subtitle">Wireframing</p>
        <p className="cs-paragraph">
          This is the scene where we start implementing our ideas visually but
          first, we decided to write the information we thought we would need on
          every section of the webpage.
        </p>
        <img
          src={InformationArchitectureSorting}
          className="persona"
          alt=""
        ></img>
        <p className="cs-paragraph">
          And this is what we came up with the first time:
        </p>
        <img src={LowScreen1} className="persona" alt=""></img>
        <img src={LowScreen2} className="persona" alt=""></img>
        <img src={LowScreen3} className="persona" alt=""></img>
        <img src={LowScreen4} className="persona" alt=""></img>
        <p className="cs-paragraph">
          After we changed our low-fidelity prototypes a couple times we decided
          to work on the high-fidelity ones:
        </p>
        <p className="cs-subtitle">High-Fidelity Prototypes</p>
        <p className="cs-paragraph">
          Through this process the team and I learned a couple tricks to work on
          Figma and noted what could be improved for the next project.
        </p>
        <p className="cs-paragraph">
          After the first round of high-fi prototype creation we tested it with
          2 members from another team of the XD Academy. This was particularly
          useful to improve our design and way of seeing things.
        </p>
        <p className="cs-paragraph">
          And finally we created something we were happy with, these were the
          results:
        </p>
        <img src={HomePageHighFi} className="persona effect4" alt=""></img>
        <img src={SignedInHighFi} className="persona effect4" alt=""></img>
        <img src={ProfileHighFi} className="persona effect4" alt=""></img>
        <img src={CourseHighFi} className="persona effect4" alt=""></img>
        <img src={ContactHighFi} className="persona effect4" alt=""></img>

        <p className="cs-title">Reflections & Lessons</p>
        <p className="cs-paragraph">
          This is a project we worked on for the XD Academy in Accenture. The
          goal was to
          <a href="/" className="emphasis">
            {
              " help teenagers get skills that would get them better job opportunities. "
            }
          </a>
        </p>
        <p className="cs-paragraph">
          It was the first time my team worked on a UX project and I was not an
          expert either but I think we managed to do something great in little
          time and with little experience.
        </p>
        <p className="cs-subtitle">What comes next?</p>
        <p className="cs-paragraph">
          The course ended and we didn't have time to test it with real users
          but we know that it is the most important part of the design if we
          really want to design for people and if we really want to make it
          better.
        </p>
        <div style={{ height: "3rem" }}></div>
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

export default withRouter(SoftSkills);
