import styled from "styled-components";

const StyledTitulo = styled.h2`

font-size: 32px;
color: #7b78e5;
text-align: ${props =>props.$align ? props.$align : "left"};


    
`

export default StyledTitulo