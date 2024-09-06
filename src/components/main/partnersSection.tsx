
import MainTitle from "./mainTitle"
import google from "../../assets/img/google.png"
import microsoft from "../../assets/img/microsoft.png"
import amazon from "../../assets/img/amazon.png"
import PartenerCard from "./partenersCard"

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
                <PartenerCard
                    src = {google}
                />
                <PartenerCard src = {amazon}/>
                <PartenerCard src = {microsoft}/>
            </section>
        </div>

    )
}