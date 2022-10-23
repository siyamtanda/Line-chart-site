import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>7d</Button>
      <Button>14d</Button>
      <Button>30d</Button>
      <Button>90d </Button>
      <Button>180d</Button>
      <Button>1y</Button>
      <Button>Max</Button>
    </ButtonGroup>
  );
}

