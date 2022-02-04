import { useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setWeatherToCityAction } from "../redux/actions"


export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")
    // const dispatch = useDispatch()

    const handlesubmit = async (e) => {
        // e.preventDefault()
        try {
            let response = await fetch(
                `api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=75efdabcaec02d5334d12a7b5aecd8dd`
            );
            if (response.ok) {
                console.log("Im fetching");
                let data = await response.json();
                // dispatch({
                //     type: SET_WEATHER,
                //     payload: data,
                // });
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Form className="search_bar" onSubmit={handlesubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="search_header">
                        Enter your city
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={searchInput}
                        onChange={e => { setSearchInput(e.target.value); console.log("Im typing:", e.target.value) }}
                    // onKeyDown={e => {
                    //     if (e.key === 'Enter') {
                    //         dispatch(setWeatherToCityAction((searchInput)))
                    //     }
                    // }}
                    />
                    <Form.Text className="text-muted">
                        The weather man never lies.
                    </Form.Text>
                </Form.Group>
            </Form>
        </>
    )
}