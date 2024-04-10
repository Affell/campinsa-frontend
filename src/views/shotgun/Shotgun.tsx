import { Button, Col, Container, Image, Row } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import "./Shotgun.css";
import { useEffect, useState } from "react";
import { getFetch } from "../../core/api/fetch";
import { TimeLeft, calculateTimeLeft } from "../../core/utils/date";
import { Config } from "../../core/config/global";
import Footer from "../../components/nav/Footer";
import rapJeu from "../../assets/images/Rap-jeu.png";

type Shotgun = {
  id: number;
  unlockTime: Date;
  imageBytes: string;
  name: string;
};

function remainingTime(timeLeft: TimeLeft) {
  return `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
}

const Timer = ({ date, id }: { date: Date; id: number }) => {
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
    imageBytes: "",
    name: "Rap Jeu",
  },
  {
    id: 2,
    unlockTime: new Date("2024-04-15T21:30:00Z"),
    imageBytes: "",
    name: "Diverty Box",
  },
  {
    id: 3,
    unlockTime: new Date("2024-04-15T21:30:00Z"),
    imageBytes: "",
    name: "Crepes",
  },
];

export default function Events() {
  const [loading, setLoading] = useState(false);
  // const [dailyShotguns, setDailyShotguns] = useState<Shotgun[]>([]);
  const [thursday, setThursday] = useState<Shotgun>();
  const [friday, setFriday] = useState<Shotgun>();

  useEffect(() => {
    getFetch(
      "/shotgun/list",
      (data) => {
        // if (data?.shotguns) {
        //   let temp: Shotgun[] = [];
        //   for (const s of data.shotguns) {
        //     temp.push({
        //       id: s.id,
        //       unlockTime: new Date(s.unlock_time * 1000),
        //       imageBytes: s.image_bytes,
        //       name: s.name,
        //     });
        //   }
        //   setDailyShotguns(temp);
        // }

        if (data?.thursday) {
          setThursday({
            id: data.thursday.id,
            unlockTime: new Date(data.thursday.unlock_time * 1000),
            imageBytes: data.thursday.image_bytes,
            name: data.thursday.name,
          });
        }

        if (data?.friday) {
          setFriday({
            id: data.friday.id,
            unlockTime: new Date(data.friday.unlock_time * 1000),
            imageBytes: data.friday.image_bytes,
            name: data.friday.name,
          });
        }
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
          <Row xs={1} md={2} className="g-4 main-pictures">
            {thursday && (
              <Col>
                <div>
                  <Image
                    src={`data:image/png;base64,${thursday.imageBytes}`}
                    fluid
                  />
                  <div className="text-overlay top-left">
                    <p className="day">Jeudi</p>
                  </div>
                  <div className="text-overlay bottom-right">
                    <p className="name">{thursday.name}</p>
                    <p className="shotgun">
                      Shotgun Disponible dans: <br />
                      <Timer date={thursday.unlockTime} id={thursday.id} />
                    </p>
                  </div>
                </div>
              </Col>
            )}
            {friday && (
              <Col>
                <div>
                  <Image
                    src={`data:image/png;base64,${friday.imageBytes}`}
                    fluid
                  />
                  <div className="text-overlay top-right">
                    <p className="day">Vendredi</p>
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
          </Row>
        </div>
        {/* TODO 
        Reshape image
        Change Button Style
        Mobile version (responsive) */}
        <div className="daily-event">
          <p className="today">Aujourd'hui</p>
          <Row xs={1} md={3} className="g-4">
            {dailyShotguns.map((event, index) => (
              <Col key={index} className="event">
                <div className="event-card">
                  <Image src={rapJeu} className="img-fluid image-daily-event" />
                  <div className="event-info">
                    <p className="name">{event.name}</p>
                    <p className="shotgun">
                      Shotgun disponible dans: <br />
                      <Timer date={event.unlockTime} id={event.id} />
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}