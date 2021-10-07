interface SwitchGenresProps {
  temperature: number;
}

export const switchGenres = ({ temperature }: SwitchGenresProps): string => {
  if (temperature > 32) {
    return "Rock";
  } else if (temperature < 32 && temperature > 24) {
    return "Pop";
  } else if (temperature < 24 && temperature > 16) {
    return "Classic";
  } else {
    return "Lofi";
  }
};
