import GlobalNavbar from './GlobalNavbar';
import MainDettaglio from './MainDettaglio';
import MyFooter from './MyFooter';

const SchermataDettaglio = () => {
  
  return (
    <>
        <header>
            <GlobalNavbar/>
        </header>

        <main>
          <MainDettaglio/>
        </main>

        <footer>
          <MyFooter/>
        </footer>
    </>
  );
}

export default SchermataDettaglio;
