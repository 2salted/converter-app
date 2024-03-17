export let calculators = [
  {
    queryId: "celsius",
    topic: "Conversion",
    query: "Celsius Converter",
    inputs: [{ name: "celsius", label: "C", unit: ["c", "k"] }],
    outputs: [{ name: "fahrenheit", label: "F" }],
  },
  {
    queryId: "fahrenheit",
    topic: "Conversion",
    query: "Fahrenheit Converter",
    inputs: [{ name: "fahrenheit", label: "F", unit: ["f", "k"] }],
    outputs: [{ name: "celsius", label: "C" }],
  },
  {
    queryId: "bmicalculator",
    topic: "Health",
    query: "BMI Calculator",
    inputs: [
      {
        name: "height",
        label: "H",
        unit: ["m", "cm", "ft"],
      },
      { name: "weight", label: "W", unit: ["kg", "lbs"] },
    ],
    outputs: [{ name: "bmi", label: "bmi" }],
  },
  {
    queryId: "deltav",
    topic: "Physics",
    query: "Delta V Calculator",
    inputs: [{ name: "no name", label: "nn", unit: ["nn", "nnk"] }],
    outputs: [{ name: "no name", label: "nn" }],
  },
  {
    queryId: "lengthConverter",
    topic: "Conversion",
    query: "Length converter",
    inputs: [
      { name: "length", label: "length", unit: ["cm", "m", "ft", "in"] },
    ],
    outputs: [
      {
        name: "outputLength",
        label: "outputLength",
        unit: ["m", "cm", "ft", "in"],
      },
    ],
  },
];

function celciusToFahrenheit(inputs: number[]): number[] {
  return [inputs[0] * (9 / 5) + 32];
}

function doNothing(inputs: number[]): number[] {
  return [inputs[0]];
}

function fahrenheitToCelsius(inputs: number[]): number[] {
  return [(inputs[0] - 32) * (5 / 9)];
}

function bmicalculator(inputs: number[]): number[] {
  return [inputs[1] / inputs[0] ** 2];
}

export function convertToSI(input: number, from: string): number {
  const unitMap: { [key: string]: number } = {
    cm: 0.01,
    m: 1,
    ft: 0.3048,
    kg: 1,
    lbs: 0.453592,
  };
  return input * unitMap[from];
}

export function convertFromSI(input: number, to: string): number {
  const unitMap: { [key: string]: number } = {
    cm: 100,
    m: 1,
    ft: 3.28084,
    kg: 1,
    lbs: 2.20462,
  };
  return input * unitMap[to];
}

export function calculate(inputs: number[], queryId: string): number[] {
  const calculationMap: { [key: string]: (inputs: number[]) => number[] } = {
    celsius: celciusToFahrenheit,
    fahrenheit: fahrenheitToCelsius,
    bmicalculator: bmicalculator,
    lengthConverter: doNothing,
  };
  return calculationMap[queryId](inputs);
}
