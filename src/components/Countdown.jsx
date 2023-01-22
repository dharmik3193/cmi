const Countdown = () => {
    return (
        <>
            {/* Countdown Section */}
            <section className="countdown-section">
                <div
                    className="bg-image zoom-two"
                    style={{ backgroundImage: "url(./images/background/2.jpg)" }}
                />
                <div className="auto-container">
                    <div className="content-box">
                        <div className="sec-title light text-center">
                            <span className="sub-title">Book your seat now</span>
                            <h2>Upcoming study trip</h2>
                        </div>
                        <div className="time-counter wow fadeInUp">
                            <div className="time-countdown" data-countdown="2/2/2023" >
                                    <div class="counter-column"><span class="count">10</span><span class="title">Days</span></div> 
                                    <div class="counter-column"><span class="count">10</span><span class="title">Hours</span></div>  
                                    <div class="counter-column"><span class="count">16</span><span class="title">Minutes</span></div>  
                                    <div class="counter-column"><span class="count">21</span><span class="title">Seconds</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Deal Section */}
        </>

    )
}

export default Countdown;