const FIGURES = [
  {
    b: "0:-1;1:-1;2:-1",
    e: "-1:-2;3:-2;-1:0;3:0",
    s: "0:-2;1:-2;2:-2;-1:-1;3:-1;0:0;1:0;2:0"
  },
  {
    b: "-3:-2;-2:-2;-1:-2;-3:-1;-1:-1;-4:0;-3:0;-1:0;0:0",
    e: "",
    s: "",
  },
  // {
  //   bounds: {
  //     min: { x: 0, y: 0 },
  //     max: { x: 0, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: 0, y: 0 }
  //   ],
  //   edges: [
  //     {
  //       block: 0,
  //       vectors: [
  //         { x: -1, y: -1 },
  //         { x: 1, y: -1 },
  //         { x: -1, y: 1 },
  //         { x: 1, y: 1 },
  //       ],
  //     }
  //   ],
  //   spaces: [
  //     {
  //       block: 0,
  //       vectors: [
  //         { x: 0, y: -1 },
  //         { x: 0, y: 1 },
  //         { x: -1, y: 0 },
  //         { x: 1, y: 0 },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   bounds: {
  //     min: { x: 0, y: 0 },
  //     max: { x: 1, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //   ],
  //   edges: [
  //     {
  //       block: 0,
  //       vectors: [
  //         { x: -1, y: -1 },
  //         { x: -1, y: 1 },
  //       ]
  //     },
  //     {
  //       block: 1,
  //       vectors: [
  //         { x: 1, y: -1 },
  //         { x: 1, y: 1 },
  //       ]
  //     }
  //   ],
  //   spaces: [
  //     {
  //       block: 0,
  //       vectors: [
  //         { x: 0, y: -1 },
  //         { x: 0, y: 1 },
  //         { x: -1, y: 0 },
  //       ],
  //     },
  //     {
  //       block: 1,
  //       vectors: [
  //         { x: 0, y: -1 },
  //         { x: 0, y: 1 },
  //         { x: 1, y: 0 },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   bounds: {
  //     min: { x: -1, y: 0 },
  //     max: { x: 1, y: 0 },
  //   },
  //   blocks: [
  //     { mask: '1', x: -1, y: 0 },
  //     { mask: '1', x: 0, y: 0 },
  //     { mask: '1', x: 1, y: 0 },
  //   ],
  //   edges: [
  //     {
  //       block: 0,
  //       vectors: [
  //         { x: -1, y: -1 },
  //         { x: -1, y: 1 },
  //       ]
  //     },
  //     {
  //       block: 2,
  //       vectors: [
  //         { x: 1, y: -1 },
  //         { x: 1, y: 1 },
  //       ]
  //     },
  //   ],
  //   spaces: [
  //     {
  //       block: 0,
  //       vectors: [
  //         { x: 0, y: -1 },
  //         { x: 0, y: 1 },
  //         { x: -1, y: 0 },
  //       ],
  //     },
  //     {
  //       block: 1,
  //       vectors: [
  //         { x: 0, y: -1 },
  //         { x: 0, y: 1 },
  //       ],
  //     },
  //     {
  //       block: 2,
  //       vectors: [
  //         { x: 0, y: -1 },
  //         { x: 0, y: 1 },
  //         { x: 1, y: 0 },
  //       ],
  //     },
  //   ],
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
  //   edges: [],
  //   spaces: [],
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

export function generateFigureFromMatrix(matrix, centerX, centerY) {
  const blocks = [];
  const edges = [];
  const spaces = [];

  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[0].length; x += 1) {
      const cell = matrix[x][y];
      const xx = x - centerX;
      const yy = y - centerY;

      if (cell === '1') {
        blocks.push({
          x: xx,
          y: yy,
        });
      } else if (cell === '2') {
        edges.push({
          x: xx,
          y: yy,
        });
      } else if (cell === '3') {
        spaces.push({
          x: xx,
          y: yy,
        })
      }
    }    
  }

  return {
    b: blocks.map(({ x, y }) => `${x}:${y}`).join(';'),
    e: edges.map(({ x, y }) => `${x}:${y}`).join(';'),
    s: spaces.map(({ x, y }) => `${x}:${y}`).join(';'),
  };
}

export function generateInitFigures(playerFigureMask) {
  return FIGURES.map((figure) => {
    const blocks = figure.b.split(';').map((block) => {
      const b = block.split(':');
      return {
        x: parseInt(b[0]),
        y: parseInt(b[1]),
        mask: playerFigureMask,
      };
    });
    return {
      id: Math.random(),
      blocks,
      bounds: {
        min: {
          x: -2,
          y: -2,
        },
        max: {
          x: 2,
          y: 2,
        },
      },
      edges: [],
      spaces: [],
    };
  });
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
