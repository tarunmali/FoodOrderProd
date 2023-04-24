import {createSlice} from '@reduxjs/toolkit';

const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: ["Banana","Apple"],
    },
    reducers: {
        //mapping bw actions and reducer function
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },

        removeItem: (state,action)=>{
            state.items.pop();
        },

        clearCart: (state)=>{
            state.items=[];
        }
    }
});


//the cartSlice object will look like
//cartSlice = createSlice({name,initialState,reducers})
//all reducers are combined to form a single reducer
//carSlice {actions {addItem,removeItem,clearCart},reducer{reducers}}


export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;