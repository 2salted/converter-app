export let calculators = [
  {
    queryId: "celsius",
    topic: "Conversion",
    query: "Celsius Converter",
    units: [{ celsius: "c" }, { fahrenheit: "f" }, { kelvin: "k" }],
    inputs: [{ name: "celsius", label: "C" }],
    outputs: [{ name: "fahrenheit", label: "F" }],
  },
  {
    queryId: "fahrenheit",
    topic: "Conversion",
    query: "Fahrenheit Converter",
    units: [{ fahrenheit: "f" }, { celsius: "c" }, { kelvin: "k" }],
    inputs: [{ name: "fahrenheit", label: "F" }],
    outputs: [{ name: "celsius", label: "C" }],
  },
  {
    queryId: "bmicalculator",
    topic: "Health",
    query: "BMI Calculator",
    units: ["m", "cm", "ft", "kg", "lbs"],
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
    units: [{ cn: "nn" }, { fn: "nn" }, { kn: "nn" }],
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

function bmicalculator(inputs: number[]): number[] {
  return [inputs[1] / inputs[0] ** 2];
}

export function calculate(inputs: number[], queryId: string): number[] {
  const calculationMap: { [key: string]: (inputs: number[]) => number[] } = {
    celsius: celciusToFahrenheit,
    fahrenheit: fahrenheitToCelsius,
    bmicalculator: bmicalculator,
  };
  return calculationMap[queryId](inputs);
}
