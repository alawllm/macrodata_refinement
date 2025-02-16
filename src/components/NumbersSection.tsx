import { useEffect, useState } from "react";

export const NumbersSection = () => {
  const [grid, setGrid] = useState({ cols: 0, rows: 0, count: 0 });
  const [numbers, setNumbers] = useState<number[]>([]);
  const size = 50;

  const calculateGrid = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const barHeight = 100;
    const cols = Math.floor((vw / size)-2);
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

  useEffect(() => {
    updateGrid(); // Initial grid setup
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

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
          className="flex items-center justify-center text-2xl font-bold border border-gray-300">
          {num}
        </div>
      ))}
    </div>
  );
};
