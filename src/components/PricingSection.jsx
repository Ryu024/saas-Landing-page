import { pricing } from "../data/pricing";
import PlanCard from "./PlanCard";
import TagLine from "./TagLine";
export default function PricingSection () {
    return (
        <section  id="pricing" className="flex text-center p-10 items-center justify-center flex-col">
            <TagLine>Pricing</TagLine>
            <h2 className="font-extrabold text-3xl mb-8 pt-3">Flexible Pricing to fit Your Growth</h2>

                <div className="grid mt-10 items-center grid-cols-1 md:grid-cols-3 gap-3 max-w-screen-xl">
                {    pricing.map((plan , index) => (
                    <PlanCard
                    key={index}
                    {...plan}
                    />
                ))
            }
                </div>

        </section>
    )
}
