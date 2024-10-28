import React from "react";
import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data.js";

export default function Volume1() {
  const volume1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <section>
      <h1> {volume1.title} </h1>
      <p> {volume1.description}</p>
      {volume1.books.map((book, i) => (
        <p key={book.ordinal}>
          {book.ordinal} - {book.title}
        </p>
      ))}
    </section>
  );
}
