import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import CardProject from "../components/Card";
import { motion } from "framer-motion";

export default function Index() {
    const [text, setText] = useState("Frontend Developpeur");

    useEffect(() => {
        const interval = setInterval(() => {
            setText(prev => prev === "Frontend Developpeur" ? "Backend Developpeur" : "Frontend Developpeur")
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    
    return (
        <div>
            <Navbar/>
            <main>
                <div className="flex justify-center items-center">
                    <section className="flex flex-row flex-wrap mt-20">
                        <div className="text-gray-900 mr-30 mt-20">
                            <h1 className="text-7xl">Irox.</h1>
                            <motion.h1 className="text-5xl"
                                key={text}
                                initial={{opacity: 0, x: -50}}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}>
                                {text}
                            </motion.h1>
                            <p className="max-w-[600px] mt-10">
                                Je transforme des idées en expériences web fluides et interactives.  Code propre, design clair, et performance toujours en tête.  Toujours à l'écoute des besoins, je conçois des solutions sur mesure et évolutives.                        
                            </p>
                            <button className="btn btn-info mt-10">Mes Services →</button>
                        </div>
                        <div className="organic-shape"></div>
                    </section>
                </div>
                <footer>
                    <h1 className="text-center text-4xl mt-35">Mes Projets</h1>
                    <div className="flex justify-center mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                            <CardProject title="PulseTv" description="Ce projet est une plateforme de streaming vidéo développée pour offrir une expérience utilisateur fluide, moderne et immersive. Le site permet aux utilisateurs de parcourir un large catalogue de films et séries, de visionner des bandes-annonces, et de regarder du contenu en haute définition avec une interface responsive adaptée à tous les écrans." img="//i.imgur.com/OkQYNPE.png" visiteUrl="https://pulsetv.fun/"/>
                            <CardProject title="PulseTv" description="Ce projet est une plateforme de streaming vidéo développée pour offrir une expérience utilisateur fluide, moderne et immersive. Le site permet aux utilisateurs de parcourir un large catalogue de films et séries, de visionner des bandes-annonces, et de regarder du contenu en haute définition avec une interface responsive adaptée à tous les écrans." img="//i.imgur.com/OkQYNPE.png" visiteUrl="https://pulsetv.fun/"/>
                            <CardProject title="PulseTv" description="Ce projet est une plateforme de streaming vidéo développée pour offrir une expérience utilisateur fluide, moderne et immersive. Le site permet aux utilisateurs de parcourir un large catalogue de films et séries, de visionner des bandes-annonces, et de regarder du contenu en haute définition avec une interface responsive adaptée à tous les écrans." img="//i.imgur.com/OkQYNPE.png" visiteUrl="https://pulsetv.fun/"/>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}