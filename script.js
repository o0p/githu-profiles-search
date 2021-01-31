const APIURL = 'https://api.github.com/users/';

getUser('o0p');


async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        console.log(data);
    } catch {
        console.log(error)
    }

}