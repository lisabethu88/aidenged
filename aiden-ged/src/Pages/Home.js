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
          <h3>Khan Academy - Science</h3>
          <p>
            <b>Instructions:</b> Watch the video, read review, and do quiz.
            Write down the results and share with Titi.
          </p>
          <ul>
            <a href="https://www.khanacademy.org/science/high-school-biology/hs-cells/hs-plant-vs-animal-cells/v/overview-of-animal-and-plant-cells">
              <li>Khan Academy - Plant and Animal Cells</li>
            </a>
            <li>
              <em>
                <b>DUE:</b> Oct 9th by 8pm
              </em>
            </li>
          </ul>
          <h3>Onsego - Science </h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 9th by 8pm
              </em>
            </li>
            <li>Photosynthesis</li>
            <li>The Top Four Kingdoms </li>
            <li>Organization of Life Practice Test </li>
            <li>Organ Systems </li>
            <li>Nervous System </li>
            <li>The Circulatory System </li>
          </ul>
          <h3>Language Arts (Writing)</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 9th by 8pm
              </em>
            </li>
            <li>Do a prompt in essay book.</li>
          </ul>
          <h3>Onsego - History</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 10th by 8pm
              </em>
            </li>
            <li>The Judicial Branch</li>
            <li> The Supreme Court</li>
            <li>State and Local Government</li>
            <li>Voting and Elections</li>
            <li>Political Parties and Politics</li>
          </ul>
          <h3>Onsego - Language Arts</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 10th by 8pm
              </em>
            </li>
            <li>Parts of Speech</li>
            <li>Subjects and Verbs</li>
            <li>Pronoun Agreement</li>
            <li>Independent and Dependent Clauses</li>
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
