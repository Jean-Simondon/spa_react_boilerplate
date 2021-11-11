import { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
    return (
        <div>
            <h1>Here is an Modal Overlay</h1>
        </div>
    )
}

const ErrorModal = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('modal-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    )

}

export default ErrorModal