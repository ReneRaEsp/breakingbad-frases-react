import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
  margin-top: 2rem;
  padding: 3rem;
  border-radius: .5rem;
  background-color: rgba(233, 233, 233, 0.5);
  max-width: 800px;
  h2 {
  font-size: 1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;

  }
`;

const Frase = ({frase}) => {


return (
    <ContenedorFrase>
    <h2>
      {frase.quote}
    </h2>
    <p>
      - {frase.author}
    </p>
    </ContenedorFrase>
  );
}

export default Frase;
