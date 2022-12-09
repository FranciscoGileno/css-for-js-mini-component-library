import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalWrapper>
        {displayedValue}
        <IconWrapper id="chevron-down" strokeWidth={1} size={24} />
      </PresentationalWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const PresentationalWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: 0;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const IconWrapper = styled(Icon)`
  margin-left: 8px;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:hover + div {
    color: ${COLORS.black};
  }

  &:focus + div {
    outline: 2px solid ${COLORS.primary};
  }
`;

export default Select;
