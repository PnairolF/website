import DotsGrid from "../DotsGrid";
import LogoReact from "../LogoReact";
import { yearsWorking } from "../../data/hours-working";
import projects from "../../data/projects";

const ShowCase = () => (
  <section className="py-16 overflow-hidden lg:py-24">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <DotsGrid rootClassNames="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" />

      <div className="relative">
        <h3 className="lg:text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Vous cherchez un développeur de confiance ?
        </h3>
        <p className="mt-4 max-w-2xl mx-auto lg:text-center text-xl leading-7 text-gray-500">
          Passionné par le développement web, je suis disponible pour vous
          accompagner sur votre projet : conception,
          architecture, connexion Front-end / back-end, stratégie de tests, stratégie de déploiement, base de données.
        </p>
      </div>

      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
            En {yearsWorking} ans, j'ai accompagné plus
            <span className="block font-bold text-blue-500">
              de{" "}
              {projects.length}{" "}
              projets
            </span>
          </h4>
          <p className="mt-3 text-lg leading-7 text-gray-500">
            Ma plus-value, c'est ma passion et mon expertise transverse.
            Du Front au back en passant par l'architecture, je peux intervenir sur l'ensemble du produit
          </p>

          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    <LogoReact className="w-12" />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Spécialisé en React.js
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    J'ai pu accompagner startup et grosse entreprise sur la conception et la création de front en React.
                    C'est ce qui me permet d'être très efficace et d'apporter une réelle expertise.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Architecture
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Que ce soit coté front ou back, je donne beaucoup d'importance au choix de la structure du projet
                    et à son architecture afin de répondre au mieux à vos besoins.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Collaboration au sein d'une équipe
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Vous avez surement besoin de quelqu'un capable d'intégrer
                    une équipe déjà en place. Ça tombe bien, c'est ce qui me
                    convient le mieux ! J'ai l'habitude de débarquer sur des
                    projets en cours pour du renfort, ou bien de poser une
                    architecture en concertation avec d'autres développeurs
                    expérimentés.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0">
          <div className="relative mx-auto text-blue-500">
            <LogoReact className="w-full" />
            <h2 className="text-center text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl md:text-4xl sm:leading-9">
              Ma spécialisation :{" "}
              <strong className="font-bold text-blue-500">React</strong>
            </h2>
          </div>
        </div>
      </div>

      <DotsGrid rootClassNames="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" />

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Un de mes derniers projets :
              <span className="block font-bold text-green-400">
                Data@Engie pour Engie
              </span>
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              Engie avait besoin d'un développeur Full-stack afin de répondre à ses besoisn front
              mais aussi pour accompagner son équipe backend et devops.
            </p>

            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Conception et réalisation de l'interface
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Il a fallu concevoir une interface from scratch à partir des besoins du client.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Monter en compétences et s'adapter
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      En collaboration avec de nombreuses équipes (interne/externe, back/devops/sécurité),
                      J'ai du m'adapter à chaque contraintes
                      Mais aussi apprendre les contextes et leur fonctionnements afin d'apporter la meilleur solution.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-300 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Innover
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Etant un projet qui impacte toute la compagnie,
                      avec de gros challenges dans la façon d'utiliser la data,
                      l'innovation a été le maitre mot de ce projet d'envergure.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <img
              className="relative mx-auto"
              width="550"
              src="/images/engie-CDH.png"
              alt="Maquettes de la dernière version de la platforme d'Engie (Common data hub)."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShowCase;
