import React from 'react'
import { Button, styled } from '@mui/material'

const ButtonUi = ({ variant, children }) => {
   return (
      <div>
         <StyledButton variant={variant}>{children}</StyledButton>
      </div>
   )
}

export default ButtonUi
const StyledButton = styled(Button)`
   & Button-contained {
      background: #2ca803;
   }
   &:hover {
      background: #69c14c;
   }
   &:active {
      background: #1f7c00;
   }
`
