import styles from "./PageNotFound.module.css";
import pageNotFound from "../../assets/img/404.jpg";
import NavMenu from "../NavMenu/NavMenu";

export default function PageNotFound() {
  return (
    <>
      <NavMenu />
      <div className={styles.pageNotFound}>
        <div className={styles.pageNotFoundImg}>
          <img src={pageNotFound} alt="pagen_ot_foud" className={styles.pageNotFoundImage}/>
        </div>
      </div>
    </>
  );
}
