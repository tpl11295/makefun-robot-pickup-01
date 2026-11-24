import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Pickup Line Championship entry — one pickup line,
// a single line under 200 characters, in the voice of a robot
// trying to charm someone.
// Judge brief: first, is it a robot's pickup line at all; then,
// does the joke grow out of being a machine; then surprise,
// economy and charm.
// Chosen line: no heart, but a cooling fan that spins faster
// near the person — the machine's own hardware betraying it,
// reframed as love by its engineers' "bug".
const LINE =
  "I don't have a heart, but my cooling fan spins faster whenever you're near. My engineers call it a bug. I call it love.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
