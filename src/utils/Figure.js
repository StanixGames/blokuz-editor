const FIGURES = [
  {"bn":"-1:-1;1:1","b":"0:-1;0:0;-1:1;0:1;1:1","c":"-1:-2;1:-2;-2:0;2:0;-2:2;2:2","s":"0:-2;-1:-1;1:-1;-1:0;1:0;-2:1;2:1;-1:2;0:2;1:2"},
  {"bn":"-1:0;1:0","b":"-1:0;0:0;1:0","c":"-2:-1;2:-1;-2:1;2:1","s":"-1:-1;0:-1;1:-1;-2:0;2:0;-1:1;0:1;1:1"},
  {"bn":"-1:-1;1:1","b":"0:-1;0:0;-1:1;0:1;1:1","c":"-1:-2;1:-2;-2:0;2:0;-2:2;2:2","s":"0:-2;-1:-1;1:-1;-1:0;1:0;-2:1;2:1;-1:2;0:2;1:2"},
  {"bn":"-1:0;1:0","b":"-1:0;0:0;1:0","c":"-2:-1;2:-1;-2:1;2:1","s":"-1:-1;0:-1;1:-1;-2:0;2:0;-1:1;0:1;1:1"},
  {"bn":"-1:-1;1:1","b":"0:-1;0:0;-1:1;0:1;1:1","c":"-1:-2;1:-2;-2:0;2:0;-2:2;2:2","s":"0:-2;-1:-1;1:-1;-1:0;1:0;-2:1;2:1;-1:2;0:2;1:2"},
  {"bn":"-1:0;1:0","b":"-1:0;0:0;1:0","c":"-2:-1;2:-1;-2:1;2:1","s":"-1:-1;0:-1;1:-1;-2:0;2:0;-1:1;0:1;1:1"},
  {"bn":"-1:-1;1:1","b":"0:-1;0:0;-1:1;0:1;1:1","c":"-1:-2;1:-2;-2:0;2:0;-2:2;2:2","s":"0:-2;-1:-1;1:-1;-1:0;1:0;-2:1;2:1;-1:2;0:2;1:2"},
  {"bn":"-1:0;1:0","b":"-1:0;0:0;1:0","c":"-2:-1;2:-1;-2:1;2:1","s":"-1:-1;0:-1;1:-1;-2:0;2:0;-1:1;0:1;1:1"},
];

function idGenerator() {
  let id = 0;
  return () => {
    id += 1;
    return id;
  }
}

const getNextId = idGenerator();

export function generateFigureFromMatrix(matrix, centerX, centerY) {
  const blocks = [];
  const chains = [];
  const spaces = [];
  const bounds = {
    min: {
      x: Number.POSITIVE_INFINITY,
      y: Number.POSITIVE_INFINITY,
    },
    max: {
      x: Number.NEGATIVE_INFINITY,
      y: Number.NEGATIVE_INFINITY,
    },
  };

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
        if (xx < bounds.min.x) {
          bounds.min.x = xx;
        }
        if (yy < bounds.min.y) {
          bounds.min.y = yy;
        }
        if (xx > bounds.max.x) {
          bounds.max.x = xx;
        }
        if (yy > bounds.max.y) {
          bounds.max.y = yy;
        }
      } else if (cell === '2') {
        chains.push({
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
    bn: `${bounds.min.x}:${bounds.min.y};${bounds.max.x}:${bounds.max.y}`,
    b: blocks.map(({ x, y }) => `${x}:${y}`).join(';'),
    c: chains.map(({ x, y }) => `${x}:${y}`).join(';'),
    s: spaces.map(({ x, y }) => `${x}:${y}`).join(';'),
  };
}

export function generateInitFigures(playerFigureMask) {
  const parseCoordinates = (str) => {
    return str.split(';').map((block) => {
      const b = block.split(':');
      return {
        x: parseInt(b[0]),
        y: parseInt(b[1]),
      };
    });
  };
  const parseBounds = (str) => {
    const blocks = str.split(';');
    const min = blocks[0].split(':');
    const max = blocks[1].split(':');

    return {
      min: {
        x: parseInt(min[0]),
        y: parseInt(min[1]),
      },
      max: {
        x: parseInt(max[0]),
        y: parseInt(max[1]),
      },
    }
  };

  return FIGURES.map((figure) => {
    const blocks = parseCoordinates(figure.b);
    const chains = parseCoordinates(figure.c);
    const spaces = parseCoordinates(figure.s);
    const bounds = parseBounds(figure.bn);

    return {
      id: getNextId(),
      mask: playerFigureMask,
      blocks,
      bounds,
      chains,
      spaces,
    };
  });
}

export function rotate(figure) {
  const rotateCoords = ({ x, y }) => {
    return { x: -y, y: x }
  };

  const blocks = figure.blocks.map((block) => ({
    ...block,
    ...rotateCoords(block)
  }));

  const bounds = {
    min: rotateCoords(figure.bounds.min),
    max: rotateCoords(figure.bounds.max),
  };

  const chains = figure.chains.map((chain) => rotateCoords(chain));
  const spaces = figure.spaces.map((space) => rotateCoords(space));

  return {
    ...figure,
    bounds,
    blocks,
    chains,
    spaces,
  };
}

export function flipX(figure) {
  const flipCoords = (coords) => coords.map((coord) => ({
    x: coord.x * -1,
    y: coord.y,
  }));

  return {
    ...figure,
    blocks: flipCoords(figure.blocks),
    chains: flipCoords(figure.chains),
    spaces: flipCoords(figure.spaces),
  };
}

export function flipY(figure) {
  const flipCoords = (coords) => coords.map((coord) => ({
    x: coord.x,
    y: coord.y * -1,
  }));

  return {
    ...figure,
    blocks: flipCoords(figure.blocks),
    chains: flipCoords(figure.chains),
    spaces: flipCoords(figure.spaces),
  };
}

export default null;
