async  function request(url){
    if(url === 'http://error.com'){
        throw new Error('network error');
    }


    return {
        messsage: 'succes'
    }
} 

module.exports = request;