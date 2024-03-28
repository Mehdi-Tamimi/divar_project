import { MouseEventHandler } from "react"


export default function TopicQuestion({id,key,setQuestionId,questionId,title,questions}: {
    id: number,
    key: number,
    questionId: null | number,
    setQuestionId: Function,
    title: string,
    questions: string[],
    }) { 

    const handleOnClick:MouseEventHandler = () => {
        if (isOpen) {
            setQuestionId(null)
        } else {
            setQuestionId(id)
        }
        
    }
    
    const isOpen = id === questionId
    return (
        <div className="topic-container">
            <div onClick={handleOnClick} className="topic-title-container">
                <p className="topic-title">{title}</p>
                <svg className={`closed-questions-list ${isOpen? 'open-questions-list': ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#707070" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div className={`topic-questions-container ${isOpen? 'open-question-container': ''}`}>
                {
                    questions.map((question,index) => <p
                    key={index}
                    className="topic-question"
                    >{question}</p>)
                }
            </div>
        </div>
    )
}