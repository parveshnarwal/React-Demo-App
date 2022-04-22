import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    post : {},
    loading : true,
    error : ''
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS' :
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
        
        case 'ERROR' :
            return {
                loading : false,
                post : {},
                error : 'Something went wrong'
            }

        default : 
            return state
    }
}

const DataFecthingTwo = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/12')
        .then( resp => dispatch({type : 'SUCCESS', payload : resp.data}))
        .catch(err => dispatch({type : 'ERROR'}))

    }, [])

    return (
        <div>
            {state.loading ? 'Loading data' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFecthingTwo