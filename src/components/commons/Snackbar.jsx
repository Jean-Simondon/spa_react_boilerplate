import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  ErrorOutline as ErrorOutlineIcon,
  Close as CloseIcon
} from '@material-ui/icons/';
import { CSSTransition } from "react-transition-group"
import { authActions } from '../../redux/authSlice'
import './css/snackbar.scss'

import { snackbarActions } from '../../redux/snackbarSlice'

const  Snackbar = () => {

  const dispatch = useDispatch()

  const [ msgsTimeouts, setMsgsTimeouts ] = useState()
  const { messages } = useSelector(state => state.snackbar.messages)

  // const [ messages, setMessages ] = useState()

  // useEffect(() => {
  //   const msgsIds = props.messages.map(msg => msg.id)
  //   const newMsgsTimeouts = oldState.msgsTimeouts.filter(msgId => msgsIds.includes(msgId))

  //   for (let msg of props.messages) {
  //     if (!oldState.msgsTimeouts.includes(msg.id)) {
  //       newMsgsTimeouts.push(msg.id)

  //       if (msg.severity !== 'error') {
  //         setTimeout(() => {
  //           dispatch(authActions.removeSnackMessage(msg.id))
  //         }, 10000)
  //       }
  //     }
  //   }

  //   // return {
  //   //   msgsTimeouts: newMsgsTimeouts
  //   // }
  // }, [msgsTimeouts]);


  useEffect(() => {
    
    if( !messages ) {
      return;
    }

    const msgsIds = messages.map(msg => msg.id)
    const newMsgsTimeouts = msgsTimeouts.filter(msgId => msgsIds.includes(msgId))

    for (let msg of messages) {
      if (!msgsTimeouts.includes(msg.id)) {
        let tempMsgTimeOuts = [ ... newMsgsTimeouts];
        tempMsgTimeOuts.push(msg.id); 
        setMsgsTimeouts(tempMsgTimeOuts);
        // newMsgsTimeouts.push(msg.id)
        if (msg.severity !== 'error') {
          setTimeout(() => {
            dispatch(snackbarActions.removeSnackMessage(msg.id))
          }, 10000)
        }
      }
    }

  }, [messages]);

  // const getDerivedStateFromProps = (props, oldState) => {

  //   const msgsIds = props.messages.map(msg => msg.id)
  //   const newMsgsTimeouts = oldState.msgsTimeouts.filter(msgId => msgsIds.includes(msgId))

  //   for (let msg of props.messages) {

  //     if (!oldState.msgsTimeouts.includes(msg.id)) {

  //       newMsgsTimeouts.push(msg.id)

  //       if (msg.severity !== 'error') {
  //         setTimeout(() => {
  //           dispatch(authActions.removeSnackMessage(msg.id))
  //         }, 10000)
  //       }

  //     }
  //   }

  //   return {
  //     msgsTimeouts: newMsgsTimeouts
  //   }

  // }

    return (
      <ul className="Snackbar">
        {messages && messages.map(msg => (
          <CSSTransition
            classNames="Snackbar-item"
            key={msg.id}
            in={true}
            appear={true}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
          >
            <li className={`Snackbar-item is-${msg.severity}`}>
              {msg.severity === 'success' && (<CheckCircleOutlineIcon/>)}
              {msg.severity === 'error' && (<ErrorOutlineIcon/>)}

              <span>{msg.content}</span>

              {msg.severity === 'error' && (
                <button className="Snackbar-itemClear" onClick={() => dispatch(snackbarActions.removeSnackMessage(msg.id)) }>
                  <CloseIcon/>
                </button>
              )}
            </li>
          </CSSTransition>
        ))}
      </ul>
    )

}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     ...ownProps,
//     messages: state.snackbarReducer.messages
//   }
// // }

// const mapDispatchToProps = dispatch => ({
//   removeSnackMessage: (msgId) => dispatch(snackmsgActions.removeSnackMessage(msgId))
// })

export default Snackbar

// export default connect(mapStateToProps, mapDispatchToProps)(Snackbar)
