import { Container, Row, Image } from 'react-bootstrap'
import { SearchBar } from './SeachBar'
import { WeatherDetail } from './WeatherDetail'
export const Home = () => {
    return (
        <Container>
            <Row className=" d-flex justify-content-center">
                <Image src="https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                    className="sunny_img"
                />
                <div className="flex-column components_container">
                    <SearchBar />
                    <WeatherDetail />
                </div>
            </Row>
        </Container>
    )
}