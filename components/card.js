import React, { Component } from "react";
import { MDBIcon, MDBCol, MDBCard, MDBCardBody, MDBCardText } from "mdbreact";
import PropTypes from "prop-types";
import "../static/css/dashboard.css";

class Cards extends Component{
    render(){
        const {config, content} = this.props;
        return(
            <MDBCol sm="4" className="py-3 mt-2 ">
                <MDBCard className="hoverable cardShadow">
                    <MDBCardBody className="pt-2 overflowHidden">
                        <MDBCardText className="pb-3">
                            <span className={`iconHovered p-3 ${config.color}-gradient`}>
                            <MDBIcon className={`white-text`} size="2x" icon={config.icon} />
                            </span>
                            <span className="float-right">
                            {config.header}
                            </span>
                        </MDBCardText>
                        {content}
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        );
    }
}
Cards.propTypes = {
    config: PropTypes.object.isRequired,
    content: PropTypes.node.isRequired,
  }
export default Cards;