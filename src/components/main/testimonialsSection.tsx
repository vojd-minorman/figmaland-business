
import MainTitle from "./mainTitle"
import ibm from "../../assets/img/ibm.png"
import avatar from "../../assets/img/avatar.png"

export default function TestimonialSection() {
    return (
        <div className="py-3">
            <section className="py-6">
                <div className="">
                    <MainTitle
                        title = "Testimonials"
                    />
                    <div className="">
                        <div className="flex flex-row justify-center">
                            <img src={ibm} alt=""  width="120px" />
                        </div>
                        <div className="text-center p-12">  
                            <p className="text-xs font-bold">Most calendars are designed for teams. 
Slate is designed for freelancers who want a 
simple way to plan their schedule.</p>
                        </div>
                        <div className="flex flex-row justify-center gap-2 pb-12">
                            <div>
                                <img src={avatar} alt="" className="rounded-full w-12"/>
                            </div>
                            <div>
                                <span className="text-xs">Organize accros</span>
                                <p className="text-sm">Ui Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>

    )
}