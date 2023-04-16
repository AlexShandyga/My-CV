const photoResize = document.querySelector('.profile_photo');
photoResize.addEventListener('click', () => {
    photoResize.classList.toggle('photo-resize');

});


const elements = [
    { key: 'a', element: document.getElementById('a') },
    { key: 'b', element: document.getElementById('b') },
    { key: 'c', element: document.getElementById('c') },
    { key: 'd', element: document.getElementById('d') },
    { key: 'e', element: document.getElementById('e') }
];

elements.forEach(({ key, element }) => {
    window.addEventListener('keydown', (e) => {
        if (e.key === key) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

fetch('https://api.github.com/users/AlexShandyga/repos')
    .then(response => response.json())
    .then(json => {
        const projectList = document.querySelector('.project-list');
        json.forEach((item, index) => {

            console.log(item);
            const projects = document.createElement('li');



        })
    })



///////////////////////

const url = 'https://api.github.com/users/AlexShandyga/repos'

const repos = document.querySelector('.repos')

function createElement(data) {
    const repo = document.createElement('div');
    repo.classList.add('repo');

    const a = document.createElement('a');
    a.textContent = data.full_name;
    a.setAttribute('href', data.html_url);
    a.setAttribute('target', '_blank');

    repo.appendChild(a);

    if (data.description) {

        const desc = document.createElement('div');
        desc.textContent = data.description;
        repo.appendChild(desc);
    }

    repos.appendChild(repo);

}

function handleData(data) {
    data.forEach(d => {
        createElement(d)
    })
}

fetch(url)
    .then(response => response.json())
    .then(handleData)