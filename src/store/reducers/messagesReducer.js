const { CHANGE_MESSAGE_INPUT_VALUE, FETCH_GET_MESSAGES_SUCCESS, CHANGE_IMAGE_INPUT_VALUE, FETCH_GET_MESSAGES_ERROR } = require("../actionTypes");

const initialState = {
    messages: [],
    messageInputValue: '',
    image: '',
    author: 'Admin',
    error: null,
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE_INPUT_VALUE:
            return { ...state, messageInputValue: action.value };
        case CHANGE_IMAGE_INPUT_VALUE:
            return { ...state, image: action.value };
        case FETCH_GET_MESSAGES_SUCCESS:
            return { ...state, messages: action.messages }
        case FETCH_GET_MESSAGES_ERROR:
            return { ...state, error: action.error }
        default:
            return state;
    };
};

export default messagesReducer;