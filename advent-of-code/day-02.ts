import { input } from "./input-02";

const instructions = input.split('\n');

// Init position type and initialization used in reducer
type PositionType = {
    horizontal: number,
    depth: number,
};

let initialPosition: PositionType = {
    horizontal: 0,
    depth: 0,
};

// Reduce to the finalPosition with each instruction
// from the input. Uses initialPosition
const position = instructions.reduce((finalPosition, instruction): PositionType => {
    const [ direction, value ] = instruction.split(' ');

    switch(direction) {
        case 'forward': finalPosition.horizontal += Number(value); break;
        case 'up': finalPosition.depth -= Number(value); break;
        case 'down': finalPosition.depth += Number(value); break;
    }

    return finalPosition;
}, initialPosition)  

// Multiply the two dimensions of position
console.log(`Day 02: ${position.depth * position.horizontal}`);

// Init position type and initialization used in reducer
type AimedPositionType = {
    horizontal: number,
    depth: number,
    aim: number,
};

let initialAimedPosition: AimedPositionType = {
    horizontal: 0,
    depth: 0,
    aim: 0,
};

// Reduce to the finalPosition with each instruction
// from the input. Uses initialPosition
const aimedPosition = instructions.reduce((finalPosition, instruction): AimedPositionType => {
    const [ direction, value ] = instruction.split(' ');

    switch(direction) {
        case 'forward': 
            finalPosition.horizontal += Number(value); 
            finalPosition.depth += finalPosition.aim * Number(value); 
            break;
        case 'up': 
            // finalPosition.depth -= Number(value); 
            finalPosition.aim -= Number(value); 
            break;
        case 'down': 
            // finalPosition.depth += Number(value); 
            finalPosition.aim += Number(value)
            break;
    }
    finalPosition
    return finalPosition;
}, initialAimedPosition)  

// Multiply the two dimensions of position
console.log(`Day 02: ${aimedPosition.depth * aimedPosition.horizontal}`);
