"use client";

import { Note } from "@/types/Note";
import { useState } from "react";

const scale: Note[] = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export function Notes() {
  const [detected, setDetected] = useState("C");

  return (
    <div>
      <p>Detected note: {detected}</p>
    </div>
  );
}
