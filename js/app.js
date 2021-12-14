const APIMERCADOLIBRE = 'https://api.mercadolibre.com/site_domains/mercadolibre.com.ar';
$.get(APIMERCADOLIBRE, (respuesta,estado) =>{
    if ( estado === 'success'){
        console.log('Entre wachin');
        console.log(respuesta);
    }
})