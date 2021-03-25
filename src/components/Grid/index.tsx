import React from "react";

export interface GridProps {
  /**
   * Columns per row
   */
  cols?: number;
  /**
   * Space between rows and colums
   */
  gap?: number;
  /**
   * Space around grid
   */
  pad?: number;
}

/**
 * Basic Grid component
 */
const Grid: React.FC<GridProps> = (props) => {
  const { cols = 3, gap = 10, pad } = props;
  const GridStyle = {
    display: `grid`,
    gap: `${gap}px`,
    padding: `${pad ? pad : 0}px`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };
  return <div style={GridStyle}>{props.children}</div>;
};

export default Grid;
