import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFectchingWithUseReducer = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/12')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(err => {
            loading(false)
            setPost({})
            setError('Something went wrong')
        })

    }, [])

    return (
        <div>
            {loading ? 'Loading data' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFectchingWithUseReducer