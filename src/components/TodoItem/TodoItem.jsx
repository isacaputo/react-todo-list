import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { RemoveButton } from "./RemoveButton";
import { isFunction } from "../../utils";
import {
  Root,
  CheckBoxContainerStyled,
  LabelStyled,
  InputStyled,
  CheckboxStyled,
} from "./TodoItem.styles";
import { useTodo } from "../../providers/Todo";

export const TodoItem = ({ label, value, id, onToggle, onRemove, ...rest }) => {
  const [showInlineEdit, setShowInlineEdit] = useState(false);
  const itemRef = useRef();
  const inputRef = useRef();
  const { update } = useTodo();

  const handleAccessibility = (event) => {
    if (event.key === "Backspace") {
      isFunction(onRemove) && onRemove(event);
    }
  };

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter") {
      const { value } = event.target;
      update(value, id);
      setShowInlineEdit(false);
    }

    if (event.key === "Escape") {
      setShowInlineEdit(false);
    }
  };

  const handleFocusOut = (event) => {
    console.log(event);
    setShowInlineEdit(false);
  };

  const handleLabelClick = (event) => {
    setShowInlineEdit(true);
  };

  useEffect(() => {
    if (showInlineEdit) {
      inputRef.current.focus();
    }
  }, [showInlineEdit]);

  return (
    <Root $done={value} ref={itemRef} role="listitem" tabIndex="-1" {...rest}>
      <CheckBoxContainerStyled>
        <CheckboxStyled
          aria-label={label}
          checked={value}
          onChange={onToggle}
          onKeyDown={handleAccessibility}
        />
        {!showInlineEdit && (
          <LabelStyled onClick={handleLabelClick}>{label}</LabelStyled>
        )}
        {showInlineEdit && (
          <InputStyled
            ref={inputRef}
            onBlur={handleFocusOut}
            defaultValue={label}
            type="text"
            onKeyDown={(event) => handleKeyDown(event, id)}
          />
        )}
      </CheckBoxContainerStyled>
      <RemoveButton onClick={onRemove} label={label} />
    </Root>
  );
};

TodoItem.defaultProps = {
  onToggle: () => {},
};

TodoItem.propTypes = {
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
