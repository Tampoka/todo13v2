import React, {useEffect, useState} from 'react'
import {TaskPriorities, TaskStatuses, todolistApi} from "../../../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodos()
            .then((res) => {
                setState(res.data)
            });
// здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodo('yaaaaaaaaa')
            .then((res) => {
                setState(res.data.data)
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.deleteTodo("c96f332d-585a-4c2c-b50d-fb6b10ac480c")
            .then((res) => {
                setState(res.data)
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.updateTodoTitle("4c04532f-6f63-4661-b846-2e72fbecaf0a", "hhhhhh")
            .then((res) => {
                setState(res.data.data)
            });

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTasks("5535ee0d-e346-40a8-a008-f0b5fea6a718")
            .then((res) => {
                setState(res.data)
            });
// здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTask("5535ee0d-e346-40a8-a008-f0b5fea6a718",'bbbbbbbbbbbb')
            .then((res) => {
                setState(res.data.data)
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
// export const UpdateTask =() => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         todolistApi.updateTask ("5535ee0d-e346-40a8-a008-f0b5fea6a718","b27db0f9-2779-44fb-9f58-249a08ac6f87",
//             {
//                 title: 'Run away',
//                 description: 'New task',
//                 status: 3,
//                 priority: 1,
//                 startDate: 'today',
//                 deadline: 'tomorrow'
//             })
//             .then((res) => {
//                 setState(res.data.data)
//             });
//
//     }, [])
//
//     return <div> {JSON.stringify(state)}</div>
// }

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.deleteTask("5535ee0d-e346-40a8-a008-f0b5fea6a718","4bc45fe1-7385-4fff-be61-df103127680f")
            .then((res) => {
                setState(res.data)
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}