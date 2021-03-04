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
  | "Aws services"
  | "Serverless"
  | "GraphQl"
  | "MongoDb"
  | "Node"
  | "Php"
  | "Php/Symfony"
  | "Bootstrap"
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

const projects: Array<Project> = [
  {
    title: "Engie",
    year: "2019-2021",
    labels: ["React", "Bootstrap", "Tailwind CSS", "JavaScript", "Python", "Aws services", "Serverless", "GraphQl"],
    nbOfClients: 1,
    isStartup: false,
    done: [
      "Création de toutes les vues du projet",
      "Conseils sur l'UX",
      "Développement de l'API en graphQL",
      "Serverless, cloud aws"
    ],
  },
  {
    title: "Stryng Messaging",
    year: "2017-2018",
    labels: ["React", "React Native", "Python", "Node", "CSS-in-JS", "JavaScript", "MongoDb"],
    nbOfClients: 1,
    isStartup: true,
    done: [
      "Intégration des vues en React.js",
      "POC d'application en React Native",
      "Collaboration à l'équipe front-end",
      "Architecture et stratégie de tests",
    ],
  },
  {
    title: "Videodesk",
    year: "2015-2018",
    labels: ["Php/Symfony", "Node", "CSS", "JavaScript"],
    nbOfClients: 1,
    isStartup: true,
    done: [
    ],
  },
  {
    title: "Trouvea",
    year: "2015-2018",
    labels: ["Php/Symfony", "JavaScript", "CSS"],
    nbOfClients: 1,
    isStartup: true,
    done: [
    ],
  },
  {
    title: "SeFaireAider",
    year: "2015-2018",
    labels: ["Php", "JavaScript"],
    nbOfClients: 1,
    isStartup: true,
    done: [
    ],
  },
];

export default projects;
