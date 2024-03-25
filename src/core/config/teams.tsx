import teamBDS from "../../assets/images/teams/teamBDS.png";

type Member = {
  image: string;
  name: string;
  role: string;
  citation: string;
};

type TeamDetails = {
  teamName: string;
  teamDetail: string;
  members: Member[];
};

type Teams = {
  [key: string]: TeamDetails;
};

export const teams: Teams = {
  bds: {
    teamName: "Team BDS",
    teamDetail:
      "La team BDS est chargée d'organiser tous les événements sportifs. Au cours du mandat c'est elle qui s'occupe des créneaux sportifs ainsi que de l'organisation des événements comme le TOSS ou le High Five par exemple",
    members: [
      {
        image: teamBDS,
        name: "Adrien Garnier",
        role: "Président",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Laurine Lefrançois",
        role: "Vice-Prez",
        citation: "Ses grosses cuisses la miam le poulet succulent",

      },
      {
        image: teamBDS,
        name: "Richie Abboud",
        role: "Vice-Prez",
        citation: "",

      },
      {
        image: teamBDS,
        name: "Louis Richard",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Simon Breton",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Maxence Abélard",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Thomas Vauley",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Kevin Le Sommer",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Yael Lucas",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Victor Baville",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Perrine Roeser",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Antoine Mongrand",
        role: "Sous fifre",
        citation: "",
      },
    ],
  },
  bureau: {
    teamName: "Bureau",
    teamDetail:
      "Le bureau est le coeur de la liste, il est composé des membres principaux qui dirigent et organisent toutes les actions. Le bureau sert aussi de représentant au près de l'administration et des autres écoles.",
    members: [
      {
        image: teamBDS,
        name: "Evan Le Lièvre",
        role: "Président",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Georges Halisso",
        role: "VP Interne",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Hugo Roger",
        role: "VP Externe",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Augustin Zahorka",
        role: "Trésorier",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Antoine Frémont",
        role: "Vice Trésorier",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Samuel Rignault",
        role: "Secrétaire",
        citation: "",
      },
    ],
  },
  alumni: {
    teamName: "Team ALUMNIS",
    teamDetail:
      "L'équipe Alumni garde le contact avec les anciens membres et organise des événements pour maintenir le réseau actif.",
    members: [
      {
        image: teamBDS,
        name: "Valentin Naegely",
        role: "Président",
        citation: "",
      },
    ],
  },
  assos: {
    teamName: "Team ASSOS",
    teamDetail:
      "L'équipe Association soutient et coordonne les activités des différentes associations étudiantes.",
    members: [
      {
        image: teamBDS,
        name: "Axel Lenroué",
        role: "Président",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Leo Waetcher",
        role: "Vice-Prez",
        citation: "",
      },
    ],
  },
  partenariat: {
    teamName: "Team PARTENARIAT",
    teamDetail:
      "La team partenariat s'occupe des relations avec les entreprises aifn de régaler les étudiants.",
    members: [
      {
        image: teamBDS,
        name: "Lucas Dervichian",
        role: "Président",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Ruben Vieira",
        role: "Vice-Prez",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Nathan Chartel",
        role: "Vice-Prez",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Léo Emanuel Diouf",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Arthur Dumas",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Momar Gueye",
        role: "Sous fifre",
        citation: "",
      },
    ],
  },
  soiree: {
    teamName: "Team SOIREE",
    teamDetail:
      "La Team Soirée organise les événements festifs, garantissant des moments mémorables pour tous.",
    members: [
      {
        image: teamBDS,
        name: "Quentin Berthelot",
        role: "Président",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Fabien Saint-Pe",
        role: "Vice-Prez",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Rémi Berthelet",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Clara Gory",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Clémence Malterre",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Théo Durand",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Lucas Villegas",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Bartomeo Alemany-Varin",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Victor Piaget",
        role: "Sous fifre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Charbel Ziade",
        role: "Sous fifre",
        citation: "",
      },
    ],
  },
  com: {
    teamName: "Team COM",
    teamDetail:
      "La Team Communication promeut les événements et maintient une image positive de l'organisation à travers différents médias.",
    members: [
      {
        image: teamBDS,
        name: "Manon Delforge",
        role: "Présidente",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Axel Messaoudi",
        role: "Vice-Prez",
        citation: ""
      },
      {
        image: teamBDS,
        name: "Mathieu Caffier",
        role: "Membre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Robin Carpentier",
        role: "Membre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Emma Le Vouedec",
        role: "Membre",
        citation: "",
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
        citation: "",
      },
      {
        image: teamBDS,
        name: "Antoine Laurent",
        role: "Vice-Prez",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Pierre Etheve",
        role: "Membre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Quentin Brisson",
        role: "Membre",
        citation: "",
      },
      {
        image: teamBDS,
        name: "Maxence Janiak",
        role: "Membre",
        citation: "",
      },
    ],
  },
};

export function validTeamId(teamId: string) {
  for (const id in teams) {
    if (id === teamId) {
      return true;
    }
  }
  return false;
}