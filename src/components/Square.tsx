import React from "react";
interface SqureProps {
  value: string;
  index: number;
  handleClickOnSqure: (index: number) => void;
}
const Square: React.FC<SqureProps> = ({ value, index, handleClickOnSqure }) => {
  return (
    <div
      className="square"
      onClick={() => {
        handleClickOnSqure(index);
      }}
    >
      {value}
    </div>
  );
};

export default Square;
