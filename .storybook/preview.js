
import { addDecorator } from '@storybook/react';
import { BrowserRouter as Router } from "react-router-dom";

import '../src/styles/index.scss';

addDecorator(story => <Router>{story()}</Router>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}