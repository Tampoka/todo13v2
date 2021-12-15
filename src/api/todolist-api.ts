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
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodo(title: string) {
        return instance.post<CommonResponseType<{ item: TodoType }>>('todo-lists', {title})
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    }
}

type TodoType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type CommonResponseType<T={}> = {
    resultCode: number
    messages: Array<string>
    fieldsError: Array<string>
    data: T
}
