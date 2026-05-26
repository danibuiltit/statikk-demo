"use client"

import { useState } from "react"
import { Menu, Search, User, X } from "lucide-react"
import { Inter } from "next/font/google"
import { CpuArchitecture } from "@/components/ui/cpu-architecture"
import { GradientBars } from "@/components/ui/gradient-bars-background"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const navItems = ["Home", "Solutions", "Team", "Pricing"]

function Agents12FilledIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M7.93 2a1.5 1.5 0 0 1 1.29.733l1.638 2.756c.187.315.187.707 0 1.022l-1.783 3a1 1 0 0 1-.86.489h-1.97c.179-.239.318-.512.403-.812l1.586-5.55a.5.5 0 0 0-.96-.276l-1.587 5.55a1.5 1.5 0 0 1-1.303 1.081L4.226 10h-.157c-.529 0-1.02-.279-1.29-.733L1.142 6.51a1 1 0 0 1 0-1.022l1.783-3A1 1 0 0 1 3.785 2h1.972c-.18.24-.32.512-.406.813l-1.585 5.55a.5.5 0 0 0 .96.275l1.585-5.55A1.5 1.5 0 0 1 7.755 2z"
      />
    </svg>
  )
}

function ArrowCircleUpRight16FilledIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m10-2.5V10a.5.5 0 0 1-1 0V6.707l-3.646 3.647a.5.5 0 0 1-.708-.708L9.293 6H6a.5.5 0 0 1 0-1h4.5a.5.5 0 0 1 .5.5"
      />
    </svg>
  )
}

function ChatEmpty24FilledIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 1.643.397 3.23 1.145 4.65l-1.116 4.29a.85.85 0 0 0 1.036 1.036l4.29-1.117A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10" />
    </svg>
  )
}

export default function StatikkHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`${inter.className} statikk-hero relative size-full min-h-[420px] overflow-hidden bg-black text-white`}>
      <style>{`
        .statikk-hero .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .statikk-hero .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .statikk-hero .animate-blur-fade-up {
          opacity: 0;
          animation: statikkBlurFadeUp 1s ease-out forwards;
        }

        @keyframes statikkBlurFadeUp {
          from {
            opacity: 0;
            filter: blur(20px);
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
      `}</style>

      <GradientBars
        numBars={11}
        gradientFrom="rgba(20, 184, 166, 0.75)"
        gradientTo="transparent"
        animationDuration={2.8}
        className="opacity-80"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.18),transparent_48%),linear-gradient(to_top,rgba(0,0,0,0.22),rgba(0,0,0,0))]" />

      <nav className="relative z-50 flex items-center justify-between" style={{ padding: "24px" }}>
        <a
          href="#"
          className="animate-blur-fade-up flex h-8 items-center gap-2 text-xl font-semibold tracking-[-0.04em] md:h-10 md:text-2xl"
          style={{ animationDelay: "0ms" }}
        >
          <Agents12FilledIcon size={36} />
          Statikk
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className="animate-blur-fade-up text-sm text-white/80 transition-colors hover:text-gray-300"
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="liquid-glass animate-blur-fade-up hidden items-center gap-2 rounded-full text-sm font-medium text-white sm:flex"
            style={{ animationDelay: "350ms", padding: "10px 20px" }}
          >
            <ChatEmpty24FilledIcon size={16} />
            Support
          </button>
          <button
            className="liquid-glass animate-blur-fade-up relative flex size-10 items-center justify-center rounded-full text-white lg:hidden"
            style={{ animationDelay: "350ms" }}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <Menu
              size={18}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen ? "rotate-180 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              size={18}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-50 opacity-0"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`absolute left-6 right-6 top-[72px] z-40 bg-gray-900/95 px-4 py-4 shadow-2xl backdrop-blur-lg transition-all duration-500 ease-out lg:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        } border-y border-gray-800`}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`rounded-lg px-3 py-3 text-sm text-white/80 transition-all hover:bg-gray-800/50 ${
                menuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDuration: "500ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="mt-4 flex gap-3 border-t border-gray-800 pt-4 sm:hidden">
          <button className="liquid-glass flex flex-1 items-center justify-center gap-2 rounded-full text-sm font-medium" style={{ padding: "10px 20px" }}>
            Search
            <Search size={18} />
          </button>
          <button className="liquid-glass flex size-10 items-center justify-center rounded-full" aria-label="Profile">
            <User size={18} />
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[96px] bottom-[210px] z-10 flex items-center justify-center">
        <div
          className="animate-blur-fade-up w-[min(50vw,460px)] text-white/35"
          style={{ animationDelay: "450ms" }}
        >
          <CpuArchitecture text="GPU" className="drop-shadow-[0_0_28px_rgba(20,184,166,0.28)]" />
        </div>
      </div>

      <div className="relative z-10 flex h-[calc(100%-88px)] flex-1 flex-col justify-end" style={{ padding: "24px" }}>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-1 flex-col gap-3 md:gap-4">
            <div
              className="liquid-glass animate-blur-fade-up flex w-fit items-center gap-3 rounded-full text-xs font-medium uppercase tracking-[0.12em] text-white/85"
              style={{ animationDelay: "300ms", padding: "8px 14px" }}
            >
              <span aria-hidden="true">🚀</span>
              <span className="h-4 w-px bg-white/25" aria-hidden="true" />
              <span>celebrating our $2.2M seed round</span>
            </div>

            <div
              role="heading"
              aria-level={1}
              className="animate-blur-fade-up max-w-4xl text-3xl font-normal leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ animationDelay: "400ms" }}
            >
              Move Big Data.
              <br />
              Anywhere. Instantly.
            </div>

            <p
              className="animate-blur-fade-up max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg"
              style={{ animationDelay: "500ms" }}
            >
              Optimized specifically for constrained networks and tight budgets, our compression algorithm shrinks large datasets without quality loss, ensuring fast, affordable workflows for the next generation of African AI.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:w-auto md:justify-end">
            <button
              className="animate-blur-fade-up flex items-center gap-2 rounded-full bg-white font-medium text-black transition-colors hover:bg-gray-200"
              style={{ animationDelay: "600ms", padding: "12px 28px" }}
            >
              Request Demo
              <ArrowCircleUpRight16FilledIcon size={18} />
            </button>
            <button
              className="liquid-glass animate-blur-fade-up rounded-full font-medium text-white"
              style={{ animationDelay: "700ms", padding: "12px 28px" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
