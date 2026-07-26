import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedOpportunities from "@/components/home/FeaturedOpportunities";
import WhyChoose from "@/components/home/WhyChoose";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedOpportunities />
      <WhyChoose />
      <Statistics />
      <Testimonials />
      <FAQ />
    </main>
  );
}