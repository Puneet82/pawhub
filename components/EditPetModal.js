import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import styles from "./EditPetModal.module.css";

const EditPetModal = ({ pet, onSave, onClose }) => {
  const [updatedPet, setUpdatedPet] = useState({ ...pet });

  useEffect(() => {
    setUpdatedPet(pet);
  }, [pet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPet({ ...updatedPet, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setUpdatedPet({ ...updatedPet, picture: URL.createObjectURL(file) });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedPet);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-2xl mb-4">Edit Pet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={updatedPet.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="desc">
              Description
            </label>
            <input
              type="text"
              id="desc"
              name="desc"
              value={updatedPet.desc}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={updatedPet.age}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="breed">Breed</label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={updatedPet.breed}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div> */}
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={updatedPet.status}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="Available">Available</option>
              <option value="Adopted">Adopted</option>
            </select>
          </div> */}
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="picture">Picture</label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {updatedPet.picture && (
              <img src={updatedPet.picture} alt={updatedPet.name} className="mt-2 h-32 w-32 object-cover" />
            )}
          </div> */}
          <FileBase
            type="file"
            multiple={false}
            sx={{ marginBottom: 5 }}
            onDone={({ base64 }) => {
              setUpdatedPet({ ...updatedPet, imgurl: base64 });
            }}
          />
          <div className="flex items-center justify-between">
            <button type="submit" className="btn bg-blue-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-blue-700">
              Save
            </button>
            <button
              type="button"
              className="btn bg-gray-500 text-white text-lg px-4 py-2 rounded-lg hover:bg-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPetModal;
