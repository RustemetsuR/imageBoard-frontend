import React from 'react';
import './MessageListItem.css';

const MessageListItem = props => {

    let cardImage = '';
    if (props.image) {
        cardImage = "http://localhost:8000/uploads/" + props.image;
    };

    return (
        <div className='message-list-item'>
            <h3>{props.author}</h3>
            <p>{props.message}</p>
            <p>{props.dateTime}</p>
            <img className='img-list-item' src={cardImage} alt={props.image} width='100%' />
        </div>
    );
};

export default MessageListItem;