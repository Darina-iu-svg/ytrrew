console.log(navigator.userAgent);
alert(navigator.userAgent);


var clock =document.getElementById("clock");


function hexoClock(){
    var time = new Date();
    var h= (time.getHours()%12).toString();
    var n= time.getMinutes().toString();
    var s= time.getSeconds().toString();



    if (h.length<2){
        h="0" + h;
    }
    if (n.length<2){
        n="0" + n;
    }
    if (s.length<2){
        s="0" + s;
    }


    var clockString = h +":" + n +":"+ s+":";

    clock.textContent=clockString; 
}

setInterval(hexoClock, 1020);


function foo(){
        
        var arr = []; // создаем массив
        for(var i=0; i < 5; i++) {
    
            arr[i] = prompt('Введите любые числа', +i); // Заполняем массив
            if(arr[i] === null) { // если  нажимаем "Отмена"
                alert('Отмена');
                return;
            }
    
            if(arr[i] === '') { // если  имя не введено
                alert('Вы не указали имя');
                arr[i] = prompt('Введите любое имя'); 
            }
        }
    
        arrContainer.innerHTML = '';
        arrContainer.innerHTML = arr;

        alert(arr[i]);
    }
    function too(){
        var x= prompt("введите первое число");
        var y =prompt("введите второе число");
        var z= Math.min(x,y);
        alert(z);
    }

    function scwer(){
        var k= prompt("введите  число");
        var m =prompt("введите степень числа");
        var l= Math.pow(k,m);
        alert(l);
}
    


 