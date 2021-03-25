import React, { useState } from "react";
import "./App.css";
import Block from "./components/Block";
import Box from "./components/Box";

function App() {
  const [active, setActive] = useState<string | undefined>("FooManChoo");

  return (
    <div>
      <Grid cols={4} gap={5} pad={20}>
        <Box {...bx.primary}>
          <h1>Boom!</h1>
        </Box>
        <Box {...bx.secondary}>
          <h1>Boom!</h1>
        </Box>
        <Box {...bx.accent}>
          <h1>Boom!</h1>
        </Box>
        <Box {...bx.default}>
          <h1>Boom!</h1>
        </Box>
      </Grid>

      <Block name={active} setName={setActive}></Block>
      <div className="grid">
        <div className="bg-green">green</div>
        <div className="bg-yellow">yellow</div>
        <div className="bg-red">red</div>
        <div className="bg-purple">purple</div>
        <div className="bg-blue">blue</div>
        <div className="bg-mint">mint</div>
        <div className="bg-cyan">cyan</div>
        <div className="bg-aqua">aqua</div>
      </div>
    </div>
  );
}

export default App;

interface GridProps {
  cols?: number;
  gap?: number;
  pad?: number;
}

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

const bx_base = {
  m: 0,
  p: 20,
  bg: "#333",
  color: "white",
  center: true,
};
const bx = {
  default: {
    ...bx_base,
    bg: "#08364A",
    color: "#ccc",
  },
  primary: {
    ...bx_base,
    bg: "#4F2173",
    color: "tomato",
  },
  secondary: {
    ...bx_base,
    bg: "tomato",
    color: "#FFF1B4",
  },
  accent: {
    ...bx_base,
    bg: "#F7FFBD",
    color: "#FF285F",
  },
};
