import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '73fdf213-e363-4a31-ad92-85b5d437ac0f'
    },
})

export const todolistApi = {
    getTodos() {
        return instance.get('todo - lists')
    },
    createTodo(title: string) {
        return instance.post('todo-lists', {title})
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}`, {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete(`todo-lists/${todolistId}`)
    }
}