import { CSSProperties, ReactNode } from "react";

export type TypeLink = {
  label: string;
  href: string;
  iconSrc?: string | ReactNode;
  rightIconSrc?: string | ReactNode;
  isOnlyForPaymentSystemUser?: boolean;
  style?: CSSProperties
  onClick?: () => void
};
