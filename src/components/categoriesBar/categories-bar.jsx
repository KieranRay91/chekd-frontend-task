import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
function CategoriesBar() {

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Overview</Button>
      <Button>General</Button>
      <Button>ARS</Button>
      <Button>FUL</Button>
      <Button>Player</Button>
    </ButtonGroup>
  );
}

export default CategoriesBar;
