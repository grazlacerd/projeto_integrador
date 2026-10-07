import { useState } from 'react'
import PopUp from '../components/popUp.jsx'
import './login.css'
import Backgroundicon from '../assets/backgroundicon.svg'
import Sun from '../assets/sun.svg'
import User from '../assets/user.svg'
import Password from '../assets/password.svg'

export default function Login() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPopUpOpen(true);
    };

    return (
        <main className="login-page">
            <section className="slogan">
                <figure>
                    <blockquote>
                        "Um refúgio acolhedor onde as páginas florescem e o conhecimento cria raízes."
                    </blockquote>
                    <figcaption>
                        <cite>Clube de Leitores D'Lírios</cite>
                    </figcaption>
                </figure>
            </section>

            <section className="login">
                <div>
                    <header className="welcome">
                        <img src={Sun} alt="" aria-hidden="true" />
                        <p>Bem que as flores disseram, você voltaria</p>
                    </header>

                    <div className="container">
                        <h1>Que livros quer ler<br></br> hoje?</h1>
                        <p className='subtitle'>Entre na sua conta para continuar sua jornada pelo mundo das letras.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <div className="input-group">
                                    <img src={User} alt="" aria-hidden="true" className="input-icon" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="seuemail@exemplo.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-field">
                                <label htmlFor="password">Senha</label>
                                <div className="input-group">
                                    <img src={Password} alt="" aria-hidden="true" className="input-icon" />
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="forgotPassword">
                                <label className="checkbox-container" htmlFor="remember">
                                    <input type="checkbox" id="remember" name="remember" />
                                    <span>Lembrar acesso</span>
                                </label>

                                <a href="#esqueceu-senha">Esqueceu a senha?</a>
                            </div>

                            <div className="button-group">
                                <button type="submit">Entrar no Jardim</button>
                                <button type="button">Entrar com o Google</button>
                            </div>
                        </form>
                    </div>

                    <footer className="signUp">
                        <p>
                            Sua primeira vez? <a href="#cadastro">Crie sua conta aqui!</a>
                        </p>
                    </footer>
                </div>
            </section>

            <div className="backgroundicon" aria-hidden="true">
                <img src={Backgroundicon} alt="" className="icon" />
            </div>

            <PopUp 
                isOpen={isPopUpOpen} 
                onClose={() => setIsPopUpOpen(false)} 
            />
        </main>
    )
}