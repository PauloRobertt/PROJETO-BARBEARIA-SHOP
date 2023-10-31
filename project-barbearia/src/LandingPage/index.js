import {useState} from 'react';
import './style.css';

export default function LandingPage(){

    const corDeFundoBranco = 'tema-claro';
    const corDeFundoEscuro = 'tema-escuro';

    const [estiloAtualizado,setEstiloAtualizado] = useState('tema-claro');

    function mudarTema(){
        if(estiloAtualizado === corDeFundoBranco){
            setEstiloAtualizado(corDeFundoEscuro)
        }else{
            setEstiloAtualizado(corDeFundoBranco)
        }
    }

    return(
        <div className='container'>
            <header className={estiloAtualizado}>
                <div className='secao-limitada secao-topo'>
                    <img className='img-logo' src="assets/barbearia-logo.png" alt="logo"/>
                    <button onClick={mudarTema} className={estiloAtualizado === corDeFundoEscuro ? 'tema-escuro' : 'tema-claro'}>
                        <img className='img' src={estiloAtualizado === corDeFundoEscuro ? 'assets/sun.png' : 'assets/moon.png'} alt="logo"/>
                        {estiloAtualizado === corDeFundoEscuro ? 'Light' : 'Dark'}
                    </button>
                </div>
            </header>
            <main className={estiloAtualizado}>
                <div className='img-banner'>
                </div>
                <div className='secao-conteudo'>
                    <div className='secao-limitada conteudo'>
                        <h1>Bem-vindo a Barber Shop</h1>
                        <p className='primeiro-paragrafo'>
                            Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
                        </p>
                        <p>
                            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                        </p>
                        <p className='assinatura'>
                            S. Kelly
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}