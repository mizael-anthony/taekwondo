import BlogSection from "@/components/home/blog-section";
import FeaturesSection from "@/components/home/features-section";
import FooterBlock from "@/components/home/footer-block";
import HeroSection from "@/components/home/hero-section";
import MetricsSection from "@/components/home/metrics-section";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <FeaturesSection/>
      <MetricsSection/>
      <BlogSection/>
      <FooterBlock/>
    </>
  )
}
