import {Provider} from 'react-redux'
import store from './Store'
import RestaurantScreen from './Components/RestaurantScreen'

function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  )
}

export default App
