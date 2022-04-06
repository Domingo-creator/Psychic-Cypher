import { connect } from "react-redux"
import { createPost } from "../../../actions/post_actions"
import PostForm from "./post_form"

const mapStateToProps = state => {
    return {
        userId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: post => dispatch(createPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)