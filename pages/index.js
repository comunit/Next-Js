import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

var Index = (props) => (
    <Layout>
      <div>
        <h1>Welcome to BitPrice</h1>
        <p>Check Current Bitcoin rate</p>
        <Prices bpi={props.bpi} />
      </div>
    </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}
export default Index