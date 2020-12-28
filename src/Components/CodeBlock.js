import React from 'react';
import '../styles/CodeBlock.scss';

const CodeBlock = () => {
  return (
    <div className='CodeBlock'>
      <h3>scss</h3>
      <div className='codeContainer'>
        <div className='scssCode'>
          {"<div className='codeContainer'></div>"}
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
