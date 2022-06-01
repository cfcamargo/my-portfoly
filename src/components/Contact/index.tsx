import { ContactLinks, Container } from "./styles";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import mailIcon from '../../assets/icons/mail.svg'
import githubIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import { useRef } from "react";

import 'react-toastify/dist/ReactToastify.min.css'



export function Contact() {

  const form = useRef() as any;

  function sendMail(e: any) {

    e.preventDefault();

    emailjs.sendForm('service_jzzgl5w', 'template_wtbcj8b', form.current, 'cKhmOgQEDWRTPft-J')
      .then((result) => {
        toast.success('Email Enviado com Sucesso', {theme: "dark"})
        e.target.reset()
      }, (error) => {
        toast.error('Erro ao enviar email' , {theme: "dark"})
      });
  }

  return (
    <>
      <Container id="contact">

        <div className="contact-header">
          <h3>Se interessou pelo meu <span>Trabalho ?</span></h3>
          <p>Deixe uma mensagem ou entre em contato comigo <br/>através dos canais de contato</p>
        </div>

        <div className="contact-form">
          <form onSubmit={sendMail} ref={form}>

            <div className="input-area">
              <label htmlFor="name">Nome:</label>
              <input autoComplete='off' type="text" name="name" placeholder="Digite seu nome" required />
            </div>

            <div className="input-area">
              <label htmlFor="email">Email: </label>
              <input autoComplete="off" type="email" name="email" required placeholder="Digite seu melhor e-mail" />
            </div>

            <div className="input-text-area">
              <h4>Digite aqui sua mensagem ou dúvida, e me diga como posso te ajudar: </h4>
              <textarea name="message" placeholder="Digite sua mensagem" id="message" />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>

        <ToastContainer/>

      </Container>

      <ContactLinks>

        <a className="email-link" href="mailto:contato@camargodev.com.br"><img src={mailIcon} alt="Icone de uma carta, simbolizando email" /> contato@camargodev.com.br</a>

        <div className="social-icons-links">
          <a href="https://github.com/cfcamargo"><img src={githubIcon} alt="Icone do github" /></a>
          <a href="https://www.linkedin.com/in/cristian-camargo-4504291b4"><img src={linkedinIcon} alt="Icone do github" /></a>
          <a href="https://www.instagram.com/sr.fcamargo"><img src={instagramIcon} alt="Icone do github" /></a>
        </div>

      </ContactLinks>

    </>
  )
}