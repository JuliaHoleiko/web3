
import styles from './App.css';
import Header from './containers/Header';
import Navigation from './containers/Navigation';
import Footer from './containers/Footer';

function App() {
  return (
    
    <div className={styles.App}>
      
       <Header/>
       <Navigation/>   
       <Footer/>  
   
    </div>
  );
}

export default App;
