const getGifs = async(category) =>{
    const api_key = 'sms7E5xqtDUp55qw1ckFcslfkMDPEFvX';
    
    const limit = 15 ;
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`;
    
    const resp = await fetch( url );
    
    const {data} = await resp.json();
    
    const gifs =  data.map(img =>{
        return({
            id:img.id,
            title :img.title,
            url:img.images?.downsized_medium.url
        }) 
    })
    
    return gifs;
}

export {getGifs}