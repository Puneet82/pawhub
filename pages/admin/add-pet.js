import React, { useState } from "react";
import { useRouter } from "next/router";
// import { usePets } from '../../context/PetContext';
import styles from "./AddPet.module.css";
import API from "../../api_endpoints";
import FileBase from "react-file-base64";

const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    desc: "",
    age: "",
    breed: "",
    status: "Available",
    imgurl: "",
  });
  // const { pets, setPets } = usePets();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet({ ...pet, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setPet({ ...pet, picture: URL.createObjectURL(file) });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pet);
    API.post(`/pet/add`, {
      name: pet.name,
      age: pet.age,
      desc: pet.desc,
      breed: pet.breed,
      type: "dog",
      imgurl: pet.imgurl,
    })
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    // Redirect to admin dashboard after adding the pet
    router.push("/admin/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Add New Pet</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={pet.name}
            onChange={handleChange}
            placeholder="Name"
            className={styles.inputField}
            required
          />
          <input
            type="text"
            id="desc"
            name="desc"
            value={pet.desc}
            onChange={handleChange}
            placeholder="Short description"
            className={styles.inputField}
            required
          />
          <input
            type="text"
            id="age"
            name="age"
            value={pet.age}
            onChange={handleChange}
            placeholder="Age"
            className={styles.inputField}
            required
          />
          <input
            type="text"
            id="breed"
            name="breed"
            value={pet.breed}
            onChange={handleChange}
            placeholder="Breed"
            className={styles.inputField}
            required
          />
          <select
            id="status"
            name="status"
            value={pet.status}
            onChange={handleChange}
            className={styles.inputField}
            required
          >
            <option value="Available">Available</option>
            <option value="Adopted">Adopted</option>
          </select>

          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              setPet({ ...pet, imgurl: base64 });
            }}
          />
          {pet.picture && <img src={pet.picture} alt="Pet" className={styles.imagePreview} />}
          <button type="submit" className={styles.submitButton}>
            Add Pet
          </button>
          <button type="button" className={styles.cancelButton} onClick={() => router.push("/admin/dashboard")}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPet;
