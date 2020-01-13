import React, {Component} from 'react';

class CommentCreate extends Component {
    state = {
      comment: '',
    };
   
    handleChange = (event) => {
        const input = event.target;
        this.setState({ [input.name]: input.value });
    };
   
    handleFormSubmit = (event) => {
        let arr = JSON.parse(localStorage.getItem('items'));
        let id = arr.indexOf(this.props.item);
        let comments = JSON.parse(localStorage.getItem('comments'));
        if(comments == null)
            comments = [];
        if(comments[id] == null)
            comments[id] = [this.state.comment];
        else
            comments[id].push(this.state.comment);
        localStorage.setItem("comments",JSON.stringify(comments));
        
    };
   
    render() { 
        return(
        <div>
            <form >
                <input name="comment" required value={this.state.title} onChange={this.handleChange} placeholder="Comment..."/>
                <button onClick={this.handleFormSubmit} className="butSave">Sent</button>
            </form>
        </div>
        );
        
     }
  }

export default CommentCreate;