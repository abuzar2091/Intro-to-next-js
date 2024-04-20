import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinar";
import WavyBackgroundAndInstructor from "@/components/WavyBackgroundAndInstructor";
import WhyChoseUs from "@/components/WhyChoseUs";
export default function Home() {
  return (
    <main className=" min-h-screen text-white bg-black/[.9] text-center antialiased">
     <div>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <WavyBackgroundAndInstructor/>
      <Footer/>
     </div>
   
    </main>
  
  );
}
