import { MouseEventHandler } from "react"


export default function MenuItem({key,title,state,topic,setTopic}: {
    key: number
    title: string
    state: string
    topic: string
    setTopic: Function
    }) {
    const handleOnClick: MouseEventHandler = (e) =>  {
        setTopic(state)
        e.preventDefault()
    }
    const isActive = state === topic
    return (
        <div onClick={handleOnClick}  className={`slider-item ${isActive? 'item-active': ''}`}>
            <p>{title}</p>
        </div>
    )
}