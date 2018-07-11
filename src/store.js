import { createStore } from 'redux';

const InitState = {
    users : [
        {fname:"John", lname:"Doe", sex:"Male", age:44, pass:"1234"},
        {fname:"Mary", lname:"Smith", sex:"Female", age:25, pass:"abcd"},
        {fname:"Alice", lname:"Green", sex:"Female", age:23, pass:"asdf"}
    ],
    cur: 0,
    temp : {},
}

export const addAction = (data) => ({type: 'ADD', user: data});
export const deleteAction = (index) => ({type: 'DELETE', target: index});
export const updateAction = (index, data) => ({type: 'UPDATE', target: index, user: data});
export const otherAction = () => ({type:'OTHER'});

const userR = (state = InitState, action) => {
    switch(action.type){
        
    }
}

const store = createStore(userR);
export default store;




