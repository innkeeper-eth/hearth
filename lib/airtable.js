const getArtist = (artistRecId, artists) => (
    artists.find(artist => artist.id === artistRecId).fields
);

const updateRecord = (record, artists) => {
    if (record.fields.artists) {
        const newArtists = record.fields.artists.map(artist => getArtist(artist, artists));
        record.fields.artists = newArtists ? newArtists : '';
    }
    return record;
};

const refactorData = (records, artists) => (
    records.map(record => (
        record = { ...updateRecord(record, artists) }
    ))
);

export default refactorData;