import { useState } from "react"
import { submitWaitlistSignup } from "../lib/waitlist"

const columns = [
  {
    label: "Product",
    links: [
      { text: "Swasth AI App", href: "#product" },
      { text: "DoseGuard Patch", href: "#doseguard" },
      { text: "AI Health Score", href: "#product" },
      { text: "AI Doctor", href: "#product" },
      { text: "Pricing", href: "#pricing" },
    ],
  },
  {
    label: "Company",
    links: [
      { text: "About Us", href: "#about" },
      { text: "Our Research", href: "#research" },
      { text: "Founders", href: "#founders" },
      { text: "Careers", href: "mailto:contact@swasthai.com?subject=Careers" },
      { text: "Press Kit", href: "mailto:contact@swasthai.com?subject=Press%20Kit" },
    ],
  },
  {
    label: "Resources",
    links: [
      { text: "Documentation", href: "#architecture" },
      { text: "API (Coming Soon)", href: "#architecture" },
      { text: "Blog", href: "#research" },
      { text: "FAQ", href: "#faq" },
      { text: "Contact Us", href: "mailto:contact@swasthai.com" },
    ],
  },
  {
    label: "Legal",
    links: [
      { text: "Privacy Policy", href: "#footer" },
      { text: "Terms of Service", href: "#footer" },
      { text: "Data Security", href: "#footer" },
      { text: "ABDM Compliance", href: "#footer" },
    ],
  },
]

const socials = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter/X",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92C2.175 15.584 2.163 15.205 2.163 12c0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.418 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.05-1.61-4.05-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.84 2.82 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.87.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
]

const compliance = ["ABDM Compliant", "HL7 FHIR R4", "AES-256 Encrypted"]
const footerNotes = ["Incubated at Chandigarh University TBI", "IEEE Published", "Patent Pending", "PharmEasy Partner"]

function SwasthLogo({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <polygon points="30,8 70,8 95,30 95,70 70,92 30,92 5,70 5,30" fill="#fff" />
      <circle cx="50" cy="50" r="20" fill="#000" />
      <ellipse cx="21" cy="22" rx="13" ry="6" transform="rotate(-45 21 22)" fill="#000" />
      <ellipse cx="79" cy="22" rx="13" ry="6" transform="rotate(45 79 22)" fill="#000" />
      <ellipse cx="21" cy="78" rx="13" ry="6" transform="rotate(45 21 78)" fill="#000" />
      <ellipse cx="79" cy="78" rx="13" ry="6" transform="rotate(-45 79 78)" fill="#000" />
      <circle cx="50" cy="50" r="20" fill="#fff" />
      <circle cx="50" cy="50" r="16" fill="#000" />
      <rect x="43" y="33" width="14" height="34" rx="3" fill="#fff" />
      <rect x="33" y="43" width="34" height="14" rx="3" fill="#fff" />
    </svg>
  )
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("No spam. Just health intelligence.")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      setStatus("error")
      setMessage("Enter your email to join the waitlist.")
      return
    }

    try {
      setStatus("loading")
      setMessage("Submitting your early access request...")
      await submitWaitlistSignup({ email: trimmedEmail, source: "footer-waitlist" })
      setStatus("success")
      setMessage("You are on the waitlist. We will reach out when early access opens.")
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Submission failed. Please try again in a moment.")
    }
  }

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-20 text-white md:px-10 lg:px-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[24rem] w-[24rem] rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-6%] h-[20rem] w-[20rem] rounded-full bg-white/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[1.1fr_2fr_1.2fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <SwasthLogo />
              <div>
                <p className="text-xl font-semibold tracking-[-0.04em]">Swasth AI</p>
                <p className="mt-1 text-sm text-white/46">AI-powered healthcare for a Swasth Bharat.</p>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">Certifications</p>
              <ul className="mt-4 space-y-3">
                {compliance.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/62">
                    <span className="h-2 w-2 rounded-full bg-white/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm leading-7 text-white/32">© 2025 Swasth AI. All rights reserved.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.label}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/42">
                  {column.label}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.text}>
                      <a href={link.href} className="text-sm text-white/58 transition hover:text-white">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/80">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">Get Early Access</h3>
              <p className="mt-3 text-sm leading-7 text-white/56">
                Join the waitlist and be first to experience Swasth AI and DoseGuard.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  disabled={status === "loading"}
                  className="h-12 w-full rounded-full border border-white/12 bg-black/40 px-5 text-sm text-white outline-none transition focus:border-white/25 disabled:cursor-not-allowed disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading"
                    ? "Submitting..."
                    : status === "success"
                      ? "You're on the waitlist"
                      : "Get Early Access"}
                </button>
              </form>

              <p
                aria-live="polite"
                className={`mt-3 text-center text-xs ${
                  status === "error" ? "text-rose-300" : "text-white/34"
                }`}
              >
                {message}
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">Follow Us</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition hover:-translate-y-0.5 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="flex flex-wrap items-center gap-2 text-sm text-white/34">
              <span className="inline-flex items-center gap-2">
                Built with
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white/70" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                in India
              </span>
              {footerNotes.map((note) => (
                <span key={note} className="inline-flex items-center gap-2">
                  <span className="text-white/16">|</span>
                  {note}
                </span>
              ))}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-white/34">
              <a href="#footer" className="transition hover:text-white/70">Privacy Policy</a>
              <a href="#footer" className="transition hover:text-white/70">Terms of Service</a>
              <a href="#footer" className="transition hover:text-white/70">Data Security</a>
              <a href="#footer" className="transition hover:text-white/70">ABDM Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
