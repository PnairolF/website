const HomeIntro = () => (
  <div className="relative bg-white overflow-hidden antialiased text-gray-900">
    <div className="max-w-screen-xl mx-auto ">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <div className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-32">
          <div className="sm:text-center lg:text-left">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none">
              Ensemble, concevons
              <br className="" />
              <span className="text-blue-600">un produit web innovant</span>
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Bonjour, je suis Thibaud Duthoit.
              <br />
              Développeur front-end freelance, spécialisé en React.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Mes références
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </div>
    <div className="flex justify-center lg:justify-end xl:justify-center items-center p-8 bg-gray-900 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="rounded-full border-white border-4 sm:border-8 w-32 sm:w-48 lg:w-64"
        src="/images/thibaud-duthoit.jpg"
        alt="Thibaud Duthoit"
      />
    </div>
  </div>
);

export default HomeIntro;
