interface FooterLocationProps{
    images : string,
    
}

export default function FooterLocation(props:type) {
    return (
        <div className="flex flex-row justify-center gap-2 p-2">
        <div><img src={props.images} alt="" className="w-12"/></div>
        <p className="pt-3 text-sm">{props.text}</p>
    </div>
    )
    
}