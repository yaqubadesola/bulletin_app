import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = [
    {
        "id": 1,
        "title": "Learning Redux Tollkit",
        "content":"Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:"
    },
    {
        "id": 2,
        "title": "Slices.............",
        "content": "createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types."
    }
]

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        // postAdded: (state,action)=> {
        //     state.push(action.payload)
        // }
        postAdded:{
            reducer:(state,action) => {
                state.push(action.payload)
            },
            prepare(title,content,userId){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }

    }
})


export const selectAllPosts = state => state.posts 
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer