// server.js (versão corrigida com sintaxe 'import')

import 'dotenv/config'; // Carrega as variáveis do .env
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3001;

// Verifica se a chave da API do Resend está no .env
if (!process.env.RESEND_API_KEY) {
  console.error(
    'Erro: A variável de ambiente RESEND_API_KEY não está definida.',
  );
  process.exit(1);
}

// Configura o serviço de e-mail (Resend)
const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  secure: true,
  port: 465,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY, // Usa a chave de forma segura
  },
});

// Rota para receber o POST do formulário
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  const mailOptions = {
    from: 'onboarding@resend.dev', // Remetente exigido pelo Resend
    to: 'flaviocarvalho.brz@gmail.com', // Seu e-mail de destino
    subject: `Nova mensagem de ${name} do seu portfólio`,
    reply_to: email,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).send('Falha ao enviar o e-mail.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
