import styled from 'styled-components';
import Input from '../Input';
import { useEffect, useState } from 'react';
import { getLivros } from '../../services/livros';

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Caption = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
function Search() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros();
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros();
        setLivros(livrosDaAPI);
    }

    function doResearch(evento) {
        const textoDigitado = evento.target.value
        const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
        setLivrosPesquisados(resultadoPesquisa)
    }

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Caption>Encontre seu livro em nossa estante.</Caption>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => { doResearch(evento); }}
            />
            {livrosPesquisados.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src}/>
                </Resultado>
            ))}
        </SearchContainer>
    )
}

export default Search;