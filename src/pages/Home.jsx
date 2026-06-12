import { Link } from "react-router-dom";

function Home() {
  const games = [
    {
      title: "Floor Color Maze",
      status: "Released",
      description:
        "An underwater adventure featuring exploration, progression systems, immersive environments, and exciting gameplay.",
      image: "/games/floorcolormaze/icon.png",
      button: "Released",
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
  ];

  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="text-purple-500 font-semibold uppercase tracking-wider">
            Indie Game Developer
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
            Creating Fun &
            <span className="block text-purple-500">
              Engaging Game Experiences
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Unity Game Developer and MERN Stack Developer passionate
            about building immersive gameplay experiences and scalable
            digital products.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/games"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              View Games
            </Link>

            <Link
              to="/contact"
              className="border border-zinc-700 px-8 py-4 rounded-xl hover:bg-zinc-900"
            >
              Contact Me
            </Link>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-purple-500">
                1
              </h3>
              <p className="text-gray-400 mt-2">
                Published Game
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-purple-500">
                1
              </h3>
              <p className="text-gray-400 mt-2">
                Upcoming Game
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-purple-500">
                3
              </h3>
              <p className="text-gray-400 mt-2">
                Industry Internships
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-purple-500">
                4+
              </h3>
              <p className="text-gray-400 mt-2">
                Years Learning
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-purple-500 font-semibold uppercase tracking-widest">
            About Cupid Game Studio
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Crafted by a Passionate Game Developer
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed">
            Hi, I'm Aman Kushwaha, the creator behind Cupid Game Studio.
            I specialize in game development with Unity and full-stack web
            development using the MERN stack.
          </p>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            My goal is to create fun, engaging, and memorable gaming
            experiences while continuously exploring new technologies,
            gameplay mechanics, and creative ideas.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
              Unity
            </span>

            <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
              C#
            </span>

            <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
              React
            </span>

            <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
              Node.js
            </span>

            <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
              Blender
            </span>

            <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
              AI / ML
            </span>

          </div>

          <Link
            to="/about"
            className="inline-block mt-10 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Learn More About Me
          </Link>

        </div>
      </section>

      {/* Games */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-5xl font-bold">
              Featured Games
            </h2>

            <p className="mt-4 text-gray-400">
              Current and upcoming projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
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

          <div className="text-center mt-12">
            <Link
              to="/games"
              className="bg-purple-600 px-8 py-4 rounded-xl inline-block"
            >
              View All Projects
            </Link>
          </div>

        </div>
      </section>

      {/* Why Our Studio */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">
            Why Choose Our Games
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-zinc-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold">
                Engaging Gameplay
              </h3>
              <p className="text-gray-400 mt-4">
                Every mechanic is designed to keep players entertained and challenged.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold">
                Optimized Performance
              </h3>
              <p className="text-gray-400 mt-4">
                Smooth experiences across a wide range of mobile devices.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold">
                Player First
              </h3>
              <p className="text-gray-400 mt-4">
                Built with player feedback and long-term enjoyment in mind.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Open to collaborations, freelance opportunities,
            publishing partnerships, and exciting game projects.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-purple-600 px-10 py-4 rounded-xl"
          >
            Get In Touch
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;