import React, { useState } from 'react';
import { FiPower, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    const history = useHistory();

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title: titulo,
            description: descricao,
            value: valor
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile')
        } catch (err) {
            alert('Erro no cadastro, Tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section >
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/profile" className="back-link" >
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)} />

                    <textarea
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)} />

                    <input
                        placeholder="Valor em reais"
                        value={valor}
                        onChange={e => setValor(e.target.value)} />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}