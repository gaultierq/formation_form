// name
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { hydateForm } from './store/action'

export const Step0 = () => {
  const email = useSelector(state => _.get(state, 'currentForm.email'))
  let dispatch = useDispatch()

  return (
    <div>
      <span>Step0: email</span>
      <input
        value={email}
        onChange={event => {
          dispatch(hydateForm({email: event.target.value}))
        }}/>
    </div>
  )
}

export const Step1 = () => {
  const name = useSelector(state => _.get(state, 'currentForm.name'))
  let dispatch = useDispatch()

  return (
    <div>
      <span>Step1: name</span>
      <input
        value={name}
        onChange={event => {
          dispatch(hydateForm({name: event.target.value}))
        }}/>
    </div>
  )
}

export const Step2 = () => {
  const address = useSelector(state => _.get(state, 'currentForm.address'))
  let dispatch = useDispatch()

  return (
    <div>
      <span>Step2: address</span>
      <input
        value={address}
        onChange={event => {
          dispatch(hydateForm({address: event.target.value}))
        }}/>
    </div>
  )
}
