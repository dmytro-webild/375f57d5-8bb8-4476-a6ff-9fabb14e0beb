"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Zap, Shield, Users, MapPin } from "lucide-react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Shop", id: "products" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="MEMBERS MARKET"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="MEMBERS MARKET"
      description="Premium streetwear from Covington, LA. Visionary designs, fast shipping, and quality apparel. DoubleM runs the world."
      buttons={[{ text: "Shop the Collection", href: "#products" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777763692127-h2q5t9oz.jpg?_wi=1"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="About Members Market"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      cardClassName="border-2 border-white/10"
      cardNameClassName="font-bold uppercase tracking-wider"
      products={[
        { id: "p1", name: "Signature Hoodie", price: "$85", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497667-sros8ryr.jpg?_wi=1" },
        { id: "p2", name: "Tracksuits", price: "$120", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-ndirln0w.jpg?_wi=1" },
        { id: "p3", name: "Shirt and Short Set", price: "$95", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-8o21erfh.jpg?_wi=1" },
        { id: "p4", name: "Tracksuit", price: "$120", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-f81fog3m.jpg" },
        { id: "p5", name: "High Quality Shirts", price: "$45", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-1kahcq3w.jpg" },
      ]}
      buttons={[{ text: "View New Apparel", href: "#products" }]}
      title="Shop Our Latest Collection"
      description="Discover the latest drops from Members Market. Quality streetwear built to last."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { title: "Fast Shipping", description: "Get your gear in 1-2 business days. Fast tracking for every member.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777763692127-h2q5t9oz.jpg?_wi=2", buttonIcon: Zap, buttonHref: "#products" },
        { title: "Quality Material", description: "Premium fabrics meant for comfort and longevity. Built for the daily grind.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497667-sros8ryr.jpg?_wi=2", buttonIcon: Shield, buttonHref: "#products" },
        { title: "Supportive Community", description: "Join the DoubleM family. We grow with our members.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-ndirln0w.jpg?_wi=2", buttonIcon: Users, buttonHref: "#products" },
        { title: "Local Roots", description: "Proudly based in Covington, LA. Streetwear with local heritage.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-8o21erfh.jpg?_wi=2", buttonIcon: MapPin, buttonHref: "#products" },
      ]}
      buttons={[{ text: "Shop Apparel", href: "#products" }]}
      title="Why Members Market?"
      description="Built for the streets, made with quality. DoubleM runs the world."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      groups={[
        {
          id: "team-group",          groupTitle: "The Visionaries",          members: [
            {
              id: "elijah",              title: "@3elijahh",              subtitle: "Founder & Creative Director",              detail: "The creative force behind every stitch. DoubleM vision.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777763692127-u6lqi6r2.jpg"},
          ]
        },
      ]}
      title="Meet the Vision"
      description="Driven by vision, hustle, and authentic street style."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      sideTitle="Members FAQ"
      useInvertedBackground={true}
      faqs={[
        { id: "1", title: "How long does shipping take?", content: "We offer fast 1-2 business day shipping for all our members." },
        { id: "2", title: "Where are you based?", content: "Covington, LA. Local roots, global vision." },
        { id: "3", title: "How can I contact you?", content: "DM us or reach out via our contact form. DoubleM is always listening." },
      ]}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Let's Connect"
      description="Got a collab in mind or questions about an order? We're here to help."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "email", type: "email", placeholder: "Your Email" },
      ]}
      textarea={{ name: "message", placeholder: "Your Message" }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777763692127-8qmrfus6.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="MEMBERS MARKET"
      leftLink={{ text: "Privacy", href: "/privacy" }}
      rightLink={{ text: "Terms", href: "/terms" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
