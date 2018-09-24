import * as React from 'react';
import { Container, Header} from 'semantic-ui-react';

import './App.css';
import VocabularyDashboard from "./components/VacabularyDashboard";

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Header as="h2">Karteikästen</Header>
        <div id="content">
          <VocabularyDashboard/>
        </div>
      </Container>
    );
  }
}

export default App;
