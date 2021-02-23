import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 10px;
  transition: background-color 80ms ease-in;
  cursor: auto;

  :hover {
    background-color: rgba(82, 82, 82, 0.1);
  }
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 4px;
  cursor: pointer;
  object-fit: cover;
`;

const BubbleRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3px 0 3px 10px;

  h5 {
    font-family: "Inter", sans-serif;
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 800;
  }

  pre {
    font-family: "Inter", sans-serif;
    margin: 0;
  }
`;

interface Props {
  image?: string;
  user?: string;
  id?: string;
  message?: string;
  userId?: string;
}

function ThreadBubble({ image, user, id, message }: Props) {
  return (
    <Container>
      <Avatar
        src={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAVFBMVEX///9mZmZgYGBjY2NdXV38/Pzn5+daWlrx8fHf39+rq6v19fVubm5paWm0tLScnJy8vLyWlpbOzs58fHyjo6OMjIxzc3PHx8fY2NiDg4NVVVVPT09ssxvzAAAFDklEQVR4nO2ci3LjKgyGjQBj4/v9su//ngenaTaJSVtkVLxn8s/O7HQmnXwVspAEchS99dY/rCSt9ZL3MjTHo2bd5UKBqM7EldXjCpwZwZm4pkVcoM7FlQ7qk4oxoUPjfKrNgbHTccle8DsspurQRBdlvWAPWtvQSJuy4QmL/clCMxnJ6hmLraGZootvPWPBEBrKqN5hMTiB20+ww+JjHJoqike+N1f4aC+HvbnYnzk0ls25GC9CU0Vxvl9FxqfQWNE+RBisIXhQTfdUJqamobGs5hJVaKooscWIJQmNFU17c3ERPqRG+/2a8RPsQNl+GVUZGspo3mFBeJ+PLLFeVMEj1yYtzmgt4/YPWzaHOngWcZFs7rlgPEWpET1yQVGFD6dX3bg4wJCeYw03yUYBgBLFok8Q4+/UNkZ6Sk8RHL6VzJJNWUa5sjJua611pcv2J2sl46mshm7szL+h0fVMYcokLQdQSolN5j/WfLlkSVo3zHwY+FUgzE9L6XmZk3op1GOtA5uLv0hGW90VAizpmCqGyR9Z2q/KUlGY9EoxPT+FqmSuuBK2j1/RoPQT3LKysCTINzTW3VstLjv++tPXX+k8bAay5eq771l53yYyyuJpWV9b6u431uFwjNP8J18k+NjoYRSWctsqMR4rwuPlG2P9RQPxk7/g9vH1SL4Rdz81gLsOdJ9mRodlKl6NtJitaeRTgOtcxDmltTatKDBbL8uvMJ1Ek09RY5lw0TlvShOtb10Eytn1U5dghMVCRP2G3rmUds8sbI1Sz1gFYvPOOupVBIbJKTT1s4g7a7B1/vxiCVQ6UVJ7F0clhuTepXoMlu3syatgwSUSDfUy4nLVmJhK4FaRfBmRvXNJvAVhT0DIgxeyEtr3u70Kfb5W0+5B6LMGy3GKVy7suR9tsOcFsjjLKKkO3PEgjqpo92qJoxf2FL4mjvbYPk5Jy5VjH0dNzIVtyL25/h9c/Um5zmovYi50/CLmQvYuybnQ+yNxvIcGyUW8P3KGzL+I8wkmkBtkSlwNYe+8J9QtpgVZDxW0XAyQh48LdTcH+UTabi96FbJSI65r0Q0K4j4Aw3qY9TKxXy5UvzBbyA2G6q/KivwIBpftUFeQRpwjnknqnWgTYKI+dcNwk+jcL8MQd8A+BO59Q+pU5wpWuPpYXPzCQhrnzx3jK3Wn/Aa2Nm5VG/l52qegcyqPYuoc7CauutbB/+mvdNwE4HBXwTISQQfmcK8pIc8p/oq7+D550nqTW+OcPjn8lGOD+rc8nzvuk/QXTj7kWubS3zi5ynWTfB4joZF7MUl+bPvB5Z5Q/8YmCYN7ZfQbBkN1NekNhiskE/JHUuBaO9QxDONdmyRxy4lje/m0uyT2nk5Em1bwET9OQRkrxJEZ15aMC+v0V1GtJC+OTXhkI80zeWgVN800WM3hebWSoA/Mcw+jTRQptY8p19j7Pulp3jy1TMAdkcCeQT7Lb8fV4zsWfPo+R18J2Ev6uwLMc5+vh5GVJ4tx9EWFF2C7l1Q9fBuHy3wrGH05sMKZ77fDyP6lxQTkg67nJMuSudbNyK3DpZsAff3rKzDbyOU2XthM8V3Pz8CVnbIOHYqO5OUw8/i0lsYwY28N3Vld5fAUXTijelFTrNdbiOVcqFy/nuOW8TRcxqRvf0PR0s2Wx2VXKOPeindN/W0ckpMeRnaZ+i6WifZdBsZ7+qExXv6zrzHeNtV1/a+8NuCtt97a6z9QYUzlCJrDIQAAAABJRU5ErkJggg=="
        }
      />
      <BubbleRight>
        <h5>Author</h5>
        <pre>Mia</pre>
      </BubbleRight>
    </Container>
  );
}

export default ThreadBubble;
