//DOM Selection
//documnet.getElementById('')  -->mengembalikan element

const judul = document.getElementById('judul');
judul.style.color = "black";
judul.style.backgroundColor = "#aaa";
judul.style.textAlign = "center";
judul.innerHTML = "Mhaemnn"
judul.style.textShadow = "1px 1px 2px white";


//document.GetElementsByTagName('') --> mengembalikan HTML Colection
const paragraf = document.getElementsByTagName('p');
for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = "#eaeaea";
}

for (let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.color = "black";
    paragraf[i].style.textShadow = "1px 1px 2px white"
}


//document.getElementByClassName('') -->mengembalikan HTML Colection
const paragraf1 = document.getElementsByClassName('p1');
paragraf1[0].innerHTML = "DOM Javascript"


//document.querySelector('')

const paragraf4 = document.querySelector('#b p');
paragraf4.style.color = "red"
