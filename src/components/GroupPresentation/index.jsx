import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container";
import styles from "./styles.module.css";
import classnames from "classnames";

const GroupPresentation = () => {
    const jumboStyles = classnames(styles.jumbo, 'text-light');
    const containerStyles = classnames(styles.container, "rounded")
    return (
        <div>
            <Jumbotron className={jumboStyles}>
                <Container>
                    <div className={containerStyles}>
                        <h1 className="pl-2">Brukerfeil</h1>
                        <p className={styles.paragraph}>Vi er en gjeng på seks kamerater som jobber sammen i gruppe.
                        Gruppen er en sammensveiset gjeng som er glad i teknologi og utvikling.
                        Medlemmene har blandede bakgrunner og erfaringer, men sammen utfyller vi hverandre.
                        Vi har jobbet sammen siden første semester, og har dermed god synergi og er ikke redd for å gi
                        konstruktiv kritikk for å oppnå høy kvalitet.
                        Vi har erfaring med systemutviklingsprosjekt fra start til slutt, og kunne tenke oss et
                        utviklingsprosjekt som inneholder alt fra analyse og design til implementering,
                        testing og deployment.</p>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default GroupPresentation
