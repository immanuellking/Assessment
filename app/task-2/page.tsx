import React from 'react'
import Header from '../components/header'
import NitendoDashboard from '../components/nitendo-dashboard'

export default function Page() {
  return (
    <>
      <section className="w-full h-screen overflow-hidden hidden xl:block">
        <Header />
        <NitendoDashboard />
      </section>
      <section className="w-full h-screen items-center justify-center overflow-hidden xl:hidden flex">
         <h1 className="text-3xl font-bold">VIEW ON DESKTOP</h1>
      </section>
    </>
  );
}
