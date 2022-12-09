import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon/Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 24,
    fontSize: 16,
    iconSize: 16,
    borderStickness: 1,
  },
  large: {
    height: 36,
    fontSize: 18,
    iconSize: 24,
    borderStickness: 2,
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];
  return (
    <Wrapper
      style={{
        "--fontSize": styles.iconSize / 16 + "rem",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          "--iconSize": styles.iconSize + "px",
        }}
      >
        <Icon id={icon} size={styles.iconSize} strokeWidth={1} />
      </IconWrapper>
      <InputWrapper
        style={{
          "--height": styles.height + "px",
          "--borderStickness": styles.borderStickness + "px",
          "--width": width + "px",
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: fit-content;
  font-size: var(--fontSize);
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: var(--iconSize);
  margin: auto;
`;

const InputWrapper = styled.input`
  border: 0;
  border-bottom: var(--borderStickness) solid ${COLORS.black};
  font-weight: 700;
  font-size: inherit;
  padding-left: var(--height);
  color: ${COLORS.gray700};
  outline-offset: 2px;
  height: var(--height);
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
