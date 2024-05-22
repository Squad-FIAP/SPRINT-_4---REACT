import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/agendamentos', { useNewUrlParser: true, useUnifiedTopology: true });

const agendamentoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  mensagem: String
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

app.post('/agendar-consulta', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;
    console.log('Agendamento recebido:', req.body);

    const novoAgendamento = new Agendamento({ nome, email, telefone, mensagem });
    novoAgendamento.save(err => {
      if (err) {
        res.status(500).send({ message: 'Ocorreu um erro ao realizar o agendamento.' });
      } else {
        res.status(200).send({ message: 'Agendamento realizado com sucesso!' });
      }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});