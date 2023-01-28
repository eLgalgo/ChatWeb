import "../style/style.scss"
function Register(){
    return(
        <div>
            <div className="loginDiv">
                <form>
                    <h1>Registro de Usuario</h1>
                    <input placeholder="Usuario" type="name" required/>
                    <input placeholder="Email" type="email" required/>
                    <input placeholder="Contraseña" type="password" required/>
                    <button>Registrarse</button>
                    <p>¿Ya tienes cuenta? <a href="/">Inicia Sesion</a></p>
                </form>
            </div>
        </div>
    );
}

export default Register;