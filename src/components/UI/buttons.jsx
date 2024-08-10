import styled from "styled-components";
const NewChatBtn = styled.button`
    background-color: #7850DE;
    width: 95%;
    max-width: 400px;
    color: white;
    text-align: left;
`
const OptionBtn = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    padding-left: 10px;
    &:hover
    {
        cursor: pointer;
        font-size: 18px;
    }
    &__icon{
        margin-right: 10px;
    }
`
export {NewChatBtn,OptionBtn}