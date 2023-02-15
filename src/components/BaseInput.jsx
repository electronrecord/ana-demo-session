import './css/base-input.scss'

export const BaseInput = function ({name, id, label, value, disabled, textarea, placeholder, onChange}) {
  function handleChange (value) {
    onChange({key: name, value})
  }

  return (
    <label htmlFor={id || name}
           className='base-input'>
      <span className='block mb8'>{label}</span>
      {
        !textarea && <input type="text"
                            disabled={disabled}
                           id={id || name}
                           value={value}
                           onChange={ev => handleChange(ev.target.value)}
                           placeholder={placeholder} />
      }
      {
        textarea && <textarea id={id || name}
                              disabled={disabled}
                              value={value}
                              onChange={ev => handleChange(ev.target.value)}
                              placeholder={placeholder} />
      }
    </label>
  )
}
