import React, { Component } from "react";
import { Row, Container, FlexRow } from "../components/Grid";
import TopCanvas from "../components/TopCanvas";
import API from "../utils/API";

class CanvasBrowse extends Component {

    state = {
        canvasArray: []
    }

    getCanvasArray = () => {
        API.getCanvasAll()
        .then((res) => {
          console.log(res.data)
          this.setState({canvasArray: res.data})})
        .catch((err) => console.log(err));
    }

    componentDidMount() {
        this.getCanvasArray()
    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                        <TopCanvas array={this.state.canvasArray}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CanvasBrowse;