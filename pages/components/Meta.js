import Head from 'next/head';

export default function Meta({ description, title, siteTitle }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Le site du photographe Charles Cantin"
        />
        <link rel="manifest" href="./manifest.json" />

        <meta name="description" content="Charles Cantin Photographe s'occupe de toutes vos prestations sur devis." />
        <meta name="title" content="Charles Cantin photographe" />
        <meta name="keywords" content="Charles, Cantin, Photos, Photographe, images"/ >
        <meta name="robots" content="index" />
        <meta name="author" content="Marc Aubriot" />

        <meta property="og:image" content="" /> 
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:alt" content="" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:title" content="Photographie" />
        <meta property="og:description" content="Charles Cantin Photographe s'occupe de toutes vos prestations sur devis." />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Charles Cantin photographe" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Photographie" />
        <meta name="twitter:description" content="Charles Cantin Photographe s'occupe de toutes vos prestations sur devis." />
        <meta name="twitter:url" content="" />
        <meta name="twitter:image" content="" />

        <link rel="icon" href="/favicon.ico" />
        <title>{`${title} | ${siteTitle}`}</title>
      </Head>

    </>
  );
}