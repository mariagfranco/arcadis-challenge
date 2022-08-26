import { Collapse, Table, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import NewParamModal from '../NewParam/NewParamModal';
const axios = require('axios');

const { Panel } = Collapse;

interface spot {
  coords: {
      coordX: number,
      coordY: number
  },
  _id: string,
  name: string,
  params: param[],
}

interface param {
  paramName: string,
  value: number,
  unity: string,
  limit: string
}

const columns =  [
  {
    title: 'Nome',
    dataIndex: 'paramName',
    key: 'name',
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Unidade',
    dataIndex: 'unity',
    key: 'unity'
  },
  {
    title: 'Limite',
    dataIndex: 'limit',
    key: 'limit'
  },  
  {
    title: 'Data da coleta',
    dataIndex: 'date',
    key: 'date',
  }
];

const SpotCard: React.FC<{spots: spot[]}> = ({spots}) => {

  if (!spots.length) return (<></>)
  return (
    <Card style={{margin: 10, marginTop: 15}}>
    {spots.map((spot) => 
          <Collapse style={{backgroundColor: 'white', borderColor: 'white'}}>
            <Panel header={spot.name} key={spot.name} style={{margin: 10, backgroundColor: '#e8e8e8'}}>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Card title='Coordenada X' style={{width: '50%'}}>
                  <p>{spot.coords.coordX}</p>
                </Card>
                <Card title='Coordenada Y'  style={{width: '50%'}}>
                  <p>{spot.coords.coordY}</p>
                </Card>
              </div>
              <br></br>
              {spot.params.length ? <Table columns={columns} dataSource={spot.params} />: <></>}
              <NewParamModal id={spot._id}/>
            </Panel>
          </Collapse>
        )}
    </Card>
  );
};

export default SpotCard;