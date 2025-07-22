import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import CardProject from "../components/Card";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Index() {
    const [text, setText] = useState("Frontend Developpeur");

    useEffect(() => {
        const interval = setInterval(() => {
            setText(prev => prev === "Frontend Developpeur" ? "Backend Developpeur" : "Frontend Developpeur")
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar />
            <main>
                <div className="flex justify-center items-center px-4">
                    <section className="flex flex-col md:flex-row items-center md:items-start mt-20 max-w-7xl w-full gap-8">
                        <div className="text-gray-900 md:mr-16 flex-1">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">Irox.</h1>
                            <motion.h1 
                                className="text-3xl sm:text-4xl md:text-5xl mt-2 font-semibold"
                                key={text}
                                initial={{opacity: 0, x: -50}}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                {text}
                            </motion.h1>
                            <p className="max-w-lg mt-6 text-gray-700 leading-relaxed">
                                Je transforme des idées en expériences web fluides et interactives. Code propre, design clair, et performance toujours en tête. Toujours à l'écoute des besoins, je conçois des solutions sur mesure et évolutives.
                            </p>
                            <button className="btn btn-info mt-8">
                                <Link to="/price">Mes Services →</Link>
                            </button>
                        </div>
                        <div className="organic-shape w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"></div>
                    </section>
                </div>

                {/*
                <footer>
                    <h1 className="text-center text-4xl mt-35">Mes Projets</h1>
                    <div className="flex justify-center mt-20 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 max-w-7xl w-full">
                            <CardProject title="PulseTv" description="Ce projet est une plateforme de streaming vidéo développée pour offrir une expérience utilisateur fluide, moderne et immersive. Le site permet aux utilisateurs de parcourir un large catalogue de films et séries, de visionner des bandes-annonces, et de regarder du contenu en haute définition avec une interface responsive adaptée à tous les écrans." img="//i.imgur.com/OkQYNPE.png" visiteUrl="https://pulsetv.fun/"/>
                            <CardProject title="PulseTv" description="Ce projet est une plateforme de streaming vidéo développée pour offrir une expérience utilisateur fluide, moderne et immersive. Le site permet aux utilisateurs de parcourir un large catalogue de films et séries, de visionner des bandes-annonces, et de regarder du contenu en haute définition avec une interface responsive adaptée à tous les écrans." img="//i.imgur.com/OkQYNPE.png" visiteUrl="https://pulsetv.fun/"/>
                            <CardProject title="PulseTv" description="Ce projet est une plateforme de streaming vidéo développée pour offrir une expérience utilisateur fluide, moderne et immersive. Le site permet aux utilisateurs de parcourir un large catalogue de films et séries, de visionner des bandes-annonces, et de regarder du contenu en haute définition avec une interface responsive adaptée à tous les écrans." img="//i.imgur.com/OkQYNPE.png" visiteUrl="https://pulsetv.fun/"/>
                        </div>
                    </div>
                </footer>
                */}
            </main>
        </div>
    )
}
