import MileStone from "./MileStone";


const roadmap = [
    {
        id : 1,
        name : "Development",
        description : "Development and Testing",
    },
    {
        id : 2,
        name : "Checking",
        description : "Development and Testing",
    },
    {
        id : 3,
        name : " QA and STS",
        description : "Development and Testing",
    },
    {
        id : 4,
        name : "Aspiration",
        description : "Development and Testing",
    },
    {
        id : 5,
        name : "Maintainance",
        description : "Development and Testing",
    },

]

export default function Roadmapsection () {
    return (
        <section id="roadmap" className="max-w-80 mx-auto">
            <h1 className="font-bold text-3xl text-center mb-16">Roadmap</h1>
        {
            roadmap.map((item , index) =>
            <MileStone
            key={index}
            title={item.name}
            description={item.description}
            lastitem={index === roadmap.length - 1}
            />)
        }
        </section>
    )
}
