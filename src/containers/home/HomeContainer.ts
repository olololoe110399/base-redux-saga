import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { onDecrementAction, onIncrementAction } from 'redux/actions/HomeAction'
import HomeScreen from 'screens/main/home/HomeScreen'
import { homeSelector } from 'selectors/HomeSelector'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onIncrement: () => dispatch(onIncrementAction()),
    onDecrement: () => dispatch(onDecrementAction())
  }
}

export default connect(homeSelector, mapDispatchToProps)(HomeScreen)
