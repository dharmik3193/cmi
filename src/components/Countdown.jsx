import { useState } from "react";
import { useEffect } from "react"

const Countdown = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    var second=10;

    useEffect(() => {
     
        var date = new Date();
        var day = date.getDay();

        if(day===0)
        {
            var todaydate = date.getDate()+1;
        }else if(day===1)
        {
            var todaydate = date.getDate();
            console.log(todaydate);
        }else if(day===2)
        {
            var todaydate = date.getDate()+6;
        }else if(day===3)
        {
            var todaydate = date.getDate()+5;
        }else if(day===4)
        {
            var todaydate = date.getDate()+4;
        }else if(day===5)
        {
            var todaydate = date.getDate()+3;
        }else if(day===6)
        {
            var todaydate = date.getDate()+2;
        }

        let x = setInterval(function () {

            let now = new Date()
            let year=2023
            let month = now.getMonth()
            // if(day===2)
            // {
            //     year = now.getFullYear()+1;
            // }
        
        
            let comingDate = new Date(`${month+1} ${todaydate}, ${year} 00:00:00`)
            // let now = new Date()
            let selisih = comingDate.getTime() - now.getTime()
        
            setDays(Math.floor(selisih / (1000 * 60 * 60 * 24)))
            setHours(Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            setMinutes(Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60)))
            setSeconds(Math.floor(selisih % (1000 * 60) / 1000))
        
            if (selisih < 0) {
              clearInterval(x)
              setDays(0)
              setHours(0)
              setMinutes(0)
              setSeconds(0)
            }
        
        
          }, 1000)
        

    }, [])

  

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
                                    <div class="counter-column"><span class="count">{days}</span><span class="title">Days</span></div> 
                                    <div class="counter-column"><span class="count">{hours}</span><span class="title">Hours</span></div>  
                                    <div class="counter-column"><span class="count">{minutes}</span><span class="title">Minutes</span></div>  
                                    <div class="counter-column"><span class="count">{seconds}</span><span class="title">Seconds</span></div>
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