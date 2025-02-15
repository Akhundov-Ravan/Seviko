import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import man from "../../assets/man3.jpg";

const Search = ({ profiles }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.search}>
      <div className={styles.critery}>
        <h5>Axtarış kriteriyalarını daxil edin</h5>
      </div>
      <div className={styles.critery_container}>
        <div className={styles.container_inputs}>
          <input type="text" placeholder="Sahə" />
          <input type="text" placeholder="Ad" />
          <input type="text" placeholder="Soyad" />
          <input type="text" placeholder="İş statusu" />
          <input type="text" placeholder="Şəhər" />
        </div>
        <div className={styles.container_buttons}>
          <button className={styles.button_top}>Axtar</button>
          <button className={styles.button_bottom} onClick={() => navigate("/add")}>
      Anket əlavə et
    </button>
        </div>
      </div>

      <div className={styles.search_boxes}>
        {profiles.map((profile, index) => (
          <div key={index} className={styles.search_box}>
            <div className={styles.box_top}>
              <div className={styles.box_top_left}>
                <img
                  src={profile.image ? URL.createObjectURL(profile.image) : man}
                  alt=""
                />
              </div>
              <div className={styles.box_top_right}>
                <h6>{profile.firstname} {profile.lastname}</h6>
                <p className={styles.speciality}>{profile.subject}</p>
                <p>{profile.company}</p>
                <p className={styles.position}>{profile.position}</p>

              </div>
            </div>
            <div className={styles.box_bottom}>
              <div>
                <div>Proqramlar: {profile.skills}</div>
                <div>Sertifikatlar: {profile.certificates}</div>
              </div>
              <div className={styles.status}>
                <span className={styles.ish}>{profile.jobStatus}</span>
                <span className={styles.full}>ətraflı</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
