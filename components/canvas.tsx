"use client";

import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { Note } from "@/types/Note";

type CanvasProps = {
  note?: string;
};

export function Canvas({ note = "C" }: CanvasProps) {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [color, setColor] = useState([0, 255, 0]);

  const width = 800;
  const height = 400;

  useEffect(() => {
    let canvas: p5 | null = null;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(width, height);
        p.clear();
      };

      p.draw = () => {
        p.clear();
        const xPos = note ? mapNote(note) : 0;
        p.fill(color);
        p.ellipse(xPos ?? 0 + 75, 100, 100, 100);
      };

      return () => {
        if (canvas) {
        }
        canvas?.remove();
      };
    };

    if (canvasRef.current) {
      canvas = new p5(sketch, canvasRef.current);
    }

    const mapNote = (note: string) => {
      const spacing = width / 13;

      const notePositions: Record<Note, number> = {
        C: 0,
        "C#": spacing,
        D: 2 * spacing,
        "D#": 3 * spacing,
        E: 4 * spacing,
        F: 5 * spacing,
        "F#": 6 * spacing,
        G: 7 * spacing,
        "G#": 8 * spacing,
        A: 9 * spacing,
        "A#": 10 * spacing,
        B: 11 * spacing,
      };

      return notePositions[note as keyof typeof notePositions] ?? 0;
    };
  }, [color, note]);

  return <div ref={canvasRef}>Canvas</div>;
}
