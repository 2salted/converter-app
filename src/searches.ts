export let calculators = [
  {
    queryId: "celsius",
    topic: "Conversion",
    query: "Celsius Converter",
    inputs: [{ name: "celsius", label: "C" }],
    outputs: [{ name: "fahrenheit", label: "F" }],
  },
  { queryId: "fahrenheit", topic: "Conversion", query: "Fahrenheit Converter" },
  { queryId: "bmicalculator", topic: "Health", query: "BMI Calculator" },
  { queryId: "deltav", topic: "Physics", query: "Delta V Calculator" },
];

function celciusToFahrenheit(inputs: number[]): number[] {
  return [inputs[0] * (9 / 5) + 32];
}

function fahrenheitToCelsius(inputs: number[]): number[] {
  return [(inputs[0] - 32) * (5 / 9)];
}

function gravityCalculator(inputs: number[]): number[] {
  return [(inputs[0] * inputs[1] * inputs[2]) / inputs[3] ** 2];
}

export function calculate(inputs: number[], queryId: string): number[] {
  const calculationMap: { [key: string]: (inputs: number[]) => number[] } = {
    celsius: celciusToFahrenheit,
    fahrenheit: fahrenheitToCelsius,
    gravity: gravityCalculator,
  };
  return calculationMap[queryId](inputs);
}
