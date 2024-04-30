import {
  isNumber,
  checkDegreesType,
  convertToFahrenheit,
  convertToCelsius,
} from "./utils.js";

console.dir(process.argv);

const convertDegrees = () => {
  if (process.argv.length !== 4) {
    console.error(
      `You must write the number of degrees and their type. For example: 20 Celsius or 60 Fahrenheit`
    );
    return;
  }

  const degrees = isNumber(process.argv[2]);
  const degreesType = checkDegreesType(process.argv[3]);

  const convertedDegrees =
    degreesType === "celsius"
      ? convertToFahrenheit(degrees)
      : degreesType === "fahrenheit"
      ? convertToCelsius(degrees)
      : null;

  console.log(convertedDegrees);
};

convertDegrees();
