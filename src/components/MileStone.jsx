export default function MileStone({ title, description, lastitem }) {
    return (
        <div className="flex w-full">
            <div className="relative flex flex-col items-center  h-32 ">
                <div className="z-10 bg-gradient-to-b from-pink-500  to-indigo-500 h-4 w-4 rounded-full flex-shrink-0 relative">
                    <div className="bg-gradient-to-b from-pink-500 absolute  to-indigo-500 h-6 w-6 rounded-full blur-lg flex-shrink-0">

                    </div>
                </div>{!lastitem && <div className="absolute z-0 top-2 w-1 bg-gray-500 flex-grow h-full"></div>}
            </div>
            <div className="ml-10">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
                {/* {!lastitem && <div></div>} */}
            </div>
        </div>
    )
}
