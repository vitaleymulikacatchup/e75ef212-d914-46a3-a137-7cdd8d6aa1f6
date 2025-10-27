"use client";

import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import FooterBase from "@/components/sections/footer/FooterBase";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ReactLenis from "lenis/react";
import type { NavItem } from "@/types/navigation";
import { Zap, Target, Users } from "lucide-react";

const navItems: NavItem[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Features", id: "features" },
  { name: "Pricing", id: "pricing" },
  { name: "Team", id: "team" },
];

const footerColumns = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "features" },
      { label: "Pricing", href: "pricing" },
      { label: "Team", href: "team" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "about" },
      { label: "Blog", href: "https://webild.io/blog" },
      { label: "Careers", href: "https://webild.io/careers" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "https://webild.io/privacy" },
      { label: "Terms", href: "https://webild.io/terms" },
    ],
  },
];

export default function ExamplePage() {
  return (
    <ReactLenis root>
      <ThemeProvider
        defaultButtonVariant="slide-background"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
      >
        <NavbarLayoutFloatingOverlay
          navItems={navItems}
          button={{ text: "Get Started", href: "https://webild.io" }}
        />

        <div id="home">
          <HeroSplit
            title="Build Better Products Faster"
            description="Create exceptional user experiences with our comprehensive design system and component library"
            tag="New Release"
            imageSrc="/placeholders/placeholder4.webp"
            imagePosition="right"
            fixedMediaHeight={true}
            buttons={[
              { text: "Start Building", href: "https://webild.io" },
              { text: "View Demo", href: "about" },
            ]}
          />
        </div>

        <div id="about">
          <SplitAbout
            title="About Our Platform"
            description="We're on a mission to help teams build beautiful products with modern design patterns and best practices"
            bulletPoints={[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for performance and speed",
              },
              {
                icon: Target,
                title: "Precise Design",
                description: "Pixel-perfect components built with care",
              },
              {
                icon: Users,
                title: "Team Focused",
                description: "Built for collaboration and scale",
              },
            ]}
            imageSrc="/placeholders/placeholder4.webp"
            imagePosition="right"
            buttons={[
              { text: "Learn More", href: "features" },
              { text: "Contact Us", href: "https://webild.io/contact" },
            ]}
          />
        </div>

        <div id="features">
          <FeatureCardOne
            title="Powerful Features"
            description="Everything you need to build modern web applications"
            tag="Features"
            features={[
              {
                title: "Responsive Design",
                description:
                  "All components are fully responsive and mobile-first",
                imageSrc: "/placeholders/placeholder4.webp",
              },
              {
                title: "Dark Mode Support",
                description: "Built-in theme support with easy customization",
                imageSrc: "/placeholders/placeholder4.webp",
              },
              {
                title: "Type Safe",
                description: "Full TypeScript support for better development",
                imageSrc: "/placeholders/placeholder4.webp",
              },
              {
                title: "Accessible",
                description: "WCAG compliant components out of the box",
                imageSrc: "/placeholders/placeholder4.webp",
              },
              {
                title: "Animated",
                description: "Smooth animations powered by GSAP",
                imageSrc: "/placeholders/placeholder4.webp",
              },
              {
                title: "Customizable",
                description: "Easy to customize with Tailwind CSS",
                imageSrc: "/placeholders/placeholder4.webp",
              },
            ]}
            buttons={[{ text: "View All Features", href: "pricing" }]}
          />
        </div>

        <div id="pricing">
          <PricingCardOne
            title="Simple, Transparent Pricing"
            description="Choose the plan that works best for you"
            tag="Pricing"
            plans={[
              {
                id: "starter",
                badge: "Starter",
                price: "29",
                subtitle: "Perfect for small projects",
                features: [
                  "Access to all components",
                  "Basic support",
                  "Free updates",
                ],
              },
              {
                id: "professional",
                badge: "Professional",
                price: "99",
                subtitle: "For growing teams",
                features: [
                  "Everything in Starter",
                  "Priority support",
                  "Advanced components",
                  "Team collaboration",
                ],
              },
              {
                id: "enterprise",
                badge: "Enterprise",
                price: "299",
                subtitle: "For large organizations",
                features: [
                  "Everything in Professional",
                  "Dedicated support",
                  "Custom components",
                  "SLA guarantee",
                ],
              },
            ]}
          />
        </div>

        <div id="team">
          <TeamCardOne
            title="Meet Our Team"
            description="The talented people behind our platform"
            tag="Team"
            members={[
              {
                id: "alex",
                name: "Alex Johnson",
                role: "CEO & Founder",
                imageSrc: "/placeholders/placeholder4.webp",
              },
              {
                id: "sarah",
                name: "Sarah Chen",
                role: "Head of Design",
                imageSrc: "/placeholders/placeholder4.webp",
              },
              {
                id: "marcus",
                name: "Marcus Rodriguez",
                role: "Lead Engineer",
                imageSrc: "/placeholders/placeholder4.webp",
              },
              {
                id: "emily",
                name: "Emily Taylor",
                role: "Product Manager",
                imageSrc: "/placeholders/placeholder4.webp",
              },
            ]}
          />
        </div>

        <FooterBase
          columns={footerColumns}
          copyrightText="© 2025 | Example Company"
          onPrivacyClick={() => console.log("Privacy clicked")}
        />
      </ThemeProvider>
    </ReactLenis>
  );
}
