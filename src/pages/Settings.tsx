import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getMinutes } from "@/lib/utils";
import { IoMdCloseCircleOutline } from "react-icons/io";

export function RadioGroupDemo({
  setTimeLeft,
}: {
  setTimeLeft: (num: number) => void;
}) {


 
  return (
    <>
      <RadioGroup
        defaultValue="30"
        onValueChange={(value) => setTimeLeft(Number(value))}
        className="flex  flex-wrap justify-center items-center flex-row space-x-2"
      >
        {[30, 60, 90, 300,600].map((num) => (
         
          <div
            key={num + "div"}
            className="flex  gap-2 items-center hover:bg-slate-600/50 justify-center hover:border-primary-500/50 hover:cursor-pointer bg-slate-950 rounded-full transition-all  duration-200 border-2 border-slate-800 p-3"
          >
            <RadioGroupItem key={num} value={num.toString()} id={"r" + num} />
            <Label className="hover:cursor-pointer" htmlFor={"r" + num}>
               { getMinutes(num) }
            </Label>
          </div>
        ))}
      </RadioGroup>
      <div className="flex  flex-wrap justify-center items-center flex-row space-x-2">
        <h2 className="text-center text-slate-500 text-2xl">Difficulty</h2>
        <RadioGroup   defaultValue="easy" className="flex  flex-wrap justify-center items-center flex-row space-x-2">
          <div className="flex  gap-2 items-center hover:bg-slate-600/50 justify-center hover:border-primary-500/50 hover:cursor-pointer bg-slate-950 rounded-full transition-all  duration-200 border-2 border-slate-800 p-3">
            <RadioGroupItem value={"easy"} id={"diff-e"}/>
            <Label htmlFor={"diff-e"} className="hover:cursor-pointer">Easy</Label>
          </div>
          <div className="flex  gap-2 items-center hover:bg-slate-600/50 justify-center hover:border-primary-500/50 hover:cursor-pointer bg-slate-950 rounded-full transition-all  duration-200 border-2 border-slate-800 p-3">
            <RadioGroupItem value={"medium"} id={"diff-m"}/>
            <Label htmlFor={"diff-m"} className="hover:cursor-pointer">Medium</Label>
          </div>
          <div className="flex  gap-2 items-center hover:bg-slate-600/50 justify-center hover:border-primary-500/50 hover:cursor-pointer bg-slate-950 rounded-full transition-all  duration-200 border-2 border-slate-800 p-3">
            <RadioGroupItem value={"hard"} id={"diff-h"}/>
            <Label htmlFor={"diff-h"} className="hover:cursor-pointer">Hard</Label>
          </div>
       
        </RadioGroup>
      </div>
    </>
  );
}

export const Settings = ({
  timeLeft,
  setTimeLeft,
  setShowSettings,
}: {
  timeLeft: number;
  setTimeLeft: (num: number) => void;
  setShowSettings: (show: boolean) => void;
}) => {



  return (
    <div className="flex text-center justify-center items-center h-[100vh] absolute inset-0 ">
      <div className=" bg-slate-950/50 text-primary-500 shadow-2xl m-4 backdrop-blur-[2px] h-[60vh] w-[75vw]  z-10  border-2 border-slate-500/50 rounded-3xl">
        {/* ------- TOP FRAME -------*/}
        <div className="  items-center grid grid-cols-3">
          <span></span>
          <h2 className="text-2xl justify-self-center text-slate-500">
            Settings
          </h2>
          <div className="flex justify-end">
            <button
              onClick={() => setShowSettings(false)}
              className=" text-slate-500 hover:text-primary-400  p-1 m-2 hover:bg-slate-950 rounded-full transition-all  duration-200 flex items-center justify-end h-full text-4xl"
            >
              <IoMdCloseCircleOutline />
            </button>
          </div>
        </div>

        {/* ------- TEST DURATION -------*/}
        <h3 className="text-left px-4 text-slate-200">
          Test duration is set to
          <span className="italic mx-2  font-bold text-primary-500">
            {getMinutes(timeLeft)}
            
          </span>{" "}
        </h3>

        {/*------ SETTING DURATION BUTTONS -----*/}
        <div className="flex flex-wrap gap-2 p-2">
          <RadioGroupDemo setTimeLeft={setTimeLeft} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
