import './App.css';

function App() {
  return (
    <div className="App">
      <section className="formContainer">
        <div className='modal'>
          <img src='https://isatec.com.br/wp-content/uploads/2023/11/logo-isatec.png' alt='Logo Isatec' />
          <h1>Bem vindo</h1>
          <p>Faça login na sua conta</p>
          <form method='POST' action=''>
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email' placeholder='seu@email.com' required />
            <label htmlFor='password'>Senha</label>
            <input type='password' id='password' name='password' placeholder='........' required />
            <span>
              <a href='/recuperar-senha'>Esqueci minha senha</a>
            </span>
            <button type='submit'>Entrar</button>
          </form>
          <span>C 2026 Isatec Sistemas e Consultoria</span>
        </div>
      </section>
    </div>
  );
}

export default App;
