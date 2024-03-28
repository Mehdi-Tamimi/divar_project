import { menuQuestions } from "@/cardsContent/supportPage";
import TopicQuestion from "./topicQuestion";
import { useState } from "react";
import { MenuTopic } from "@/interfaces/supportPage";
export default function TopicsMenu({topic}:{
    topic: string
    }) {
    const [questionId,setQuestionId]= useState<null | number>(null)
    type QuestionKey = keyof typeof menuQuestions
    const questionKey = topic as QuestionKey 
    const list = menuQuestions[questionKey].map((obj,index) => {
    return <TopicQuestion
    questionId={questionId}
    setQuestionId={setQuestionId}
    key={index}
    id={index}
    questions={obj.questions}
    title={obj.topic}
    />})
    return (
        <div>
            {
                list
            }
        </div>
    )
}