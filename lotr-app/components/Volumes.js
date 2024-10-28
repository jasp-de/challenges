import Link from "next/link";
import { volumes } from "../lib/data.js";
import Head from "next/head";

export default function Volumes({ volumes, onRandom }) {
  return (
    <>
      <Head>
        <title> LOTR - Volumes </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul>
        {volumes.map(({ id, slug, title }) => (
          <li key={id}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
