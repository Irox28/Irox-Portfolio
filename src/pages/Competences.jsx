import Navbar from "../components/Navbar";

export default function Competences() {
    const skills = [
        { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-center text-4xl sm:text-5xl font-bold mb-8">Compétences</h1>
                <p className="text-center text-gray-700 mb-12 px-2 sm:px-0">
                    Voici un aperçu des technologies que je maîtrise pour réaliser vos projets.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
                    {skills.map(({ name, src }) => (
                        <div key={name} className="flex flex-col items-center w-20 sm:w-24 hover:scale-110 transition-transform duration-300">
                            <img src={src} alt={name} width={80} height={80} className="mb-2 sm:mb-3" />
                            <span className="text-gray-800 font-semibold text-sm sm:text-base text-center">{name}</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
