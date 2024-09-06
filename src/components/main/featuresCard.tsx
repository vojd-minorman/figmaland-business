interface FeatureCardProps {
    image : string;
    title : string;
    description : string;
}
export default function FeaturesCard(props : FeatureCardProps) {
    return (
        <div className="p-8 text-center">
            <div className="flex justify-center">
                <img src={props.image} alt="" className="w-14" />
            </div>
            <div className="">
                <h1 className="text-xl font-bold px-8 py-3">{props.title}</h1>
                <p className="px-8 py-3">{props.description}</p>
            </div>
        </div>

    )
}