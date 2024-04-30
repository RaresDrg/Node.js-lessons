function isNumber(arg) {
  const number = Number(arg);

  if (isNaN(number)) {
    console.error("Please write the number of degrees");
    return;
  }

  return number;
}

function checkDegreesType(arg) {
  const TYPES = ["celsius", "fahrenheit"];
  const type = arg.toLowerCase();

  if (!TYPES.includes(type)) {
    console.error(
      "Please write one of this type of degrees: Celsius or Fahrenheit"
    );
  }

  return type;
}

function convertToFahrenheit(degrees) {
  const FahrenheitDegrees = degrees * 1.8 + 32;

  return `${FahrenheitDegrees} °F`;
}

function convertToCelsius(degrees) {
  const CelsiusDegrees = ((degrees - 32) / 1.8).toFixed(2);

  return `${CelsiusDegrees} °C`;
}

export { isNumber, checkDegreesType, convertToFahrenheit, convertToCelsius };
