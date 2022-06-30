import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from '../redux-first-history'

export default function Home() {
	const dispatch = useDispatch()
	return <div onClick={() => dispatch(push('/counter'))}>Home</div>
}