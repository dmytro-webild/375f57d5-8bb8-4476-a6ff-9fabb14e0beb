"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="MEMBERS MARKET"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="MEMBERS MARKET"
      description="Premium streetwear from Covington, LA. Visionary designs, fast shipping, and quality apparel. DoubleM runs the world."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
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
        {
          id: "p1",
          name: "Signature Hoodie",
          price: "$85",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2701.jpg",
        },
        {
          id: "p2",
          name: "Urban Joggers",
          price: "$70",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-orange-sports-wear-posing-street_1303-31736.jpg",
        },
        {
          id: "p3",
          name: "Quarter-Zip Jacket",
          price: "$120",
          imageSrc: "http://img.b2bpic.net/free-photo/store-employee-checking-stock-tablet_482257-84173.jpg",
        },
        {
          id: "p4",
          name: "DoubleM Logo Tee",
          price: "$40",
          imageSrc: "http://img.b2bpic.net/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448806.jpg",
        },
        {
          id: "p5",
          name: "Heavyweight Hoodie",
          price: "$90",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-with-hoodie-indoors_23-2149359859.jpg",
        },
        {
          id: "p6",
          name: "Graphic Print Tee",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-blonde-woman-white-hoodie-blue-jeans-posing-against-neon-background_89887-1131.jpg",
        },
      ]}
      title="Latest Drops"
      description="Check out our newest collection of premium streetwear."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Alex R.",
          role: "Supporter",
          company: "Local Client",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mature-woman-posing-studio_176474-72949.jpg",
        },
        {
          id: "2",
          name: "Jordan P.",
          role: "Fashionista",
          company: "Influencer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-curly-haired-woman-shopper-rests-after-making-purchases-mall-dressed-fashionable-clothes-surrounded-by-shopping-bags-looks-gladfully-away-poses-against-blurred-urban-background_273609-59142.jpg",
        },
        {
          id: "3",
          name: "Taylor B.",
          role: "Fan",
          company: "Customer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-hipster-woman-bucket-hat-posing-outdoors-old-railway-station_181624-55447.jpg",
        },
        {
          id: "4",
          name: "Casey W.",
          role: "Fan",
          company: "Customer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-cool-man-posing-outdoors_23-2149409742.jpg",
        },
        {
          id: "5",
          name: "Sam M.",
          role: "Supporter",
          company: "Customer",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-lady-pink-sunglasses-laughing-showing-peace-signs_197531-19364.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "1000+",
          label: "Happy Members",
        },
        {
          value: "1-2",
          label: "Day Shipping",
        },
        {
          value: "2024",
          label: "Est. Year",
        },
      ]}
      title="Community Love"
      description="Hear what our community says about Members Market."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Fast Shipping",
          description: "Get your gear in 1-2 business days.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-toy-laptop-boxes_23-2148790050.jpg",
          buttonIcon: "Zap",
        },
        {
          title: "Quality Material",
          description: "Premium fabrics meant to last.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-thermometer-her-arm_23-2147889076.jpg",
          buttonIcon: "Shield",
        },
        {
          title: "Supportive Community",
          description: "We grow with our members.",
          imageSrc: "http://img.b2bpic.net/free-photo/adult-friends-shopping-clothes-together_23-2148385700.jpg",
          buttonIcon: "Users",
        },
        {
          title: "Local Roots",
          description: "Proudly based in Covington, LA.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-pterodactylus-details_23-2151640178.jpg",
          buttonIcon: "MapPin",
        },
      ]}
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
          id: "team-group",
          groupTitle: "Leadership",
          members: [
            {
              id: "elijah",
              title: "@3elijahh",
              subtitle: "Founder & Creative Director",
              detail: "The creative force behind every stitch.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777763692127-u6lqi6r2.jpg",
            },
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777763692127-h2q5t9oz.jpg",
          imageAlt: "User provided image",
        },
      ]}
      title="Meet the Team"
      description="Driven by vision and authentic street style."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How long does shipping take?",
          content: "We offer fast 1-2 business day shipping on all orders.",
        },
        {
          id: "2",
          title: "Where are you based?",
          content: "We are located in Covington, LA.",
        },
        {
          id: "3",
          title: "How can I contact you?",
          content: "Reach out via our contact form or our social channels.",
        },
      ]}
      sideTitle="Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get in Touch"
      description="Have questions about an order or brand collab? We're here."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6Oo1PnBmo6aetPyAcgeTlh2ag/uploaded-1777763692127-8qmrfus6.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="MEMBERS MARKET"
      leftLink={{
        text: "Terms",
        href: "#",
      }}
      rightLink={{
        text: "Privacy",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
