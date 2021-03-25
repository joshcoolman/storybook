import React from "react";

export interface BoxProps {
  /**
   * Rounded corners?
   */
  rc?: boolean;
  /**
   * Flexbox center?
   */
  center?: boolean;
  /**
   * Background Color (default #333)
   */
  bg?: string;
  /**
   * Text Color (default white)
   */
  color?: string;
  /**
   * Margin (default 10)
   */
  m?: number | number[];
  /**
   * Padding (default 10)
   */
  p?: number | number[];
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * A Basic wrapper for content
 */
const Box: React.FC<BoxProps> = (props) => {
  const {
    rc = true,
    color = "#333",
    bg = "whitesmoke",
    p = 10,
    m = 10,
    center = false,
    ..._props
  } = props;

  const margin = getBoxProps(m, "margin");
  const padding = getBoxProps(p, "padding");
  const flexprops = !center
    ? {}
    : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };

  const styles = {
    background: bg,
    borderRadius: rc ? 5 : 0,
    color: color,
    ...padding,
    ...margin,
    ...flexprops,
  };
  return (
    <div style={{ ...styles }} {..._props}>
      {_props.children}
    </div>
  );
};

const getBoxProps = (val: number | number[], prop: string = "margin") => {
  if (!Array.isArray(val)) {
    return { [prop]: val };
  }

  if (Array.isArray(val)) {
    switch (val.length) {
      case 2:
        return {
          [`${prop}Top`]: val[0],
          [`${prop}Right`]: val[1],
          [`${prop}Bottom`]: val[0],
          [`${prop}Left`]: val[1],
        };
      case 3:
        return {
          [`${prop}Top`]: val[0],
          [`${prop}Right`]: val[1],
          [`${prop}Bottom`]: val[2],
          [`${prop}Left`]: 0,
        };
      case 4:
        return {
          [`${prop}Top`]: val[0],
          [`${prop}Right`]: val[1],
          [`${prop}Bottom`]: val[2],
          [`${prop}Left`]: val[3],
        };
      case 1:
        return { margin: val[0] };
    }
  }

  return {
    margin: 50,
  };
};

export default Box;
