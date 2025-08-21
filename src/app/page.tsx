'use client'

import { Suspense } from 'react'
import Navbar from '../components/Navbar'
import LoadingScreen from '../components/LoadingScreen'
import ParticleBackground from '../components/ParticleBackground'
import Home from '../pages/Home'

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        <Suspense fallback={<LoadingScreen />}>
          <Home />
        </Suspense>
      </div>
    </div>
  )
}
