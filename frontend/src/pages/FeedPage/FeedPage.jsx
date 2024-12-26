import SearchWithFilter from "../../components/SearchWithFilter/SearchBarWithFilter";
import Navbar from "../../navbar/navbar";
import styles from "./FeedPage.module.css"

const FeedPage = ({}) => {
    return(<>
        <Navbar />
        <div className={styles.container}>
            <SearchWithFilter />
            <div className={styles.posts}>

            </div>
        </div>

    </>)
}

export default FeedPage;