import React, { useState } from 'react';
import '../scss/estilo.scss';

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/agendar-consulta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Agendamento realizado com sucesso!');
                setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
            } else {
                alert('Erro ao agendar. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao agendar. Tente novamente.');
        }
    };

    return (
        <div className="contato-container">
            <h2>Agende sua consulta</h2>
            <p>Agende agora mesmo a sua consulta</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Telefone:
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
                </label>
                <label>
                    Mensagem:
                    <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} required />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contato;