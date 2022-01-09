/*'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

}); */

function save(){
    var checkbox = document.getElementById('checkbox');
    localStorage.setItem('checkbox', checkbox.checked);
}

function load(){    
    var checked = JSON.parse(localStorage.getItem('checkbox'));
    document.getElementById("checkbox").checked = checked;
}

function wis(){
    location.reload();
    localStorage.clear()

}

load();