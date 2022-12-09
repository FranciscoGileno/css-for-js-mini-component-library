import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const styles = {
  small: {
    height: 8,
    borderRadius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    borderRadius: 4,
    padding: 0,
  },
  large: {
    height: 24,
    borderRadius: 8,
    padding: 4,
  },
};
const ProgressBar = ({ value, size }) => {
  const style = styles[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      style={{
        "--height": style.height + "px",
        "--borderRadius": style.borderRadius + "px",
        "--padding": style.padding + "px",
      }}
    >
      <BarWrapper
        style={{
          "--borderRadius": style.borderRadius + "px",
        }}
      >
        <Bar
          style={{
            "--width": value + "%",
            "--borderRadius": style.borderRadius + "px",
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: var(--width);
  border-radius: 4px 0 0 4px;
`;

const BarWrapper = styled.div`
  border-radius: var(--borderRadius);
  overflow: hidden;
  height: 100%;
`;

export default ProgressBar;
