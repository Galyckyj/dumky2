// import BottomNav from "./components/BottomNav/BottomNav";
import SearchTypeahead from './components/SearchTypeahead';
import Header from './components/HeaderNav/HeaderNav';
import GenreTags from './components/GenreTags';
import Carousel from './components/PopularBooks/PopularBooks';

export default function Home() {
  return (
    <>
    <Header/>
    <SearchTypeahead/>
    <GenreTags/>
    <Carousel/>
    </>
  );
}
