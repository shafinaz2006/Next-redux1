import React from 'react';

import { Button } from './styled';

interface ButtonProps {
  name: string,
  onclick(): any,
}

const StyledButton = (props: ButtonProps) => {
  return(
    <Button onClick={props.onclick}>{props.name}</Button>
  )
}

export default StyledButton;