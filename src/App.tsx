import "./index.css";
import { Layout } from "./components/index";
import { AnimateOnScroll } from "./components/animate-on-scroll";

function App() {
  return (
    <Layout>
      <main>
        <section className="h-96 bg-red-200" />
        <section className="h-96 bg-red-200" />
        <section className="h-96 bg-red-200" />
        <section>
          <AnimateOnScroll
            delay={0.5}
            duration={0.9}
            timingCubic={[0.17, 0.55, 0.55, 1]}
            translate="translateY(100px)"
            animateOnce={true}
          >
            <h1 className="text-3xl font-bold underline text-red-300">
              Hello world!
            </h1>
          </AnimateOnScroll>
        </section>
        <section className="h-96 bg-red-200" />
      </main>
    </Layout>
  );
}

export default App;
