import { clsx, type ClassValue } from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface IWorkSliderBtns {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
}

export interface IWorkSliderBtns {
  value: number;
}

export interface IPageTransition {
  children: ReactNode;
}

export interface IThemeContextProvider {
  children: ReactNode;
}

export interface ISocial {
  containerStyles: string;
  iconStyles: string;
}

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};
