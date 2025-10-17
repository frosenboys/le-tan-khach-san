"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Sparkles } from "lucide-react"

export default function Home() {
  const [showChat, setShowChat] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isChatLoading, setIsChatLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-heading font-bold text-lg">Hotel Concierge</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center w-full">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Assistant
            <span className="block bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent">
              Hotel Concierge
            </span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-muted-foreground mb-12 text-balance max-w-2xl mx-auto">
            Experience premium hospitality with our AI-powered concierge service. Get instant assistance with
            reservations, recommendations, and personalized guest services available 24/7.
          </p>

          <button
            onClick={() => setShowChat(true)}
            className="px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Start Chatting Now
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-16">
            <div className="p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-accent font-heading">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Always Available</div>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-accent font-heading">Instant</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Quick Responses</div>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-accent font-heading">Premium</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Guest Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl h-[90vh] sm:h-[80vh] rounded-2xl border border-border overflow-hidden shadow-2xl bg-background flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border bg-card/50">
              <h2 className="font-heading font-semibold text-lg">Chat with Concierge</h2>
              <button
                onClick={() => setShowChat(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {isChatLoading && (
              <div className="w-full flex-1 flex items-center justify-center bg-gradient-to-br from-background to-card/50">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-border"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent border-r-accent animate-spin"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Loading concierge assistant...</p>
                </div>
              </div>
            )}

            <iframe
              src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/17/03/20251017032105-CZ4E5A4N.json"
              className={`w-full flex-1 border-0 transition-opacity duration-300 ${
                isChatLoading ? "opacity-0 absolute" : "opacity-100"
              }`}
              allow="microphone; camera"
              title="Hotel Concierge Chat"
              onLoad={() => setIsChatLoading(false)}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-heading font-bold">Hotel Concierge Assistant</span>
          </div>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Premium AI-powered hospitality assistance available 24/7
          </p>
          <p className="font-body text-xs text-muted-foreground/60">
            &copy; 2025 Hotel Concierge Assistant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
