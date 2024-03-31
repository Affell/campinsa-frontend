import { useParams, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import NavBar from "../nav/Navbar";
import Footer from "../nav/Footer";
import "./TeamPage.css";
import { AnimationConfig, Member, teams, validTeamId } from "../../core/config/teams";
import { useState } from "react";
import Background from "../Anim/Background";

const TeamPage = () => {

  const { teamId } = useParams<{ teamId: string }>();
  const [memberAnim, setMemberAnim] = useState<AnimationConfig>();
  const [audioEnded, setAudioEnded] = useState(false);

  if (teamId === undefined || !validTeamId(teamId)) {
    return <Navigate to="/404" />;
  }

  const { teamName, teamDetail, members } = teams[teamId];

  const initMemberAnim = (member: Member) => {
    setAudioEnded(false);
    setMemberAnim(member.animation);
  }

  const btnAnimClick = (name: string, state: string) => {
    const span = document.getElementById(name);
    if (span) span.style.display = state;
  }

  const groupMembers = () => {

    var grouped = new Map();
    for (const member of members) {
      if (!grouped.has(member.role)) grouped.set(member.role, [[member]]);
      else {
        var list = grouped.get(member.role);
        if (window.innerWidth > 768 && list[list.length - 1].length == 3) {
          list.push([member]);
        } else list[list.length - 1].push(member);
      }
    }

    var rows: React.ReactElement[] = [];
    let globalIndex = 0;
    grouped.forEach((groups, role) => {
      for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        rows.push(
          <div key={role + i} className="team-role">
            <p className="text-role">{role}</p>
            {group.map((member: any, index: number) =>
              <div key={member.name} className="card-member" onMouseEnter={() => initMemberAnim(member)} onMouseLeave={() => btnAnimClick(member.name, "none")}>
                <div id={globalIndex + index + ""} className={"flip-card"}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img className="member-image" src={member.image} />
                    </div>
                    <div className="flip-card-back member-image">
                      <h1 className="member-name">{member.name}</h1>
                      <div className="member-citation">{member.animation?.button ? <div className="btn-anim">
                        {member.animation.button.preText}
                        <button onClick={() => btnAnimClick(member.name, "block")}>{member.animation.button.btnText}</button>
                        <span id={member.name} className="btn-anim-hidden">{member.animation.button.afterText}</span>
                      </div> : member.citation}</div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>)
        globalIndex += group.length;
      }
    })

    return rows;

  }


  return (
    <>
      <NavBar />
      {memberAnim && memberAnim.background && <Background config={memberAnim.background} />}
      {!audioEnded && memberAnim && memberAnim.button && memberAnim.button.music && <audio autoPlay onEnded={() => setAudioEnded(true)}><source src={memberAnim.button.music} type="audio/aac"></source></audio>}
      <Container className="fullscreen-container">
        <div className="text-container">
          <p className="team-name">{teamName}</p>
          <p className="team-description">{teamDetail}</p>
        </div>
        <Container className="team-members">
          {groupMembers()}
        </Container>
      </Container>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default TeamPage;
