import React from "react";
import api from '../../services/api';
import './index.css'
import { Form, Input } from "@rocketseat/unform";

export default function App() {
  function handleSubmit(data) {
    api.post('/users', data) 
  };

  return (
    
    <Form onSubmit={handleSubmit}>
      
        <Input name="name" label="Nome : "/>
        <Input name="email" label="Email : "/>
        <Input name="password" type="password" label="Senha : "/>
      
      <button type="submit">Cadastrar</button><br/><br/>
      <label>Atualize a pagina após cadastro</label>
    </Form>
    
  );
}
