import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import APIAccess from '../communication/APIAccess';

function Home() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    APIAccess.getFlowers()
    .then(x => {
      setFlowers(x.result);
    })
    .catch(e => {
      console.log(e);
      alert('Something went wrong!');
    })
  }, [])

  /*let flowers = [
    {
        name: "Acacia",
        picture: "https://habahram.blob.core.windows.net/flowers/acacia.jpg"
    },
    {
        name: "Alyssum",
        picture: "https://habahram.blob.core.windows.net/flowers/alyssum.jpg"
    },
    {
        name: "Amaryllis",
        picture: "https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"
    },
    {
        name: "Aster",
        picture: "https://habahram.blob.core.windows.net/flowers/aster.jpg"
    },
    {
        name: "Azalea",
        picture: "https://habahram.blob.core.windows.net/flowers/azalea.jpg"
    },
    {
        name: "Begonia",
        picture: "https://habahram.blob.core.windows.net/flowers/begonia.jpg"
    },
    {
        name: "Buttercup",
        picture: "https://habahram.blob.core.windows.net/flowers/buttercup.jpg"
    },
    {
        name: "Calluna",
        picture: "https://habahram.blob.core.windows.net/flowers/calluna.jpg"
    },
    {
        name: "Camellia",
        picture: "https://habahram.blob.core.windows.net/flowers/camellia.jpg"
    },
    {
        name: "Cardinal",
        picture: "https://habahram.blob.core.windows.net/flowers/cardinal.jpg"
    },
    {
        name: "Carnation",
        picture: "https://habahram.blob.core.windows.net/flowers/carnation.jpg"
    },
    {
        name: "Clover",
        picture: "https://habahram.blob.core.windows.net/flowers/clover.jpg"
    },
    {
        name: "Crown Imperial",
        picture: "https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"
    },
    {
        name: "Daffodil",
        picture: "https://habahram.blob.core.windows.net/flowers/daffodil.jpg"
    },
    {
        name: "Dahlia",
        picture: "https://habahram.blob.core.windows.net/flowers/dahlia.jpg"
    },
    {
        name: "Daisy",
        picture: "https://habahram.blob.core.windows.net/flowers/daisy.jpg"
    },
    {
        name: "Gladiolus",
        picture: "https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"
    },
    {
        name: "Lantana",
        picture: "https://habahram.blob.core.windows.net/flowers/lantana.jpg"
    },
    {
        name: "Lily",
        picture: "https://habahram.blob.core.windows.net/flowers/lily.jpg"
    },
    {
        name: "Lotus",
        picture: "https://habahram.blob.core.windows.net/flowers/lotus.jpg"
    },
    {
        name: "Marigold",
        picture: "https://habahram.blob.core.windows.net/flowers/Marigold.jpg"
    },
    {
        name: "Orchid",
        picture: "https://habahram.blob.core.windows.net/flowers/orchid.jpg"
    },
    {
        name: "Primrose",
        picture: "https://habahram.blob.core.windows.net/flowers/primrose.jpg"
    },
    {
        name: "Sunflower",
        picture: "https://habahram.blob.core.windows.net/flowers/sunflower.jpg"
    },
    {
        name: "Tickseed",
        picture: "https://habahram.blob.core.windows.net/flowers/tickseed.jpg"
    },
    {
        name: "Tulip",
        picture: "https://habahram.blob.core.windows.net/flowers/tulip.jpg"
    },
    {
        name: "Zinnia",
        picture: "https://habahram.blob.core.windows.net/flowers/zinnia.jpg"
    }
  ];*/

  var i = 0;
  return (
    <div className="bg-dark">
      <Container fluid="md">
        <Row>
          {flowers.map(
            (flower, i) => (
              <Col key={flower.name}>
                <Link to={`${i}`}>
                  <img src={flower.picture} alt={flower.name} />{" "}
                </Link>
                <div style={{ color: "white" }}>{flower.name}</div>
              </Col>
            ),
            (i = i + 1)
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
