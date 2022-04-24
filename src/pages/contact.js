import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SocialMediaBar from '../components/SocialMediaBar'
import { StaticImage } from "gatsby-plugin-image"



const Contact = ( {data} ) => {
    return (
        <Layout>
          <SEO title="Contact"/>
          <header className="hero">
          <StaticImage
          src="../assets/images/hero.jpg"
          alt="Leaves"
          className="hero-img"
          placeholder="traced-svg"
          layout="fullWidth">
          </StaticImage>
          <div className="hero-container">
            <div className="hero-text">
            {/*   <h1>Berättelser som berör</h1> */}
              
            </div>
          </div>
        </header>
          <main className="page">
            <section className="layout-page">
              <article className="contact-info">
                 {/*  <SocialMediaBar /> */}
                  <h3>Tveka inte att kontakta oss!</h3>
                  <p>Använd gärna formuläret, eller maila direkt på</p>
                  <p>info@fullscreen.se</p>
              </article>
              <article >
                <form className="form contact-form" action="https://formspree.io/f/mleaqowj" method="POST">
                  <div className="form-row">
                      <label htmlFor="name">Namn</label>
                      <input type="text" name="name" placeholder="Förnamn Efternamn" id="name"></input>
                  </div>
                  <div className="form-row">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" placeholder="exempel@email.se" id="email"></input>
                  </div>
                  <div className="form-row">
                      <label htmlFor="message">Meddelande</label>
                      <textarea name="message"  id="message"></textarea>
                  </div>
                  <button type="submit" className="btn block">Skicka</button>
                </form>
              </article>
            </section>
          </main>
        </Layout>
    )
}


export default Contact
