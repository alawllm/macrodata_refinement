import { ComponentBarBelow } from "./ComponentBarBelow";

const listComponents = ["first", "second", "third", "fourth", "fifth"];

// .bar-below {
//   display: flex;
//   align-items: center;
//   justify-items: center;
//   min-height: 5rem;
//   width: 100%;
//   margin: 1rem;
// }

export const BarBelow = () => {
  return (
    <div className="bar-below flex items-center justify-center w-full p-2 border-2 border-solid">
      {listComponents.map((name, index) => (
        <ComponentBarBelow key={index} name={name} />
      ))}
    </div>
  );
};
