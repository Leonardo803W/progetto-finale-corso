import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import imageA1 from '../img/antiche-meraviglie/Tempio di Artemide.jpg';
import imageA3 from '../img/antiche-meraviglie/Piramide di Cheope.jpg';
import imageA5 from '../img/antiche-meraviglie/Mausoleo di Alicarnasso.jpg';

// imageA la A serve per indicare le immagine delle meraviglie antiche

const HomeAnticheMeraviglieMondo = () => {

    //arrayOld per avere i titoli in un unico posto, sia in caso di cambiamento dei titoli o di toglierne qualcuno

    const arrayOld = ["Tempio di Artemide", "Piramide di Cheope", "Mausoleo di Alicarnasso" ]

    return (
        <>
            <h3>
                Quale meraviglia del mondo antico ti piacerebbe visitare?
            </h3>

            <section className='bigSection'>

                <div className='article'>
                    <Card.Img variant="top" src={imageA1} />
                    <Card.Body>
                        <h4>
                            {arrayOld[0]}
                        </h4>
                        <p>
                            Visita il Tempio di Artemide, un periptero con cella in pietra,
                            costruito nella seconda metà dell'VIII secolo a.C. o nel secondo quarto del VII secolo a.C.!
                        </p>
                        <Link to="/list">
                            <Button variant="primary">Prenota e vola!</Button>
                        </Link>
                    </Card.Body>
                </div>

                <div className='article'>
                    <Card.Img variant="top" src={imageA3} />
                    <Card.Body>
                        <h4>
                            {arrayOld[1]}
                        </h4>
                        <p>
                            Visita la Piramide di Cheope, secondo gli egittologi, è stata realizzata nel XXVI secolo a.C.,
                            una immensa tomba e ancora oggi non si sa tutto sia della sua storia sia della struttura interna!
                        </p>
                        <Link to="/list">
                            <Button variant="primary">Prenota e vola!</Button>
                        </Link>
                    </Card.Body>
                </div>

                <div className='article'>
                    <Card.Img variant="top" src={imageA5} />
                    <Card.Body>
                        <h4>
                            {arrayOld[2]}
                        </h4>
                        <p>
                            Visita il Mausoleo di Alicarnasso, è la monumentale tomba che Artemisia fece costruire per il marito, tra il 353 a.C. e il 350 a.C.,
                            in origine una struttura alta più di 15 metri, ma per via di terremoti nei secoli venne abbattuto, ma il sito è visitabile!
                        </p>
                        <Link to="/list">
                            <Button variant="primary">Prenota e vola!</Button>
                        </Link>
                    </Card.Body>
                </div>

            </section>
        </>
    );
}

export default HomeAnticheMeraviglieMondo;