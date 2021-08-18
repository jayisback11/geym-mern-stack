import React from 'react'
import { useSelector } from 'react-redux'
import Form from '../form/Form'
import Posts from '../posts/Posts'

function Homepage() {

    const posts = useSelector((state) => state.posts)

    console.log(posts)

    return (
        <div>
            <Form/>
            <Posts/>
        </div>
    )
}

export default Homepage
