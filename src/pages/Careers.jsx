function Careers() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold">
          Work With Us
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
          We're an independent game development studio focused on creating
          engaging gaming experiences. While we are not actively hiring,
          we're always interested in connecting with talented creators.
        </p>
      </section>

      {/* Current Status */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-10">

          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>

            <h2 className="text-3xl font-bold">
              Current Status
            </h2>
          </div>

          <p className="mt-6 text-gray-400 text-lg">
            At this stage, the studio is focused on developing and
            publishing games. We do not have any full-time openings
            available right now.
          </p>

          <p className="mt-4 text-gray-400 text-lg">
            As the studio grows, future opportunities may become
            available in game development, design, art, marketing,
            and community management.
          </p>

        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Open To Collaborations
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">
                Game Development
              </h3>

              <p className="mt-4 text-gray-400">
                Collaboration on gameplay systems, mechanics,
                prototyping, and Unity projects.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">
                Freelance Projects
              </h3>

              <p className="mt-4 text-gray-400">
                Available for Unity, React, MERN Stack,
                and custom software development projects.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold">
                Publishing & Partnerships
              </h3>

              <p className="mt-4 text-gray-400">
                Interested in discussing publishing opportunities,
                business partnerships, and joint ventures.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Future */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-zinc-800 rounded-3xl p-12">

          <h2 className="text-4xl font-bold">
            Future Opportunities
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            As more games are released and the studio expands,
            we plan to create opportunities for developers,
            artists, designers, and creative professionals.
          </p>

          <p className="mt-4 text-gray-500">
            Follow our journey and stay connected for future updates.
          </p>

        </div>
      </section>

    </div>
  );
}

export default Careers;