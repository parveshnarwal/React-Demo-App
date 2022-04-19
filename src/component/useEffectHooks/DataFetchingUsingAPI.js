import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetchingUsingAPI = () => {

    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [postIdFromButtonClick, setPostIdFromButtonClick] = useState(1)

    useEffect(()=>{
        let url = 'https://jsonplaceholder.typicode.com/posts/' + postIdFromButtonClick 
        axios
            .get(url)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [postIdFromButtonClick])

    const handleClick = () => {
        setPostIdFromButtonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
            <br></br>
            <button onClick={handleClick}>Fetch Post</button><br></br>
            {post.title}
            {/* <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul> */}
        </div>
    )
}

export default DataFetchingUsingAPI