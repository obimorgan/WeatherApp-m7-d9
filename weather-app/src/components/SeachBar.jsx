import { Form } from "react-bootstrap"
export const SearchBar = () => {
    return (
        <>
            <Form
                className="search_bar"
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="d-flex justify-content-center">Enter a city</Form.Label>
                    <Form.Control type="email" />
                    <Form.Text className="text-muted">
                        The weather man never lies.
                    </Form.Text>
                </Form.Group>
            </Form>
        </>
    )
}