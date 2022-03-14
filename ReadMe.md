## Javascipt & Javascript DOM

__javascript__: <br>
__javascript DOM__: Adalah antarmuka pemrograman untuk HTML yang mempresentasikan halaman web, sehingga program dapat mengubah dan memanipulasi strukturnya 
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"> __-Mozilla__</a>

<ul>
    <li>Antarmuka pemrograman berbasis object yang mempresentasikan dokumet web</li>
    <li>DOM membuat seluruh komponen dari halaman web dapat diakses & dimanipulasi</li>
    <li>komponen</li>
        <ul>
        <li>Element HTML</li>
        <li>Atribut</li>
        <li>Text</li>
        <li>dll</li>
        </ul>
</ul>

```javascript
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

```