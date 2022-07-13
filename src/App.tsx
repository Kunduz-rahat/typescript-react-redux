import React from 'react';
import Card, {CardVariant} from './components/Card';


function App() {
  return (
    <div >
      <Card variant={CardVariant.primary} height='200px' width='200px'>
        <button>Кнопка</button>
        <div>dfssfsf</div>
      </Card>
    </div>
  );
}

export default App;
