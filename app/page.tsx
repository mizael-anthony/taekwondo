import BlogSection from "@/components/blocks/blog-section";
import FeaturesSection from "@/components/blocks/features-section";
import FooterBlock from "@/components/blocks/footer-block";
import HeroSection from "@/components/blocks/hero-section";
import MetricsSection from "@/components/blocks/metrics-section";

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
