import Hero from '../components/Hero';
import Events from '../components/Events';
import fetch from 'axios';
import Inn from '../components/Inn';
import { Flex } from '@chakra-ui/react';
import getArtist from '../lib/airtable';
import refactorData from '../lib/airtable';

const mockData = {
  "records": [
      {
          "id": "recSwFKrqUSsIlDpm",
          "fields": {
              "ID": 1,
              "eventStart": "2021-12-07T20:00:00.000Z",
              "title": "NFT Remix Night",
              "Round": [
                  "recyzzOMEaC9kyPtU"
              ],
              "memo": "@pipalukdotio is remixing your NFT live to the music!",
              "artists": [
                  "recfnZEa9nZ6tefkK",
                  "recZ0FwETn29tapon"
              ]
          },
          "createdTime": "2021-12-05T00:08:20.000Z"
      },
      {
          "id": "reczhXkBH52IATIqD",
          "fields": {
              "ID": 4,
              "eventStart": "2021-12-09T20:00:00.000Z",
              "title": "NFT Remix Night",
              "Round": [
                  "recyzzOMEaC9kyPtU"
              ],
              "memo": "Last night of the week to remix your NFT live to the music!"
          },
          "createdTime": "2021-12-05T01:22:40.000Z"
      }
  ],
  "artists": [
      {
          "id": "recfnZEa9nZ6tefkK",
          "fields": {
              "Name": "pipaluk.io",
              "Events Page": [
                  "recSwFKrqUSsIlDpm"
              ],
              "twitter": "https://twitter.com/pipalukdotio"
          },
          "createdTime": "2021-12-05T11:08:41.000Z"
      },
      {
          "id": "recW0QhySij12smpt",
          "fields": {
              "Name": "egr3g0re",
              "soundcloud": "https://soundcloud.com/egr3g0re"
          },
          "createdTime": "2021-12-05T11:45:16.000Z"
      },
      {
          "id": "recZ0FwETn29tapon",
          "fields": {
              "Name": "dean.land",
              "Events Page": [
                  "recSwFKrqUSsIlDpm"
              ]
          },
          "createdTime": "2021-12-05T14:58:13.000Z"
      }
  ]
}


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
  const artistsUrl = `https://api.airtable.com/v0/appwUCl22CLGExUBy/Artists?maxRecords=3&view=Grid%20view`;
  const artistResponse = await fetch(artistsUrl, {
    headers: { authorization: 'Bearer keyppY0G5BP9W5rH8' }
  });

  data.artists = artistResponse.data.records;

  // const data = mockData

  const { records, artists } = data;



  data.combined = refactorData(records, artists);
  data.combined.sort((a, b) => {
    return Date.parse(a.fields.eventStart) - Date.parse(b.fields.eventStart)
  })
  data.combined = data.combined.slice(-2)

  return {
    props: { data },
  };
}

export default HomePage;


