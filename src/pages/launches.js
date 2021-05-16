import { useState, useEffect } from "react";
import axios from "axios";

import Grid from "./../components/grid";
import Hero from "./../components/hero";
import Card from "../components/card";
import Section from "./../layout/section";
import Wrapper from "./../layout/wrapper";

const Launches = () => {
  const [data, setData] = useState({ launches: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/launches");
      setData({ launches: result.data });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Section>
        <Hero title="SpaceX Launches" />
      </Section>
      <Section>
        {loading && <div>loading....</div>}

        {!loading && (
          <Wrapper>
            <Grid>
              {data.launches.map((item, index) => (
                <Card
                  key={index.toString()}
                  image={item.links.patch.small}
                  title={item.name}
                  description={item.details}
                  link={item.links.webcast}
                />
              ))}
            </Grid>
          </Wrapper>
        )}
      </Section>
    </>
  );
};

export default Launches;
