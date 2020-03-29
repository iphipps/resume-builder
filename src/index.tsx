import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { resume } from './sample-resume';
import { Header } from './components/header';
import { Main } from './components/main';

const { header, main } = resume;
ReactDOM.render(
  <div>
    <Header content={header} />
    <Main content={main} />
  </div>,
  document.getElementById('body')
);
