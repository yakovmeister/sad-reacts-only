import React from 'react'

const noop = function noop() {}

const TextField = function TextField(props) {

  const p_inputGroup = {
    className: `pt-input-group ${props.className}`
  }

  const p_inputIcon = {
    className: `pt-icon ${props.icon}`
  }

  const p_input = {
    className: `pt-input ${props.inputClass}`,
    type: props.type,
    value: props.value,
    disabled: props.disabled,
    placeholder: props.placeholder,
    onChange: props.onChange
  }

  return (
    <div { ...p_inputGroup }>
      <span { ...p_inputIcon}></span>
      <input { ...p_input } />
    </div>
  )
}

TextField.defaultProps = {
  disabled: false,
  onChange: noop,
  type: 'text'
}

export default TextField