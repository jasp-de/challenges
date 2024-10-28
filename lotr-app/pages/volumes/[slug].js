import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";
import Head from "next/head";

export default function VolumePage() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((vol) => vol.slug === slug);
  const { title, description, books } = volume;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section>
        <h1>{title}</h1>
        <p>{description}</p>
        {books.map((book) => (
          <p key={book.ordinal}>
            {book.ordinal} - {book.title}
          </p>
        ))}
      </section>
    </>
  );
}
