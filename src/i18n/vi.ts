import _ from 'lodash'
import en from './en'

const defaultTranslate = en
const VITranslate = _.merge(defaultTranslate, {
  screen: {
    splash: {
      content: 'xin chào'
    },
    home: {
      something: ''
    }
  }
})
export default VITranslate
