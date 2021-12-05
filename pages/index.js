import Hero from '../components/Hero';
import Events from '../components/Events';
import fetch from 'axios'

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
                  "memo": "lorem"
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
                  "memo": "abchdjksahjkd\n\n"
              },
              "createdTime": "2021-12-05T01:22:40.000Z"
          }
      ]
  }


function HomePage({ data }) {
  return (
    <>
      <Hero />
      <Events records={data.records}/>
    </>
  );
}

export async function getServerSideProps() {
  const airtable = `https://api.airtable.com/v0/appwUCl22CLGExUBy/Events%20Page?api_key=keyppY0G5BP9W5rH8`;

  const response = await fetch(airtable);
  const { data } = response;

  return {
    props: { data },
  };
}

export default HomePage;


