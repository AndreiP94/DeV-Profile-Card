import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { skills } from "./skils";

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
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <li>
        <span>{skill}</span>
        <span>{level}</span>
      </li>
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
