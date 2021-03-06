import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../../../assets/css/widgets.css';
import formUtil from '../../features/form/util';

const formatId = (display) => display && display.toLowerCase().replace(/\s/g,'_');

const buttonStyle = {
  whiteSpace: "normal"
};

const ButtonGroup = ({
  displayValue,
  input,
  mode,
  options
}) => {

  const edit = (
    <ToggleButtonGroup type="checkbox" justified={true} {...input} onChange={() => {}}>
      {options.map((option) => {
        const displayId = formatId(option.display);
        return (
          <ToggleButton
            id={displayId}
            key={option.uuid}
            onChange={event => {
              if (input.value === option.uuid) {
                input.onChange('');
              } else {
                input.onChange(option.uuid);
              }
            }}
            style={buttonStyle}
            value={option.uuid}
          >
            {option.name || option.display}
          </ToggleButton>
        );
      }
      )}
    </ToggleButtonGroup>
  );
  
  const view = (
    <span
      className="button-group-view"
      style={{}}
    >
      {formUtil.conceptAnswerDisplay(displayValue, options)}
    </span>
  );
  
  return (
    <div>
      {!mode || mode === 'edit' ? edit : view}
    </div>
  );

};

export default ButtonGroup;
