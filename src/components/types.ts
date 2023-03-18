import { Component, ComponentProps, JSX, ParentProps } from "solid-js";

export type DOMElements = keyof JSX.IntrinsicElements;

export type ElementType<Props = any> = DOMElements | Component<Props>;

export interface AsProp<C extends ElementType> {
  as?: C;
}