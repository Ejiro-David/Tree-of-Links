import "./App.css";
import selfie from "./images/me.jpeg";
import github from "./images/github.png";
import slack from "./images/slack.png";
import hng9 from "./images/I4G.png";
import i4g from "./images/Vector.png";
import Contact from "./Contact/Contact";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header id="profile_section">
        <img alt="David Ejiro" id="profile__img" src={selfie}></img>
        <p id="twitter">
          Twitter: <a href="https://twitter.com/_ejdavid">@_ejDavid</a>
        </p>
        <p id="slack" hidden>
          Slack: <a href="www.slack.com">Ejiro David</a>
        </p>
      </header>
      <main id="links_section">
        <a class="button" href="https://training.zuri.team/" id="btn__zuri">
          Zuri Training
        </a>
        <br></br>
        <a class="button" href="http://books.zuri.team/" id="books">
          Design and Coding Books(add subtext)
        </a>
        <br></br>
        <a
          class="button"
          href="https://books.zuri.team/python-for-beginners?ref_id=ErhaborEjiroDavid"
          id="book__python"
        >
          A comprehensive guide to learning python in a project based way
        </a>
        <br></br>
        <a class="button" href="https://background.zuri.team" id="pitch">
          Do a background check on your programmers
        </a>
        <br></br>
        <a
          class="button"
          href="https://books.zuri.team/design-rules"
          id="book__design"
        >
          But the best free design book ever from Zuri
        </a>
        <br></br>
        <Link class="button" to="/contact" id="contact">
          Contact
        </Link>
        <br></br>
        <div id="end_logo">
          <a href="slack">
            <img alt="slack_svg" src={slack}></img>
          </a>
          <a href="Github">
            <img alt="github_svg" src={github}></img>
          </a>
        </div>
      </main>
      <footer>
        <img alt="zuri_svg" src={i4g}></img>
        <p>HNG Internship 9 Frontend Task</p>
        <img alt="hng9" src={hng9}></img>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
