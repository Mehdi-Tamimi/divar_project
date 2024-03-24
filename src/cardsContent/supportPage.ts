import { CommonQuestion } from "@/interfaces/supportPage";

const question1: CommonQuestion = {
    question: 'چرا با اینکه پرداخت انجام داده‌ام خدمتی دریافت نکرده‌ام؟',
    link: '#'
}
const question2: CommonQuestion = {
    question: 'چگونه به رد شدن آگهی خود اعتراض کنم؟',
    link: '#'
}
const question3: CommonQuestion = {
    question: 'چگونه آگهی مورد نظر خود را در دیوار پیدا کنم؟',
    link: '#'
}
const question4: CommonQuestion = {
    question: 'چرا وضعیت اگهی من در انتظار پرداخت است؟',
    link: '#'
}

export const questionsList: CommonQuestion[] = [
    question1, question2, question3, question4
]

export const menuItems: string[] = [
    'پرداخت و موارد مالی',
    'ثبت، ویرایش یا ارتقا آگهی',
    'کلاهبرداری، مزاحمت یا تخلف',
    'حساب کاربری، چت و تماس ناشناس',
    'نمایش و جستجوی آگهی',
    'دیوار برای کسب و کار‌ها'
    ]