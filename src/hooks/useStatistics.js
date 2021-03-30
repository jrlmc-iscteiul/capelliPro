import {useState} from 'react';
import ServerApi from '../api/ServerCapelliPro';

export default () => {
  const [graph, setGraph] = useState([]);
  const [date, setDate] = useState([]);
  const [number, setNumber] = useState([]);

  const getStatistic = async () => {
    try {
      const response = await ServerApi.get('/api/Statistic/GetStatistic');
      console.log('ola');
      //console.log('graph: ' + response.data.graph);
      setGraph(response.data.graph);

      console.log('data: ' + response.data.date);
      setDate(response.data.date);

      console.log('numero estatisticas: ' + response.data.numberStatistics);
      setNumber(response.data.numberStatistics);
    } catch (err) {
      console.log(err);
    }
  };

  return [getStatistic, graph, number, date];
};
