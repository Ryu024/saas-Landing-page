import { features } from "../data/features";
import TagLine from "./TagLine";

export default function FeaturesSection() {
    return (
        <section  id="features" className="flex flex-col items-center justify-center p-10">
            <TagLine>Features</TagLine>
            <h2 className="font-extrabold text-3xl mb-8 text-center"> Intelligent Form building </h2>
        <div className="grid mt-3 items-center grid-cols-1 gap-3 md:grid-cols-3 ">
            {features.map((feature , index) => (
               <div key={index}
               className="flex items-center space-x-4 bg-white border border-indigo-500/30 rounded-md p-6 shadow-2xl hover:shadow-2xl">
                <div >
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                </div>
               </div>
            ))}
        </div>
        </section>
    )
}
