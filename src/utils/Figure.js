const FIGURE_TYPES = [
  'MONOMINO',
  'DOMINO',
  'TRIMINO',
  'TETRAMINO',
  'PENTAMINO',
];

const SCHEMAS = [
  "0000000000001000000000000",
  "0000000000001100000000000",
  "0000000000011100000000000",
  "0000000000011000110000000",
  "0000000100011100000000000",
  "0000000000111100000000000",
  "0000000010011100000000000",
  "0000000110011000000000000",
  "0000010000111100000000000",
  "0000000100001000111000000",
  "0000001000010000111000000",
  "0000000000011101100000000",
  "0000000010011100100000000",
  "0000000100001000010000100",
  "0000001000011000110000000",
  "0000000110011000100000000",
  "0000001100010000110000000",
  "0000000110011000010000000",
  "0000000100011100010000000",
  "0000000000010001111000000"
];

export function generateInitFigures(playerFigureMask) {
  return SCHEMAS.map((schema) => {
    const blocksCount = schema
        .split('')
        .filter((atom) => atom !== '0')
        .length;
    return {
      type: FIGURE_TYPES[blocksCount - 1],
      id: Math.random(),
      schema: schema.split('1').join(playerFigureMask),
    }
  });
}

export function rotateFigure(schema) {
  // Example
  // [1,2,3][4,5,6][7,8,9]
  // [7,4,1][8,5,2][9,6,3]

  const b = schema.split('');
  return [
    b[20], b[15], b[10], b[5], b[0],
    b[21], b[16], b[11], b[6], b[1],
    b[22], b[17], b[12], b[7], b[2],
    b[23], b[18], b[13], b[8], b[3],
    b[24], b[19], b[14], b[9], b[4],
  ].join('');
}

export function flipX(schema) {
  // Example
  // [1,2,3][4,5,6][7,8,9]
  // [3,2,1][6,5,4][9,8,7]

  const b = schema.split('');
  return [
    b[4], b[3], b[2], b[1], b[0],
    b[9], b[8], b[7], b[6], b[5],
    b[14], b[13], b[12], b[11], b[10],
    b[19], b[18], b[17], b[16], b[15],
    b[24], b[23], b[22], b[21], b[20],
  ].join('');
}

export function flipY(schema) {
  // Example
  // [1,2,3][4,5,6][7,8,9]
  // [7,4,1][8,5,2][9,6,3]

  const b = schema.split('');
  return [
    b[20], b[21], b[22], b[23], b[24],
    b[15], b[16], b[17], b[18], b[19],
    b[10], b[11], b[12], b[13], b[14],
    b[5], b[6], b[7], b[8], b[9],
    b[0], b[1], b[2], b[3], b[4],
  ].join('');
}

export function to2DArray(schema) {
  const b = schema.split('');
  return [
    [b[0], b[1], b[2], b[3], b[4]],
    [b[5], b[6], b[7], b[8], b[9]],
    [b[10], b[11], b[12], b[13], b[14]],
    [b[15], b[16], b[17], b[18], b[19]],
    [b[20], b[21], b[22], b[23], b[24]],
  ];
}

export default null;
