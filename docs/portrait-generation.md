# Responsive portrait generation

Generated with the built-in ImageGen tool, using `public/profile.jpg` as the edit target. The original is preserved. Outputs were encoded as WebP without cropping or resizing.

## Desktop prompt

Use case: identity-preserve. Edit target: attached original portrait of John Orengo. Create an enhanced professional portfolio portrait for DESKTOP, landscape 4:3 composition. Preserve this exact man's facial identity, facial structure, skin tone, expression, hairstyle, black suit, white shirt, blue tie, pocket square, crossed arms and watch. Do not beautify or reshape face. Subtle photographic sharpening, natural skin texture, balanced studio exposure and reduced compression artifacts only. Preserve entire visible original person from top of hair to lower torso and both arms, with comfortable breathing room above head and on both sides. Extend the plain near-black studio background to achieve 4:3; never crop the original person. No text, no graphics, no watermark. Output a single finished landscape photograph.

## Tablet prompt

Use case: identity-preserve. Edit target attached original portrait. Produce a TABLET square 1:1 enhanced photographic portrait for this man's portfolio. Keep exact facial identity and facial proportions, skin tone, hairstyle, expression, suit, shirt, tie, watch, pocket square and crossed-arm pose. Subtle photographic clarity and balanced exposure, preserve real skin texture, no beauty retouching or identity changes. Include all original visible person, full head with generous top margin, both shoulders, crossed arms and lower torso. Center within plain near-black studio background, adding background margin rather than cropping any part of the person. No typography, watermark, graphic or collage. Single square finished photograph.

## Mobile prompt

Use case: identity-preserve. Edit target attached original square portrait. Create an enhanced MOBILE 4:5 portrait version for his personal portfolio. Preserve the exact original man, exact facial structure, expression, hairstyle, skin tone, black suit, white shirt, blue tie, pocket square, watch and crossed-arm pose. No facial reshaping, no beauty filter. Only improve photographic clarity, natural exposure and compression artifacts. Keep ALL the original visible person including entire hair, shoulders, both elbows and crossed arms, and visible lower torso. Add plain near-black studio background space above and around him so he does not look tightly cropped; extend below original torso naturally if required. Centered 4:5 vertical composition with breathing room. Real photographic skin texture. No text, graphics, watermark or collage. Single finished vertical photo.

## Project assets

- `public/portraits/john-desktop.webp`: 1448 x 1086, selected from 1024px viewport width.
- `public/portraits/john-tablet.webp`: 1254 x 1254, selected from 640px viewport width.
- `public/portraits/john-mobile.webp`: 1122 x 1402, selected below 640px viewport width.

The hero uses Next.js optimized image sources inside a picture element. Matching aspect ratios and object-contain preserve the complete composition. Identity text is below the photo.

## Transparent hero revision

Built-in ImageGen edit prompt: Use case: background-extraction. Edit target: the attached original portrait. Remove ONLY the black background, producing a genuine transparent RGBA cutout of this exact person. Preserve original facial identity, facial structure, expression, skin tone, hairstyle, clothing, white shirt, tie, pocket square, crossed arms and gold watch exactly. No beautification, no restyling, no extra objects. Preserve ALL original visible person from entire hair to bottom torso and both elbows. Clean accurate edge matting, natural texture, minimal transparent margins around silhouette so it fills its canvas, no black rectangle, no shadow, no glow, no text. This is a background removal for a responsive portfolio website.

Active hero asset: `public/portraits/john-cutout.webp`. Earlier device-specific framed images remain available; the hero now uses this transparent cutout with Next.js responsive sizing to remove the black rectangular backdrop.
