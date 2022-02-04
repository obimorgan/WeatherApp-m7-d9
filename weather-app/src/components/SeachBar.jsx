import { useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setWeatherToCityAction } from "../redux/actions"


export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch()

    return (
        <>
            <Form
                className="search_bar"
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="d-flex justify-content-center">Enter a city</Form.Label>
                    <Form.Control
                        type="text"
                        value={searchInput}
                        onChange={e => { setSearchInput(e.target.value); console.log("Im typing:", e.target.value) }}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                dispatch(setWeatherToCityAction((searchInput)))
                            }
                        }}
                    />
                    <Form.Text className="text-muted">
                        The weather man never lies.
                    </Form.Text>
                </Form.Group>
            </Form>
        </>
    )
}