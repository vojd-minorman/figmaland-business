
interface PartenerCardProps {
    src: string,

}

export default function PartenerCard(props: PartenerCardProps) {
    return (

        <div className="px-8 sm:px-0">
            <div className="flex flex-col p-8 m-8 border sm:p-6 sm:m-0 sm:h-40 sm:w-64 ">
                <div>
                    <p className="text-center p-2" >Client Name</p>
                </div>

                <div><img src={props.src} alt="" /></div>
            </div>
        </div>

    )
}