import { compose, lifecycle, withState } from 'recompose'
import Main from './Main'

export default compose(
  withState('testStr', 'setTestStr', ''),
  lifecycle({
    componentDidMount () {
      const { firebase, setTestStr } = this.props
      const db = firebase.database()
      db.ref('/test').once('value', (snapshot) => {
        setTestStr(snapshot.val())
      })
    }
  })
)(Main);
