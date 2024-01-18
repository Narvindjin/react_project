import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  header,
  footer {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }
`

export default Wrapper;