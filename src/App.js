import './App.css';
import Card from './Card';
import "./Card.css";

const products = [
  {
      pID: 1,
      pName: 'White Traditional Long dress',
      // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      // isAvailable: true,
      image: ('https://th.bing.com/th/id/OIP.6TcE7KYq42LVAeX36WDsCgHaHa?pid=ImgDet&rs=1')
  },
  {
      pID: 2,
      pName: 'Long Sleve Denim Jacket',
      // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      // isAvailable: false,
      image: ("https://i.pinimg.com/originals/c0/fe/d6/c0fed6d496ba39bc3297fed490f00ca6.jpg"),
      // price: 10
  },
  {
      pID: 3,
      pName: 'Hush puppies',
      // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      // isAvailable: true,
      image: ("https://th.bing.com/th/id/OIP.ZZVc3O6l8CPhjGwsyO-VLAHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7"),
      // price: 15
  },
  {
      pID: 4,
      pName: 'Athens Skirt',
      // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
      // isAvailable: true,
      image: ("https://www.bing.com/images/search?view=detailV2&ccid=KI%2FjnKMU&id=8E77436632F54013BAEFD1F7DE3742CE739FDF97&thid=OIP.KI_jnKMU64XfPF7xwHR2ZQAAAA&mediaurl=https%3A%2F%2Fi.pinimg.com%2F474x%2F2e%2Faa%2F9f%2F2eaa9fdea26f12493452751836d41926.jpg&exph=711&expw=474&q=Athens+Skirt&simid=607993273043994953&form=IRPRST&ck=916A80463BC3AB0F408D43B8A5DBB6F6&selectedindex=22&ajaxhist=0&ajaxserp=0&vt=2&sim=11&iss=VSI"),
      // price: 20
  },
  
];
function App() {
  return (<div className="App">
      <Card pId={products[0].pID} pName={products[0].pName} image={products[0].image}/>
      <Card pId={products[1].pID} pName={products[1].pName} image={products[1].image}/>
      <Card pId={products[2].pID} pName={products[2].pName} image={products[2].image}/>
      <Card pId={products[3].pID} pName={products[3].pName} image={products[3].image}/>
      
    </div>
  );
}

export default App;