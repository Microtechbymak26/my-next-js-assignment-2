import Footer from './components/header/footer/footer';
import Header from './components/header/header';
import css from './home.module.css'
console.log(css)



// const HomePage = () => {
//   return (
//     <>
//     <Header></Header>
//      <div className={css.heading}>Hero section</div>
//      <p className={css.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit vero inventore aspernatur corporis, beatae exercitationem modi eius mollitia minus molestiae voluptatibus similique, voluptatem ex quaerat! Doloribus temporibus quo consequatur aspernatur?</p>
//      <Footer></Footer>
//     </>
//   )
// }

// export default HomePage;



const HomePage = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <div className={css.heading}>Hero section</div>
        <p className={css.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis natus fugiat, corrupti, voluptatem veniam sed similique, enim libero magni veritatis iste nulla? Expedita, modi error qui quasi quas obcaecati?</p>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

