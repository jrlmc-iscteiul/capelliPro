import {useState} from 'react';
import ServerApi from '../api/ServerCapelliPro';

export default () => {
  const [disease, setDisease] = useState([]);
  const [solution, setSolution] = useState([]);
  const [date, setDate] = useState([]);

  const getDiagnostic = async () => {
    try {
      const response = await ServerApi.get('/api/Diagnostic/GetDiagnostic');
      console.log('doenca: ' + response.data.disease);
      setDisease(response.data.disease);

      console.log('solucao: ' + response.data.solution);
      setSolution(response.data.solution);

      console.log('data: ' + response.data.date);
      setDate(response.data.date);
    } catch (err) {
      console.log(err);
    }
  };

  return [getDiagnostic, disease, solution, date];
};
