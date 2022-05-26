import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export function Home() {
  return (
    <>
    <Header />
    <main>
      <Banner />
      <About />
    </main>
    </>
  )
}