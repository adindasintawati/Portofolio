import Skill from "@/components/molecules/Skill";
import Education from "@/components/organism/Education";
import Experience from "@/components/organism/Experience";
import Footer from "@/components/organism/Footer";
import Introduction from "@/components/organism/Introduction";
import Navbar from "@/components/organism/Navbar";
import Project from "@/components/organism/Project";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Experience />
      <Skill />
      <Project />
      <Education />
      <Footer />
    </div>
  );
};

export default Home;
