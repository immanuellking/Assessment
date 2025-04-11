import Header from "./components/header";
import MainDashboardSection from "./components/main-dashboard-section";

export default function Home() {
  return (
    <>
      <section className="w-full h-screen overflow-hidden hidden xl:block">
        <Header />
        <MainDashboardSection />
      </section>
      <section className="w-full h-screen items-center justify-center overflow-hidden xl:hidden flex">
         <h1 className="text-3xl font-bold">VIEW ON DESKTOP (NOT MOBILE)</h1>
      </section>
    </>
  );
}
