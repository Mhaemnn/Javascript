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

**Contoh Penggunaan Syntax DOM Selection**
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Dom Selection</title>
  <style>
    * {
      border: 2px solid #dedede;
      padding: 15px;
      margin: 15px;
    }

    html {
      margin: 0;
      padding: 0;
    }

    body {
      max-width: 600px;
      margin: 30px auto;
      font-family: sans-serif;
      color: #333;
    }
  </style>
</head>

<body>

  <h1 id="title">Hello World</h1>
  <div id="container">
    <section id="a">
      <p class="parag">paragraf 1</p>
      <a href="=https://github.com/Mhaemnn">Github Muhaemin Iskandar</a>
      <p class="parag">paragraf 2</p>
      <p class="parag">paragraf 3</p>
    </section>
    <section id="b">
      <p>paragraf 4</p>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </section>
  </div>

  <script src="script.js"></script>
</body>

</html>
```
<hr>

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


