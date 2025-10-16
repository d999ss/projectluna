"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { Hero } from "@/components/site/Hero";

export default function Home() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <main className="min-h-screen">
      {/* Full-viewport Hero */}
      <Hero
        title="Building the future of tissue and cellular innovation"
        description="Zero compromises in quality, innovation, and patient outcomes"
        backgroundVideo="/images/Vile.mp4"
        primaryCTA={{ text: "Explore Solutions", href: "/solutions" }}
        secondaryCTA={{ text: "Request a Demo", href: "/contact" }}
        size="extra-large"
        align="center"
      />

      {/* Solution Portfolio Grid - Polestar-style Product Showcase */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Wound Care Solutions */}
            <Link
              href="/solutions/wound-care"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              onMouseEnter={() => handleMouseEnter(videoRef1)}
              onMouseLeave={() => handleMouseLeave(videoRef1)}
            >
              <div className="absolute inset-0">
                <video
                  ref={videoRef1}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/images/social_boredoptimism_particles_in_motion_--ar_9151_--bs_1_--raw_--vi_813b1528-646c-423d-82c6-72c70de33f51_0.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl md:text-4xl font-light text-white tracking-tight drop-shadow-lg">
                  Wound Care Solutions
                </h3>
                <p className="mt-3 text-lg text-white/90 max-w-lg leading-snug drop-shadow-md">
                  Advanced CAMP solutions for chronic wounds and extremity reconstruction
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold transition-transform group-hover:translate-x-2 drop-shadow-md">
                  Explore Solutions
                  <ArrowRightIcon className="size-5" />
                </div>
              </div>
            </Link>

            {/* Aesthetic Solutions */}
            <Link
              href="/solutions/aesthetics"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              onMouseEnter={() => handleMouseEnter(videoRef2)}
              onMouseLeave={() => handleMouseLeave(videoRef2)}
            >
              <div className="absolute inset-0">
                <video
                  ref={videoRef2}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/images/social_boredoptimism_soft_touch_depth_of_field_--ar_9151_--bs_1_--ra_ed2f58c5-c992-4d00-9ca1-b92d58f88d4b_0.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl md:text-4xl font-light text-white tracking-tight drop-shadow-lg">
                  Aesthetic Solutions
                </h3>
                <p className="mt-3 text-lg text-white/90 max-w-lg leading-snug drop-shadow-md">
                  Cutting-edge aesthetic medicine for reconstruction and renewal
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold transition-transform group-hover:translate-x-2 drop-shadow-md">
                  Explore Solutions
                  <ArrowRightIcon className="size-5" />
                </div>
              </div>
            </Link>

            {/* Regenerative Sciences */}
            <Link
              href="/solutions/regenerative-sciences"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              onMouseEnter={() => handleMouseEnter(videoRef3)}
              onMouseLeave={() => handleMouseLeave(videoRef3)}
            >
              <div className="absolute inset-0">
                <video
                  ref={videoRef3}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/images/social_boredoptimism_particles_--ar_9151_--bs_1_--raw_--video_1_--en_e2952807-175a-44d3-a5b5-7e527dcbedd8_0.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl md:text-4xl font-light text-white tracking-tight drop-shadow-lg">
                  Regenerative Sciences
                </h3>
                <p className="mt-3 text-lg text-white/90 max-w-lg leading-snug drop-shadow-md">
                  Leading tissue processing, R&D, and regenerative medicine innovations
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold transition-transform group-hover:translate-x-2 drop-shadow-md">
                  Explore Solutions
                  <ArrowRightIcon className="size-5" />
                </div>
              </div>
            </Link>

            {/* International */}
            <Link
              href="/solutions/international"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              onMouseEnter={() => handleMouseEnter(videoRef4)}
              onMouseLeave={() => handleMouseLeave(videoRef4)}
            >
              <div className="absolute inset-0">
                <video
                  ref={videoRef4}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/images/social_boredoptimism_subtle_movement_--ar_9151_--bs_1_--raw_--video__b3dc0572-b2b1-4207-a8fb-422c8d20b33f_0.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
                <h3 className="font-display text-3xl md:text-4xl font-light text-white tracking-tight drop-shadow-lg">
                  International
                </h3>
                <p className="mt-3 text-lg text-white/90 max-w-lg leading-snug drop-shadow-md">
                  Global access to advanced cell and tissue technologies
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold transition-transform group-hover:translate-x-2 drop-shadow-md">
                  Explore Solutions
                  <ArrowRightIcon className="size-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Technology Spotlight - Polestar-style Feature Section */}
      <section className="relative py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold tracking-wide uppercase">
                CAMPs Technology
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                Vertically Integrated Excellence
              </h2>
              <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
                Our distinct advantage lies in our fully integrated approach—we oversee every stage from donor screening and tissue collection to research, development, manufacturing, and distribution.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products/camps"
                  className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-4 font-semibold text-brand-foreground transition-all hover:brightness-110"
                >
                  Learn About CAMPs
                </Link>
                <Link
                  href="/tiger"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-border/60 bg-background/50 px-8 py-4 font-semibold transition-all hover:bg-muted"
                >
                  About Tiger
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
                alt="CAMPs Technology"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Tiger Process - Simplified 4-Step Grid */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              The Tiger Way
            </h2>
            <p className="mt-6 text-lg text-foreground/70">
              Complete oversight from tissue recovery to final delivery ensures unparalleled quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-accent/20 text-3xl font-bold mb-6 transition-transform group-hover:scale-110">
                1
              </div>
              <h3 className="font-display text-2xl font-light tracking-tight mb-3">
                Tissue Recovery
              </h3>
              <p className="text-foreground/70">
                Partnering with trusted hospitals under rigorous ethical and regulatory standards
              </p>
            </div>

            <div className="group">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-accent/20 text-3xl font-bold mb-6 transition-transform group-hover:scale-110">
                2
              </div>
              <h3 className="font-display text-2xl font-light tracking-tight mb-3">
                Tissue Processing
              </h3>
              <p className="text-foreground/70">
                Careful preparation and controlled preservation under one roof
              </p>
            </div>

            <div className="group">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-accent/20 text-3xl font-bold mb-6 transition-transform group-hover:scale-110">
                3
              </div>
              <h3 className="font-display text-2xl font-light tracking-tight mb-3">
                Research & Development
              </h3>
              <p className="text-foreground/70">
                Innovative materials and techniques for next-generation solutions
              </p>
            </div>

            <div className="group">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/20 to-accent/20 text-3xl font-bold mb-6 transition-transform group-hover:scale-110">
                4
              </div>
              <h3 className="font-display text-2xl font-light tracking-tight mb-3">
                Distribution
              </h3>
              <p className="text-foreground/70">
                Fast, precise delivery ensuring products reach clinicians safely
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-6 md:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            Ready to Transform Patient Care?
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            Join healthcare institutions worldwide who trust Tiger BioSciences for cutting-edge medical technology solutions
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-4 font-semibold text-brand-foreground transition-all hover:brightness-110"
            >
              Request a Demo
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg border-2 border-border/60 bg-background/50 px-8 py-4 font-semibold transition-all hover:bg-muted"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
