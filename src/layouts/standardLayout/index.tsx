import {Layout} from '../';

interface Sections {
  header?: JSX.Element | null;
  nav?: JSX.Element | null;
  main: JSX.Element;
  footer?: JSX.Element | null;
}

export const standardLayout = (sections: Sections): Layout => {
  return {
    key: 'default',
    sections: {
      header: sections.header || null,
      nav: sections.nav || null,
      main: sections.main,
      footer: sections.footer || null,
    },
  };
};
