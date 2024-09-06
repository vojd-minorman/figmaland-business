import FooterList from "./footerList";
import location from "../../assets/img/location.png";

export default function FooterSection() {
    return (
        <div className="py-14 bg-blueDark text-white text-center">
            <FooterList/>
            <FooterList/>
            <FooterList/>
            <div className="">
                <div className="flex flex-row">
                    <div><img src={location} alt="" /></div>
                    <p>Bb</p>
                </div>
            </div>
        </div>

    )
}