import bomb from "../../assets/images/bomb/bomb.png";
import dynamite from "../../assets/images/bomb/dynamite.png";
import grenade from "../../assets/images/bomb/grenade.png";
import mine from "../../assets/images/bomb/mine.png";
import caritaxi from "../../assets/images/caritaxi.png";
import plane from "../../assets/images/army/plane.png";
import soldier from "../../assets/images/army/soldier.png";
import walterwhite from "../../assets/images/anims/walterwhite.png";
import lapin1 from "../../assets/images/anims/lapin1.png";
import lapin2 from "../../assets/images/anims/lapin2.png";
import lievre1 from "../../assets/images/anims/lievre1.png";
import lievre2 from "../../assets/images/anims/lievre2.png";
import money from "../../assets/images/anims/money.png";
import piggyBank from "../../assets/images/anims/piggy-bank.png";
import dollarEye from "../../assets/images/anims/dollar-eye.png";
import rich from "../../assets/images/anims/rich.png";
import julien from "../../assets/images/anims/julien.png";
import tLetter from "../../assets/images/anims/t.png";
import gwenn from "../../assets/images/anims/gwenn.png";
import hermine from "../../assets/images/anims/hermine.png";
import triskel from "../../assets/images/anims/triskel.png";
import camera from "../../assets/images/anims/camera.png";
import film from "../../assets/images/anims/film.png";
import hollywood from "../../assets/images/anims/hollywood.png";
import asse from "../../assets/images/anims/ASSE.png";
import drum from "../../assets/images/anims/drum.png";

import saymyname from "../../assets/audio/saymyname.aac";
import musicAsse from "../../assets/audio/musiqueAsse.aac";

import adrien from "../../assets/images/teams/bds/adrien.png";
import antoine from "../../assets/images/teams/bds/antoine.png";
import kevin from "../../assets/images/teams/bds/kevin.png";
import laurine from "../../assets/images/teams/bds/laurine.png";
import louis from "../../assets/images/teams/bds/louis.png";
import maxence from "../../assets/images/teams/bds/maxence.png";
import perrine from "../../assets/images/teams/bds/perrine.png";
import richie from "../../assets/images/teams/bds/richie.png";
import simon from "../../assets/images/teams/bds/simon.png";
import thomas from "../../assets/images/teams/bds/thomas.png";
import victor from "../../assets/images/teams/bds/victor.png";
import yael from "../../assets/images/teams/bds/yael.png";

import valentin from "../../assets/images/teams/alumnis/valentin.png";

import leo from "../../assets/images/teams/assos/leo.png";
import axel from "../../assets/images/teams/assos/axel.png";

import antoineL from "../../assets/images/teams/bda/antoineL.png";
import mael from "../../assets/images/teams/bda/mael.png";
import maxenceJ from "../../assets/images/teams/bda/maxenceJ.png";
import pierre from "../../assets/images/teams/bda/pierre.png";
import quentin from "../../assets/images/teams/bda/quentin.png";

import antoineF from "../../assets/images/teams/bureau/antoineF.png";
import augustin from "../../assets/images/teams/bureau/augustin.png";
import evan from "../../assets/images/teams/bureau/evan.png";
import georges from "../../assets/images/teams/bureau/georges.png";
import hugo from "../../assets/images/teams/bureau/hugo.png";
import samuel from "../../assets/images/teams/bureau/samuel.png";

import emma from "../../assets/images/teams/com/emma.png";
import manon from "../../assets/images/teams/com/manon.png";
import matthieu from "../../assets/images/teams/com/matthieu.png";
import robin from "../../assets/images/teams/com/robin.png";
import axelM from "../../assets/images/teams/com/axelM.png";

import arthur from "../../assets/images/teams/partenariat/arthur.png";
import leoE from "../../assets/images/teams/partenariat/leoE.png";
import lucas from "../../assets/images/teams/partenariat/lucas.png";
import nathan from "../../assets/images/teams/partenariat/nathan.png";
import ruben from "../../assets/images/teams/partenariat/ruben.png";

import barto from "../../assets/images/teams/soiree/barto.png";
import charbel from "../../assets/images/teams/soiree/charbel.png";
import clara from "../../assets/images/teams/soiree/clara.png";
import clemence from "../../assets/images/teams/soiree/clemence.png";
import fabien from "../../assets/images/teams/soiree/fabien.png";
import lucasV from "../../assets/images/teams/soiree/lucas.png";
import quentinB from "../../assets/images/teams/soiree/quentinB.png";
import remi from "../../assets/images/teams/soiree/remi.png";
import theo from "../../assets/images/teams/soiree/theo.png";
import victorP from "../../assets/images/teams/soiree/victorP.png";

export type BackgroundAnimationConfig = {
  images: string[];
};

export type AnimationConfig = {
  background?: BackgroundAnimationConfig;
  button?: {
    preText: string;
    btnText: string;
    afterText: string;
  };
  music?: string;
};

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
        image: adrien,
        name: "Adrien Garnier",
        role: "Président",
        citation: "Coup (d'État) dans la team Cum",
      },
      {
        image: laurine,
        name: "Laurine Lefrançois",
        role: "Vice-Prez",
        citation: "Heureuse seulement quand elle est à la salle ou au RU",
      },
      {
        image: richie,
        name: "Richie Abboud",
        role: "Vice-Prez",
        citation: "Le libanais préféré de ton libanais préféré",
      },
      {
        image: louis,
        name: "Louis Richard",
        role: "Membre",
        citation: "Faudrait penser à aller niquer sa race un jour !",
      },
      {
        image: simon,
        name: "Simon Breton",
        role: "Membre",
        citation: "Normand ou Breton selon ce qui m’arrange",
      },
      {
        image: maxence,
        name: "Maxence Abélard",
        role: "Membre",
        citation: "Attention ! Ne fini jamais ses",
      },
      {
        image: thomas,
        name: "Thomas Vauley",
        role: "Membre",
        citation: "Pro de l'informatrique",
      },
      {
        image: kevin,
        name: "Kevin Le Sommer",
        role: "Membre",
        citation: "Wazinkkkkkkkkkkkkkkk",
      },
      {
        image: yael,
        name: "Yael Lucas",
        role: "Membre",
        citation: "",
        animation: {
          button: {
            preText: "Say my name",
            btnText: "Yael Lucas",
            afterText: "You're goddamn right.",
          },
          music: saymyname,
          background: {
            images: [walterwhite],
          },
        },
      },
      {
        image: victor,
        name: "Victor Baville",
        role: "Membre",
        citation: "그건 인종차별이야",
      },
      {
        image: perrine,
        name: "Perrine Roeser",
        role: "Membre",
        citation: "GCBranlette c'est trop",
      },
      {
        image: antoine,
        name: "Antoine Mongrand",
        role: "Membre",
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
        image: evan,
        name: "Evan Le Lièvre",
        role: "Président",
        citation: "Tu fais quoi, je fais le lièvre",
        animation: {
          background: {
            images: [lapin1, lapin2, lievre1, lievre2],
          },
        },
      },
      {
        image: georges,
        name: "Georges Halisso",
        role: "VP Interne",
        citation: "On l'appelle aussi «Lpb des syriens», normal y'en a plus beaucoup...",
        animation: {
          background: {
            images: [bomb, dynamite, grenade, mine, asse],
          },
          music: musicAsse,
        },
      },
      {
        image: hugo,
        name: "Hugo Roger",
        role: "VP Externe",
        citation: "Un jour je vous expliquerai pourquoi le Mont est breton",
      },
      {
        image: augustin,
        name: "Augustin Zahorka",
        role: "Trésorier",
        citation: "Personne s'y attendait",
        animation: {
          background: {
            images: [money, piggyBank, dollarEye, rich],
          },
        },
      },
      {
        image: antoineF,
        name: "Antoine Frémont",
        role: "Vice Trésorier",
        citation: "Encore plus polyvalent que son couteau suisse",
        animation: {
          background: {
            images: [julien, tLetter],
          },
        },
      },
      {
        image: samuel,
        name: "Samuel Rignault",
        role: "Secrétaire",
        citation: "C’est zinzin gars",
      },
    ],
  },
  alumni: {
    teamName: "Team ALUMNIS",
    teamDetail:
      "L'équipe Alumni garde le contact avec les anciens membres et organise des événements pour maintenir le réseau actif.",
    members: [
      {
        image: valentin,
        name: "Valentin Naegely",
        role: "Président",
        citation: "Ah mais t'es revenu ?",
      },
    ],
  },
  assos: {
    teamName: "Team ASSOS",
    teamDetail:
      "L'équipe Association soutient et coordonne les activités des différentes associations étudiantes.",
    members: [
      {
        image: axel,
        name: "Axel Lenroué",
        role: "Président",
        citation: "Crise de swag",
        animation: {
          background: {
            images: [caritaxi],
          },
        },
      },
      {
        image: leo,
        name: "Leo Waechter",
        role: "Vice-Prez",
        citation:
          "NIQUE LES SALOPES QUI PARLENT EN SCRED SI LE SAVOIR EST UNE ARME ET BAH NIQUE TA MERE LA RUE C'EST DANGEREUX POTO LE MONDE APPARTIENT A CEUX QUI LEVENT LE YAMAHA 4 TEMPS NIQUE LA CANINE ET LES STUPS QUI SY FROTTE EFFRITE PLAN WEED BIEN SERVI 8 € LE GRAMME 0683647893",
      },
    ],
  },
  partenariat: {
    teamName: "Team PARTENARIAT",
    teamDetail:
      "La team partenariat s'occupe des relations avec les entreprises aifn de régaler les étudiants.",
    members: [
      {
        image: lucas,
        name: "Lucas Dervichian",
        role: "Président",
        citation: "Jeune entrepreneur malicieux",
      },
      {
        image: ruben,
        name: "Ruben Vieira",
        role: "Vice-Prez",
        citation:
          "C'est moi qui ait fait le site pas plus de 90 caractères svp",
      },
      {
        image: nathan,
        name: "Nathan Chartel",
        role: "Vice-Prez",
        citation: "L’homme au bob mais sans les muscles",
      },
      {
        image: leoE,
        name: "Léo Emanuel Diouf",
        role: "Membre",
        citation:
          "Rien ne sert de courir à point quand il faut partir. Parce qu’aux dernières nouvelles Kylian Mbappé n’a jamais fait de disque d’or. Gingembre",
      },
      {
        image: arthur,
        name: "Arthur Dumas",
        role: "Membre",
        citation: "Mieux vaut tard que jamais",
      },
    ],
  },
  soiree: {
    teamName: "Team SOIREE",
    teamDetail:
      "La Team Soirée organise les événements festifs, garantissant des moments mémorables pour tous.",
    members: [
      {
        image: quentinB,
        name: "Quentin Berthelot",
        role: "Président",
        citation: "Yec’hed mad mes goulus !",
        animation: {
          background: {
            images: [gwenn, hermine, triskel],
          },
        },
      },
      {
        image: fabien,
        name: "Fabien Saint-Pe",
        role: "Vice-Prez",
        citation: "Viens on se bat (ici c'est Paris)",
      },
      {
        image: remi,
        name: "Rémi Berthelet",
        role: "Membre",
        citation: "69 La Trik dans le sang, 69 Patrick dans le cœur",
      },
      {
        image: clara,
        name: "Clara Gory",
        role: "Membre",
        citation: "Toujours à l'affut sur les potins. Balancez lui vos meilleurs secrets...",
      },
      {
        image: clemence,
        name: "Clémence Malterre",
        role: "Membre",
        citation: "L'armée de l'air recrute (envoyez lui vos CV)",
        animation: {
          background: {
            images: [plane, soldier],
          },
        },
      },
      {
        image: theo,
        name: "Théo Durand",
        role: "Membre",
        citation: "Mec de cité simple",
      },
      {
        image: lucasV,
        name: "Lucas Villegas",
        role: "Membre",
        citation: "Bon si t'insistes...",
      },
      {
        image: barto,
        name: "Bartomeo Alemany-Varin",
        role: "Membre",
        citation: "Irréel et parfois aigri mais c'est pas ma faute, je dors 4h",
      },
      {
        image: victorP,
        name: "Victor Piaget",
        role: "Membre",
        citation: "team naps okay okay",
      },
      {
        image: charbel,
        name: "Charbel Ziade",
        role: "Membre",
        citation: "Mon plus gro kiff ? Quand j'ai sorti le porsche",
      },
    ],
  },
  com: {
    teamName: "Team COM",
    teamDetail:
      "La Team Communication promeut les événements et maintient une image positive de l'organisation à travers différents médias.",
    members: [
      {
        image: manon,
        name: "Manon Delforge",
        role: "Présidente",
        citation: "Est + team cum que team com",
      },
      {
        image: axelM,
        name: "Axel Messaoudi",
        role: "Vice-Prez",
        citation:
          "A recemment detroné la joconde en tant que meilleur meuble du Lucullus",
        animation: {
          background: {
            images: [camera, film, hollywood],
          },
        },
      },
      {
        image: matthieu,
        name: "Mathieu Caffier",
        role: "Membre",
        citation: "Rien de mieux qu’une bonne bière après une bonne bière",
      },
      {
        image: robin,
        name: "Robin Carpentier",
        role: "Membre",
        citation: "Je t’avais dit de ne pas faire le con",
      },
      {
        image: emma,
        name: "Emma Le Vouedec",
        role: "Membre",
        citation: "La vérité j'ai pas d'idée c'est une singerie",
      },
    ],
  },
  bda: {
    teamName: "Team BDA",
    teamDetail:
      "La Team BDA (Bureau Des Arts) stimule la créativité et l'expression artistique au sein de l'école.",
    members: [
      {
        image: mael,
        name: "Maël Ricouard",
        role: "Président",
        citation: "Tout cul tendu mérite son dû",
      },
      {
        image: antoineL,
        name: "Antoine Laurent",
        role: "Vice-Prez",
        citation: "J'aime la musique mais pas tomber de scène",
      },
      {
        image: pierre,
        name: "Pierre Etheve",
        role: "Membre",
        citation:
          "J’ai assez d’inspiration pour m’habiller en sac cabas mais pas assez pour trouver une description",
      },
      {
        image: quentin,
        name: "Quentin Brisson",
        role: "Membre",
        citation: "Imitateur d’animaux à mes heures perdus",
      },
      {
        image: maxenceJ,
        name: "Maxence Janiak",
        role: "Membre",
        citation:
          "Prendre des douches plus de 1 fois par semaine n'est pas bon pour la peau et pour notre planète",
        animation: {
          background: {
            images: [
              drum
            ]
          }
        }
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
