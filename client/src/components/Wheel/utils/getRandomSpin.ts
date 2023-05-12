const THREE_TURNS_IN_DEGREES = 1080;

export const getRandomSpin: () => number = () => {
  return Math.floor(Math.random() * (360 + 1)) + THREE_TURNS_IN_DEGREES;
};
