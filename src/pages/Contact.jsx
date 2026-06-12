function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Let's Build Something Amazing
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Whether you have a game idea, development project, business inquiry,
          collaboration opportunity, or simply want to connect, I'd love to
          hear from you.
        </p>
      </section>

      {/* Main Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              I'm currently available for freelance projects, game
              development, web development, publishing discussions,
              partnerships, and creative collaborations.
            </p>

            <div className="mt-10 space-y-5">

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-purple-500 font-semibold">
                  Email
                </h3>

                <p className="mt-2 text-gray-300">
                  Amanqkhs@email.com
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-purple-500 font-semibold">
                  Location
                </h3>

                <p className="mt-2 text-gray-300">
                  Delhi, India
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-purple-500 font-semibold">
                  LinkedIn
                </h3>

                <a
                  href="https://www.linkedin.com/in/aman-kushwaha-49903925a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-blue-400 hover:text-blue-300"
                >
                  View LinkedIn Profile
                </a>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-purple-500 font-semibold">
                  GitHub
                </h3>

                <a
                  href="https://github.com/Amankushwaha12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-blue-400 hover:text-blue-300"
                >
                  View GitHub Projects
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold">
              Send a Message
            </h2>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="mt-8 space-y-5"
            >

              {/* Web3Forms Key */}
              <input
                type="hidden"
                name="access_key"
                value="85cc7819-3ebc-4f14-9f72-32d31d6e8a57"
              />

              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission"
              />

              <input
                type="hidden"
                name="from_name"
                value="Cupid Game Studio Website"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
              />

              <input
                type="text"
                name="project"
                placeholder="Subject"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
              />

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-zinc-800 rounded-3xl p-12">

          <h2 className="text-4xl font-bold">
            Open For Collaboration
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Interested in game development, web applications, freelance
            projects, or publishing opportunities? Let's create something
            great together.
          </p>

        </div>
      </section>

    </div>
  );
}

export default Contact;