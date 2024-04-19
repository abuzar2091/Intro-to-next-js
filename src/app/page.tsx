import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChoseUs from "@/components/WhyChoseUs";
export default function Home() {
  return (
    <main className=" min-h-screen text-white bg-black/[.9] text-center antialiased">
     <div>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <TestimonialCards/>
     </div>
   
    </main>
  
  );
}
