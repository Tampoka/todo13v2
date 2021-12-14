import axios from "axios";

export const todolistApi = {
    getTodos() {
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', {withCredentials: true})
    },
    createTodo(title: string) {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, {
            withCredentials: true,
            headers: {'API-KEY': '73fdf213-e363-4a31-ad92-85b5d437ac0f'}
        },)
    },
    updateTodoTitle(todolistId: string, title: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, {
            withCredentials: true,
            headers: {'API-KEY': '73fdf213-e363-4a31-ad92-85b5d437ac0f'}
        },)
    },
    deleteTodo(todolistId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {
            withCredentials: true,
            headers: {'API-KEY': '73fdf213-e363-4a31-ad92-85b5d437ac0f'}
        },)
    }
}