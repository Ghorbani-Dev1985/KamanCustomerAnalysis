import { FocusEvent } from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"
import toast from "react-hot-toast"
import { MdOutlinePercent } from "react-icons/md"

const ScoringMethodInput = ({register, name, value , disabled} : {register: UseFormRegister<FieldValues>, name : string, value : number , disabled?: boolean}) => {
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      const inputValue = Number(e.target.value)
      if (inputValue < 0 || inputValue > 100 || isNaN(inputValue) || !inputValue) {
        e.target.value = value.toString()
        toast.error('مقدار باید بین 0 تا 100 باشد')
      }
    }
    return (
      <div className="relative">
             <input 
               {...register(name)}  
               type="number" 
               min={0} 
               max={100} 
               onBlur={handleBlur}
               disabled={disabled && true}
               className="bg-gray-50 border disabled:select-none disabled:opacity-50 outline-none border-gray-300 text-zinc-700
               rounded-lg focus:border-primary block lg:max-w-20 xl:max-w-28 text-center ps-10 p-2.5"
               placeholder={value.toString()} 
             />
           <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
              <MdOutlinePercent className={`${disabled && "opacity-50"} size-4`}/>
           </div>
      </div>
    )
 }

export default ScoringMethodInput;