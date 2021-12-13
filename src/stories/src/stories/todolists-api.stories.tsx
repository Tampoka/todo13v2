import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', {withCredentials: true})
            .then((res) => {
                setState(res.data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: "What to buy"}, {
            withCredentials: true,
            headers: {'API-KEY': '73fdf213-e363-4a31-ad92-85b5d437ac0f'}
        },)
            .then((res) => {
                setState(res.data.item)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
