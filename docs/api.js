// async function die de api endpoint (die de parameter url is) fetched en daarna de response converteerd naar json die opgeslagen wordt in de variabel data
export async function getData() {
    const response = await fetch('https://opendata.rdw.nl/resource/9c54-cmfx.json');
    const data = await response.json();
    return data;
    }

