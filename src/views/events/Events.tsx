import { Button, Col, Container } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import "./Events.css";
import { useEffect, useState } from "react";
import { getFetch } from "../../core/api/fetch";
import { TimeLeft, calculateTimeLeft } from "../../core/utils/date";
import { Config } from "../../core/config/global";

type Shotgun = {
  id: number;
  unlockTime: Date;
  day: string;
  imageBytes: string;
  name: string;
};

const Days = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

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

function remainingTime(timeLeft: TimeLeft) {
  return `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
}

const Timer = ({ date, id }: { date: Date; id: int }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(date));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <>
      {remainingTime(timeLeft) === "0d 0h 0m 0s" ? (
        <Button
          href={Config.Urls.API + "/shotgun/link/" + id}
          target="_blank"
        />
      ) : (
        remainingTime(timeLeft)
      )}
    </>
  );
};

const dailyShotguns: Shotgun[] = [
  {
    id: 1,
    unlockTime: new Date("2024-04-10T01:26:00+02:00"),
    day: "Lundi",
    imageBytes: "",
    name: "Rap Jeu",
  },
  {
    id: 2,
    unlockTime: new Date("2024-04-15T21:30:00Z"),
    day: "Lundi",
    imageBytes: "",
    name: "Diverty Box",
  },
];

export default function Events() {
  const [loading, setLoading] = useState(false);
  const [shotguns, setShotguns] =
    useState<Map<number, Map<string, Shotgun[]>>>();
  const [thursday, setTuesday] = useState<Shotgun>();
  const [friday, setFriday] = useState<Shotgun>();

  useEffect(() => {
    getFetch(
      "/shotgun/list",
      (data) => {
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
              name: s.name,
            });

            if (date.getDay() == 4) {
              setTuesday({
                id: s.id,
                unlockTime: date,
                day: Days[date.getDay()],
                imageBytes: s.image_bytes,
                name: s.name,
              });
            }

            if (date.getDay() == 5) {
              setFriday({
                id: s.id,
                unlockTime: date,
                day: Days[date.getDay()],
                imageBytes: s.image_bytes,
                name: s.name,
              });
            }
          }
        }

        setShotguns(temp);
      },
      setLoading,
      (err) => console.log(err)
    );
  }, []);

  return (
    <>
      <NavBar />
      <Container className="fullscreen-container">
        <div className="head">
          <p className="title text-start">évenements</p>
          {thursday && friday && (
            <Col className="main-pictures">
              <div>
                <img src={"data:image/png;base64," + thursday.imageBytes} />
                <div className="text-overlay top-left">
                  <p className="day">{thursday.day}</p>
                </div>
                <div className="text-overlay bottom-right">
                  <p className="name">{thursday.name}</p>
                  <p className="shotgun">
                    Shotgun Disponible dans: <br />
                    <Timer date={thursday.unlockTime} id={thursday.id} />
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
                    <Timer date={friday.unlockTime} id={friday.id} />
                  </p>
                </div>
              </div>
            </Col>
          )}
        </div>
        <div className="daily-event">
          <p className="today">Aujourd'hui</p>
          <Col className="events">
            {dailyShotguns.map((event, index) => (
              <div key={index} className="event">
                <img src={"data:image/png;base64," + event.imageBytes} />
                <p className="name">{event.name}</p>
                <p className="shotgun">
                  Shotgun disponible dans: <br />
                  <Timer date={event.unlockTime} id={event.id} />
                </p>
              </div>
            ))}
          </Col>
        </div>
      </Container>
    </>
  );
}
