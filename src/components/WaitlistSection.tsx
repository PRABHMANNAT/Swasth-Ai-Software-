import { useState } from "react"
import { submitWaitlistSignup } from "../lib/waitlist"

export default function WaitlistSection() {
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
      await submitWaitlistSignup({ email: trimmedEmail, source: "waitlist-section" })
      setStatus("success")
      setMessage("You are on the waitlist. We will reach out when early access opens.")
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Submission failed. Please try again in a moment.")
    }
  }

  return (
    <section
      id="waitlist"
      className="border-t border-white/10 bg-black px-6 py-20 text-white md:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12">
        <div className="pointer-events-none mx-auto mb-8 h-px w-3/4 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            The future of healthcare doesn&apos;t wait. Neither should you.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
            Join thousands of early adopters who are already rethinking how they
            manage their health. Get early access to the Swasth AI app and be
            the first to experience DoseGuard when it launches.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 md:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            disabled={status === "loading"}
            className="h-14 flex-1 rounded-full border border-white/12 bg-black/40 px-5 text-white outline-none transition focus:border-white/25 disabled:cursor-not-allowed disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-[1.01] hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
          >
            {status === "loading" ? "Submitting..." : "Join the Waitlist"}
          </button>
        </form>

        <p
          aria-live="polite"
          className={`mt-4 text-center text-sm ${
            status === "error" ? "text-rose-300" : "text-white/42"
          }`}
        >
          {message}
        </p>
      </div>
    </section>
  )
}
