import React, { useEffect } from 'react'
import Homepage from './components/Homepage'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div>
            <Homepage />
        </div>
    )
}

export default App
