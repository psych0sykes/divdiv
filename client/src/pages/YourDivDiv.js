import React, { Component } from "react";
import { Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";
import API from "../utils/API";
import ProfileTabs from "../components/ProfileTabs";



class YourDivDiv extends Component {

    state = {
        username: ""
    }

    status = () => {
        API.loggedIn()
        .then((res) => {
        //   console.log(res.data.username)
          this.setState({username: res.data.username})})
        .catch((err) => console.log(err));
    }

    componentDidMount () {
        this.status()
    }

    render() {
        return(
            <div>
                <Container>
                    <FlexRow wrap="nowrap">
                        <Icon size="25"/>
                        <Slogan>your divdiv</Slogan>
                        <Icon size="25"/>
                    </FlexRow>
                    <ProfileTabs username={this.state.username}/>
                </Container>
            </div>
        );
    }
}

export default YourDivDiv;