import { useEffect, useState } from "react";

export const NumbersSection = () => {
  const [grid, setGrid] = useState({ cols: 0, rows: 0, count: 0 });
  const [numbers, setNumbers] = useState<number[]>([]);
  //const [scaledIndices, setScaledIndices] = useState<Set<number>>(new Set());
  const [scaledNums, setScaledNums] = useState<number[]>([]);
  const size = 60;

  const calculateGrid = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const barHeight = 100;
    const cols = Math.floor(vw / size - 1);
    const rows = Math.floor((vh - barHeight) / size);
    return { cols, rows, count: cols * rows };
  };

  const generateNumbers = (count: number) =>
    Array.from({ length: count }, () => Math.floor(Math.random() * 9) + 1);

  const updateGrid = () => {
    const newGrid = calculateGrid();
    setGrid(newGrid);
    setNumbers(generateNumbers(newGrid.count));
  };

  const findGroup = () => {
    const width = Math.floor(Math.random() * 5) + 1;
    const height = Math.floor(Math.random() * 3) + 1;
    const { cols, rows } = grid;

    const maxStartCol = cols - width;
    const maxStartRow = rows - height;
    if (maxStartCol < 0 || maxStartRow < 0) return;

    const startCol = Math.floor(Math.random() * (maxStartCol + 1));
    const startRow = Math.floor(Math.random() * (maxStartRow + 1));

    const indexes = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const index = (startRow + i) * cols + (startCol + j);
        indexes.push(index);
      }
    }

    return indexes;
  };

  //   const randomizeScaling = () => {
  //     const numToScale = Math.floor(Math.random() * 3) + 1;
  //     const newScaledIndices = new Set<number>();

  //     for (let i = 0; i < numToScale; i++) {
  //       const randomIndex = Math.floor(Math.random() * numbers.length);
  //       newScaledIndices.add(randomIndex);
  //     }

  //    //setScaledIndices(newScaledIndices);
  //   };

  useEffect(() => {
    updateGrid();
    const group = findGroup();
    setScaledNums(group || []);
    window.addEventListener("resize", updateGrid);

    return () => {
      window.removeEventListener("resize", updateGrid);
    };
  }, [numbers.length]);

  return (
    <div
      className="grid w-full mx-auto"
      style={{
        gridTemplateColumns: `repeat(${grid.cols}, ${size}px)`,
        gridTemplateRows: `repeat(${grid.rows}, ${size}px)`,
        justifyContent: "center",
        alignContent: "center",
      }}>
      {numbers.map((num, index) => (
        <div
          key={index}
          className={`flex items-center justify-center text-2xl font-bold animate-slight-move transition-transform duration-500 ${
            scaledNums.includes(index) ? "scale-175" : ""
          }`}>
          {num}
        </div>
      ))}
    </div>
  );
};
