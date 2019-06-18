let BPVal = document.getElementById("BPVal").value;
let NatureStreamVal = document.getElementById("NatureStreamVal").value;
let TipeInovatorVal = document.getElementById("TipeInovatorVal").value;
let TimStrukturVal = document.getElementById("TimStrukturVal").value;
let FlaggingVal = document.getElementById("FlaggingVal").value;
let UnitKerjaAsalVal = document.getElementById("UnitKerjaAsalVal").value;
let UnitKerjaSaatIniVal = document.getElementById("UnitKerjaSaatIniVal").value;
let StatusVal = document.getElementById("StatusVal").value;
let Status = StatusVal ? 1 : 0;

if(BPVal !== null){
    document.getElementById("BP").value = BPVal;
    document.getElementById("NatureStream").value = NatureStreamVal;
    document.getElementById("TipeInovator").value = TipeInovatorVal;
    document.getElementById("TimStruktur").value = TimStrukturVal;
    document.getElementById("FlaggingId").value = FlaggingVal;
    document.getElementById("Status").value = Status;
    document.getElementById("UnitKerjaAsalId").value = UnitKerjaAsalVal;
    document.getElementById("UnitKerjaSaatIniId").value = UnitKerjaSaatIniVal;
}