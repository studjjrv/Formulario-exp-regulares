const formulario = document.getElementById('formulario')
const submit = document.getElementById('submit')


submit.addEventListener('click',(event)=>{
    event.preventDefault()

    const nombres = document.getElementById('nombres').value
    const apellidos = document.getElementById('apellidos').value
    const edad = document.getElementById('edad').value
    const nacimiento = document.getElementById('nacimiento').value //DD/MM/YY

    const cedula = document.getElementById('cedula').value
    const ip = document.getElementById('ip').value
    const mac = document.getElementById('mac').value
    const telefono = document.getElementById('telefono').value


    let regexNombres = /^[A-Za-záéíóúñÑ\s]+$/gi

  console.log(nombres.match(regexNombres))  

   /* let regexApellidos = /^[A-Za-záéíóúñÑ\s]+$/gi
    let regexEdad = /^(?:[1-9][0-9]?|1[0-4][0-9]|150)$/gi
    let regexNacimiento = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/+(0[1-9]|1[0-2])\/+(7[3-9]|8[0-9]|9[0-9]|0[0-3])$/gi
    let regexCedula = /^[0-9]{5,8}$/gi
    let regexIp = /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/gi
    let regexMac = /^([0-9a-zA-Z][0-9a-zA-Z])\:([0-9a-zA-Z][0-9a-zA-Z])\:([0-9a-zA-Z][0-9a-zA-Z])\:([0-9a-zA-Z][0-9a-zA-Z])\:([0-9a-zA-Z][0-9a-zA-Z])\:([0-9a-zA-Z][0-9a-zA-Z])$/gi
    let regexTelefono = /^([0-9]\d{3})\-([0-9]\d{2})\-([0-9]\d{1})\-([0-9]\d{1})$/gi



  if(nombres.match(regexNombres) && apellidos.match(regexApellidos) && edad.match(regexEdad) && nacimiento.match(regexNacimiento) && cedula.match(regexCedula) && ip.match(regexIp) && mac.match(regexMac) && telefono.match(regexTelefono)){
        window.open('acceso.html','width=800', 'height=600')   
    }else if(nombres.match(regexNombres) === null){
        alert('Ingresaste mal los nombres')
    }else if(apellidos.match(regexApellidos) === null){
        alert('Ingresaste mal los apellidos')
    }else if(edad.match(regexEdad) === null){
        alert('Ingresaste mal la edad')
    }else if(nacimiento.match(regexNacimiento) === null){
        alert('Ingresaste mal la fecha de nacimiento, el formato es (DD/MM/YY)')
    }else if(cedula.match(regexCedula) === null){
        alert('Ingresaste mal tu número de cédula, el formato es (12345678)')
    }else if(ip.match(regexIp) === null){
        alert('Ingresaste mal tu dirección IP, el formato es (123.456.78.90)')
    }else if(mac.match(regexMac) === null){
        alert('Ingresaste mal tu dirección MAC, el formato es (xx:xx:xx:xx:xx:xx)')
    }else{
        alert('Ingresaste mal tu número telefónico, el formato es (XXXX-XXX-XX-XX)')
    }*/

})
