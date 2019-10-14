import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import styles from "./styles.module.css";
import classnames from "classnames";
import linkedIn from "../../svg/linkedin.svg";
import github from "../../svg/github.svg";
import vegardpic from "../../images/vegard.JPG"
import ingvepic from "../../images/ingve.JPG"
import gormpic from "../../images/gorm.JPG"
import espenpic from "../../images/espen.JPG"
//import vegardpic from "../../images/vegard.JPG"
//import vegardpic from "../../images/vegard.JPG"
const members = require("../../memberDetails.json");

const pictures = {
    vegard: vegardpic,
    gorm: gormpic,
    ingve: ingvepic,
    espen: espenpic
}

const MemberPresentation = () => {
    const cardStyles = classnames(styles.card, '')
    return (
        <Container>
            <h1 className="text-center mb-4 pb-4">Medlemmene:</h1>
            <Row className="mt-4">
                <CardDeck>
                    {members.map(member => (
                        <Col className="mb-4" lg="4" key={member.name}>
                            <Card className={cardStyles} >
                                <Card.Img style={{ minHeight: "344px" }} variant="top" src={pictures[member.imgUrl]} />
                                <Card.Body>
                                    <Card.Header className={styles.headerTitle}>{member.name}</Card.Header>
                                    <hr />
                                    <Card.Text className="mt-2">{member.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="text-center">
                                        <Card.Link href={member.linkedInUrl}><img className={styles.svg} alt="Link to members LinkedIn profile" src={linkedIn} /></Card.Link>
                                        <Card.Link href={member.githubUrl}><img className={styles.svg} alt="Link to members GitHub profile" src={github} /></Card.Link>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </CardDeck>
            </Row>
        </Container>
    )
}

export default MemberPresentation;