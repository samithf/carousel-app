import React, { FC } from "react";
import styled from "styled-components";

interface StyledNavProps {
  disabled?: boolean;
}

const StyledNav = styled.button<StyledNavProps>`
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  font-size: 1.2em;
  padding: 1em;
  border: none;
  outline: none;
  cursor: pointer;
`;

interface NavProps {
  icon: string;
  disabled?: boolean;
  onClickNav: () => void;
}

export const Nav: FC<NavProps> = ({ icon, disabled, onClickNav }) => {
  return (
    <StyledNav disabled={disabled} onClick={onClickNav}>
      <i className={icon} />
    </StyledNav>
  );
};
