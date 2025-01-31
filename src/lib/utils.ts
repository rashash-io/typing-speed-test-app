import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//getting amount of minutes
export const getMinutes = (seconds: number) => {
  if (seconds == 0) return ""
  if (seconds < 60) return seconds + " seconds"
  const div = seconds / 60
  const sec = seconds%60
  if (div == 1) return "1 minute" 
  let minCounter =Math.floor(div) > 1 ? (Math.floor(div) + " minutes"): Math.floor(div) + " minute"
  let secCounter=  (sec == 0) ? (" "):(" " + sec+ " seconds")
  //const minCounter = (div%1 === 0 )? "":(" "+div%1 + " minutes") Returns  0.5 minutes etc
  
  
  if (seconds === 0){ 
    secCounter = ""
    minCounter = ""     
  }
    
  return minCounter + secCounter 
  
}
