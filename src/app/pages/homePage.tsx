import HeroSection from "../Components/herSection";
import Navbar from "../Modules/nav";

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          conic-gradient(
            from 210deg at 50% 50%,
            #ffffff,
            #f7eff4ff,
            #dbbad6ff,
            #f7b3ecff,
            #f09be2ff,
            #e485d7ff,
            #f5d6f1ff,
            #ffffff
          )
        `,
      }}
    >
      {/* Hero section now contains navbar */}
      <HeroSection />
    </div>
  );
}
