import logo from './logo.svg';
import './App.css';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="btn btn-danger"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Button color="danger">Danger!</Button>
        <Button color="primary">Primary!</Button>
        <Button color="warning">Warning!</Button> */}
        
        {/* <Card
          style={{width: "18rem",}}>
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card> */}
      </header>
    </div>
  );
}

export default App;
