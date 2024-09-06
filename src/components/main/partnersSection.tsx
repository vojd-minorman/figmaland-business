
import MainTitle from "./mainTitle"
import google from "../../assets/img/google.png"
import microsoft from "../../assets/img/microsoft.png"
import amazon from "../../assets/img/amazon.png"

export default function PartenerSection() {
    return (
        <div className="py-3">
            <section className="py-6">
                <div>
                    <MainTitle
                        title = "Parteners"
                        description="Most calendars are designed for teams. 
                        Slate is designed for freelancers "
                    />
                </div>
                <div className="px-8">
                    <div className="flex flex-col justify-center p-8 m-8 border">
                        <div>
                        <p className="text-center p-2" >Client Name</p>
                        </div>
                        
                        <div><img src={google} alt="" /></div>
                    </div>
                </div>
                <div className="px-8">
                    <div className="flex flex-col justify-center p-8 m-8 border">
                        <div>
                        <p className="text-center p-2">Client Name</p>
                        </div>
                        
                        <div><img src={amazon} alt="" /></div>
                    </div>
                </div>
                <div className="px-8 ">
                    <div className="flex flex-col justify-center p-8 m-8 border">
                        <div>
                        <p className="text-center p-2">Client Name</p>
                        </div>
                        
                        <div><img src={microsoft} alt="" /></div>
                    </div>
                </div>
            </section>
        </div>

    )
}