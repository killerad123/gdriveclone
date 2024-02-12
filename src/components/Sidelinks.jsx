
export default function Sidelinks(props) {
  return (
    <div id="home" className="bg-yellow-400 flex justify-center items-center h-max w-full">
            <div className="flex rounded-3xl pt-1 pb-1 bg-cyan-300 w-[90%] justify-center items-center">
                {props.icon}
                <span className="w-[80%]">{props.title}</span>
            </div>
    </div>
  )
}
