import CTASection from "./components/CTASection";
import FeatureDetails from "./components/FeatureDetails";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeaderBar from "./components/HeaderBar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";

function App() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="bg-gray-900">
          <main>
            <HeaderBar />
            <Hero />
            <LogoCloud />
            <FeatureSection />
            <FeatureDetails />
            <CTASection />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
