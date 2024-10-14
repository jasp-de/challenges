import React from "react";
import { introduction, volumes } from "../../lib/data.js";
import Volumes from "../../components/Volumes.js";
import VolumeButton from "../../components/VolumeButton.js";
import { useRouter } from "next/router";

export default function LOTR() {
  const router = useRouter();

  function handleRandom() {
    const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <section>
      <h1>Lord of the Rings - All Volumes</h1>
      <p>{introduction}</p>
      <Volumes volumes={volumes} />
      <VolumeButton onRandom={handleRandom} />
    </section>
  );
}
