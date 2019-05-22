let bpEdit = document.getElementById("bpEdit").value;
let c_levelEdit = document.getElementById("c_levelEdit").value;
let tim_strukturEdit = document.getElementById("tim_strukturEdit").value;
let flaggingEdit = document.getElementById("flaggingEdit").value;
let tipe_inovatorEdit = document.getElementById("tipe_inovatorEdit").value;
let statusEdit = document.getElementById("statusEdit").value;


if(bpEdit !== ''){
    document.getElementById('bp').value = bpEdit;
    document.getElementById('c_level').value = c_levelEdit;
    document.getElementById('tim_struktur').value = tim_strukturEdit;
    document.getElementById('flagging').value = flaggingEdit;
    document.getElementById('tipe_inovator').value = tipe_inovatorEdit;
    document.getElementById('status').value = statusEdit;
}