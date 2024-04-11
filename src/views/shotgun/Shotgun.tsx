import { Col, Container, Image, Row } from "react-bootstrap";
import NavBar from "../../components/nav/Navbar";
import "./Shotgun.css";
import { useEffect, useRef, useState } from "react";
import { getFetch } from "../../core/api/fetch";
import { TimeLeft, calculateTimeLeft } from "../../core/utils/date";
import { Config } from "../../core/config/global";
import Footer from "../../components/nav/Footer";

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
    <div className="timer-container">
      {remainingTime(timeLeft) === "0d 0h 0m 0s" ? (
        <a
          href={Config.Urls.API + "/shotgun/link/" + id}
          className="shotgun-button"
        >
          <button type="button" className="btn btn-primary btn-sm">
            Shotgun
          </button>
        </a>
      ) : (
        <p>{remainingTime(timeLeft)}</p> // Encapsulez le texte dans une balise <p>
      )}
    </div>
  );
};

// const dailyShotguns: Shotgun[] = [
//   {
//     id: 1,
//     unlockTime: new Date("2024-04-10T18:19:00+02:00"),
//     imageBytes: "",
//     name: "Aprem Sportive",
//   },
//   {
//     id: 2,
//     unlockTime: new Date("2024-04-10T18:03:00+02:00"),
//     imageBytes: "",
//     name: "Diverty Box",
//   },
//   {
//     id: 3,
//     unlockTime: new Date("2024-04-15T21:30:00+02:00"),
//     imageBytes: "",
//     name: "Crepes",
//   },
// ];

export default function Shotgun() {
  const [loading, setLoading] = useState(false);
  const [dailyShotguns, setDailyShotguns] = useState<Shotgun[]>([]);
  const [thursday, setThursday] = useState<Shotgun>();
  const [friday, setFriday] = useState<Shotgun>();

  const loadingBar = useRef<any>(null);

  useEffect(() => {
    getFetch(
      "/shotgun/list",
      (data) => {
        if (data?.shotguns) {
          let temp: Shotgun[] = [];
          for (const s of data.shotguns) {
            temp.push({
              id: s.id,
              unlockTime: new Date(s.unlock_time * 1000),
              imageBytes: s.image_bytes,
              name: s.name,
            });
          }
          setDailyShotguns(temp);
        }

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
      (b) => { if (b) { loadingBar.current.continuousStart() } else { loadingBar.current.complete() } setLoading(b) },
      (err) => console.log(err)
    );
  }, []);

  return (
    <>
      <NavBar />
      <LoadingBar ref={loadingBar} color="#f11946" onLoaderFinished={() => loadingBar!.current!.decrease(100)} />
      <Container className="fullscreen-container">
        {!loading && <div className="head">
          <p className="title text-start">Shotguns</p>
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
                      <Timer date={friday.unlockTime} id={friday.id} />
                    </p>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </div>}
        {/* TODO 
        Reshape image
        Change Button Style
        Mobile version (responsive) */}
        {!loading && <div className="daily-event">
          <p className="today">Aujourd'hui</p>
          <Row
            xs={1}
            md={3}
            className={`g-4 ${dailyShotguns.length === 1 ? "justify-content-md-center" : ""
              }`}
          >
            {dailyShotguns.map((event, index) => (
              <Col key={index} className="event">
                <div className="event-card">
                  <Image
                    src={`data:image/png;base64,${event.imageBytes}`}
                    className="img-fluid image-daily-event"
                  />
                  <div className="event-info">
                    <p className="name">{event.name}</p>
                    <Timer date={event.unlockTime} id={event.id} />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>}
      </Container>
      <Footer />
    </>
  );
}
