"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Sparkles, Check, X, ChevronRight } from "lucide-react"

export default function Home() {
  const [showChat, setShowChat] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isChatLoading, setIsChatLoading] = useState(true)
  const [selectedRoom, setSelectedRoom] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      price: "2.500.000",
      image: "/modern-hotel-standard-room.jpg",
      services: ["Free WiFi", "Air Conditioning", "32-inch TV", "Work Desk"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: "4.200.000",
      image: "/luxury-hotel-deluxe-room.png",
      services: ["Free WiFi", "Premium Bed", "Mini Bar", "City View", "Bathrobe"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Suite",
      price: "7.000.000",
      image: "/elegant-hotel-suite-living-area.jpg",
      services: ["Free WiFi", "Living Room", "Jacuzzi Tub", "Premium Toiletries", "Concierge"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      name: "Presidential Suite",
      price: "14.000.000",
      image: "/luxury-presidential-suite-penthouse.jpg",
      services: ["24/7 Concierge", "Private Elevator", "Spa Access", "Fine Dining", "Personal Butler"],
      color: "from-emerald-500 to-teal-500",
    },
  ]

  const handleBookRoom = (room) => {
    setSelectedRoom(room)
    setShowChat(true)
    setIsChatLoading(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent via-accent/80 to-accent/60 flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">Assistant</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/20 via-orange-500/15 to-transparent rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-emerald-500/10 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center w-full">
          <div className="mb-8 inline-block">
            <span className="text-sm font-semibold text-accent tracking-widest uppercase">Premium Hotel Service</span>
          </div>

          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-tight">
            Online
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Concierge
            </span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-muted-foreground mb-12 text-balance max-w-3xl mx-auto leading-relaxed">
            Experience premium hotel service with AI-powered assistance. Get instant support for room bookings,
            recommendations, and guest services available 24/7.
          </p>

          <button
            onClick={() => {
              setSelectedRoom(null)
              setShowChat(true)
            }}
            className="px-10 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3 group"
          >
            <MessageCircle className="w-5 h-5" />
            Start Chat Now
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-20">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 backdrop-blur-sm hover:from-blue-500/20 hover:to-cyan-500/20 transition-all">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-heading">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2">Always Available</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm hover:from-purple-500/20 hover:to-pink-500/20 transition-all">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-heading">
                Instant
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2">Quick Response</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 backdrop-blur-sm hover:from-orange-500/20 hover:to-red-500/20 transition-all">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-heading">
                Premium
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2">Guest Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Booking Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-accent tracking-widest uppercase">Our Collection</span>
            <h2 className="font-heading text-5xl sm:text-6xl font-bold mb-6 text-balance mt-4">Rooms & Suites</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of elegantly designed rooms, each offering unique comfort and amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="group rounded-2xl border border-border overflow-hidden bg-background hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col"
              >
                {/* Room Image */}
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${room.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Room Info */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-3">{room.name}</h3>

                  {/* Price */}
                  <div className="mb-6">
                    <span
                      className={`font-heading text-4xl font-bold bg-gradient-to-r ${room.color} bg-clip-text text-transparent`}
                    >
                      {room.price}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">₫/night</span>
                  </div>

                  {/* Services */}
                  <div className="space-y-3 mb-8 flex-1">
                    {room.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <Check
                          className={`w-5 h-5 bg-gradient-to-r ${room.color} bg-clip-text text-transparent flex-shrink-0`}
                        />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => handleBookRoom(room)}
                    className={`w-full py-3 rounded-lg bg-gradient-to-r ${room.color} text-white font-semibold hover:shadow-lg transition-all`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      {!showChat && (
        <button
          onClick={() => {
            setSelectedRoom(null)
            setShowChat(true)
          }}
          className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 text-accent-foreground shadow-2xl hover:shadow-3xl hover:scale-110 transition-all flex items-center justify-center group"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Chat Popup */}
      {showChat && (
        <div className="fixed bottom-8 right-8 z-50 w-96 h-[600px] rounded-2xl border border-border overflow-hidden shadow-2xl bg-background flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-accent/20 to-accent/10">
            <div>
              <h2 className="font-heading font-semibold text-lg">Chat with Concierge</h2>
              {selectedRoom && (
                <p className="text-xs text-muted-foreground mt-2">
                  Inquiring: {selectedRoom.name} - {selectedRoom.price} ₫/night
                </p>
              )}
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-card rounded-lg"
            >
              <X className="w-6 h-6" />
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
      )}

      {/* Footer */}
      <footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="font-heading font-bold text-lg">Online Concierge Assistant</span>
          </div>
          <p className="font-body text-muted-foreground mb-8">AI-powered hotel support available 24/7</p>
          <p className="font-body text-xs text-muted-foreground/60">
            &copy; 2025 Online Concierge Assistant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
