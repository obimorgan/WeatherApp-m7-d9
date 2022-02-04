import { Container, Row, Col } from "react-bootstrap"
import { CurrentDate } from "./CurrentDate"

export const WeatherDetail = () => {
    return (
        <Container className="weather_container my-5">
            <h1 className="weather_text d-flex justify-content-center">Sunny</h1>
            <div >
                <h2 className="city_text">Melbourne</h2>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h4 className="date_text">{CurrentDate(new Date())}</h4>
                </div>
                <div>
                    <h3 className="temp_text">25c</h3>
                </div>
            </div>
        </Container>
    )
}