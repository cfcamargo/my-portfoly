import { About } from "../components/About";
import { BackToTop } from "../components/BackToTop";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { FooterSection } from "../components/FooterSection";

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
      <FooterSection />
      <BackToTop />
    </>
  )
}