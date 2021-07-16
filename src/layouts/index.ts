export interface LayoutSections {
  main: JSX.Element;
  [key: string]: JSX.Element | null;
}

export interface Layout {
  key: string;
  sections: LayoutSections;
}

export type LayoutFactory = (sections: LayoutSections) => Layout;

export const useLayout = (
  layout: LayoutFactory,
  sections: LayoutSections,
): Layout => layout(sections);

export {standardLayout} from './standardLayout';
