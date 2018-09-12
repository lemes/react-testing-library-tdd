import ReactDOM from 'react-dom';

import {
  fireEvent,
  cleanup,
  waitForElement,
  render as testingRender
} from 'react-testing-library';

const div = document.createElement('div');
document.body.appendChild(div);

const render = ui => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  return {
    ...testingRender(ui, { container }),
    debug: () => {
      ReactDOM.render(ui, div);
    }
  };
};

const cleanDiv = () => {
  document.body.removeChild(div);
};

export { cleanDiv, fireEvent, cleanup, waitForElement, render };
