import { useParams } from 'react-router-dom'

export default function withRouterParams(Component) {
  return function WrappedComponent(props) {
    const routerParams = useParams()
    return <Component {...props} {...routerParams}/>
  }
}