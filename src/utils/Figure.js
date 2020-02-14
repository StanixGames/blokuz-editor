const FIGURES = [
  {
    bounds: {
      min: { x: 0, y: 0 },
      max: { x: 0, y: 0 },
    },
    blocks: [
      { mask: '1', x: 0, y: 0 }
    ],
    edges: [
      {
        block: 0,
        vectors: [
          { x: -1, y: -1 },
          { x: 1, y: -1 },
          { x: -1, y: 1 },
          { x: 1, y: 1 },
        ]
      }
    ],
  },
  {
    bounds: {
      min: { x: 0, y: 0 },
      max: { x: 1, y: 0 },
    },
    blocks: [
      { mask: '1', x: 0, y: 0 },
      { mask: '1', x: 1, y: 0 },
    ],
    edges: [
      {
        block: 0,
        vectors: [
          { x: -1, y: -1 },
          { x: -1, y: 1 },
        ]
      },
      {
        block: 1,
        vectors: [
          { x: 1, y: -1 },
          { x: 1, y: 1 },
        ]
      }
    ],
  },
  // {
  //   bounds: {
  //     min: { x: -1, y: 0 },
  //     max: { x: 1, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //     { mask: '1', x: -1, y: 0 },
  //   ],
  //   edges: [ 0, 2 ],
  // },
  // {
  //   bounds: {
  //     min: { x: 0, y: 0 },
  //     max: { x: 1, y: 1 },
  //   },
  //   blocks: [
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //     { mask: '1', x: 1, y: 1 },
  //     { mask: '1', x: 0, y: 1 },
  //   ],
  //   edges: [ 0, 1, 2, 3 ],
  // },
  // {
  //   bounds: {
  //     min: { x: 0, y: 0 },
  //     max: { x: 1, y: 1 },
  //   },
  //   blocks: [
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //     { mask: '1', x: 1, y: 1 },
  //   ],
  //   edges: [ 0, 1, 2 ],
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 1, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //     { mask: '1', x: 0, y: -1 },
  //   ],
  //   edges: [ 0, 2, 3 ],
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: 0 },
  //     max: { x: 2, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //     { mask: '1', x: 2, y: 0 },
  //   ],
  //   edges: [ 0, 3 ],
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 1, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //     { mask: '1', x: 1, y: -1 },
  //   ],
  //   edges: [ 0, 2, 3 ],
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 1, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 0, y: -1 },
  //     { mask: '1', x: 1, y: -1 },
  //   ],
  //   edges: [ 0, 1, 2, 3],
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 2, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //     { mask: '1', x: 2, y: 0 },
  //     { mask: '1', x: -1, y: -1 },
  //   ]
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 1, y: 1 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 1 },
  //     { mask: '1', x: 0, y: 1 },
  //     { mask: '1', x: 1, y: 1 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 0, y: -1 },
  //   ]
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 1, y: 1 },
  //   },
  //   blocks: [
  //     { mask: '1', x: 0, y: 1 },
  //     { mask: '1', x: 1, y: 1 },
  //     { mask: '1', x: -1, y: -1 },
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: -1, y: 1 },
  //   ]
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 2, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 0, y: -1 },
  //     { mask: '1', x: 1, y: -1 },
  //     { mask: '1', x: 2, y: -1 },
  //   ]
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 1, y: 1 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 1 },
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //     { mask: '1', x: 1, y: -1 },
  //   ]
  // },
  // {
  //   bounds: {
  //     min: { x: 0, y: -2 },
  //     max: { x: 0, y: 2 },
  //   },
  //   blocks: [
  //     { mask: '1', x: 0, y: -2 },
  //     { mask: '1', x: 0, y: -1 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 0, y: 1 },
  //     { mask: '1', x: 0, y: 2 },
  //   ]
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 0, y: 1 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: -1 },
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: -1, y: 1 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 0, y: 1 },
  //   ]
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 1, y: 1 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 1 },
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 0, y: -1 },
  //     { mask: '1', x: 1, y: -1 },
  //   ]
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: -1 },
  //     max: { x: 0, y: 1 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: -1 },
  //     { mask: '1', x: 0, y: -1 },
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: -1, y: 1 },
  //     { mask: '1', x: 0, y: 1 },
  //   ]
  // },
];

export function generateInitFigures(playerFigureMask) {
  return FIGURES.map((figure) => ({
    ...figure,
    id: Math.random(),
    blocks: figure.blocks.map((block) => ({
      ...block,
      mask: playerFigureMask,
    }))
  }));
}

export function rotate(figure) {
  const blocks = figure.blocks.map((block) => ({
    ...block,
    x: block.x * 0 - block.y * 1,
    y: block.x * 1 + block.y * 0,
  }));

  return {
    ...figure,
    blocks,
  };
}

export function flipX(figure) {
  const blocks = figure.blocks.map((block) => ({
    ...block,
    x: -1 * block.x,
  }));

  return {
    ...figure,
    blocks,
  };
}

export function flipY(figure) {
  const blocks = figure.blocks.map((block) => ({
    ...block,
    y: -1 * block.y,
  }));

  return {
    ...figure,
    blocks,
  };
}

export default null;
