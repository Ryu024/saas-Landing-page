import { Check } from "lucide-react"


export default function PlanCard({ title, price, description, features, isPopular }) {
    return (

        <div className="flex flex-col border justify-between rounded-lg p-6 h-full backdrop-blur-lg bg-white/20 text-left ml-3 hover:shadow-2xl transition-all ">
            {isPopular && <div className="absolute -top-6 left-0 py-1 px-2 overflow-hidden bg-indigo-500 rounded-t-lg w-full text-white text-center ">Popular</div>}
            <div>
                <div className="inline-flex items-end ">
                    <h1 className="font-extrabold text-3xl">{price}</h1>
                    <span className="ml-3 text-gray-600 align-bottom">/month</span>
                </div>
                <h2 className="font-bold text-xl">{title}</h2>
                <p>{description}</p>
                <div className="border-t border-gray-600 opacity-30 my-3 flex-grow"></div>

                <ul>
                    {features.map((feature , index) => (
                        <li key={index} className="flex flex-row items-center gap-2 ">
                            <div className="w-4 h-4 bg-indigo-500 flex items-center justify-center rounded-full">
                                <Check className="inline-block text-white w-3 h-3"/>
                            </div>
                                <p className="text-gray-700">{feature}</p>
                        </li>
                    ))}
                </ul>

            </div>
            <div>
                <button className="bg-indigo-700 w-full text-white py-2 mt-3 rounded-lg hover:bg-indigo-600 bg-gradient-to-t from-indigo-500">Select plan</button>
            </div>
        </div>

    )
}
