function redirigirLogin(){
  window.location.assign('login.html');   
}

function irLugares(){
    window.location.assign('lugares.html');   
}

function registro(){
    usuario = document.getElementById('usuario').value;
    password = document.getElementById('password').value;
    correo = document.getElementById('correo').value;
    
    if(usuario == "" || password == "" || correo == ""){
        
                document.getElementById('usuario').style.border= "3px solid red";
                document.getElementById('password').style.border= "3px solid red";
                document.getElementById('correo').style.border= "3px solid red";
                mensaje = document.getElementById('mensaje');
                mensaje.style.opacity = "1";
                mensaje.style.transition = ".6s all";
                mensaje.innerHTML = "Error, debes llenar todos los campos";
                navigator.vibrate('100');
                navigator.vibrate('200');
    }
    else{
        
    localStorage.setItem('usuario' , usuario);
    localStorage.setItem('password' , password);
    localStorage.setItem('correo' , correo);

    mensaje = document.getElementById('mensaje');
                mensaje.style.opacity = "1";
                mensaje.style.transition = ".6s all";
                mensaje.innerHTML = "Usuario Registrado XDDDDD";
    
    setTimeout(
                    function()
                           {
                                window.location.assign('login.html')
                           },
                    2000);
    }         
}


function login(){
    correo = document.getElementById('correo').value;
    password = document.getElementById('password').value;
    
    correoAlmacenado = localStorage.getItem('correo');
    passwordAlmacenado = localStorage.getItem('password');
    
    if (correo == correoAlmacenado && password == passwordAlmacenado )
            {
                 
                contador = 0;
                localStorage.setItem('contador',contador)
             window.location.assign('main.html');    
            }
            else
            {  
                document.getElementById('correo').style.border= "3px solid red";
                 document.getElementById('password').style.border= "3px solid red";
                mensaje = document.getElementById('mensaje');
                navigator.vibrate('100');
                navigator.vibrate('200');
            }
}


 function geolocalizar()
        {
         
            navigator.geolocation.getCurrentPosition(localizacion);
            
        }
        
        function localizacion(posicion)
        {
           lat= posicion.coords.latitude;
           long = posicion.coords.longitude;
           grados = posicion.coords.heading;
            
            localStorage.setItem('lat',lat);
            localStorage.setItem('long',long);
            localStorage.setItem('grados',grados);
        }

function mapa(){
    geolocalizar();
    longitud = localStorage.getItem('lat');
    latitud = localStorage.getItem('long');
    
    document.getElementById('mostrarUbicacion').innerHTML="";
    
    ubicacion=document.getElementById('mostrarUbicacion');
    
    ubicacion.innerHTML='<img id="mapa" src="http://maps.googleapis.com/maps/api/staticmap?center='+longitud+','+latitud+'&zoom=15'+'&markers='+longitud+','+latitud+'|'+longitud+','+latitud+'&size=180x180">' 
}


function guardar(){    
    
    gps = '<img src="http://maps.googleapis.com/maps/api/staticmap?center='+longitud+','+latitud+'&zoom=15'+'&markers='+longitud+','+latitud+'|'+longitud+','+latitud+'&size=175x175">';
    lugar = document.getElementById('lugar').value;
    precio = document.getElementById('precio').value;
    calificacion = document.getElementById('calificacion').value;
    categoria = document.getElementById('categoria').value;      
    
    if(lugar == "" || precio == ""){
        
        document.getElementById('lugar').style.border= "3px solid red";
                 document.getElementById('precio').style.border= "3px solid red";
                mensaje = document.getElementById('mensaje');
                navigator.vibrate('100');
                navigator.vibrate('200');
                 mensaje = document.getElementById('mensaje');
                mensaje.style.opacity = "1";
                mensaje.style.transition = ".6s all";
                mensaje.innerHTML = "Error Faltan Campos por Llenar";
            
    }
    else{
        contador = localStorage.getItem('contador');
        
        localStorage.setItem('gps'+contador,gps);
            localStorage.setItem('lugar'+contador,lugar);
            localStorage.setItem('precio'+contador,precio);
            localStorage.setItem('calificacion'+contador,calificacion);
        localStorage.setItem('categoria'+contador,categoria);
        
         contador++;
        localStorage.setItem('contador',contador);   
        
    mensaje = document.getElementById('mensaje');
                mensaje.style.opacity = "1";
                mensaje.style.transition = ".6s all";
                mensaje.innerHTML = "Lugar Registrado Con Exito";
    }
}

function cargarLugares(){
 
     document.getElementById('lugaresAlmacenados').innerHTML="";
    
    cont = localStorage.getItem('contador');
    cont--;
    
    for(i=0;i<=cont;i++){
        gps = localStorage.getItem('gps'+cont);;
        lugar = localStorage.getItem('lugar'+cont);
        precio = localStorage.getItem('precio'+cont);
        calificacion = localStorage.getItem('calificacion'+cont);
        categoria = localStorage.getItem('categoria'+cont);
        
        ubicacion = document.getElementById('lugaresAlmacenados');
        ubicacion.innerHTML += '<div class="places">'+
                                gps+
                                '<p class="info">'+'El nombre del lugar es: '+lugar+'</p>'+
                                '<p class="info">'+'Lo que gastaste fue: '+precio+'</p>'+
                                '<p class="info">'+'Calificacion: '+calificacion+'</p>'+
                                '<p class="info">'+'Categoria: '+categoria+'</p>'+'<br>'+
                                '</div>'
    }
    /*
    while(cont <= 0)
    {
        gps = localStorage.getItem('gps'+cont);;
        lugar = localStorage.getItem('lugar'+cont);
        precio = localStorage.getItem('precio'+cont);
        calificacion = localStorage.getItem('calificacion'+cont);
        categoria = localStorage.getItem('categoria'+cont);
        
        ubicacion = document.getElementById('lugaresAlmacenados');
        ubicacion.innerHTML += '<div class="places">'+
                                gps+
                                '<p class="info">'+'El nombre del lugar es: '+lugar+'</p>'+
                                '<p class="info">'+'Lo que gastaste fue: '+precio+'</p>'+
                                '<p class="info">'+'Calificacion: '+calificacion+'</p>'+
                                '<p class="info">'+'Categoria: '+categoria+'</p>'+'<br>'+
                                '</div>'
     cont--;   
    }
    */
            
}
