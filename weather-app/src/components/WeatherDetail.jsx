import { Container } from "react-bootstrap"
import { CurrentDate } from "./CurrentDate"
import { useSelector } from "react-redux"

export const WeatherDetail = () => {
    const data = useSelector(state => state.city.weather)
    console.log(data)
    return (
        <Container>
            {(typeof data.name !== "undefined")
                ?
                (<div className="weather_container my-3">
                    <h1 className="weather_text d-flex justify-content-center">{data?.weather[0].main}</h1>
                    <div>{data?.weather[0].icon}</div>
                    <div >
                        <h2 className="city_text">{data?.name}</h2>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="date_text">{CurrentDate(new Date())}</h4>
                        </div>
                        <div>
                            <h3 className="temp_text">{Math.floor(data?.main.temp_max)}°c</h3>
                        </div>
                    </div>
                </div>) : ("")}
        </Container>

    )
}