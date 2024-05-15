import React from "react";
import "./SkeletonLoader.css";
interface SkeletonLoaderProps {
  Rows: number;
  RowsWidth: number[];
  Avatar: boolean;
}
export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  Rows,
  RowsWidth,
  Avatar,
}) => {
  const arr = Array(Rows).fill(0);

  return (
    <div className="SkeletonLoader">
      {Avatar && <div className="skeleton skeleton-avatar"></div>}
      {arr.map((item, index) => {
        return (
          <div
            className="skeleton row"
            style={{ width: RowsWidth[index] + "%" }}
          ></div>
        );
      })}

      <div></div>
    </div>
  );
};
