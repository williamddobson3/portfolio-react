'use client'

import { Suspense } from 'react'
import Navbar from '../../../components/Navbar'
import LoadingScreen from '../../../components/LoadingScreen'
import ParticleBackground from '../../../components/ParticleBackground'
import ProjectDetail from '../../../pages/ProjectDetail'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        <Suspense fallback={<LoadingScreen />}>
          <ProjectDetail projectId={params.id} />
        </Suspense>
      </div>
    </div>
  )
}
