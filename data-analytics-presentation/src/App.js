import React from 'react';
import logo from './logo.svg';
import './App.css';
import pika from "./Resources/pikachu.png"; 
import truth from "./Resources/thetruth.jpg"; 
import Flexbox from 'flexbox-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="header">
          <h1>Lumnus Consulting Data Analytics</h1>
          <p>Ethan Tan - Helen Chang - Rohan Sreedhar</p>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. In anycase
          Here is where we will be putting a lot of information and 
          I would also like some graphs at the side or in the middle
          whihc we can analyze and then present. Yeah. I would like
          a klayout of garphs two number and then we could do some basic
          analyzatio of thtem  
        </p>
{/*        
         <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.container}>
            <Image
              resizeMode="contain"
              source={pika} />
          </View>
          <View style={styles.container}>
            <Image
              rezieMode="contain"
              source={truth} />
          </View>
        </View> 
*/}

        <div class="topContainer">
          <img 
            src={pika} 
            height={400} 
            width={400}>
          </img>
          <img 
            src={truth}
            height={400}
            width={400}>
          </img>

        </div>
      </header>
    </div>
  );
}

export default App;
