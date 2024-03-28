import { Col, Container, Image } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import "./Events.css";
import soireeOB from "../../assets/images/events/soireeOB.png";
import apremSport from "../../assets/images/events/apremSport.png";
import { useEffect, useState } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

type Shotgun = {
  id: number;
  time: Date;
  eventName: string;
  eventDay: string;
};

const shotguns: Shotgun[] = [
  {
    id: 1,
    time: new Date("2024-04-19T21:30:00Z"),
    eventName: "INSA Boom Boom",
    eventDay: "Vendredi",
  },
  {
    id: 2,
    time: new Date("2024-04-18T15:00:00Z"),
    eventName: "Aprem Sportive",
    eventDay: "Jeudi",
  },
];

export default function Events() {
  const eventFriday = shotguns.filter(
    (shotgun) => shotgun.eventDay === "Vendredi"
  )[0];
  const countdownFriday = useCountdown(eventFriday.time);

  const eventThursday = shotguns.filter(
    (shotgun) => shotgun.eventDay === "Jeudi"
  )[0];
  const countdownThursday = useCountdown(eventThursday.time);

  return (
    <>
      <NavBar />
      <Container className="fullscreen-container">
        <p className="title text-start">{"événements".toUpperCase()}</p>
        <Col className="main-pictures">
          <div className="soiree-ob">
            <Image src={soireeOB} fluid />
            <div className="text-overlay top-left">
              <p className="day">{eventThursday.eventDay.toUpperCase()}</p>
            </div>
            <div className="text-overlay bottom-right">
              <p className="name">{eventThursday.eventName}</p>
              <p className="shotgun">
                Shotgun Disponible dans: <br />
                {`${countdownThursday.days}d ${countdownThursday.hours}h ${countdownThursday.minutes}min ${countdownThursday.seconds}sec`}
              </p>
            </div>
          </div>
          <div className="aprem-sport">
            <Image src={apremSport} fluid />
            <div className="text-overlay top-right">
              <p className="day">{eventFriday.eventDay.toUpperCase()}</p>
            </div>
            <div className="text-overlay bottom-left">
              <p className="name">{eventFriday.eventName}</p>
              <p className="shotgun">
                Shotgun Disponible dans: <br />
                {`${countdownFriday.days}d ${countdownFriday.hours}h ${countdownFriday.minutes}min ${countdownFriday.seconds}sec`}
              </p>
            </div>
          </div>
        </Col>
      </Container>
    </>
  );
}
