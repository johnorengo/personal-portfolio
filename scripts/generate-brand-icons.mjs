import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const logoPath = path.join(root, "public/brand/jo-monogram.svg");
const logo = await readFile(logoPath, "utf8");
const definitions = logo.match(/<defs>[\s\S]*?<\/defs>/)?.[0];
const markContents = logo.match(/<g id="jo-mark"[^>]*>([\s\S]*?)<\/g>/)?.[1];

if (!definitions || !markContents) {
  throw new Error("The JO logo is missing its gradient or jo-mark group.");
}

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">${definitions}<g transform="translate(6 48)" fill="url(#jo-spectrum)">${markContents}</g></svg>`;

const iconPath = path.join(root, "app/icon.svg");
await writeFile(iconPath, `${iconSvg}\n`);

for (const [file, size] of [
  ["app/apple-icon.png", 180],
  ["public/brand/icon-192.png", 192],
  ["public/brand/icon-512.png", 512],
]) {
  await sharp(Buffer.from(iconSvg)).resize(size, size, { fit: "contain" }).png().toFile(path.join(root, file));
}

await sharp(Buffer.from(logo)).resize(732, 480, { fit: "contain" }).png().toFile(path.join(root, "public/brand/jo-monogram-preview.png"));

const icoPng = await sharp(Buffer.from(iconSvg)).resize(32, 32, { fit: "contain" }).png().toBuffer();
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // icon resource
icoHeader.writeUInt16LE(1, 4); // one image
icoHeader[6] = 32;
icoHeader[7] = 32;
icoHeader[8] = 0;
icoHeader[9] = 0;
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(icoPng.length, 14);
icoHeader.writeUInt32LE(22, 18);
await writeFile(path.join(root, "app/favicon.ico"), Buffer.concat([icoHeader, icoPng]));

console.log("Generated the JO app icon, favicon, Apple icon, and PWA icons.");
