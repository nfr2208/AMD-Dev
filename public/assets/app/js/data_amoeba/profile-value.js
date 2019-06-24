let AreaInovasiVal = document.getElementById("AreaInovasiVal").value;
let TipeInovasiVal = document.getElementById("TipeInovasiVal").value;
let StatusAmoebaVal = document.getElementById("StatusAmoebaVal").value;
let IncbAccVal = document.getElementById("IncbAccVal").value;
let TribeVal = document.getElementById("TribeVal").value;
let Status = StatusAmoebaVal ? 1 : 0;

if(AreaInovasiVal !== null){
    document.getElementById("AreaInovasi").value = AreaInovasiVal;
    document.getElementById("TipeInovasi").value = TipeInovasiVal;
    document.getElementById("StatusAmoeba").value = Status;
    document.getElementById("IncbAcc").value = IncbAccVal;
    document.getElementById("Tribe").value = TribeVal;
}