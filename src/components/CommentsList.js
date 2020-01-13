import React, {Component} from 'react';

class CommentsList extends Component{
    render(){
        let comments = JSON.parse(localStorage.getItem('comments'));
        let arr = JSON.parse(localStorage.getItem('items'));
        let id = arr.indexOf(this.props.item);
        let elements = <div></div>;
        if(comments != null && comments[id] != null){
            elements = comments[id].map(comment =>
                <div className="comment" key={comment}>
                    <table>
                        <tr>
                          <td><span className="img"></span></td> 
                          <td>{comment}</td> 
                        </tr>
                    </table>
                    <hr/>
                </div>
            );
        }
        
        return(
            <div>
                {elements}
            </div>
        );
    }
}

export default CommentsList;