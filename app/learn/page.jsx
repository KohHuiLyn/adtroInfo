import Navbar from "@/components/navbar"
import LearnHero from "@/components/learn-hero"
import LearnNavigation from "@/components/learn-navigation"
import Footer from "@/components/footer"

export default function Learn() {
  return (
    <main className="bg-[var(--white-smoke-3)]">
      <Navbar />
      <LearnHero />
      <LearnNavigation />
      <Footer />
    </main>
  )
}

