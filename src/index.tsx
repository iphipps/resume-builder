import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { resume } from './sample-resume';
import { re } from './re';
import { Header } from './components/header';
import { Main } from './components/main';
import { Global } from '@emotion/core';
import { styles } from './globalStyles';
import { IResume } from '~lib';

const Switcher = () => {
  const [selected, select] = React.useState<IResume>(re);
  console.log(re);
  return (
    <>
      <button className="no-print" onClick={() => select(re)}>hello</button>
      <Global styles={styles} />
      <Header content={selected.header} />
      <Main contents={selected.main} />
    </>
  );
};

ReactDOM.render(<Switcher />, document.getElementById('body'));
