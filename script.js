let num1 = document.getElementById('num1').value;
let ans = document.getElementById('write').value;
let vari = '';
const showout = document.getElementById('output')
const getid = document.querySelector('getid')
const write = document.getElementById('write')
const writevalue = document.getElementById('write').value;
const printvar = document.getElementById('printvar')
const showoutput = document.getElementById('showoutput')
let type = 0;

function showoutrun() {
    showout.innerText = ans;
}

function createvar() {
    vari = writevalue;
    ans = vari;
}

function inputshow() {
    if (type == 1) {
        showoutput.style.display = 'none';
    }
    
    if (num1 == 'write:') {
        write.style.display = 'block';
        type = 0;
        console.log(type)
    }
    else if (num1 == 'createvar:') {
        write.style.display = 'block';
        printvar.style.display = 'block';
        type = 1;
    }
}

function getidrun() {
    console.log(num1)
}

