import React, {Component} from 'react';
import Item from './Item';

class ItemsList extends Component{
    render(){
        let items = JSON.parse(localStorage.getItem('items'));
        const elements = items.map(item =>
            <Item key={item} item = {item}/>
        );
        return(
            <div style={{marginTop:10}}>
                {elements}
            </div>
        );
    }
}

export default ItemsList;