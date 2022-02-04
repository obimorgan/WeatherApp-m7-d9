
import { SearchBar } from './SeachBar'
import { WeatherDetail } from './WeatherDetail'
export const Home = () => {
    return (
        <div className="home" >
            <div className="home_sunny d-flex justify-content-center">
                <div className="flex-column components_container">
                    <SearchBar />
                    <WeatherDetail />
                </div>
            </div>
        </div>
    )
}