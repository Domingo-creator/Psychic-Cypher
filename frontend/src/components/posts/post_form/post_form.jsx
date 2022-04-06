import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PostForm = ({createPost, userId}) => {
    const [text, setText] = useState('')

    // useEffect( () => {

    // })
    
    const handleSubmit = (e) => {
        debugger
        e.preventDefault()
        createPost({user: userId, body: text})
    }

    const update = (e) => {
        setText(e.target.value)
    }
 
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="post-form">
            <p>What would you like to say about your card?</p>
            <textarea
                value={text}
                onChange={update}
            />
            <div className="post-form-buttons" >
                <Link to="/posts" className="link-button" >Cancel</Link>
                <button className="link-button">Submit</button>
            </div>
        </form>
    )
}



// class PostForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {user: this.props.userId, body: ''}
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
    




//     handleSubmit(e) {
//         e.preventDefault()
//         this.props.createPost(this.state)
//     }



//     update(field) {
//         return e => {
//             this.setState({ [field]: e.target.value})
//         }
//         // setText(e.target.value)
//     }
    
    
//     render () {
//         if(!this.props) return null
//         console.log(this.props.createPost)
//         return (
//             <form onSubmit={this.handleSubmit} className="post-form">
//             <p>What would you like to say about your card?</p>
//             <textarea
//             value={this.state.body}
//                 onChange={this.update('body')}
//             />
//             <div className="post-form-buttons" >
//                 <Link to="/posts" className="link-button" >Cancel</Link>
//                 <button className="link-button">Submit</button>
//             </div>
//         </form>
//             )
//         }
//     }
    export default PostForm