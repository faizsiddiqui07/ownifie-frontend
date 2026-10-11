// Meta Pixel helper.
// Base snippet index.html me load hota hai; yahan se sirf events bheje jaate hain.
// Ad blocker ya network fail hone par fbq undefined ho sakta hai, isliye har call
// chup-chaap no-op ho jaati hai - tracking kabhi page ko tod na sake.

const hasPixel = () =>
  typeof window !== "undefined" && typeof window.fbq === "function";

// Meta ke standard events (Lead, ViewContent, Purchase ...)
export const pixelTrack = (event, params) => {
  if (!hasPixel()) return;
  try {
    window.fbq("track", event, params);
  } catch {
    // ignore
  }
};

// Custom events - standard list me jo nahi hai (jaise partner application).
// Inhe alag rakhna zaroori hai warna Lead ka optimisation kharab ho jata hai.
export const pixelTrackCustom = (event, params) => {
  if (!hasPixel()) return;
  try {
    window.fbq("trackCustom", event, params);
  } catch {
    // ignore
  }
};
