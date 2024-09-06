
interface PartenerCardProps {
    src: string,

}

export default function PartenerCard(props: PartenerCardProps) {
    return (

        <div className="px-8">
            <div className="flex flex-col justify-center p-8 m-8 border">
                <div>
                    <p className="text-center p-2" >Client Name</p>
                </div>

                <div><img src={props.src} alt="" /></div>
            </div>
        </div>

    )
}