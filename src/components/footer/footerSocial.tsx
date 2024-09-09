interface FooterSocialProps{
    images : string,
}

export default function FooterSocial(props:FooterSocialProps) {
    return (
        <div><img src={props.images} alt="" className="w-9"/></div>
    )
    
}