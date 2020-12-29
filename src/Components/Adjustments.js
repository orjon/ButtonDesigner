import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import { connect } from 'react-redux';
import useToggle from '../helpers/useToggle';
import { ChromePicker } from 'react-color';
import RangeSlider from './RangeSlider';
import IconSwitch from './IconSwitch';
import TextField from './TextField';
import {
  setHeight,
  setWidth,
  setBackgroundColor,
  setBorderRadius,
  setBorderRadiusTopLeft,
  setBorderRadiusTopRight,
  setBorderRadiusBottomRight,
  setBorderRadiusBottomLeft,
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
  setPadding,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
  setFontSize,
} from '../actions/buttonStyle';
import { setText } from '../actions/buttonText';
import '../styles/Adjustments.scss';

const Adjustments = ({
  buttonStyle,
  buttonText,
  setHeight,
  setWidth,
  setBackgroundColor,
  setBorderRadius,
  setBorderRadiusTopLeft,
  setBorderRadiusTopRight,
  setBorderRadiusBottomRight,
  setBorderRadiusBottomLeft,
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
  setPadding,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
  setFontSize,
  setText,
}) => {
  const { backgroundColor } = buttonStyle;
  const { text } = buttonText;

  const [lockCorners, toggleLockCorners] = useToggle(true);
  // const [seeMargin, toggleSeeMargin] = useToggle(false);
  // const [seePadding, toggleSeePadding] = useToggle(false);
  const [lockMargins, toggleLockMargins] = useToggle(true);
  const [lockPadding, toggleLockPadding] = useToggle(true);

  const handleButtonTextChange = (e) => {
    setText(e.target.value);
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color.hex);
  };

  // class Component extends React.Component {
  //   state = {
  //     background: '#fff',
  //   };

  //   handleChangeComplete = (color) => {
  //     this.setState({ background: color.hex });
  //   };

  //   render() {
  //     return (
  //       <SketchPicker
  //         color={this.state.background}
  //         onChangeComplete={this.handleChangeComplete}
  //       />
  //     );
  //   }
  // }

  return (
    <div className='Adjustments'>
      <div className='windowTitle'>Adjustments</div>
      <Accordion atomic={false}>
        <AccordionItem title='Size'>
          <section className='adjustSection adjustSize'>
            <RangeSlider
              field='height'
              changeHandler={setHeight}
              label='Height'
              percentageOption={false}
              initial={30}
              min={1}
              max={200}
            />
            <RangeSlider
              field='width'
              changeHandler={setWidth}
              label='Width'
              percentageOption={false}
              initial={100}
              min={1}
              max={500}
            />
          </section>
        </AccordionItem>
        <AccordionItem title='Color'>
          <section className='adjustSection adjustSize'>
            <ChromePicker
              color={backgroundColor}
              onChangeComplete={handleBackgroundColorChange}
            />
          </section>
        </AccordionItem>
        <AccordionItem title='Corners'>
          <section className='adjustSection adjustSize'>
            <IconSwitch
              icon='link'
              value={lockCorners}
              valueChange={toggleLockCorners}
              textTrue='Linked corners'
              textFalse='Unlinked corners'
            />
            {lockCorners ? (
              <RangeSlider
                field='borderRadius'
                changeHandler={setBorderRadius}
                label='Corner radii'
                percentageOption={true}
                initial={50}
                min={0}
                max={500}
              />
            ) : (
              <Fragment>
                <RangeSlider
                  field='borderRadiusTopLeft'
                  changeHandler={setBorderRadiusTopLeft}
                  label='Top-left'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
                <RangeSlider
                  field='borderRadiusTopRight'
                  changeHandler={setBorderRadiusTopRight}
                  label='Top-right'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
                <RangeSlider
                  field='borderRadiusBottomRight'
                  changeHandler={setBorderRadiusBottomRight}
                  label='Bottom-right'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
                <RangeSlider
                  field='borderRadiusBottomLeft'
                  changeHandler={setBorderRadiusBottomLeft}
                  label='Bottom-left'
                  percentageOption={true}
                  initial={50}
                  min={0}
                  max={500}
                />
              </Fragment>
            )}
          </section>
        </AccordionItem>
        <AccordionItem title='Text'>
          <section className='adjustSection adjustSize'>
            <TextField
              fieldName='buttonText'
              fieldText='Text'
              value={text}
              placeHolder='Button Text'
              handleTextFieldChange={handleButtonTextChange}
            />
            <RangeSlider
              field='textSize'
              changeHandler={setFontSize}
              label='Text size'
              initial={30}
              min={1}
              max={50}
            />
          </section>
        </AccordionItem>
        <AccordionItem title='Margin'>
          <section className='adjustSection adjustSize'>
            {/* <IconSwitch
              icon='visibility'
              value={seeMargin}
              valueChange={toggleSeeMargin}
              textTrue='Visible'
              textFalse='Not visible'
            /> */}
            <IconSwitch
              icon='link'
              value={lockMargins}
              valueChange={toggleLockMargins}
              textTrue='Margins linked'
              textFalse='Margins unlinked'
            />
            {lockMargins ? (
              <RangeSlider
                field='margin'
                changeHandler={setMargin}
                label='Margins'
                initial={50}
                min={0}
                max={500}
              />
            ) : (
              <Fragment>
                <RangeSlider
                  field='marginTop'
                  changeHandler={setMarginTop}
                  label='Top'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='marginRight'
                  changeHandler={setMarginRight}
                  label='Right'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='marginBottom'
                  changeHandler={setMarginBottom}
                  label='Bottom'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='marginLeft'
                  changeHandler={setMarginLeft}
                  label='Left'
                  initial={0}
                  min={0}
                  max={50}
                />
              </Fragment>
            )}
          </section>
        </AccordionItem>
        <AccordionItem title='Padding'>
          <section className='adjustSection adjustSize'>
            {/* <IconSwitch
              icon='visibility'
              value={seePadding}
              valueChange={toggleSeePadding}
              textTrue='Visible'
              textFalse='Not visible'
            /> */}
            <IconSwitch
              icon='link'
              value={lockPadding}
              valueChange={toggleLockPadding}
              textTrue='Padding linked'
              textFalse='Padding unlinked'
            />
            {lockPadding ? (
              <RangeSlider
                field='padding'
                changeHandler={setPadding}
                label='Padding'
                initial={50}
                min={0}
                max={500}
              />
            ) : (
              <Fragment>
                <RangeSlider
                  field='paddingTop'
                  changeHandler={setPaddingTop}
                  label='Top'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='paddingRight'
                  changeHandler={setPaddingRight}
                  label='Right'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='paddingBottom'
                  changeHandler={setPaddingBottom}
                  label='Bottom'
                  initial={0}
                  min={0}
                  max={50}
                />
                <RangeSlider
                  field='paddingLeft'
                  changeHandler={setPaddingLeft}
                  label='Left'
                  initial={0}
                  min={0}
                  max={50}
                />
              </Fragment>
            )}
          </section>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const mapStateToProps = (state) => ({
  buttonStyle: state.buttonStyle,
  buttonText: state.buttonText,
});

export default connect(mapStateToProps, {
  setHeight,
  setWidth,
  setBackgroundColor,
  setBorderRadius,
  setBorderRadiusTopLeft,
  setBorderRadiusTopRight,
  setBorderRadiusBottomRight,
  setBorderRadiusBottomLeft,
  setMargin,
  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,
  setPadding,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
  setFontSize,
  setText,
})(Adjustments);
