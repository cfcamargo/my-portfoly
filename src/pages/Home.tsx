import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import { Portfoly } from "../components/Portfoly";
import { Skills } from "../components/Skills";

export function Home() {
  return (
    <>
    <Header />
    <main>
      <Banner />
      <About />
      <Skills />
      <Portfoly />
      <Contact />
    </main>
      <Footer />
    </>
  )
}