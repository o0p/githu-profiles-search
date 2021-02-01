const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        createUserCard(data);
    } catch {
        console.log(error)
    }
};

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
    <div>
      <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="" class="avatar">
    </div>
    <div class="user-info">
      <h2>John Doe</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, possimus!</p>
      <ul>
        <li>300 <strong>Folowers</strong></li>
        <li>100 <strong>Following</strong></li>
        <li>30 <strong>Repos</strong></li>
      </ul>
      <div id="repos">
        <a href="#" class="repos">Repo 1</a>
        <a href="#" class="repos">Repo 2</a>
        <a href="#" class="repos">Repo 3</a>
      </div>
    </div>
  </div>
    `

    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;
    if (user) {
        getUser(user);
        search.value = '';
    }
});