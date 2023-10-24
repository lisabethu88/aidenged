import { LessonComponent } from "../Components/LessonComponent.jsx";
import { scienceLessons, scienceQuizzes } from "../data/scienceData.js";
import braixen from "../images/dd6f9oj-99e6d1f7-7929-4202-bb07-5555667e9e8c.gif";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import arrows from "../images/arrows.gif";

export const Home = () => {
  const d = new Date();
  return (
    <main className="App">
      <section>
        <h2>
          Homework {d.getMonth() + 1}/{d.getDate()}/{d.getFullYear()}
        </h2>
        <section className="board">
          <h3>Onsego - Science </h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 24th by 10AM
              </em>
            </li>
            <li>Endocrine System</li>
            <li>Excretory System</li>
            <li>Immune System</li>
            <li>Lymph System</li>
            <li>Metabolism</li>
          </ul>
          {/* <h3>Language Arts (Writing)</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 17th by 10AM
              </em>
            </li>
            <li>Do a prompt in essay book.</li>
          </ul> */}
          {/* <h3>Onsego - Math</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 19th by 10AM
              </em>
            </li>
            <li>Basics of Fractions</li>
            <li>Multiplying Fractions</li>
            <li>Dividing Fractions</li>
            <li>3 ways to Find a Common Denominator</li>
            <li>Adding Fractions</li>
          </ul> */}
          {/* <h3>Onsego - Social Studies</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 19th by 10AM
              </em>
            </li>
            <li>Revolutionary War Begins</li>
            <li>Declaring Independence</li>
            <li>Winning the War</li>
            <li>A New Nation</li>
            <li>Constitutional Convention</li>
          </ul> */}
          <h3>Onsego - Language Arts</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 24th by 10AM
              </em>
            </li>
            <li>English Usage Practice Test Topics</li>

            <li>Author, Audience, and Purpose</li>
            <li>5 Text Structures</li>
            <li>Identify Stated Main Idea</li>
            <li>Supporting Details</li>
            <li>Explicit and Implicit</li>
          </ul>
        </section>
      </section>{" "}
      <img width="500px" src={braixen} alt="braixen" />
      <section className="lessons">
        <h2>Yummy GED Lessons</h2>
        <img width="75px" src={arrows} alt="arrows" />
        <section>
          <Link to={`/science`}>
            <Button className="lesson-btn">Science</Button>
          </Link>
        </section>{" "}
        <section>
          <Link to={`/social-studies`}>
            <Button className="lesson-btn">Social Studies</Button>
          </Link>
        </section>
        <section>
          <Link to={`/language-arts`}>
            <Button className="lesson-btn">Language Arts</Button>
          </Link>
        </section>
        <section>
          <Link to={`/math`}>
            <Button className="lesson-btn">Math</Button>
          </Link>
        </section>
      </section>{" "}
    </main>
  );
};
