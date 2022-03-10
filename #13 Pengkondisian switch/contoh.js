var pasanganBaik = prompt('Masukan Kreteria Pasangan: \n (cth: Rajin shalat, Berbakti kepada orang tua, Taat kepada allah, Open BO, Korupsi, Haramjadaha)')

switch (pasanganBaik) {

    case 'Rajin shalat':
    case 'Berbakti kepada orang tua':
    case 'Taat kepada allah':
        alert('Pasangan yang baik');
        break;

    case 'Open BO':
    case 'Korupsi':
    case 'Haramjadah':
        alert('Pasangan yang tidak baik');
        break;
    default:
        alert('yang anda masukan salah');
        break;
}