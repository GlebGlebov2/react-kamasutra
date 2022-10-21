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
            messagesData:[
                {id:1, message:'Сообщение 1'},
                {id:2, message:'Сообщение 2'},
                {id:3, message:'Сообщение 3'},
            ],
            dialogsData:[
                {id:1, name:'Акыл'},
                {id:2, name:'Фарух'},
                {id:3, name:'Махмуд'},
            ],
        },
    },
    getState(){
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('стэйт изменён');
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
        }
    },
};
// window.store = store
export default store;





 


