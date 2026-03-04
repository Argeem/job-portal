import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

const LoadingPage = () => {
  return (
    <div className="min-h-screen mb-[100vh]">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default LoadingPage;
