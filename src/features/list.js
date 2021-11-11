import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: 'Things to do at home',
        items: ['Laundry', 'Dishes'],
    },
    {
        id: 2,
        title: 'What to pack',
        items: ['Towel', 'Brush', 'Every freakin\' t-shirt']
    }
];

// immutable state

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItem(state, action) {
            const { id, text } = action.payload;

            state = state.map(task => {
                if (task.id === +id) {
                    task.items.push(text)
                }
                return task;
            })
        }
    }
});

export const { addItem } = listSlice.actions;

export default listSlice.reducer;
