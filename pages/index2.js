import Hero from '../components/Hero';
import Events from '../components/Events';
import fetch from 'axios';
import Inn from '../components/Inn';
import { Flex, Heading } from '@chakra-ui/react';
import getArtist from '../lib/airtable';
import refactorData from '../lib/airtable';

function HomePage({ data }) {
  return (
    <>
      <Hero />
      <Events records={data.combined} />
      <Flex justifyContent='center'>
        <Inn />
      </Flex>

    </>
  );
}

export async function getServerSideProps() {
  const airtable = `https://api.airtable.com/v0/appwUCl22CLGExUBy/Events%20Page?api_key=keyppY0G5BP9W5rH8`;
  const response = await fetch(airtable);
  const { data } = response;
  const artistsUrl = `https://api.airtable.com/v0/appwUCl22CLGExUBy/Artists?maxRecords=20&view=Grid%20view`;
  const artistResponse = await fetch(artistsUrl, {
    headers: { authorization: 'Bearer keyppY0G5BP9W5rH8' },
  });

  data.artists = artistResponse.data.records;

  const { records, artists } = data;

  data.combined = refactorData(records, artists);
  data.combined.sort((a, b) => {
    return Date.parse(a.fields.eventStart) - Date.parse(b.fields.eventStart);
  });
  data.combined = data.combined;

  data.combined = data.combined.filter((event) => {
    const unixToday = Date.parse(new Date());
    const unixEvent = Date.parse(event.fields.eventStart);
    return unixToday < unixEvent;
  });

  return {
    props: { data },
  };
}

export default HomePage;
