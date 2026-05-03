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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777763692127-h2q5t9oz.jpg"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="About Members Market"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Signature Hoodie", price: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497667-sros8ryr.jpg" },
        { id: "p2", name: "Tracksuits", price: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-ndirln0w.jpg" },
        { id: "p3", name: "Shirt and Short Set", price: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-8o21erfh.jpg" },
        { id: "p4", name: "Tracksuit", price: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-f81fog3m.jpg" },
        { id: "p5", name: "High Quality Shirts", price: "", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777764497668-1kahcq3w.jpg" },
      ]}
      buttons={[{ text: "View New Apparel", href: "#products" }]}
      title="Shop Our Latest Collection"
      description="Discover the latest drops from Members Market."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Fast Shipping", description: "Get your gear in 1-2 business days.", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-toy-laptop-boxes_23-2148790050.jpg", buttonIcon: Zap, buttonHref: "#products" },
        { title: "Quality Material", description: "Premium fabrics meant to last.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-thermometer-her-arm_23-2147889076.jpg", buttonIcon: Shield, buttonHref: "#products" },
        { title: "Supportive Community", description: "We grow with our members.", imageSrc: "http://img.b2bpic.net/free-photo/adult-friends-shopping-clothes-together_23-2148385700.jpg", buttonIcon: Users, buttonHref: "#products" },
        { title: "Local Roots", description: "Proudly based in Covington, LA.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-pterodactylus-details_23-2151640178.jpg", buttonIcon: MapPin, buttonHref: "#products" },
      ]}
      buttons={[{ text: "Shop Apparel", href: "#products" }]}
      title="Why Members Market?"
      description="Built for the streets, made with quality."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      groups={[
        {
          id: "team-group",          groupTitle: "Leadership",          members: [
            {
              id: "elijah",              title: "@3elijahh",              subtitle: "Founder & Creative Director",              detail: "The creative force behind every stitch.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777763692127-u6lqi6r2.jpg"},
          ]
        },
      ]}
      title="Meet the Team"
      description="Driven by vision and authentic street style."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      sideTitle="Frequently Asked Questions"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "How long does shipping take?", content: "We offer fast 1-2 business day shipping on all orders." },
        { id: "2", title: "Where are you based?", content: "We are located in Covington, LA." },
        { id: "3", title: "How can I contact you?", content: "Reach out via our contact form or our social channels." },
      ]}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get in Touch"
      description="Have questions about an order or brand collab? We're here."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "email", type: "email", placeholder: "Your Email" },
      ]}
      textarea={{ name: "message", placeholder: "How can we help?" }}
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