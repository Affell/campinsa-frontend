import teamBDS from "../../assets/images/teams/teamBDS.png";

import bomb from "../../assets/images/bomb/bomb.png";
import dynamite from "../../assets/images/bomb/dynamite.png";
import grenade from "../../assets/images/bomb/grenade.png";
import mine from "../../assets/images/bomb/mine.png";

import saymyname from "../../assets/audio/saymyname.aac";

export type BackgroundAnimationConfig = {
  images: string[];
}

export type AnimationConfig = {
  background?: BackgroundAnimationConfig;
  button?: {
    preText: string;
    btnText: string;
    afterText: string;
    music?: string;
  }
}

export type Member = {
  image: string;
  name: string;
  role: string;
  citation: string;
  animation?: AnimationConfig;
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
        citation:
          "Coup (d'État) dans la team Cum",
      },
      {
        image: teamBDS,
        name: "Laurine Lefrançois",
        role: "Vice-Prez",
        citation: "Heureuse seulement quand elle est à la salle ou au RU",
      },
      {
        image: teamBDS,
        name: "Richie Abboud",
        role: "Vice-Prez",
        citation: "Le libanais préféré de ton libanais préféré",
      },
      {
        image: teamBDS,
        name: "Louis Richard",
        role: "Sous fifre",
        citation: "Faudrait penser à aller niquer sa race un jour! ",
      },
      {
        image: teamBDS,
        name: "Simon Breton",
        role: "Sous fifre",
        citation: "Normand ou Breton selon ce qui m’arrange",
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
        citation: "Wazinkkkkkkkkkkkkkkk",
      },
      {
        image: teamBDS,
        name: "Yael Lucas",
        role: "Sous fifre",
        citation: "",
        animation: {
          button: {
            preText: "Say my name",
            btnText: "Yael Lucas",
            afterText: "You're goddamn right.",
            music: saymyname
          }
        }
      },
      {
        image: teamBDS,
        name: "Victor Baville",
        role: "Sous fifre",
        citation: "그건 인종차별이야",
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
        citation:
          "Oublie que t'as aucune chance vas-y fonce on sait jamais sur un malentendu ça peut marcher",
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
        citation: "Tu fais quoi, je fais le lièvre",
      },
      {
        image: teamBDS,
        name: "Georges Halisso",
        role: "VP Interne",
        citation: "Boom Mohammed",
        animation: {
          background: {
            images: [
              bomb,
              dynamite,
              grenade,
              mine
            ]
          }
        }
      },
      {
        image: teamBDS,
        name: "Hugo Roger",
        role: "VP Externe",
        citation: "Un jour je vous expliquerai pourquoi le Mont est breton",
      },
      {
        image: teamBDS,
        name: "Augustin Zahorka",
        role: "Trésorier",
        citation: "Actuellement en partie de cache-cache avec l'argent. Spoiler : l'argent est super bon.",
      },
      {
        image: teamBDS,
        name: "Antoine Frémont",
        role: "Vice Trésorier",
        citation: "Encore plus polyvalent que son couteau suisse",
      },
      {
        image: teamBDS,
        name: "Samuel Rignault",
        role: "Secrétaire",
        citation: "C’est zinzin gars ",
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
        citation: "Je cherche une meuf protestante pour me marier svp ",
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
        citation:
          "C'est moi qui ait fait le site pas plus de 90 caractères svp",
      },
      {
        image: teamBDS,
        name: "Nathan Chartel",
        role: "Vice-Prez",
        citation: "L’homme au bob mais sans les muscles ",
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
        citation: "Yec’hed mad mes goulus !",
      },
      {
        image: teamBDS,
        name: "Fabien Saint-Pe",
        role: "Vice-Prez",
        citation: "Viens on se bat  (ici c'est Paris) ",
      },
      {
        image: teamBDS,
        name: "Rémi Berthelet",
        role: "Sous fifre",
        citation: "69 La Trik dans le sang, 69 Patrick dans le cœur ",
      },
      {
        image: teamBDS,
        name: "Clara Gory",
        role: "Sous fifre",
        citation: "La FISA",
      },
      {
        image: teamBDS,
        name: "Clémence Malterre",
        role: "Sous fifre",
        citation: "L'armée de l'air recrute (envoyez lui vos CV) (que les bruns ténébreux +1m90)",
      },
      {
        image: teamBDS,
        name: "Théo Durand",
        role: "Sous fifre",
        citation: "Mec de cité simple",
      },
      {
        image: teamBDS,
        name: "Lucas Villegas",
        role: "Sous fifre",
        citation: "Bon si t'insistes...",
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
        citation: "team naps okay okay",
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
        citation: "Est + team cum que team com",
      },
      {
        image: teamBDS,
        name: "Axel Messaoudi",
        role: "Vice-Prez",
        citation: "L'Homme des caméras Besoin d'une photo ? Cherchez Axel",
      },
      {
        image: teamBDS,
        name: "Mathieu Caffier",
        role: "Membre",
        citation: "Rien de mieux qu’une bonne bière après une bonne bière",
      },
      {
        image: teamBDS,
        name: "Robin Carpentier",
        role: "Membre",
        citation: "Je t’avais dit de ne pas faire le con",
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
        citation: "Tout cul tendu mérite son dû",
      },
      {
        image: teamBDS,
        name: "Antoine Laurent",
        role: "Vice-Prez",
        citation: "J'aime la musique mais pas tomber de scène ",
      },
      {
        image: teamBDS,
        name: "Pierre Etheve",
        role: "Membre",
        citation:
          "J’ai assez d’inspiration pour m’habiller en sac cabas mais pas assez pour trouver une description ",
      },
      {
        image: teamBDS,
        name: "Quentin Brisson",
        role: "Membre",
        citation: "Imitateur d’animaux à mes heures perdus ",
      },
      {
        image: teamBDS,
        name: "Maxence Janiak",
        role: "Membre",
        citation: "Prendre des douches plus de 1 fois par semaine n'est pas bon pour la peau et pour notre planète ",
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
