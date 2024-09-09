import FooterList from "./footerList";
import location from "../../assets/img/location.png";
import phone from "../../assets/img/phone.png"
import FooterLocation from "./footerLocation";
import FooterSocial from "./footerSocial";
import twitter from "../../assets/img/twitter.png"
import facebook from "../../assets/img/facebook.png"
import linkedin from "../../assets/img/linkedin.png"

export default function FooterSection() {
    return (
        <div className="bg-blueDark">

<div className="container">


        <div className="py-14  text-white text-center sm:flex sm:flex-row sm:justify-center sm:gap-16 ">
            <FooterList />
            <FooterList />
            <FooterList />
            <div className="flex flex-col items-center">
                <div>
                    <FooterLocation
                        images={location}
                        text='7480 Mockingbird Hill undefined'
                    />
                    <FooterLocation
                        images={phone}
                        text='(239) 555-0108'
                    />
                </div>

            </div>
            <div className="flex flex-col items-center">


                <div className="flex flex-row justify-between gap-5 p-5">
                    <FooterSocial
                        images={twitter}
                    />
                    <FooterSocial
                        images={facebook}
                    />
                    <FooterSocial
                        images={linkedin}
                    />
                </div>
            </div>
        </div>
        </div></div>
    )
}