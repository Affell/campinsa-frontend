import { useParams, Navigate } from "react-router-dom";
import { Badge, Container, Row } from "react-bootstrap";

import NavBar from "../nav/Navbar";
import Footer from "../nav/Footer";
import "./TeamPage.css";
import { teams, validTeamId } from "../../core/config/teams";

const TeamPage = () => {
  const { teamId } = useParams<{ teamId: string }>();

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
        if (list[list.length - 1].length == 3) {
          list.push([member]);
        } else list[list.length - 1].push(member);
      }
    }

    var rows: React.ReactElement[] = [];
    grouped.forEach((groups, role) => {
      for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        rows.push(<Row key={i} className="team-role">
          <Badge pill bg="danger">
            {role}
          </Badge>
          {group.map((member: any, index: number) => <div key={index} className="card-member">
            {member.name}
          </div>)}
        </Row>)
      }
    })

    return rows;

  }


  return (
    <>
      <NavBar />
      <Container className="fullscreen-container">
        <div className="text-container position-fixed top-0 end-0">
          <p className="team-name">{teamName}</p>
          <p className="team-description">{teamDetail}</p>
        </div>
        <Container className="team-members">
          {groupMembers()}
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default TeamPage;
