'use client'

import { Suspense } from 'react'
import Navbar from '../../components/Navbar'
import LoadingScreen from '../../components/LoadingScreen'
import ParticleBackground from '../../components/ParticleBackground'
import Resume from '../../pages/Resume'

export default function ResumePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        <Suspense fallback={<LoadingScreen />}>
          <Resume />
        </Suspense>
      </div>
    </div>
  )
}
