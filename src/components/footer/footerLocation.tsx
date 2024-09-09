interface FooterLocationProps{
    images : string,
    text : string,
}

export default function FooterLocation(props:FooterLocationProps) {
    return (
        <div className="flex flex-row gap-2 p-2">
        <div><img src={props.images} alt="" className="w-9"/></div>
        <p className="pt-2 text-sm">{props.text}</p>
    </div>
    )
    
}