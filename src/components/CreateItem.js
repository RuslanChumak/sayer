import React, {Component} from 'react';


class CreateItem extends Component {
    state = {
      title: '',
    };
   
    handleChange = (event) => {
        event.preventDefault();
      const input = event.target;
      this.setState({ [input.name]: input.value });
    };
   
    handleFormSubmit = () => {
        let arr = JSON.parse(localStorage.getItem('items'));
        if(arr == null)
            arr = [this.state.title];
        else
            arr.push(this.state.title);
        localStorage.setItem("items",JSON.stringify(arr));
    };
   
    render() { 
        return(
        <div>
            <form action="/" onSubmit={this.handleFormSubmit}>
                <input name="title" required value={this.state.title} onChange={this.handleChange} placeholder="New item title..."/>
                <button className="butSave" type="submit">Save</button>
            </form>
        </div>
        );
        
     }
  }

export default CreateItem;