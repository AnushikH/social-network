
const SEND_NEW_MESSAGES = 'SEND_NEW_MESSAGES';
const UPDATE_MESSAGES = 'UPDATE_MESSAGES';


let initialState = {
    dialogContent: [
        { id: 1, name: "Andrea" },
        { id: 2, name: "Sofy" },
        { id: 3, name: "Jack" },
        { id: 4, name: "Dnay" },
        { id: 5, name: "Jany" }
      ],
      messagesContent: [
        { id: 1, message: "Hello how are you", name: "Andrea" },
        { id: 2, message: "Hello I'am fine and you?", name: "Me" }
      ],
      newMessageText: 'Your Messages here'
}

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGES:
            state.newMessageText = action.body
            return state;
        case SEND_NEW_MESSAGES:
            let newMessage = {
                id: 8,
                message: state.newMessageText,
                name: 'Andery'
            }
            state.newMessageText = ''
            state.messagesContent.push(newMessage)
            return state
        default:
            return state
    }
}


export const UpdateMessagesCreator = (body) => {
    return ({
        type: UPDATE_MESSAGES,
        body: body
    })
}

console.log(UpdateMessagesCreator());

export const SendMessagesCreator = () => {
    return ({
        type: SEND_NEW_MESSAGES
    })
}

export default DialogReducer