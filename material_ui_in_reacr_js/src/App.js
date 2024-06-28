/* eslint-disable react/jsx-no-undef */
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AddAlertIcon from "@mui/icons-material/AddAlert";
function App() {
  return (
    <div className="App">
      <h1>react -mui</h1>
      <button>click me</button>
      <Button>MUI</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
      <Button
        onClick={() => {
          alert("clicked");
        }}
      >
        Click me
      </Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <AcUnitIcon />
      <AddAlertIcon></AddAlertIcon>
    </div>
  );
}

export default App;
