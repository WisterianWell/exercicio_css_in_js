import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const BotaoPesquisa = styled.button`
  background-color: ${(props) => props.theme.corPrimaria};
  border: 1px solid ${(props) => props.theme.corPrimaria};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 16px;
    font-size: 14px;
    padding: 0 12px;
    height: 30px;
  }
`

export const CampoPesquisa = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.corPrimaria};

  @media (max-width: 768px) {
    width: 100%;
  }
`
