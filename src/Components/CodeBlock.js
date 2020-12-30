import React from 'react';
import { connect } from 'react-redux';
import '../styles/CodeBlock.scss';

const CodeBlock = ({ buttonStyle }) => {
  const {
    height,
    width,
    backgroundColor,
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
    const text = props.text;
    return <div className='scssCode'>{text}</div>;
  };

  return (
    <div className='CodeBlock'>
      <div className='windowTitle'>CSS</div>
      <div className='codeContainer'>
        <NewlineText
          text={`button {
  height: ${height};
  width: ${width};
  background-color: ${backgroundColor};
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
