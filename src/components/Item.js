import React, {Component} from 'react';
import {
    Link
  } from "react-router-dom";

class Item extends Component{
    state = {
        Delete: false,
    };
    handleOnclick = () =>{
        let items = JSON.parse(localStorage.getItem('items'));
        let com = JSON.parse(localStorage.getItem('comments'));
        let id = items.indexOf(this.props.item);
        items.splice(id,1);
        com.splice(id,1);
        localStorage.setItem("items",JSON.stringify(items));
        localStorage.setItem("comments",JSON.stringify(com));
        this.setState({Delete:true});
    }
    render(){
        let items = JSON.parse(localStorage.getItem('items'));
        let com = JSON.parse(localStorage.getItem('comments'));
        let id = items.indexOf(this.props.item);
        let num = 0;
        if(com[id] != null && com != null)
            num = com[id].length;
        let res = !this.state.Delete && (
        <div className="item">
            <Link className="in" to={'/item/'+this.props.item}><h3 className="in">{this.props.item}</h3></Link>
            <button onClick={this.handleOnclick} className="in butDelete">Delete</button>
            <span className="num">{num}</span>
            <hr/>
        </div> );
        return( 
            <div className="flex">{res}</div>  
        );
    }
}

export default Item;