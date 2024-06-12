import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import InfoSquare from "@/components/InfoSquare/InfoSquare";
import InfoSquareText from "@/components/InfoSquareText/InfoSquareText";
import Image from "next/image";
import testimonials from "./testimonials.json";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between blue">
      <Header />
      <Hero />
      <div className="flex flex-col-reverse md:flex-row w-full">
        <InfoSquare
          title="Transform your brand"
          description="We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you."
          variant="yellow"
        />
        <Image
          src="/images/desktop/image-transform.jpg"
          alt="Egg picture"
          className="w-full md:w-1/2"
          width={2000}
          height={2000}
        />
      </div>
      <div className="flex flex-col md:flex-row  w-full">
        <Image
          src="/images/desktop/image-stand-out.jpg"
          alt="Egg picture"
          className="w-full md:w-1/2"
          width={2000}
          height={2000}
        />
        <InfoSquare
          title="Stand out to the right audience"
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
          variant="red"
        />
      </div>
      <div className="flex flex-col md:flex-row bg-[#7AC8B7]">
        <InfoSquareText
          image={"image-graphic-design.jpg"}
          title="Graphic Design"
          description="Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention."
          className="graphic-design"
        />
        <InfoSquareText
          image={"image-photography.jpg"}
          title="Photography"
          description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          className="photography"
        />
      </div>
      <Testimonials testimonials={testimonials} />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Home;
