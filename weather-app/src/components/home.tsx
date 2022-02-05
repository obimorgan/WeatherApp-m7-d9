
import { SearchBar } from './SeachBar'
import { WeatherDetail } from './WeatherDetail'
import { RootStateOrAny, useSelector } from "react-redux"

export const Home = () => {
    const data = useSelector((state: RootStateOrAny) => state.city.weather)
    // console.log(data.weather[0].main)
    return (
        <main className="home">
            <div
                className=
                {
                    data.weather[0].main === 'Clouds' ? "home_cloudy d-flex justify-content-center" :
                        data.weather[0].main === 'Rain' ? "home_rainy d-flex justify-content-center" :
                            data.weather[0].main === 'Drizzle' ? "home_drizzle d-flex justify-content-center" :
                                data.weather[0].main === 'Snow' ? "home_snow d-flex justify-content-center"
                                    : "home_sunny d-flex justify-content-center"
                }
            >
                <div className="flex-column components_container">
                    <SearchBar />
                    <WeatherDetail />
                </div>
            </div>
        </main >
    )
}