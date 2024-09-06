import FooterList from "./footerList";
import location from "../../assets/img/location.png";

export default function FooterSection() {
    return (
        <div className="py-14 bg-blueDark text-white text-center">
            <FooterList/>
            <FooterList/>
            <FooterList/>
            <div className="">
                <div className="flex flex-row justify-center gap-2 p-2">
                    <div><img src={location} alt="" className="w-12"/></div>
                    <p className="pt-3 text-sm">7480 Mockingbird Hill Undefined</p>
                </div>
            </div>
        </div>

    )
}