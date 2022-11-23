import styled from 'styled-components';

export const ButtonContainer = styled.div`
    padding: 25px;
    border: 2px solid #1E192C;
    color: #FFFFFF;
    font-size: 30px;
    font-height: 700;
    flex: 1;
    align-items: center;
    cursor: pointer;
    border-radius: 0.6em;
    text-align: center;

    &:hover {
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
        }
        
        .fourth {
        -webkit-transition: background 300ms ease-in-out
        transition: background 300ms ease-in-out
        }
    }
`