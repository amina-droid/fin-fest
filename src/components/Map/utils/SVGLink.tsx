/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck
import React from "react";
import { LinkProps, useHistory } from "react-router-dom";

type Props = LinkProps & {
  className?: string;
};

const SVGLink: React.FC<Props> = ({ children, to, className, onClick }) => {
  const history = useHistory();

  const handlerClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    history.push(to);
  };
  return (
    <a xlinkHref={to} className={className} onClick={handlerClick}>
      {children}
    </a>
  );
};

export default SVGLink;
