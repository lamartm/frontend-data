// async function die de api endpoint (die de parameter url is) fetched en daarna de response converteerd naar json die opgeslagen wordt in de variabel data
export async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    }

