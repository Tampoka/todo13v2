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
                setState(res.data)
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.deleteTodo("7ca52d33-1b4b-499e-9e6a-5b0bdab0ef28")
            .then((res) => {
                setState(res.data)
            });
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.updateTodoTitle("7ca52d33-1b4b-499e-9e6a-5b0bdab0ef28", "hhhhhh")
            .then((res) => {
                setState(res.data)
            });

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
