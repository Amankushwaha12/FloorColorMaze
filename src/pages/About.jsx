function About() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="text-purple-500 uppercase tracking-widest font-semibold">
            About The Studio
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            Building Games,
            <span className="block text-purple-500">
              Creating Experiences
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-xl max-w-3xl mx-auto">
            An independent game development studio focused on creating
            engaging gameplay experiences, innovative digital products,
            and memorable adventures for players worldwide.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              My Story
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Hi, I'm Aman Kushwaha — a passionate Game Developer and
              Full Stack Developer currently pursuing B.Tech in Computer
              Science Engineering.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              My journey started with curiosity about how games work.
              That curiosity evolved into building gameplay systems,
              designing levels, creating 3D assets, and developing
              complete gaming experiences using Unity and C#.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Alongside game development, I specialize in MERN Stack
              development, creating scalable web applications,
              dashboards, APIs, and modern user experiences.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h3 className="text-3xl font-bold">
              Quick Facts
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <h4 className="text-purple-500 font-semibold">
                  Published Games
                </h4>
                <p className="text-gray-400">
                  Plane Dash
                </p>
              </div>

              <div>
                <h4 className="text-purple-500 font-semibold">
                  Current Project
                </h4>
                <p className="text-gray-400">
                  Dive Horizon
                </p>
              </div>

              <div>
                <h4 className="text-purple-500 font-semibold">
                  Specialization
                </h4>
                <p className="text-gray-400">
                  Unity, MERN Stack, AI/ML
                </p>
              </div>

              <div>
                <h4 className="text-purple-500 font-semibold">
                  Location
                </h4>
                <p className="text-gray-400">
                  New Delhi, India
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Technologies & Skills
          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            {[
              "Unity",
              "C#",
              "React",
              "Node.js",
              "MongoDB",
              "Express.js",
              "JavaScript",
              "Tailwind CSS",
              "Blender",
              "Maya",
              "ZBrush",
              "AI / ML",
              "Python",
              "Java",
              "SQL"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Experience
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold">
                DRDO - SSPL
              </h3>

              <p className="text-purple-500 mt-2">
                AI/ML Intern
              </p>

              <p className="text-gray-400 mt-4">
                Worked on signal processing, blink detection,
                secure communication systems, and AI-powered
                interfaces.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold">
                NIHAL Software
              </h3>

              <p className="text-purple-500 mt-2">
                Game Developer Intern
              </p>

              <p className="text-gray-400 mt-4">
                Developed gameplay systems, integrated 3D assets,
                optimized performance, and improved player experience.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold">
                WEB3TASK
              </h3>

              <p className="text-purple-500 mt-2">
                Game Developer Intern
              </p>

              <p className="text-gray-400 mt-4">
                Worked on game mechanics, asset management,
                animations, UI design, and gameplay refinement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Vision
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed">
            My goal is to grow this independent studio into a place
            where creativity, technology, and storytelling come together
            to create unforgettable gaming experiences. Every project is
            an opportunity to learn, innovate, and push the boundaries
            of interactive entertainment.
          </p>

        </div>
      </section>

    </div>
  );
}

export default About;