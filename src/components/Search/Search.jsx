// import { useNavigate } from "react-router-dom";
// import styles from "./Search.module.css";
// import man from "../../assets/man3.jpg";

// const Search = ({ profiles }) => {
//   const navigate = useNavigate();

//   const handleSearch = () => {
   
//   };

//   return (
//     <div className={styles.search}>
//       <div className={styles.critery}>
//         <h5>Axtarış kriteriyalarını daxil edin</h5>
//       </div>
//       <div className={styles.critery_container}>
//         <div className={styles.container_inputs}>
//           <input type="text" placeholder="Sahə" />
//           <input type="text" placeholder="Ad" name="firstname" value={""}/>
//           <input type="text" placeholder="Soyad" />
//           <input type="text" placeholder="İş statusu" />
//           <input type="text" placeholder="Cinsi" />
//           <input type="text" placeholder="Şəhər" />
//         </div>
//         <div className={styles.container_buttons}>
//           <button className={styles.button_top} onClick={handleSearch}>Axtar</button>
//           <button className={styles.button_bottom} onClick={() => navigate("/add")}>
//       Anket əlavə et
//     </button>
//         </div>
//       </div>

//       <div className={styles.search_boxes}>
//         {profiles.map((profile, index) => (
//           <div key={index} className={styles.search_box}>
//             <div className={styles.box_top}>
//               <div className={styles.box_top_left}>
//                 <img
//                   src={profile.image ? URL.createObjectURL(profile.image) : man}
//                   alt=""
//                 />
//               </div>
//               <div className={styles.box_top_right}>
//                 <h6>{profile.firstname} {profile.lastname}</h6>
//                 <p className={styles.speciality}>{profile.subject}</p>
//                 <p>{profile.company}</p>
//                 <p className={styles.position}>{profile.position}</p>

//               </div>
//             </div>
//             <div className={styles.box_bottom}>
//               <div>
//                 <div>Proqramlar: {profile.skills}</div>
//                 <div>Sertifikatlar: {profile.certificates}</div>
//               </div>
//               <div className={styles.status}>
//                 <span className={styles.ish}>{profile.jobStatus}</span>
//                 <span className={styles.full}>ətraflı</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import man from "../../assets/man3.jpg";

const Search = ({ profiles }) => {
  const navigate = useNavigate();
  
  // State for tracking search input
  const [searchInput, setSearchInput] = useState({
    firstname: "",
    lastname: "",
    subject: "",
    jobStatus: "",
    gender: "",
    city: ""
  });

  // State for filtered profiles
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  // Handle changes in search input fields
  const handleSearchInputChange = (e) => {
    const { name, value } = e.target;
    setSearchInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };

  // Handle search logic when clicking the "Axtar" button
  const handleSearch = () => {
    const result = profiles.filter((profile) => {
      return (
        (searchInput.firstname === "" || profile.firstname.toLowerCase().includes(searchInput.firstname.toLowerCase())) &&
        (searchInput.lastname === "" || profile.lastname.toLowerCase().includes(searchInput.lastname.toLowerCase())) &&
        (searchInput.subject === "" || profile.subject.toLowerCase().includes(searchInput.subject.toLowerCase())) &&
        (searchInput.jobStatus === "" || profile.jobStatus.toLowerCase().includes(searchInput.jobStatus.toLowerCase())) &&
        (searchInput.gender === "" || profile.gender.toLowerCase().includes(searchInput.gender.toLowerCase())) &&
        (searchInput.city === "" || profile.city.toLowerCase().includes(searchInput.city.toLowerCase()))
      );
    });

    // Set the filtered profiles to state
    setFilteredProfiles(result);
    
    // If no profiles match, you can handle that scenario
    if (result.length === 0) {
      alert("No profiles found matching your criteria");
    }
  };

  return (
    <div className={styles.search}>
      <div className={styles.critery}>
        <h5>Axtarış kriteriyalarını daxil edin</h5>
      </div>
      <div className={styles.critery_container}>
        <div className={styles.container_inputs}>
          <input
            type="text"
            placeholder="Sahə"
            name="subject"
            value={searchInput.subject}
            onChange={handleSearchInputChange}
          />
          <input
            type="text"
            placeholder="Ad"
            name="firstname"
            value={searchInput.firstname}
            onChange={handleSearchInputChange}
          />
          <input
            type="text"
            placeholder="Soyad"
            name="lastname"
            value={searchInput.lastname}
            onChange={handleSearchInputChange}
          />
          <input
            type="text"
            placeholder="İş statusu"
            name="jobStatus"
            value={searchInput.jobStatus}
            onChange={handleSearchInputChange}
          />
          <input
            type="text"
            placeholder="Cinsi"
            name="gender"
            value={searchInput.gender}
            onChange={handleSearchInputChange}
          />
          <input
            type="text"
            placeholder="Şəhər"
            name="city"
            value={searchInput.city}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className={styles.container_buttons}>
          <button className={styles.button_top} onClick={handleSearch}>
            Axtar
          </button>
          <button className={styles.button_bottom} onClick={() => navigate("/add")}>
            Anket əlavə et
          </button>
        </div>
      </div>

      <div className={styles.search_boxes}>
        {/* Map through filtered profiles */}
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile, index) => (
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
          ))
        ) : (
          <p>No profiles found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
