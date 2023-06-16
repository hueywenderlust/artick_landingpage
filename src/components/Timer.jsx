 import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
//  import '../index.css'
//  import Back from '../../public/img/bg.jpeg'
 import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import styled from "styled-components"

const Header = styled.h1`
  color: white;
  margin-bottom: 3%;
  scroll-snap-align: center;
  display: flex;
//   flex-direction: column;
  align-items: center;
//   justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;


    var date1 = new Date();
    var date2 = new Date("06/30/2023");
    
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    const DAYS_IN_MS = Difference_In_Days * 24 * 60 * 60 * 1000;
  
    const NOW_IN_MS = new Date().getTime();

    console.log("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days);
      

  const dateTimeAfterXDays = NOW_IN_MS + DAYS_IN_MS;

  console.log(dateTimeAfterXDays);

 
 const Timer = () => {
     return (
         <section className="flex flex-col justify-center items-center h-screen md:w-screen md:h-screen">
             <div className="bg-black/70 absolute w-full h-full"></div>
             <div className="absolute flex flex-col items-center text-center">
                 <Header>First Come First Serve</Header>

                 <FlipClockCountdown 
                  to={dateTimeAfterXDays + 5000}
                    //  to={new Date().getTime() + 24 * 3600 * 1000 + 5000} 
                     labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                     duration={0.5} 
                 />
             </div>
         </section>
     )
 }

 export default Timer
