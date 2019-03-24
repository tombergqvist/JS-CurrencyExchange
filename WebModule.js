export async function fetchData(url) {
    let promise = await fetch(url);
    let data = await promise.json();
    return JSON.stringify(data);
}

export async function getData(){
    let json = await fetchData("https://www.swapi.co/api/films/?format=json")
    let films = JSON.parse(json).results

}