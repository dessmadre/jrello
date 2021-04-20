import Head from 'next/head';

export default function Meta({ boardTitle = 'Jrello' }) {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta lang='en' />
      <title>{boardTitle}</title>
      <meta name='description' content='Jrello - A trello clone' />
    </Head>
  );
}
