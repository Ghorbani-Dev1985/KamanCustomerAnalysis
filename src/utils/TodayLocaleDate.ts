export default function TodayLocaleDate(){
    return new Date().toLocaleDateString("fa-IR" , { day: "2-digit", month: "long",  
        year: "numeric" , weekday: "long"})
}
