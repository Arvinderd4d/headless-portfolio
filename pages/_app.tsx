import '../styles/globals.css';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://www.inrage.fr${router.asPath}`;
  return (
    <>
      <DefaultSeo
        canonical={`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_FRONT_URL}${router.asPath}`}
        additionalLinkTags={[{
          rel: 'icon',
          href: '/favicon.png',
        }]}
        openGraph={{
          type: 'website',
          locale: 'fr_FR',
          url: 'https://www.inrage.fr/',
          site_name: 'inRage',
        }}
        twitter={{
          handle: '@akiletour',
          site: '@akiletour',
          cardType: 'summary_large_image',
        }}
      />
      <Header
        pageTitle={pageProps.pageTitle || ''}
        breadcrumb={pageProps.breadcrumb}
        headerType={pageProps.headerType || 'default'}
        pageExcerpt={pageProps.excerpt || ''}
      />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
