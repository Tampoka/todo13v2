import React, {useEffect, useState} from 'react'
import {todolistApi} from "../../../api/todolist-api";

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
        todolistApi.getTasks("1d32d8b5-fbb9-4ce2-930c-b8e8ead8731d")
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
        todolistApi.createTask("1d32d8b5-fbb9-4ce2-930c-b8e8ead8731d",'yaaaaaaaaa')
            .then((res) => {
                setState(res.data.data)
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
