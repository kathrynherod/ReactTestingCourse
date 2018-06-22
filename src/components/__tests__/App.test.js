import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('App Component', () => {
  it('shows the comment box', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain('Comment Box');
    //this clears the element(s) rendered to free up testing memory
    ReactDOM.unmountComponentAtNode(div);
  });
});
