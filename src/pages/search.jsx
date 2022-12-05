import TopPicture from "../component/Toppicture/Toppicture";
import Searching from "../component/Search/Searching";

function Search () {
    
    return (
        <div style={{'minHeight' : '120vh'}}>
            <TopPicture pic="https://business-cambodia.com/search.jpg" text="ស្វែងរកអត្ថបទដែលអ្នកចូលចិត្ត" />
            <Searching></Searching>
        </div>
    );
}

export default Search;