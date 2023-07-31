import './style.css';
import { useState } from 'react';
import imgLateral from '../../assets/background.jpg';
import opEye from '../../assets/open-eye.svg';
import clEye from '../../assets/close-eye.svg';
import sucessImg from '../../assets/woman-success.png'

function SignUp() {
  const [dados, setDados] = useState({ nome: '', email: '', senha: '' });
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [sucess, setSucess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSucess(false);

    if (!dados.nome) {
      setError('Digite seu nome');
      return;
    }

    if (!dados.email) {
      setError('Digite seu E-mail');
      return;
    }

    if (dados.senha.length < 8) {
      setError('A senha precisa ter no minímo 8 caracteres');
      return;
    }

    setSucess(true);

  }

  function handleChange(e) {

    const value = e.target.value;

    setDados({ ...dados, [e.target.name]: value })
  }

  function handleShowPass() {
    if (showPass === true) {
      setShowPass(false)
    }

    if (showPass === false) {
      setShowPass(true)
    }
  }

  return (
    <div className='container-geral'>

      {sucess === true ? <div className='sucess-img'>
        <img src={sucessImg} />
        <strong>Cadastro Efetuado!!</strong>
      </div> : (

        <form className='formulario' onSubmit={handleSubmit} >



          <div className='login-container'>

            <h2>Cadastre-se</h2>

            <div className='area-digitacao'>


              <input
                className='input-form'
                type="text"
                placeholder="Nome"
                value={dados.nome}
                name="nome"
                onChange={(e) => handleChange(e)}
              />

              <input
                className='input-form'
                type="text"
                placeholder="E-mail"
                value={dados.email}
                name="email"
                onChange={(e) => handleChange(e)}
              />

              <div className='pass-container'>
                <input
                  className='input-form'
                  type={showPass ? 'text' : 'password'}
                  placeholder="Senha"
                  value={dados.senha}
                  name="senha"
                  onChange={(e) => handleChange(e)}
                />

                <img
                  className='btn-pass'
                  src={showPass ? clEye : opEye}
                  alt='botao para exibir senhas'
                  onClick={() => handleShowPass()}
                />

              </div>
              {error && <span className='error' >{error}</span>}
            </div>



            <button className='btn-cadastrar'>Cadastrar</button>
            <button type='submit' className='btn-cancel'>Login</button>



          </div>



          <p>Já tem cadastro? Clique aqui!</p>


        </form>)
      }

      <div className='img-lateral'>

        <img src={imgLateral} alt='imagem da logo lateral' />

      </div>


    </div >
  );
}

export default SignUp;
