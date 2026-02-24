
import { useState } from "react";
import "./cards.css";

// ── Row 1 data (scrolls LEFT) ──
const row1Profiles = [
  { id: 1, name: "Dhanush BM",     course: "B.Tech CSE in AI",      img: "./images/dhanush.jpg",    color: "#FF6B6B" },
  { id: 2, name: "Shivanna",    course: "B.Tech CSE in AI",     img: "./images/shivanna.jpg",  color: "#4ECDC4" },
  { id: 3, name: "Sachin kumar",   course: "B.Tech CSE in AI",       img: "./images/sachinkumar.jpg",   color: "#FFD93D" },
  { id: 4, name: "Athman TK",  course: "B.Tech CSE in AI",      img: "./images/athman.jpg",   color: "#6C63FF" },
  { id: 5, name: "Sangam JK",   course: "B.Tech CSE in AI", img: "./images/sangam.jpg", color: "#FF8C42" },
  { id: 6, name: "Hemanth",    course: "B.Tech CSE in SE", img: "./images/hemanth.jpg",    color: "#2ECC71" },
];

// ── Row 2 data (scrolls RIGHT) ──
const row2Profiles = [
  { id: 7,  name: "Uday KS",  course: "B.Tech CSE in AI",  img: "./images/uday.jpg",   color: "#F72585" },
  { id: 8, name: "Dileep",  course: "B.Tech CSE in AI",  img: "./images/dileep.jpg",   color: "#7209B7" },
  { id: 9, name: "Ravi Shankar",     course: "B.Tech CSE in AI",      img: "./images/ravishankar.jpg",    color: "#3A86FF" },
  { id: 10, name: "Tarun Kumar",   course: "B.Tech CSE in AI",    img: "./images/tarun.jpg",  color: "#06D6A0" },
];

// ── Row 3 data (scrolls LEFT) ──
const row3Profiles = [
  { id: 11, name: "Elena Petrova", course: "Robotics Engineering",img: "https://api.dicebear.com/7.x/personas/svg?seed=Elena",   color: "#43AA8B" },
  { id: 12, name: "Aiden Murphy",  course: "Bioinformatics",      img: "https://api.dicebear.com/7.x/personas/svg?seed=Aiden",   color: "#F94144" },
  { id: 13, name: "Zara Khan",     course: "Digital Marketing",   img: "https://api.dicebear.com/7.x/personas/svg?seed=Zara",    color: "#577590" },
  { id: 14, name: "Jin Wei",       course: "Computer Vision",     img: "https://api.dicebear.com/7.x/personas/svg?seed=Jin",     color: "#F3722C" },
  { id: 21, name: "Isla Mackenzie",course: "UX Research",         img: "https://api.dicebear.com/7.x/personas/svg?seed=Isla",    color: "#90BE6D" },
];

// ── Single Card ──
function Card({ profile }) {
  return (
    <div className="profile-card" style={{ "--accent": profile.color }}>
      <div className="avatar-wrap">
        <div className="avatar-inner">
          <img src={profile.img} alt={profile.name} />
        </div>
      </div>
      <div className="profile-name">{profile.name}</div>
      <div className="course-badge">{profile.course}</div>
      <div className="profile-dots">
        <div className="profile-dot" />
        <div className="profile-dot" />
        <div className="profile-dot" />
      </div>
    </div>
  );
}

// ── Scrolling Row ──
// direction: "left" | "right"
function ScrollRow({ profiles, direction }) {
  const [paused, setPaused] = useState(false);

  // Duplicate cards for seamless infinite loop
  const doubled = [...profiles, ...profiles];

  const trackClass = [
    "track",
    direction === "right" ? "scroll-right" : "scroll-left",
    paused ? "paused" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="track-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={trackClass}>
        {doubled.map((p, i) => (
          <Card key={`${p.id}-${i}`} profile={p} />
        ))}
      </div>
    </div>
  );
}

// ── Main App ──
export default function Cards() {
  return (
    <>
    <div>
      {/* Row 1 — scrolls LEFT */}
      <ScrollRow profiles={row1Profiles} direction="left" />

      {/* Row 2 — scrolls RIGHT */}
      <ScrollRow profiles={row2Profiles} direction="right" />

      {/* Row 3 — scrolls LEFT */}
      <ScrollRow profiles={row3Profiles} direction="left" />
    </div>
    </>
  );
}

