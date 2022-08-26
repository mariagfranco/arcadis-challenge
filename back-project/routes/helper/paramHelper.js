 function paramValueIsOk(paramName, value) {

    let limit = '';
    switch(paramName){
        case 'Aluminio dissolvido':
            limit =  value > 0.1 ? 'Não atende' : 'Atende'
            break;
        case 'Arsênio total':
            limit =  value > 0.01 ? 'Não atende' : 'Atende'
            break;
        case 'Chumbo total':
            limit =  value > 0.01 ? 'Não atende' : 'Atende'
            break;
        case 'Cobre dissolvido':
            limit =  value > 0.009 ? 'Não atende' : 'Atende'
            break;
        case 'Escherichia coli':
            limit =  value > 1000 ? 'Não atende' : 'Atende'
            break;
        case 'Cromo total':
            limit =  value > 0.05 ? 'Não atende' : 'Atende'
            break;
        case 'Cádimio total':
            limit =  value > 0.001 ? 'Não atende' : 'Atende'
            break;
        case 'DBO':
            limite =  value > 5 ? 'Não atende' : 'Atende'
            break;            
    }

    return limit;
}

function setParamUnity(paramName){
    let unity = '';
  
    switch(paramName){
      case 'Escherichia coli':
        unity = 'NMP/100ml'
        break;
      case 'DBO':
        unity = 'mg O2/l'
        break;
      default:
        unity = 'mg/l'
    }

    return unity;
}

module.exports = {
    paramValueIsOk,
    setParamUnity
}