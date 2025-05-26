export interface User {
    username: string,
    token: string,
    photoUrl?: string
}

// Basic's about typescript
// 1. Provide intellicense
// 2. Provide type safety inside functions
// 3. Avoid to make silli mistake

let data: number | string = 42;
data = '10'


interface Car {
    color: string,
    model: string,
    topSpeed?: number
}

const car1: Car = {
    color: 'blue',
    model: 'BMW'
}

const car2: Car = {
    color: 'red',
    model: 'mercedes',
    topSpeed: 100
}


const multiply = (x: number, y: number): number => {
    return x * y;
}