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
        todolistApi.deleteTodo("4c04532f-6f63-4661-b846-2e72fbecaf0a")
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
