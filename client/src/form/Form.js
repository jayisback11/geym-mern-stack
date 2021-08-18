import React, {useState} from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPosts } from '../actions/posts'

function Form() {
    const dispatch = useDispatch()
    const [dataPosts, setDataPosts] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPosts(dataPosts))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={dataPosts.creator} 
                    placeholder="Creator" 
                    onChange={(e) => setDataPosts({...dataPosts, creator: e.target.value})}
            />
            <input type="text" value={dataPosts.title} 
                    placeholder="Title" 
                    onChange={(e) => setDataPosts({...dataPosts, title: e.target.value})}
            />
            <input type="text" value={dataPosts.message} 
                    placeholder="Message" 
                    onChange={(e) => setDataPosts({...dataPosts, message: e.target.value})}
            />
            <input type="text" value={dataPosts.tags} 
                    placeholder="tags" 
                    onChange={(e) => setDataPosts({...dataPosts, tags: e.target.value})}
            />
            <div>
                <FileBase type="file" multiple={false} onDone={({base64}) => setDataPosts({...dataPosts, selectedFile: base64})}/>
            </div>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
    )
}

export default Form
