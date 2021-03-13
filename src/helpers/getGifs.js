
// Petición http a la API
export const getGifs = async( category ) => {

    const apiKey = 'cUIhsSWHdEefHwmQiMslzqgsUGlabs4J';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=${ apiKey }&limit=12`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized?.url 
        }
    })

    // setImages( gifs );
    return gifs;

}
