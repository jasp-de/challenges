import React from "react";
import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data.js";

export default function Volume3() {
  const volume3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <section>
      <h1> {volume3.title} </h1>
      <p> {volume3.description}</p>
      {volume3.books.map((book, i) => (
        <p key={book.ordinal}>
          {book.ordinal} - {book.title}
        </p>
      ))}
    </section>
  );
}
