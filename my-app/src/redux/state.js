// import { rerenderEntireTree } from "../render";
let store ={
    _state:{
        profilePage:{
            postsData :[
                {id:1, message:'Здроу', likesCount:3},
                {id:2, message:'покау', likesCount:54},
            ],
            newPostText:'новый пост текмт',
        },
        
        messagesPage:{
            dialogsData:[
                {id:1, name:'Акыл'},
                {id:2, name:'Фарух'},
                {id:3, name:'Махмуд'},
            ],
            messagesData:[
                {id:1, message:'Сообщение 1'},
                {id:2, message:'Сообщение 2'},
                {id:3, message:'Сообщение 3'},
            ],
            newMessageBody:""
        },
        
    },
    
    _callSubscriber() {
        console.log('стэйт изменён');
    },
    getState(){
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },


    dispatch(action){
        if(action.type === 'ADD-POST'){
            const newPost ={
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText='эээээ бллээээ';
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-NEW-MESSAGE-BODY'){
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if(action.type === 'SEND-MESSAGE'){
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push({id:4, message:body});
            this._callSubscriber(this._state);
        }
    },
    
};
export function addPostActionCreator(){
    return{
        type: 'ADD-POST'
    }
};
export function updateNewPostTextActionCreator(text){
    return{type: 'UPDATE-NEW-POST-TEXT', newText:text}
};

export function sendMessageCreator(){
    return{
        type: 'SEND-MESSAGE'
    }
};
export function updateNewMessageBodyCreator(body){
    return{type: 'UPDATE-NEW-MESSAGE-BODY', body:body}
};

export default store;
// window.store = store




 


