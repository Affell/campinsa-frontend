import { useParams, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import teamBDS from "../../assets/images/teams/teamBDS.png";

type TeamDetails = {
  teamName: string;
  teamDetail: string;
  members: string[];
};

type Teams = {
  [key: string]: TeamDetails;
};

function getTeamDetails(teamId: string): TeamDetails {
  const teams: Teams = {
    bds: {
      teamName: "La Team BDS",
      teamDetail:
        "La team BDS est chargée d'organiser tous les événements sportifs. Au cours du mandat c'est elle qui s'occupe des créneaux sportifs ainsi que de l'organisation des événements comme le TOSS ou le High Five par exemple",
      members: [teamBDS],
    },
  };
  return teams[teamId] || { teamName: "", teamDetail: "", members: [] };
}

const TeamPage = () => {
  const { teamId } = useParams<{ teamId: string }>();

  if (teamId === undefined) {
    return <Navigate to="/*" />;
  }

  const { teamName, teamDetail, members } = getTeamDetails(teamId);

  return (
    <Container>
      <h1>{teamName}</h1>
      <h3>{teamDetail}</h3>
      <div>
        {members.map((src, index) => (
          <Image
            key={index}
            src={src}
            rounded
            className="img-fluid bsb-scale bsb-hover-scale-up"
            loading="lazy"
          />
        ))}
      </div>
    </Container>
  );
};

export default TeamPage;
