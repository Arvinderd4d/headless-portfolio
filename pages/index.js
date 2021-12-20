import Head from 'next/head';
import SectionTitle from '../components/SectionTitle';
import PrestationItem from '../components/items/PrestationItem';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <SectionTitle
          className="mt-3 md:mt-0"
          title="A propos"
          content="Développeur Freelance créatif et innovant basé au coeur de La Rochelle et spécialisé dans la création de site internet. Depuis l'âge de 14 ans, je développe, compose et crée des projets web."
        />

        <div className="my-4 mx-auto text-xl sm:text-2xl max-w-4xl font-medium text-center text-white">
          Je suis entouré d&apos;une équipe fondée de créatifs, designers et développeurs.
          Nous travaillons ensemble pour créer des choses inspirantes et engagées.
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-3 lg:gap-6">
          <PrestationItem
            image="/images/prestations/creation-site-internet.png"
            title={['Conception / Refonte', <br />, 'de sites Internet']}
            link="/"
            linkText="Découvrir mes prestations"
          >
            Sites vitrines, associatifs, e-commerce ou dédiés.
            Je vous accompagne dès la genèse de votre projet pour vous proposer
            des solutions puissantes et performantes et répondre le plus efficacement
            aux enjeux de votre activité. Je suis expert dans la création de site sur les CMS
            Joomla, WordPress et Prestashop.
          </PrestationItem>

          <PrestationItem
            image="/images/prestations/infogerance-tma-maintenance.png"
            title={['Maintenance &', <br />, 'Infogérance']}
            link="/"
            linkText="Mes offres de maintenance"
          >
            La maintenance d’un site internet s’avère complexe lorsqu’on ne dispose pas
            du bagage technique nécessaire voire le temps de s’en occuper.
            Pour ces tâches délicates et chronophages, je vous propose de prendre le
            relai et d’assurer pour vous la gestion de vos sauvegardes, ainsi que la
            maintenance et la sécurité de votre serveur dans sa globalité.
          </PrestationItem>

          <PrestationItem
            image="/images/prestations/hebergement-optimise-rapide.png"
            title={['Hébergement optimisé &', <br />, 'ultra rapide']}
            link="/"
            linkText="Me contacter"
          >
            Lorsque vous souhaitez mettre en ligne un site, il est nécessaire de choisir
            une offre d’hébergement parmis une foule d’offres et de prestataires.
            Nos offres d’hébergement sont transparentes et sans frais cachés.
            Un expert de notre partenaire Dutiko analyse votre projet ainsi que votre demande
            pour vous proposer l’offre idéale pour la nature de votre site web.
          </PrestationItem>
        </div>
      </div>
    </div>
  );
}
