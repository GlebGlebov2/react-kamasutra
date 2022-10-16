import { rerenderEntireTree } from "../render";

export const state ={

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
};

window.state = state;

export function addPost(){
    
    const newPost ={
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText='эээээ бллээээ';
    rerenderEntireTree(state);
};
export function updateNewPostText(newText){
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};