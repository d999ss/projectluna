import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiger BioSciences — Elegant Biology. Rigorous Results.",
  description: "Tiger BioSciences advances regenerative medicine with cellular, acellular, and matrix-like products for wound care, soft-tissue reconstruction, and aesthetics.",
};

export default function HomePage2() {
  return (
    <div className="min-h-screen">
      {/* This page uses embedded HTML/CSS/JS from the original build */}
      <iframe
        src="/home-2.html"
        className="w-full h-screen border-0"
        title="Home Page 2"
      />
    </div>
  );
}
