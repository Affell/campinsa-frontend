import { useParams, Navigate } from "react-router-dom";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import teamBDS from "../../assets/images/teams/teamBDS.png";
import NavBar from "../nav/Navbar";
import Footer from "../nav/Footer";
import "./TeamPage.css";

type Member = {
  image: string;
  name: string;
  role: string;
};

type TeamDetails = {
  teamName: string;
  teamDetail: string;
  members: Member[];
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
      members: [
        {
          image: teamBDS,
          name: "Adrien Garnier",
          role: "Président",
        },
        {
          image: teamBDS,
          name: "Laurine Lefrançois",
          role: "Vice-Présidente",
        },
        {
          image: teamBDS,
          name: "Richie Abboud",
          role: "Vice-Président",
        },
        {
          image: teamBDS,
          name: "Louis Richard",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Simon Breton",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Maxence Abélard",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Thomas Vauley",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Kevin Le Sommer",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Yael Lucas",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Victor Baville",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Perrine Roeser",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Antoine Mongrand",
          role: "Membre Actif",
        },
      ],
    },
    bureau: {
      teamName: "Le Bureau",
      teamDetail:
        "Le bureau est le coeur de la liste, il est composé des membres principaux qui dirigent et organisent toutes les actions. Le bureau sert aussi de représentant au près de l'administration et des autres écoles.",
      members: [
        {
          image: teamBDS,
          name: "Evan Le Lièvre",
          role: "Président",
        },
        {
          image: teamBDS,
          name: "Georges Halisso",
          role: "Vice-Président Interne",
        },
        {
          image: teamBDS,
          name: "Hugo Roger",
          role: "Vice-Président Externe",
        },
        {
          image: teamBDS,
          name: "Augustin Zahorka",
          role: "Trésorier",
        },
        {
          image: teamBDS,
          name: "Antoine Frémont",
          role: "Vice Trésorier",
        },
        {
          image: teamBDS,
          name: "Samuel Rignault",
          role: "Secrétaire",
        },
      ],
    },
    alumni: {
      teamName: "Team Alumni",
      teamDetail:
        "L'équipe Alumni garde le contact avec les anciens membres et organise des événements pour maintenir le réseau actif.",
      members: [
        {
          image: teamBDS,
          name: "Valentin Naegely",
          role: "Président",
        },
      ],
    },
    assos: {
      teamName: "Team Association",
      teamDetail:
        "L'équipe Association soutient et coordonne les activités des différentes associations étudiantes.",
      members: [
        {
          image: teamBDS,
          name: "Axel Lenroué",
          role: "Président",
        },
        {
          image: teamBDS,
          name: "Leo Waetcher",
          role: "Vice-Président",
        },
      ],
    },
    partenariat: {
      teamName: "Team Partnariat",
      teamDetail:
        "La team partenariat s'occupe des relations avec les entreprises aifn de régaler les étudiants.",
      members: [
        {
          image: teamBDS,
          name: "Lucas Dervichian",
          role: "Président",
        },
        {
          image: teamBDS,
          name: "Ruben Vieira",
          role: "Vice-Président",
        },
        {
          image: teamBDS,
          name: "Nathan Chartel",
          role: "Vice-Président",
        },
        {
          image: teamBDS,
          name: "Léo Emanuel Diouf",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Arthur Dumas",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Momar Gueye",
          role: "Membre Actif",
        },
      ],
    },
    soiree: {
      teamName: "Team Soirée",
      teamDetail:
        "La Team Soirée organise les événements festifs, garantissant des moments mémorables pour tous.",
      members: [
        {
          image: teamBDS,
          name: "Quentin Berthelot",
          role: "Président",
        },
        {
          image: teamBDS,
          name: "Fabien Saint-Pe",
          role: "Vice-Président",
        },
        {
          image: teamBDS,
          name: "Rémi Berthelet",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Clara Gory",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Clémence Malterre",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Théo Durand",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Lucas Villegas",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Bartomeo Alemany-Varin",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Victor Piaget",
          role: "Membre Actif",
        },
        {
          image: teamBDS,
          name: "Charbel Ziade",
          role: "Membre Actif",
        },
      ],
    },
    com: {
      teamName: "Team Communication",
      teamDetail:
        "La Team Communication promeut les événements et maintient une image positive de l'organisation à travers différents médias.",
      members: [
        {
          image: teamBDS,
          name: "Manon Delforge",
          role: "Présidente",
        },
        {
          image: teamBDS,
          name: "Axel Messaoudi",
          role: "Vice-Président",
        },
        {
          image: teamBDS,
          name: "Mathieu Caffier",
          role: "Membre",
        },
        {
          image: teamBDS,
          name: "Robin Carpentier",
          role: "Membre",
        },
        {
          image: teamBDS,
          name: "Emma Le Vouedec",
          role: "Membre",
        },
      ],
    },
    bda: {
      teamName: "Team BDA",
      teamDetail:
        "La Team BDA (Bureau Des Arts) stimule la créativité et l'expression artistique au sein de l'école.",
      members: [
        {
          image: teamBDS,
          name: "Maël Ricouard",
          role: "Président",
        },
        {
          image: teamBDS,
          name: "Antoine Laurent",
          role: "Vice-Président",
        },
        {
          image: teamBDS,
          name: "Pierre Etheve",
          role: "Membre",
        },
        {
          image: teamBDS,
          name: "Quentin Brisson",
          role: "Membre",
        },
        {
          image: teamBDS,
          name: "Maxence Janiak",
          role: "Membre",
        },
      ],
    },
  };
  return teams[teamId];
}

const TeamPage = () => {
  const { teamId } = useParams<{ teamId: string }>();

  if (teamId === undefined) {
    return <Navigate to="/*" />;
  }

  const { teamName, teamDetail, members } = getTeamDetails(teamId);

  return (
    <>
      <Container className="fullscreen-container">
        <Container className="navbar-container">
          <NavBar />
        </Container>
        <Container className="text-container justify-content-center">
          <p className="team-name justify-content-center">{teamName}</p>
          <p className="team-description">{teamDetail}</p>
        </Container>
        <Container className="team-members">
          <Row className="text-center">
            {members.map((member, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Image src={member.image} rounded className="img-fluid" />
                <Container className="image-description">
                  <p className="member-name">{member.name}</p>
                  <h5>
                    <Badge
                      pill
                      bg={
                        member.role === "Président"
                          ? "danger"
                          : member.role === "Présidente"
                          ? "danger"
                          : member.role === "Vice-Président"
                          ? "warning"
                          : member.role === "Vice-Présidente"
                          ? "warning"
                          : "secondary"
                      }
                      className="text-center"
                    >
                      {member.role}
                    </Badge>
                  </h5>
                </Container>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default TeamPage;
