export const switchGenres = (
  temperature: number
): "Rock" | "Pop" | "Classical" | "Lofi" => {
  if (temperature > 32) {
    return "Rock";
  } else if (temperature < 32 && temperature > 24) {
    return "Pop";
  } else if (temperature < 24 && temperature > 16) {
    return "Classical";
  } else {
    return "Lofi";
  }
};
