export let calculators = [
  {
    queryId: "celsius",
    topic: "Conversion",
    query: "Celsius Converter",
    inputs: [{ name: "celsius", label: "C" }],
    outputs: [{ name: "fahrenheit", label: "F" }],
  },
  {
    queryId: "fahrenheit",
    topic: "Conversion",
    query: "Fahrenheit Converter",
    inputs: [{ name: "fahrenheit", label: "F" }],
    outputs: [{ name: "celsius", label: "F" }],
  },
  {
    queryId: "bmicalculator",
    topic: "Health",
    query: "BMI Calculator",
    inputs: [
      { name: "height", label: "H" },
      { name: "weight", label: "W" },
    ],
    outputs: [{ name: "bmi", label: "bmi" }],
  },
  {
    queryId: "deltav",
    topic: "Physics",
    query: "Delta V Calculator",
    inputs: [{ name: "no name", label: "nn" }],
    outputs: [{ name: "no name", label: "nn" }],
  },
];

function celciusToFahrenheit(inputs: number[]): number[] {
  return [inputs[0] * (9 / 5) + 32];
}

function fahrenheitToCelsius(inputs: number[]): number[] {
  return [(inputs[0] - 32) * (5 / 9)];
}

export function calculate(inputs: number[], queryId: string): number[] {
  const calculationMap: { [key: string]: (inputs: number[]) => number[] } = {
    celsius: celciusToFahrenheit,
    fahrenheit: fahrenheitToCelsius,
  };
  return calculationMap[queryId](inputs);
}
