import HeroSection from "./components/Hero";
import About from "./components/About";
import Layout from "./Layout";
import Skils from "./components/Skils";
import Projects from "./components/Projects";

function App() {
  return (
    <Layout>
      <HeroSection />
      <About />
      <Skils />
      <Projects />
      <div
        id="contact"
        className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white"
      >
        <div className="w-full max-w-md space-y-6 p-8">
          <h2 className="text-center text-[3rem] font-bold">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                className="mt-1 w-full rounded border border-zinc-700 bg-zinc-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded border border-zinc-700 bg-zinc-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Share your thoughts
              </label>
              <textarea className="mt-1 w-full rounded border border-zinc-700 bg-zinc-800 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full rounded bg-white py-2 font-semibold text-black transition duration-200 hover:bg-blue-700"
              >
                SHARE YOUR FEEDBACK
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 text-center">
          <p>
            It is very important for us to keep in touch with you, so we are
            always ready to answer any questions that interest you. Shoot!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default App;
