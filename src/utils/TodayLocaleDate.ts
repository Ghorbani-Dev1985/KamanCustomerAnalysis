export function TodayLocaleDate(){
    return new Date().toLocaleDateString("fa-IR" , { day: "2-digit", month: "long",  
        year: "numeric" , weekday: "long"})
}
export function DateChangeToPersian(data: any){
    return new Date(data).toLocaleDateString("fa-IR" , { hour: "2-digit", minute: "2-digit",  
        second: "2-digit"}) 
}