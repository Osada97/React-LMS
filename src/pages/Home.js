import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {activeAccount} from '../actions'

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activeAccount());
      },[])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
