type Label =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Flow"
  | "React"
  | "React Native"
  | "CSS-in-JS"
  | "SCSS"
  | "Tailwind CSS"
  | "Prismic.io"
  | "Node.js"
  | "jQuery"
  | "Pug"
  | "Rails"
  | "Gatsby.js"
  | "Python"
  | "Cloud aws"
  | "Serverless"
  | "Next.js";

export type Project = {
  title: string;
  year: string;
  nbOfClients: number;
  isStartup: boolean;
  description?: string;
  labels?: Array<Label>;
  done?: Array<string>;
};

const sitesVitrine = [
  "Mark Decker",
  "Dimis",
  "Marquand",
  "Optimum",
  "Samuel Deschamps",
  "MF07",
  "Atelier d'Arte",
  "Benedicto",
  "Creatys Flor",
  "JCGros",
  "Darcel",
  "Morgane Pochet",
  "Antenne Hertech",
  "Sofia Valves",
  "Bjornsson",
  "Nicolas Tonnard",
  "Gauthier Jansen",
  "Dopsia",
  "Site perso",
  "Amplitude Isolation",
];

const projects: Array<Project> = [
  {
    title: "Engie",
    year: "2019-2021",
    labels: ["React", "Tailwind CSS", "JavaScript", "Python", "Cloud aws", "Serverless"],
    nbOfClients: 1,
    isStartup: false,
    done: [
      "Création de toutes les vues du projet",
      "Conseils sur l'UX et création de wireframes",
      "Montée en compétences sur Ruby on Rails pour accompagner le back-end",
    ],
  },
  {
    title: "Stryng Messaging",
    year: "2017-2018",
    labels: ["React", "React Native", "CSS-in-JS", "JavaScript"],
    nbOfClients: 1,
    isStartup: true,
    done: [
      "Intégration des vues en React.js",
      "POC d'application en React Native",
      "Collaboration à l'équipe front-end",
      "Architecture et stratégie de tests",
      "1 an de collaboration à temps plein",
    ],
  },
  {
    title: "Videodesk",
    year: "2015-2018",
    labels: ["React", "React Native", "CSS", "JavaScript"],
    nbOfClients: 2,
    isStartup: true,
    done: [
      "Développement front-end et intégration sur un projet React.js",
      "Intégration des vues sur application mobile en React native",
    ],
  },
];

export default projects;
