import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { sample } from './sample-resume';
// TODO figure out a better way to store my resume file and not commit it
// to this repo. Right now, I put my resume at ./re and just don't commit it.
// import { re } from './re';
import { Header } from './components/header';
import { Main } from './components/main';
import { Global } from '@emotion/core';
import { styles } from './globalStyles';
import { IResume } from '~lib';

const Switcher = () => {
  const [selected, select] = React.useState<IResume>(sample);
  return (
    <>
      <div className="no-print">
        {/* <button onClick={() => select(re)}>re</button> */}
        <button onClick={() => select(sample)}>sample</button>
      </div>
      <Global styles={styles} />
      <Header content={selected.header} />
      <Main contents={selected.main} />
    </>
  );
};

ReactDOM.render(<Switcher />, document.getElementById('body'));
