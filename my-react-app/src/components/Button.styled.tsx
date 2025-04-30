import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: 'primary' | 'outlined'
    active?: boolean
}


export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;


    ${props => props.btnType === 'outlined' && css <StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#ff0606"}
        color: ${props => props.color || "#ff0606"};
        background-color: transparent;

        &:hover {
            border-color: #0125fb;
            color: #0629ff;
            background-color: transparent;
        }
    `}

    ${props => props.btnType === 'primary' && css <StyledBtnPropsType>`
        background-color: ${props => props.color || "#ff0606"}
        color: #efefef;

        &:hover {
            background-color: #0027fb;
        }
    `}

    ${props => props.active && css <StyledBtnPropsType>`
        box-shadow: 5px 5px 5px #000000;

    `}
`