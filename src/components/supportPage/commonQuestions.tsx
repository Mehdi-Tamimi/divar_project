import { questionsList } from "@/cardsContent/supportPage"
import CommonQuestionCard from "./commonQuestionCard"

export default function CommonQuestions() {

    return (
        <div className="common-questions-container">
            <h2 className="common-questions-title">شاید برای شما هم سوال باشد</h2>
            <div>
                {questionsList.map(content => <CommonQuestionCard content={content}/>)}
            </div>
            <h2 className="common-questions-title pt-4">
                پرتکرارترین سؤالات کاربران دیوار    
            </h2>
        </div>
    )
}