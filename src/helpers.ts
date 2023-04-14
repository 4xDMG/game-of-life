const generateArray = (length: number = 10) => Array.from(Array(length))

export const BASE_GAME_BOARD = generateArray().map(() => generateArray().map(() => 0));;