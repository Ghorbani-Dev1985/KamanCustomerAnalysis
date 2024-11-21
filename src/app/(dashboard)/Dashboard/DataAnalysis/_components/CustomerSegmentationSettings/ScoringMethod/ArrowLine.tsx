import { HiMiniChevronLeft, HiMiniMinus } from "react-icons/hi2";

const ArrowLine = () => {
    return(
      <div className='flex flex-col'>
       <HiMiniChevronLeft className='size-6'/>
       <HiMiniMinus className='-mt-2 w-6'/>
      </div>
    )
  }
export default ArrowLine;