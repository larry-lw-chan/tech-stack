import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML + CSS", level: "advanced", color: "#357789" },
  { skill: "Javascript", level: "intermediate", color: "orangered" },
  { skill: "React", level: "advanced", color: "yellow" },
  { skill: "Angular", level: "beginner", color: "orange" },
];

function Avatar() {
  return <img className="avatar" src="jonas.jpg" alt="profile" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skill skill={s.skill} level={s.level} color={s.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "🥉"}
        {level === "intermediate" && "🥈"}
        {level === "advanced" && "🥇"}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Enter one skill component per skill */}
        <SkillList />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
