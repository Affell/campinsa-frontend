  import { useParams, Navigate } from "react-router-dom";
  import { Badge, Col, Container, Image, Row } from "react-bootstrap";

  import NavBar from "../nav/Navbar";
  import Footer from "../nav/Footer";
  import "./TeamPage.css";
  import { teams, validTeamId } from "../../core/config/teams";
import { todo } from "node:test";

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
          if (list[list.length - 1].length == 3) { // 3 = LE MAX PAR LIGNE 
            list.push([member]);
          } else list[list.length - 1].push(member);
        }
      }

      var rows: React.ReactElement[] = [];
      grouped.forEach((groups, role) => {
        for (let i = 0; i < groups.length; i++) {
          const group = groups[i];
          rows.push(
          <Row key={i} className="team-role">
            <p className="text-role">{role}</p>
            {/* <Badge pill bg="dark">
              {role}
            </Badge> */}
            {group.map((member: any, index: number) => 
            <div key={index} className="card-member">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="member-image" src={member.image} height={162} width={138}/>
                  </div>
                  <div className="flip-card-back member-image">
                    <h1 className="member-name">{member.name}</h1>
                    <p className="member-citation">{member.citation}</p>
                  </div>
                </div>
              </div>
            </div>)}
          </Row>)
        }
      })

      return rows;

    }

    /* TODO */
    // Team Page version mobile
    // Coller le texte du rôle à l'image sur la version ordi
    // Changer le flip card pour ne pas avoir que du hover


    return (
      <>
        <NavBar />
        {/* ordi */}
        <Container className="fullscreen-container">
          <div className="text-container position-fixed top-0 end-0">
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
