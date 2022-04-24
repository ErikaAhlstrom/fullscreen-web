import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
import { StaticImage } from "gatsby-plugin-image"
import video from "../assets/video/22_04_Fullscreen_Showreel_v1.mp4"
export default function Home() {
  return (
    <Layout>
      <SEO title="Hem"/>
      
        <header className="hero">
          {/* <StaticImage
          src="../assets/images/hero.jpg"
          alt="Leaves"
          className="hero-img"
          placeholder="traced-svg"
          layout="fullWidth">
          </StaticImage> */}
  <video className="object-cover" controls muted autoPlay loop playsinline>
      <source src={video} type="video/mp4" />
    </video>          
          <div className="hero-container">
            <div className="hero-text">
            {/*   <h1>Berättelser som berör</h1> */}
              
            </div>
          </div>
        </header>
        <div className="black-block"/>
        <main className="page">
        <section className="layout-page-1-col">
{/*            <div
            
            className="home-article-img">
            
          </div> */}
          <article>
            <h1>Välkommen</h1>
            <p>Fullscreen AB är ett nystartat produktionsbolag med fokus på dokumentärt berättande, vi gör berättelser som berör. Företagskunder kan läsa mer
under content-fliken. </p>
          <button>Kontakta oss</button>
          </article>
        </section>
       
        
      </main>
    </Layout>
  )
}
