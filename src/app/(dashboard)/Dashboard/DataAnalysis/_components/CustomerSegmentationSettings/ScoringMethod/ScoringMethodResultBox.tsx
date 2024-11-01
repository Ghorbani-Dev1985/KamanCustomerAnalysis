const ScoringMethodResultBox = ({startPercent , endPercent , sectionScore , countResult, percentResult} : {startPercent : number , endPercent : number , sectionScore : number , countResult : number , percentResult : number}) => {
    return (
      <div className='flex flex-col items-center text-zinc-700 gap-y-3 border rounded-md'>
      <div className='flex flex-col items-center gap-y-3 p-3'>
        <p className='font-bold dir-ltr'>{startPercent}% - {endPercent}%</p>
        <span className='text-sm text-gray-500'>بازه برابر است با امتیاز</span>
        <span className='text-primary font-extrabold text-3xl'>{sectionScore}</span>
      </div>
            <div className='w-full flex flex-col min-h-28 bg-gray-200 items-center gap-y-3 py-6'>
                   <span className='text-zinc-500'>تعداد مشتریان این بخش</span>
                   <span className='dir-ltr font-bold'>{countResult.toLocaleString()} ({percentResult}%)</span>
              </div>
    </div>
    )
  }
export default ScoringMethodResultBox;