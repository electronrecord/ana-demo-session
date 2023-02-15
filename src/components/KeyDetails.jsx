import {useDispatch, useSelector} from "react-redux"
import {StatusSelector, BaseInput, BaseCopyToClipboard, BaseDatePicker } from "./index"
import { SET_DATA_VALUE } from "../store/modules/collection"
import './css/key-details.scss'

export const KeyDetails = function () {
  const { id, title, locale } = useSelector((state) => state.collection.data)
  const dispatch = useDispatch();

  function handleInput (payload) {
    dispatch(SET_DATA_VALUE(payload))
  }

  return (
    <div className="key-details collection-component">
      <header className='flex flex-between align-center'>
        <h2>KeyDetails</h2>

        <StatusSelector />
      </header>

      <BaseInput name='title'
                 label='Collection title'
                 value={title}
                 onChange={handleInput} />
      <span className='block mb16 mt8'>Locale: {locale}</span>

      <div className='flex'>
        <div>
          <BaseInput name='id'
                     label='Unique ID'
                     value={id}
                     disabled />
          <BaseCopyToClipboard />
        </div>
        <BaseDatePicker />
      </div>
    </div>
  )
}
