import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="poza/andrei1.jpg" alt="Andrei Pop" />;
}
function Intro() {
  return (
    <div className="data">
      <h1>Andrei Pop </h1>
      <p>Hello.I'm a new web developer based in Cluj-Napoca.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" level="Medium" emoji="👍" color="blue" />
      <Skill skill="CSS" level="Medium" emoji="👍" color="blue" />
      <Skill skill="JavaScript" level="Beginer" emoji="🙏" color="red" />
      <Skill skill="React" level="Beginer" emoji="🙏" color="red" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <h2>{props.skill}</h2>
      <h3>{props.level}</h3>
      <h4>{props.emoji}</h4>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
