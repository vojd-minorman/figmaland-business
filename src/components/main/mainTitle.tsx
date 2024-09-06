
interface MainTitleProps {
    title : string,
    description? : string
}

export default function MainTitle(props : MainTitleProps) {
    return (
        <div className="text-center py-6">
        <h1 className="text-5xl p-5">{props.title}</h1>
        <p className="text-3xl p-6 ">{props.description}</p>
    </div>
    )
}