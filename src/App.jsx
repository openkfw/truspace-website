import CTASection from "./components/CTASection";
import FeatureDetails from "./components/FeatureDetails";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import Problem from "./components/Problem";

function App() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="bg-gray-900">
          <main>
            <HeaderBar />
            <Hero />
            <Problem /> <FeatureDetails />
            <FeatureSection />
            <LogoCloud />
            <CTASection />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
