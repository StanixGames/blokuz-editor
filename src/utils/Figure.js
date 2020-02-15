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
        ],
      }
    ],
    spaces: [
      {
        block: 0,
        vectors: [
          { x: 0, y: -1 },
          { x: 0, y: 1 },
          { x: -1, y: 0 },
          { x: 1, y: 0 },
        ],
      },
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
    spaces: [
      {
        block: 0,
        vectors: [
          { x: 0, y: -1 },
          { x: 0, y: 1 },
          { x: -1, y: 0 },
        ],
      },
      {
        block: 1,
        vectors: [
          { x: 0, y: -1 },
          { x: 0, y: 1 },
          { x: 1, y: 0 },
        ],
      },
    ],
  },
  {
    bounds: {
      min: { x: -1, y: 0 },
      max: { x: 1, y: 0 },
    },
    blocks: [
      { mask: '1', x: -1, y: 0 },
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
        block: 2,
        vectors: [
          { x: 1, y: -1 },
          { x: 1, y: 1 },
        ]
      },
    ],
    spaces: [
      {
        block: 0,
        vectors: [
          { x: 0, y: -1 },
          { x: 0, y: 1 },
          { x: -1, y: 0 },
        ],
      },
      {
        block: 1,
        vectors: [
          { x: 0, y: -1 },
          { x: 0, y: 1 },
        ],
      },
      {
        block: 2,
        vectors: [
          { x: 0, y: -1 },
          { x: 0, y: 1 },
          { x: 1, y: 0 },
        ],
      },
    ],
  },
  {
    bounds: {
      min: { x: 0, y: 0 },
      max: { x: 1, y: 1 },
    },
    blocks: [
      { mask: '1', x: 0, y: 0 },
      { mask: '1', x: 1, y: 0 },
      { mask: '1', x: 1, y: 1 },
      { mask: '1', x: 0, y: 1 },
    ],
    edges: [ 0, 1, 2, 3 ],
    edges: [],
    spaces: [],
  },
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

  const bounds = {
    min: { x: Number.POSITIVE_INFINITY, y: Number.POSITIVE_INFINITY },
    max: { x: Number.NEGATIVE_INFINITY, y: Number.NEGATIVE_INFINITY },
  }
  blocks.forEach((block) => {
    if (block.x < bounds.min.x && block.y < bounds.min.y) {
      bounds.min.x = block.x;
      bounds.min.y = block.y;
    }
    if (block.x > bounds.max.x && block.y > bounds.max.y) {
      bounds.max.x = block.x;
      bounds.max.y = block.y;
    }
  });

  const edges = figure.edges.map((edge) => {
    return {
      block: edge.block,
      vectors: edge.vectors.map((vector) => {
        return {
          x: vector.x * 0 - vector.y * 1,
          y: vector.x * 1 - vector.y * 0,
        };
      }),
    };
  });

  const spaces = figure.spaces.map((space) => {
    return {
      block: space.block,
      vectors: space.vectors.map((vector) => {
        return {
          x: vector.x * 0 - vector.y * 1,
          y: vector.x * 1 - vector.y * 0,
        };
      }),
    };
  })

  return {
    ...figure,
    bounds,
    blocks,
    edges,
    spaces,
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
