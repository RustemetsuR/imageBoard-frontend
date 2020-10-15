import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MainPage.css';
import axios from '../../axiosApi';
import Container from '../../components/Container/Container';
import { changeImageInput, changeMessageInput, fetchGetMessages } from '../../store/actions/messagesActions';
import MessageListItem from '../../components/MessageListItem/MessageListItem';

const MainPage = () => {

    const dispatch = useDispatch();
    const messageVal = useSelector(state => state.messageInputValue);
    const image = useSelector(state => state.image);
    const messages = useSelector(state => state.messages);
    const author = useSelector(state => state.author);

    const changeMessageVal = event => {
        const value = event.target.value;
        dispatch(changeMessageInput(value));
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('message', messageVal);
        formData.append('image', image);
        formData.append('author', author);
        await axios.post('/imageBoard/', formData);
    };

    const fileChangeHandler = e => {
        const file = e.target.files[0];
        dispatch(changeImageInput(file));
    };

    useEffect(() => {
        dispatch(fetchGetMessages());
    }, [messages, dispatch]);




    return (
        <div className='main-page-box'>
            <Container>
                <div className='main-box'>
                    <div className='messages-box'>
                        <div className='messages'>
                            {messages.length > 0 ?
                                messages.map(message => {
                                    return <MessageListItem 
                                    key={message.id} 
                                    author={message.author} 
                                    message={message.message} 
                                    image={message.image}
                                    />
                                }) : null}
                        </div>


                    </div>
                    <div className='send-box'>
                        <form onSubmit={submitFormHandler}>
                            <input required placeholder='Message' value={messageVal} onChange={changeMessageVal} />
                            <input required type='file' placeholder='Image' name='image' onChange={fileChangeHandler} />
                            <button type='submit'>Send</button>
                        </form>

                    </div>
                </div>

            </Container>
        </div>
    );
};

export default MainPage;