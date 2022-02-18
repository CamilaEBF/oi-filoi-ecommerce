import {Row, Spinner} from "react-bootstrap";
import Item from "./Item";


export default function ItemList(props) {
    return (<Row xs={1} md={3} xl={4} className="justify-content-center">
        {props.loading ?
            (<Spinner animation="border" role="status" className="col-12">
                <span className="visually-hidden">Loading...</span>
            </Spinner>)
            :
            (
                props.items.map((item) => {
                    return (<Item key={item.id} {...item}></Item>);
                }))
        }
    </Row>);
}