import axios from "axios";
const url = "http://localhost:3000/api/rental";

export const createAdvert = () => axios.post(url + "/create");

export const updateAdvert = (id, data) => axios.patch(url + "/" + id, data);

export const deleteAdvert = id => axios.delete(url + "/" + id);

export const getAll = () => axios.get(url);

module.exports = {
  createAdvert,
  updateAdvert,
  deleteAdvert,
  getAll
};
