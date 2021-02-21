import React from 'react';
import styled from "styled-components";
import { AccessTime, HelpOutline } from "@material-ui/icons";

const HeaderContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
  padding: 5px 0;
  align-items: center;
  justify-self: center;
  margin: auto;
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--slack-color);
  color: white;
  align-items: center;
  justify-content: center;

  .MuiSvgIcon-root{
    cursor: pointer;
    opacity: 0.8;
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 32px;

    :hover{
      opacity: 1;
      background-color: rgb(73,37,74);
    }
  }
`;

const HeaderSearch = styled.input`
  height: 24px;
  flex: 0.9;
  cursor: pointer;
  outline-width: 0;
  background: rgb(67,30,68);
  border: 1px solid rgba(255, 255, 255, .7);
  border-radius: 5px;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  color: white;
  padding: 3px 5px;
  margin: auto 15px;
  transition: border-bottom-color 100ms ease-in, border-right-color 100ms ease-in, border-top-color 100ms ease-in, border-left-color 100ms ease-in;
  
  :hover{
    background: rgb(73,37,74);
    box-shadow: inset 0 0 0 1px rgb(154 134 155);
    border: 1px solid rgba(255, 255, 255, .9);
  }
  
  ::placeholder{
    color: white;
    opacity: .7;
  }
`;

const HeaderAvatar = styled.img`
  height: 30px;
  cursor: pointer;
  border-radius: 3px;
  object-fit: cover;
  margin: auto 20px;
  
  :hover{
    opacity: .8;
  }
`;

function Header():JSX.Element{
  return(
    <HeaderDiv>
      <HeaderContainer>
        <AccessTime/>
        <HeaderSearch type={"text"} placeholder={"Search Flutter Community"}/>
        <HelpOutline/>
      </HeaderContainer>

      <HeaderAvatar src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAVFBMVEX///9mZmZgYGBjY2NdXV38/Pzn5+daWlrx8fHf39+rq6v19fVubm5paWm0tLScnJy8vLyWlpbOzs58fHyjo6OMjIxzc3PHx8fY2NiDg4NVVVVPT09ssxvzAAAFDklEQVR4nO2ci3LjKgyGjQBj4/v9su//ngenaTaJSVtkVLxn8s/O7HQmnXwVspAEchS99dY/rCSt9ZL3MjTHo2bd5UKBqM7EldXjCpwZwZm4pkVcoM7FlQ7qk4oxoUPjfKrNgbHTccle8DsspurQRBdlvWAPWtvQSJuy4QmL/clCMxnJ6hmLraGZootvPWPBEBrKqN5hMTiB20+ww+JjHJoqike+N1f4aC+HvbnYnzk0ls25GC9CU0Vxvl9FxqfQWNE+RBisIXhQTfdUJqamobGs5hJVaKooscWIJQmNFU17c3ERPqRG+/2a8RPsQNl+GVUZGspo3mFBeJ+PLLFeVMEj1yYtzmgt4/YPWzaHOngWcZFs7rlgPEWpET1yQVGFD6dX3bg4wJCeYw03yUYBgBLFok8Q4+/UNkZ6Sk8RHL6VzJJNWUa5sjJua611pcv2J2sl46mshm7szL+h0fVMYcokLQdQSolN5j/WfLlkSVo3zHwY+FUgzE9L6XmZk3op1GOtA5uLv0hGW90VAizpmCqGyR9Z2q/KUlGY9EoxPT+FqmSuuBK2j1/RoPQT3LKysCTINzTW3VstLjv++tPXX+k8bAay5eq771l53yYyyuJpWV9b6u431uFwjNP8J18k+NjoYRSWctsqMR4rwuPlG2P9RQPxk7/g9vH1SL4Rdz81gLsOdJ9mRodlKl6NtJitaeRTgOtcxDmltTatKDBbL8uvMJ1Ek09RY5lw0TlvShOtb10Eytn1U5dghMVCRP2G3rmUds8sbI1Sz1gFYvPOOupVBIbJKTT1s4g7a7B1/vxiCVQ6UVJ7F0clhuTepXoMlu3syatgwSUSDfUy4nLVmJhK4FaRfBmRvXNJvAVhT0DIgxeyEtr3u70Kfb5W0+5B6LMGy3GKVy7suR9tsOcFsjjLKKkO3PEgjqpo92qJoxf2FL4mjvbYPk5Jy5VjH0dNzIVtyL25/h9c/Um5zmovYi50/CLmQvYuybnQ+yNxvIcGyUW8P3KGzL+I8wkmkBtkSlwNYe+8J9QtpgVZDxW0XAyQh48LdTcH+UTabi96FbJSI65r0Q0K4j4Aw3qY9TKxXy5UvzBbyA2G6q/KivwIBpftUFeQRpwjnknqnWgTYKI+dcNwk+jcL8MQd8A+BO59Q+pU5wpWuPpYXPzCQhrnzx3jK3Wn/Aa2Nm5VG/l52qegcyqPYuoc7CauutbB/+mvdNwE4HBXwTISQQfmcK8pIc8p/oq7+D550nqTW+OcPjn8lGOD+rc8nzvuk/QXTj7kWubS3zi5ynWTfB4joZF7MUl+bPvB5Z5Q/8YmCYN7ZfQbBkN1NekNhiskE/JHUuBaO9QxDONdmyRxy4lje/m0uyT2nk5Em1bwET9OQRkrxJEZ15aMC+v0V1GtJC+OTXhkI80zeWgVN800WM3hebWSoA/Mcw+jTRQptY8p19j7Pulp3jy1TMAdkcCeQT7Lb8fV4zsWfPo+R18J2Ev6uwLMc5+vh5GVJ4tx9EWFF2C7l1Q9fBuHy3wrGH05sMKZ77fDyP6lxQTkg67nJMuSudbNyK3DpZsAff3rKzDbyOU2XthM8V3Pz8CVnbIOHYqO5OUw8/i0lsYwY28N3Vld5fAUXTijelFTrNdbiOVcqFy/nuOW8TRcxqRvf0PR0s2Wx2VXKOPeindN/W0ckpMeRnaZ+i6WifZdBsZ7+qExXv6zrzHeNtV1/a+8NuCtt97a6z9QYUzlCJrDIQAAAABJRU5ErkJggg=="}/>
    </HeaderDiv>
  )
}

export default Header;