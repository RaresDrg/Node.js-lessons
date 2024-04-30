import { capitalize } from "./capitalize.js";

const getRandomGreeting = (name) => {
  const GREETINGS = [
    "Hello",
    "Hi",
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
  ];

  const random = (Math.random() * (GREETINGS.length - 1)).toFixed(0);
  const capitalizedName = capitalize(name);

  return `${GREETINGS[random]}, ${capitalizedName} !`;
};

export { getRandomGreeting };
