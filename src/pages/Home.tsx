import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Skills } from "../components/Skills";

export function Home() {
  return (
    <>
    <Header />
    <main>
      <Banner />
      <About />
      <Skills />
    </main>
    </>
  )
}