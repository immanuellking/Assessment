import Header from "./components/header";
import MainDashboardSection from "./components/main-dashboard-section";

export default function Home() {
  return (
   <section className="w-full h-screen overflow-hidden">
    <Header />
    <MainDashboardSection />
   </section>
  );
}
