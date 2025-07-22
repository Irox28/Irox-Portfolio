import Navbar from "../components/Navbar";
import CardPrice from "../components/CardPrice";

export default function Prix() {
    return (
        <div>
            <Navbar/>
            <h1 className="text-center text-5xl font-bold mt-10 mb-10">Mes Prix</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 px-4 max-w-7xl mx-auto">
                <CardPrice Badge="La moins chère" Name="Vitrine Web" Price="80" Description1="Frontend uniquement (React)" Description2="Jusqu'à 4 pages statiques" Description3="Design responsive" Description4="Livraison rapide en 1 semaine" Description5="Hébergement non inclus (Aide possible pour 20€)" Description6="Pas de backend (système d’inscription, etc.)"/>
                <CardPrice Badge="-20%" Name="Offre FullStack" Price="200" Description1="Site Fullstack (React, Express)" Description2="Jusqu'à 6 pages" Description3="Design responsive" Description4="Livraison rapide en 2 semaines" Description5="Hébergement non inclus (Aide possible pour 20€)" Description6="Pas de maintenance incluse"/>
                <CardPrice Badge="Pour un gros site, boutique" Name="Personnalisable" Price="450" Description1="Site Fullstack (React, Express)" Description2="Nombre de pages comme vous le souhaitez" Description3="Design responsive" Description4="Livraison rapide en 3-4 semaines" Description5="Hébergement inclus + maintenance" Description6="Pas d'hébergement sur mon serveur"/>
            </div>
        </div>
    )
}
