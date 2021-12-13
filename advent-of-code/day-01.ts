import { input } from "./input-01";

// Split input and convert to Number type
const measurements = input.split('\n').map(measurement => {
    return Number(measurement);
});

// Filter out decreasing values
const increasedMeasurements = measurements.filter((measurement, index) => {
    return index && measurement > measurements[index - 1]
});

// Count remaining increasing values
console.log(`Day 01: ${increasedMeasurements.length}`);

// Sum up the three-values windows, and filter out the last NaN values
const sliders = measurements.map((measurement, index) => {
    return measurement
        + measurements[index + 1]
        + measurements[index + 2]
}).filter(slider => slider);

// Filter out decreasing values
const increasedSliders = sliders.filter((measurement, index) => {
    return index && measurement > sliders[index - 1]
});

// Count remaining increasing values
console.log(`Day 01: ${increasedSliders.length}`);