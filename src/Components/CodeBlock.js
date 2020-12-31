import React from 'react';
import { connect } from 'react-redux';
import '../styles/CodeBlock.scss';

const CodeBlock = ({ buttonStyle }) => {
  const {
    height,
    width,
    backgroundColor,
    color,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    fontSize,
  } = buttonStyle;

  const NewlineText = (props) => {
    const { text, className } = props;
    return <div className={`CSSCode ${className}`}>{text}</div>;
  };

  return (
    <div className='CodeBlock'>
      <div className='windowTitle'>CSS</div>
      <div className='codeContainer'>
        {/* <div className='CSSCode'>
          {ObjectCode({ type: 'name', value: 'button' })}
          <div>
            <span className='name'>button </span>
          </div>
          <div>
            <span className='key'> height</span>
            <span className='punct'>: </span>
            <span className='valueNumber'>{height}</span>
            <span className='punct'>;</span>
          </div>
          <div>
            <span className='key'> width</span>
            <span className='punct'>: </span>
            <span className='valueNumber'>{width}</span>
            <span className='punct'>;</span>
          </div>
        </div> */}
        <NewlineText
          text={`button {
  height: ${height};
  width: ${width};
  background-color: ${backgroundColor};
  color: ${color};
  border-radius: ${borderTopLeftRadius} ${borderTopRightRadius} ${borderBottomLeftRadius} ${borderBottomRightRadius};
  margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft};
  padding: ${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft};
  font-size: ${fontSize};
}`}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
});

export default connect(mapStateToProps, null)(CodeBlock);
