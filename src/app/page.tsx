"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#products",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Nipo Sushi"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Authentic Flavors, Modern Art"
      description="Experience the finest hand-crafted sushi, where traditional techniques meet contemporary culinary innovation."
      buttons={[
        {
          text: "View Menu",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/different-sushi-delivery-varieties-sushi-lunch-dinner_132075-14215.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-girl-white-sweater-eating-sushi-lunch-small-caffe_231208-5231.jpg",
          alt: "Young girl in white sweater eating sushi",
        },
        {
          src: "http://img.b2bpic.net/free-photo/pretty-blonde-woman-white-sweater-eating-sushi-lunch-small-caffe_231208-5221.jpg",
          alt: "Pretty blonde woman in white sweater",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blonde-young-beautiful-blond-girl-businesswoman-eating-sushi-summer-terrace-japanese-restaurant_496169-1916.jpg",
          alt: "Businesswoman eating sushi on the terrace",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-couple-wearing-casual-clothes-eating-spicy-noodles-asian-restaurant_613910-19835.jpg",
          alt: "Happy couple eating in Asian restaurant",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-eating-salmon-dish-bowl-restaurant_23-2150461473.jpg",
          alt: "Couple eating salmon dish bowl",
        },
      ]}
      avatarText="Join 15k+ satisfied sushi lovers"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="The Nipo Tradition"
      description={[
        "At Nipo Sushi, we believe that every roll tells a story. Our chefs combine decades of experience with the freshest sustainable ingredients to deliver an unforgettable dining journey.",
        "Our commitment to quality extends from the rice we source to the delicate knife skills practiced by our masters.",
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Salmon Nigiri",
          price: "$12.00",
          variant: "Fresh Catch",
          imageSrc: "http://img.b2bpic.net/free-photo/raw-with-fresh-salmon-fish-meat-sushi_74190-6911.jpg",
        },
        {
          id: "2",
          name: "Spicy Tuna Maki",
          price: "$14.00",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-delicious-sushi-roll-with-avocado_181624-30599.jpg",
        },
        {
          id: "3",
          name: "Tempura Roll",
          price: "$16.00",
          variant: "Fusion",
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-point-california-roll-maki-sushi_74190-3953.jpg",
        },
        {
          id: "4",
          name: "Sashimi Deluxe",
          price: "$28.00",
          variant: "Premium",
          imageSrc: "http://img.b2bpic.net/free-photo/spicy-black-spaghetti-with-salmon_1339-4519.jpg",
        },
        {
          id: "5",
          name: "Dragon Roll",
          price: "$18.00",
          variant: "Signature",
          imageSrc: "http://img.b2bpic.net/free-photo/sushi-set-with-salmon-rice_140725-5519.jpg",
        },
        {
          id: "6",
          name: "California Deluxe",
          price: "$15.00",
          variant: "Local Favorite",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-delicious-sushi-sushi-delivery-advertising-sushi-rolls-made-fish-cheese_132075-14525.jpg",
        },
      ]}
      title="Signature Selections"
      description="Discover our carefully curated menu, featuring both timeless classics and our unique signature creations."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alice P.",
          handle: "@alice_eats",
          testimonial: "The freshness is unmatched. Best sushi in town!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-learning-make-sushi_23-2151202946.jpg",
        },
        {
          id: "2",
          name: "Mark D.",
          handle: "@mark_d",
          testimonial: "Every roll is a piece of art. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-people-eating-sushi_23-2149957060.jpg",
        },
        {
          id: "3",
          name: "Sarah L.",
          handle: "@sara_sushi",
          testimonial: "An incredible experience from start to finish.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-women-learning-make-sushi_23-2151202926.jpg",
        },
        {
          id: "4",
          name: "James K.",
          handle: "@jk_foodie",
          testimonial: "Impeccable service and amazing flavors.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-japanese-food-court_23-2148759570.jpg",
        },
        {
          id: "5",
          name: "Elena R.",
          handle: "@elena_dining",
          testimonial: "Absolutely divine, returning next week!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-sitting-table_23-2149213359.jpg",
        },
      ]}
      showRating={true}
      title="A Taste of Excellence"
      description="Don't just take our word for it—join the community of sushi lovers who call Nipo their favorite neighborhood spot."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "15k+",
          description: "Happy Guests",
        },
        {
          id: "m2",
          value: "45+",
          description: "Unique Rolls",
        },
        {
          id: "m3",
          value: "12",
          description: "Years Serving",
        },
      ]}
      title="Our Impact"
      description="We are proud of the love we've shared with our guests."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you take reservations?",
          content: "Yes, we encourage bookings via our website or over the phone.",
        },
        {
          id: "f2",
          title: "Are there vegan options?",
          content: "Absolutely, we have a dedicated plant-based menu for every preference.",
        },
        {
          id: "f3",
          title: "Is parking available?",
          content: "Yes, valet parking is provided right in front of the restaurant.",
        },
      ]}
      title="Common Questions"
      description="Have questions? We have answers to help you plan your perfect meal."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Sushi Wisdom"
      description="Learn about the techniques, history, and seasonal secrets behind our craft."
      blogs={[
        {
          id: "b1",
          category: "Culinary",
          title: "The Art of Rice",
          excerpt: "Why the perfect rice temperature is essential.",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-salmon-sushi_1203-1991.jpg",
          authorName: "Chef Kenji",
          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-man-eating-sushi-home_23-2149870720.jpg",
          date: "Oct 12",
        },
        {
          id: "b2",
          category: "Culture",
          title: "Sashimi Secrets",
          excerpt: "Understanding the cuts of top quality fish.",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-mackerel-steak_1339-6206.jpg",
          authorName: "Chef Hana",
          authorAvatar: "http://img.b2bpic.net/free-photo/girl-white-sweater-eating-sushi-lunch-small-caffe_231208-5227.jpg",
          date: "Nov 02",
        },
        {
          id: "b3",
          category: "Trends",
          title: "Modern Fusion",
          excerpt: "How we create our latest signature rolls.",
          imageSrc: "http://img.b2bpic.net/free-photo/sushi-with-caviar-black-plate_1147-425.jpg",
          authorName: "Chef Kenji",
          authorAvatar: "http://img.b2bpic.net/free-photo/girl-white-sweater-eating-sushi-lunch-small-caffe_231208-5228.jpg",
          date: "Nov 15",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Visit Us"
      title="Join the Table"
      description="Subscribe for news, exclusive tasting events, and special seasonal menu updates."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Nipo Sushi"
      leftLink={{
        text: "© 2024 Nipo Sushi",
        href: "#",
      }}
      rightLink={{
        text: "Privacy Policy",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
