import Link from "next/link";
import { volumes } from "../lib/data.js";
import Head from "next/head";

export default function VolumeButton({ onRandom }) {
  return <button onClick={onRandom}>Random Volume</button>;
}
