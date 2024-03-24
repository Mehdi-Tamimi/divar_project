import { CommonQuestion } from "@/interfaces/supportPage"


export default function CommonQuestionCard({content}: {content: {
    link: string,
    question: string
    }}){

    return (
        <a className="question-card-container" href={`${content.link}`}>
            <p className="question-card-text">
                {content.question}
            </p>
            <button className="question-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5l5 5"/></svg>
            </button>
        </a>
    )

}