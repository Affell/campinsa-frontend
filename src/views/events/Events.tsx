import { Col, Container, Image } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import "./Events.css";
import soireeOB from "../../assets/images/events/soireeOB.png";
import apremSport from "../../assets/images/events/apremSport.png";
import { useEffect, useState } from "react";
import opePetitDej from "../../assets/images/events/opePetitDej.png";
import jeuMidi from "../../assets/images/events/jeuMidi.png";
import soiree from "../../assets/images/events/soiree.png";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type Shotgun = {
  id: number;
  time: Date;
  eventName: string;
  eventDay: string;
};

function useCountdown(targetDate: Date) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function getTimeOfDay(eventTime: Date) {
  const hour = eventTime.getHours();
  if (hour < 10) {
    return "morning";
  } else if (hour >= 10 && hour < 14) {
    return "midday";
  } else {
    return "evening";
  }
}

// TODO
// Corriger cette fonction jour renvoyé correspond pas
const getCurrentDay = () => {
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const currentDate = new Date();
  console.log(days[currentDate.getDay()]);
  return days[currentDate.getDay()];
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
  {
    id: 3,
    time: new Date("2024-04-15T12:30:00Z"),
    eventName: "Rap Jeu",
    eventDay: "Lundi",
  },
  {
    id: 4,
    time: new Date("2024-03-29T21:00:00Z"),
    eventName: "Soirée Diverty Box",
    eventDay: "Lundi",
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

  // TODO
  // Le filtrage est mal fait, ça renvoie les événements liés au jour et pas vraiment à la date
  const dailyEvent = shotguns.filter(
    (event) => event.eventDay === getCurrentDay()
  );
  console.log(dailyEvent);
  const morningEvent = dailyEvent.filter(
    (event) => getTimeOfDay(event.time) === "morning"
  );
  const middayEvent = dailyEvent.filter(
    (event) => getTimeOfDay(event.time) === "midday"
  );
  const eveningEvent = dailyEvent.filter(
    (event) => getTimeOfDay(event.time) === "evening"
  );

  return (
    <>
      <NavBar />
      <Container className="fullscreen-container">
        <div className="head">
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
        </div>
        <div className="daily-event">
          <p className="today">Aujourd'hui</p>
          <Col className="events">
            <div className="morning">
              <Image src={opePetitDej} fluid />
              {morningEvent.map((event) => (
                <div key={event.id}>
                  <Image src={opePetitDej} fluid />
                  <p className="name">{event.eventName}</p>
                  <p className="">zfj</p>
                </div>
              ))}
            </div>
            <div className="midday">
              <Image src={jeuMidi} fluid />
              <p className="name">Rap Jeu</p>
              {middayEvent.map((event) => (
                <div key={event.id}>
                  <Image src={jeuMidi} fluid />
                  <p className="name">{event.eventName}</p>
                  <p className="">zfj</p>
                </div>
              ))}
            </div>
            <div className="evening">
              {/* <Image src={soiree} fluid />
              <p className="name">Soirée Diverty Box</p> */}
              {eveningEvent.map((event) => (
                <div key={event.id}>
                  <Image src={soiree} fluid />
                  <p className="name">{event.eventName}</p>
                  <p className="">zfj</p>
                </div>
              ))}
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
}
