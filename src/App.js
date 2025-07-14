import React, { useState } from "react";
import { lessons } from "./data";

export default function App() {
  const [cls, setCls] = useState("10");
  const [subject, setSubject] = useState("Biology");
  const [lesson, setLesson] = useState("Photosynthesis");

  const songData = lessons[cls]?.[subject]?.[lesson];

  return (
    <div>
      <h1>🎶 EduBeats</h1>
      <div>
        <label>Class:</label>
        <select value={cls} onChange={(e) => setCls(e.target.value)}>
          {Object.keys(lessons).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Subject:</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          {Object.keys(lessons[cls]).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Lesson:</label>
        <select value={lesson} onChange={(e) => setLesson(e.target.value)}>
          {Object.keys(lessons[cls][subject]).map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
      {songData && (
        <div className="lyrics-box">
          <h2>{songData.song}</h2>
          <pre>{songData.lyrics}</pre>
        </div>
      )}
    </div>
  );
}