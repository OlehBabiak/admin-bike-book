import { Scrollbars } from 'react-custom-scrollbars';
import BikeList from "../bikes/BikeList";

function ScrollBar(props) {
    return (
        <Scrollbars>
            <BikeList/>
        </Scrollbars>
    );
}

export default ScrollBar

