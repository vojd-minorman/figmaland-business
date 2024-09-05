import banner3 from "../../assets/img/banner3.png"

function Main() {
    return (
        <div className="py-6">
        <section className="py-6">
            <div>
                <div className="text-center py-6">
                    <h1 className="text-5xl p-5">Features</h1>
                    <p className="text-3xl p-6 ">Most calendars are designed for teams.</p>
                </div>
                <div className="px-4 h-52 w-full">
                    <img src={banner3} alt="" className="rounded-lg h-52 w-full"/>
                </div>
            </div>
        </section>
        </div>

    )
}
export default Main
