import { useParams, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import NavBar from "../nav/Navbar";
import Footer from "../nav/Footer";
import "./TeamPage.css";
import { teams, validTeamId } from "../../core/config/teams";
import { useState } from "react";
import Bombs from "../Anim/Bombs";

const TeamPage = () => {

  const { teamId } = useParams<{ teamId: string }>();
  const [bomb, setBomb] = useState(false);

  if (teamId === undefined || !validTeamId(teamId)) {
    return <Navigate to="/*" />;
  }

  const { teamName, teamDetail, members } = teams[teamId];


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
            {/* <Badge pill bg="dark">
              {role}
            </Badge> */}
            {group.map((member: any, index: number) =>
              <div key={member.name} className="card-member" onMouseEnter={() => { if (member.bomb) setBomb(old => !old) }}>
                <div id={globalIndex + index + ""} className={"flip-card"}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img className="member-image" src={member.image} />
                    </div>
                    <div className="flip-card-back member-image">
                      <h1 className="member-name">{member.name}</h1>
                      <p className="member-citation">{member.citation}</p>
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

  /* TODO */
  // Coller le texte du rôle à l'image sur la version ordi
  // Changer le flip card pour ne pas avoir que du hover
  // Augmenter taille image version mobile


  return (
    <>
      <NavBar />
      {bomb && <Bombs />}
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
