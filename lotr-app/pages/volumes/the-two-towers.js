import React from "react";
import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data.js";

export default function Volume2() {
  const volume2 = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <section>
      <h1> {volume2.title} </h1>
      <p> {volume2.description}</p>
      {volume2.books.map((book, i) => (
        <p key={book.ordinal}>
          {book.ordinal} - {book.title}
        </p>
      ))}
    </section>
  );
}
