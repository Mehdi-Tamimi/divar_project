
export interface CommonQuestion {
    question: string,
    link: string
    }

export interface MenuTopic {
    topic: string,
    questions: string[]
    }
    
export interface MenuQuestions {
    payment: MenuTopic[]
    edit: MenuTopic[]
    violation: MenuTopic[]
    account: MenuTopic[]
    search: MenuTopic[]
    business: MenuTopic[]
    }
