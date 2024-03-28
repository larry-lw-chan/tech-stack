export async function getRandomNumber() {
    // Fetch a random number between 0 and 100
    // (with a delay, so that we can see it)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (res.ok) {
        const data = await res.json();
        // console.log(data);
        // return data.id
        return Math.ceil(Math.random() * 10);  // Hacky solution
    } else {
        // Sometimes the API will fail!
        throw new Error('Request failed');
    }
}