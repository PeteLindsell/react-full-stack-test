import { useState, useEffect } from "react";
import axios from "axios";

import Grid from "./../components/grid";
import Hero from "./../components/hero";
import Card from "../components/card";
import Section from "./../layout/section";
import Wrapper from "./../layout/wrapper";

const Rockets = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/rockets");
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Section>
        <Hero title="SpaceX Rockets" />
      </Section>
      <Section>
        {loading && <div>loading....</div>}

        {!loading && (
          <Wrapper>
            <Grid>
              {data.map((item, index) => (
                <Card
                  key={index.toString()}
                  image={item.image}
                  title={item.name}
                  description={item.description}
                />
              ))}
            </Grid>
          </Wrapper>
        )}
      </Section>
    </>
  );
};

export default Rockets;
