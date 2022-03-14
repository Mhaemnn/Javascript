## Javascript & DOM

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

**Contoh Penggunaan Syntax DOM Sederhana**
```javascript
//DOM Selection
//documnet.getElementById('')  -->mengembalikan element

const title = document.getElementById('title');
title.style.color = "black";
title.style.backgroundColor = "#aaa";
title.style.textAlign = "center";
title.innerHTML = "Mhaemnn"
title.style.textShadow = "1px 1px 2px white";


//document.GetElementsByTagName('') --> mengembalikan HTML Colection
const parag = document.getElementsByTagName('p');
for (let i = 0; i < parag.length; i++) {
    parag[i].style.backgroundColor = "#eaeaea";
}

for (let i = 0; i < parag.length; i++) {
    parag[i].style.color = "black";
    parag[i].style.textShadow = "1px 1px 2px white"
}


//document.getElementByClassName('') -->mengembalikan HTML Colection
const parag1 = document.getElementsByClassName('p1');
parag1[0].innerHTML = "DOM Javascript"

```


