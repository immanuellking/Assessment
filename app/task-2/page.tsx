import React from 'react'
import Header from '../components/header'
import NitendoDashboard from '../components/nitendo-dashboard'

export default function Page() {
  return (
    <section className="w-full h-screen overflow-hidden">
        <Header />
        <NitendoDashboard />
    </section>
  )
}
