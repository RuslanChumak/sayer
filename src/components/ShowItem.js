import React from 'react';
import {
    useParams,
    Link
  } from "react-router-dom";
import CommentCreate from './CommentCreate';
import CommentsList from './CommentsList';

function ShowItem(){
    let { id } = useParams();
    return(
        <div>
            <div className="header">
                <Link className="in" to="/">Back</Link>
                <h2 className="in">{id}</h2>
            </div>
            <CommentsList item={id}/>
            <CommentCreate item={id}/>
        </div>
    );
}
export default ShowItem;