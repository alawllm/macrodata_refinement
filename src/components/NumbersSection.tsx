export const NumbersSection = () => {
    // change layout depending on the screen size
  const generateNumbers = (count = 180) =>
    Array.from({ length: count }, () => Math.floor(Math.random() * 9) + 1);

  const generateAnimationStyle = () => ({
    "--x1": `${Math.random() * 6 - 3}px`,
    "--y1": `${Math.random() * 6 - 3}px`,
    "--x2": `${Math.random() * 6 - 3}px`,
    "--y2": `${Math.random() * 6 - 3}px`,
    "--x3": `${Math.random() * 6 - 3}px`,
    "--y3": `${Math.random() * 6 - 3}px`,
    "--duration": `${Math.random() * 1.5 + 1}s`,
    "--delay": `${Math.random() * 1}s`,
  });

  const numbers = generateNumbers();

  return (
    <div className="grid grid-cols-20 gap-2 p-2 w-full">
      {numbers.map((num, index) => (
        <div
          key={index}
          className="flex items-center animate-slight-move justify-center p-4 w-full aspect-square text-xl font-bold transition-transform ease-in-out duration-[1s] hover:scale-200"
          style={generateAnimationStyle()}>
          {num}
        </div>
      ))}
    </div>
  );
};
