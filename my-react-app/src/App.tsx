import './App.css'
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled.tsx";
import {Link} from "./components/Link.styled.tsx";
import {myTheme} from "./styles/Theme.styled.tsx";


function App() {
    return (
        <div className='App'>
            <Box>
                <StyledBtn color={myTheme.colors.primary} btnType={'primary'} active >Hello</StyledBtn>
                <StyledBtn color={myTheme.colors.secondary} btnType={'outlined'}  active >Hello</StyledBtn>
            </Box>
        </div>
    )
}

export default App

const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${Link} {
        cursor: zoom-in;
    }

    @media ${myTheme.media.tablet} 
    
`

