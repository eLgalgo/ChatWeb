import "../style/style.scss"
function Login() {
    return (
      <div className="loginDiv">
        <form>
            <h1>Inicio de Sesion</h1>
            <input placeholder="Usuario" type="name" required/>
            <input placeholder="Contraseña" type="password" required/>
            <button>Iniciar Sesion</button>
            <p>¿No tienes cuenta? <a href="/register">Registrarse</a></p>
        </form>
      </div>
    );
  }
  
  export default Login;