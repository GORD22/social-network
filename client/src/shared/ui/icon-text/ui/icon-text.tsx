import React from "react";
import type Icon from '@ant-design/icons';

interface IconTextProps {
  icon: typeof Icon;
  text: React.ReactNode;
}

export const IconText = (props: IconTextProps) => {
  const { icon, text } = props;
  return (
    <>
      {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
      {text}
    </>
  );
};
