export function validateParamData(paramName: string, paramValue: number, formatDate: string){
    if(paramName !== '' && paramValue && formatDate !== ''){
        return true;
      }
}

export function validateSpotData(name: string, x: number, y: number){
    if(name !== '' && x !== 0 && y !== 0){
        return true;
      }
}
