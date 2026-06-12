function Games() {
  const games = [
    {
      title: "Floor Color Maze",
      status: "Released",
      description:
        "An underwater adventure featuring exploration, progression systems, immersive environments, and exciting gameplay.",
      image: "/games/floorcolormaze/icon.png",
      button: "Google Play",
      link: "https://play.google.com/store/apps/details?id=com.CupidGames.FloorColorMaze",
    },
    {
      title: "Wall Duel",
      status: "Coming Soon",
      description:
        "An underwater adventure featuring exploration, progression systems, immersive environments, and exciting gameplay.",
      image: "/games/wallduel/icon.png",
      button: "Coming Soon",
      link: "#",
    },
    {
      title: "Dive Horizon (Made With Web3Task Company)",
      status: "Released",
      description:
        "An underwater adventure featuring exploration, progression systems, immersive environments, and exciting gameplay.",
      image: "/games/divehorizon/icon.png",
      button: "Google Play",
      link: "https://play.google.com/store/apps/details?id=com.Web3Task.DiveHorizon&hl=en",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold">
          Our Games
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          We create engaging games focused on fun gameplay,
          memorable experiences, and high-quality execution.
        </p>
      </section>

      {/* Games Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          {games.map((game) => (
            <div
              key={game.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500 transition-all duration-300"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <span
                  className={`px-4 py-2 rounded-full text-sm ${
                    game.status === "Live"
                      ? "bg-green-600"
                      : game.status === "Released"
                      ? "bg-blue-600"
                      : "bg-yellow-600"
                  }`}
                >
                  {game.status}
                </span>

                <h2 className="text-3xl font-bold mt-6">
                  {game.title}
                </h2>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {game.description}
                </p>

                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition"
                >
                  {game.button}
                </a>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Future Projects */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-zinc-800 rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold">
            More Projects in Development
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Our studio is continuously experimenting with new ideas,
            gameplay mechanics, and multiplayer experiences.
            Stay tuned for future announcements.
          </p>

        </div>
      </section>

    </div>
  );
}

export default Games;