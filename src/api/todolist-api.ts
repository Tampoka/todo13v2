import axios, {AxiosResponse} from "axios";

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
        return instance.post<CommonResponseType<{ item: TodoType }>, AxiosResponse<CommonResponseType<{ item: TodoType }>>, { title: string }>
        ('todo-lists', {title})
    },
    updateTodoTitle(todolistId: string, title: string) {
        return instance.put<CommonResponseType, AxiosResponse<CommonResponseType>, { title: string }>(`todo-lists/${todolistId}`, {title: title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId:string,title:string){
        return instance.post<CommonResponseType<{item:TaskType}>, AxiosResponse<CommonResponseType<{item:TaskType}>>,{title:string}>
        (`todo-lists/${todolistId}/tasks`,{title})
    },
}

type TodoType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type CommonResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsError: Array<string>
    data: T
}

type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTasksResponseType<T = {}> = {
    error: null | string
    items: TaskType[]
    totalCount: number
}
