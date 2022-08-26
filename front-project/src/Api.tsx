const axios =  require('axios');

export async function createSpot(spotName: string, coordX: number, coordY: number) {
  try{
    await axios
    .post('http://localhost:1800/spot', {
      "name": spotName,
      "coords": {
          "coordX": coordX,
          "coordY": coordY
      }
  })
  } catch (error){
    return error
  }
  }

  export function createParam(spotId: string, paramName: string, value: number, date: string, unity: string) {
    axios
    .put(`http://localhost:1800/spot/${spotId}`, {
      "paramName": paramName,
      "value": value,
      "date": date,
      "unity": unity
  })
}

