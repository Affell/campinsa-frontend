import { Col, Container, Image } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import "./Events.css";
import soireeOB from "../../assets/images/events/soireeOB.png";
import apremSport from "../../assets/images/events/apremSport.png";
import { useEffect, useState } from "react";
import opePetitDej from "../../assets/images/events/opePetitDej.png";
import jeuMidi from "../../assets/images/events/jeuMidi.png";
import soiree from "../../assets/images/events/soiree.png";
import { getFetch } from "../../core/api/fetch";
import { TimeLeft, calculateTimeLeft } from "../../core/utils/date";

type Shotgun = {
  id: number;
  unlockTime: Date;
  day: string;
  imageBytes: string;
  formLink: string;
  name: string;
  description: string;
  ended: boolean;
};

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

const Days = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
]

// TODO
// Corriger cette fonction jour renvoyé correspond pas
const getCurrentDay = () => {
  const currentDate = new Date();
  return Days[currentDate.getDay()];
};

function remainingTime(timeLeft: TimeLeft) {
  return `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
}

const Timer = ({ date }: { date: Date }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(date));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return <>{remainingTime(timeLeft)}</>;
};

// const shotguns: Shotgun[] = [
//   {
//     id: 1,
//     time: new Date("2024-04-19T21:30:00Z"),
//     eventName: "INSA Boom Boom",
//     eventDay: "Vendredi",
//   },
//   {
//     id: 2,
//     time: new Date("2024-04-18T15:00:00Z"),
//     eventName: "Aprem Sportive",
//     eventDay: "Jeudi",
//   },
//   {
//     id: 3,
//     time: new Date("2024-04-15T12:30:00Z"),
//     eventName: "Rap Jeu",
//     eventDay: "Lundi",
//   },
//   {
//     id: 4,
//     time: new Date("2024-03-29T21:00:00Z"),
//     eventName: "Soirée Diverty Box",
//     eventDay: "Lundi",
//   },
// ];

export default function Events() {

  const [loading, setLoading] = useState(false);
  const [shotguns, setShotguns] = useState<Map<number, Map<string, Shotgun[]>>>();
  const [tuesday, setTuesday] = useState<Shotgun>();
  const [friday, setFriday] = useState<Shotgun>();

  useEffect(() => {
    getFetch("/shotgun/list", (data) => {
      const temp: Map<number, Map<string, Shotgun[]>> = new Map();
      if (data?.shotguns) {
        for (const s of data.shotguns) {
          const date = new Date(s.unlock_time * 1000);
          if (!temp.has(date.getDay())) {
            temp.set(date.getDay(), new Map());
          }
          if (!temp.get(date.getDay())!.has(getTimeOfDay(date))) {
            temp.get(date.getDay())!.set(getTimeOfDay(date), []);
          }
          temp.get(date.getDay())!.get(getTimeOfDay(date))!.push({
            id: s.id,
            unlockTime: date,
            day: Days[date.getDay()],
            imageBytes: s.image_bytes,
            formLink: s.formLink,
            name: s.name,
            description: s.description,
            ended: s.ended
          });

          if (date.getDay() == 4) {
            setTuesday({
              id: s.id,
              unlockTime: date,
              day: Days[date.getDay()],
              imageBytes: s.image_bytes,
              formLink: s.formLink,
              name: s.name,
              description: s.description,
              ended: s.ended
            });
          }

          if (date.getDay() == 5) {
            setFriday({
              id: s.id,
              unlockTime: date,
              day: Days[date.getDay()],
              imageBytes: s.image_bytes,
              formLink: s.formLink,
              name: s.name,
              description: s.description,
              ended: s.ended
            });
          }

        }
      }

      setShotguns(temp)
    }, setLoading, (err) => console.log(err));
  }, [])

  return (
    <>
      <NavBar />
      <Container className="fullscreen-container">
        <div className="head">
          <p className="title text-start">évenements</p>
          {tuesday && friday && <Col className="main-pictures">
            <div>
              <img src={"data:image/png;base64," + tuesday.imageBytes} />
              <div className="text-overlay top-left">
                <p className="day">{tuesday.day}</p>
              </div>
              <div className="text-overlay bottom-right">
                <p className="name">{tuesday.name}</p>
                <p className="shotgun">
                  Shotgun Disponible dans: <br />
                  <Timer date={tuesday.unlockTime} />
                </p>
              </div>
            </div>
            <div>
              <img src={"data:image/png;base64," + friday.imageBytes} />
              <div className="text-overlay top-right">
                <p className="day">{friday.day}</p>
              </div>
              <div className="text-overlay bottom-left">
                <p className="name">{friday.name}</p>
                <p className="shotgun">
                  Shotgun Disponible dans: <br />
                  <Timer date={friday.unlockTime} />
                </p>
              </div>
            </div>
          </Col>}
        </div>
        {/* <div className="daily-event">
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
        {/* {eveningEvent.map((event) => (
          <div key={event.id}>
            <Image src={soiree} fluid />
            <p className="name">{event.name}</p>
            <p className="">{event.description}</p>
          </div>
        ))}
      </div>
    </Col >
        </div > */}
      </Container >
    </>
  );
}
