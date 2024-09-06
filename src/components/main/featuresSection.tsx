import banner3 from "../../assets/img/banner3.png"
import feature1 from "../../assets/img/feature1.png"
import feature2 from "../../assets/img/feature2.png"
import feature3 from "../../assets/img/feature3.png"
import FeaturesCard from "./featuresCard"
import MainTitle from "./mainTitle"

export default function FeaturesSection() {
    return (
        <div className="py-6">
            <section className="py-6">
                <div>
                    <MainTitle
                        title = "Features"
                        description="Most calendars are 
                        designed for teams. "
                    />
                    <div className="px-4 h-52 w-full">
                        <img src={banner3} alt="" className="rounded-lg h-52 w-full" />
                    </div>
                </div>
                <div className="feature-blocs py-6">
                    <FeaturesCard
                        image={feature1}
                        title="OpenType features 
                Variable fonts"
                        description="Slate helps you see how 
                many more days you need 
                to work to reach your 
                financial goal."
                    />
                    <FeaturesCard
                        image={feature2}
                        title="Design with real data"
                        description="Slate helps you see how 
                many more days you need 
                to work to reach your 
                financial goal."
                    />
                    <FeaturesCard
                        image={feature3}
                        title="Fastest way to 
                take action"
                        description="Slate helps you see how 
                many more days you need 
                to work to reach your 
                financial goal."
                    />
                </div>

            </section>
        </div>

    )
}