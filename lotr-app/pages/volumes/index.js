import React from "react";
import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data.js";

export default function Volumes() {
  return (
    <section>
      <h1>Lord of the Rings - All Volumes</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Image
              src={volume.cover}
              alt={volume.title}
              width={140}
              height={230}
            />
            <Link href={`/volumes/${volume.slug}`}>
              <h2>{volume.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
