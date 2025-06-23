const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear()

function loader() {
    const loader = document.getElementsByClassName('loader');
    loader.remove

    window.parent.scrollTo(0,0);
}