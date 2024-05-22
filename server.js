import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const filePath = path.resolve('agendamentos.json');

// Inicializar o arquivo JSON se ele não existir
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

const readAgendamentos = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeAgendamentos = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

app.post('/agendar-consulta', (req, res) => {
  const { nome, exame, email, telefone, mensagem } = req.body;
  console.log('Agendamento recebido:', req.body);

  const agendamentos = readAgendamentos();
  const novoAgendamento = { id: Date.now(), nome, exame, email, telefone, mensagem };
  agendamentos.push(novoAgendamento);

  writeAgendamentos(agendamentos);

  res.status(200).send({ message: 'Agendamento realizado com sucesso!', agendamento: novoAgendamento });
});

app.get('/agendamentos', (req, res) => {
  const agendamentos = readAgendamentos();
  res.status(200).send(agendamentos);
});

app.get('/agendamento/:id', (req, res) => {
  const agendamentos = readAgendamentos();
  const agendamento = agendamentos.find(a => a.id === parseInt(req.params.id, 10));
  if (agendamento) {
    res.status(200).send(agendamento);
  } else {
    res.status(404).send({ message: 'Agendamento não encontrado' });
  }
});

app.delete('/agendamento/:id', (req, res) => {
  let agendamentos = readAgendamentos();
  agendamentos = agendamentos.filter(a => a.id !== parseInt(req.params.id, 10));
  writeAgendamentos(agendamentos);
  res.status(200).send({ message: 'Agendamento excluído com sucesso' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.put('/agendamento/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { nome, exame, email, telefone, mensagem } = req.body;
  
  let agendamentos = readAgendamentos();
  const index = agendamentos.findIndex(a => a.id === id);
  if (index !== -1) {
    agendamentos[index] = { id, nome, exame, email, telefone, mensagem };
    writeAgendamentos(agendamentos);
    res.status(200).send({ message: 'Agendamento atualizado com sucesso!' });
  } else {
    res.status(404).send({ message: 'Agendamento não encontrado' });
  }
});
