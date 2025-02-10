interface ComponentBarBelowProps {
  name: string;
}


export const ComponentBarBelow = ({ name }: ComponentBarBelowProps) => {
  return (
    <div className="bar-below-container m-2 border-2 border-solid px-2 w-full">
      <p>{name}</p>
    </div>
  );
};
