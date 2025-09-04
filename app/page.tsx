import { Canvas } from "@/components/canvas";
import { Notes } from "@/components/notes";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4 w-full h-screen">
      <h1 className="text-5xl font-semibold text-center">Music Visualizer</h1>
      <Notes />
      <Canvas note="D" />
    </main>
  );
}
