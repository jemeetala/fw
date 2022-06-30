import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Accept: "application/json, text/javascript, */*; q=0.01",
    "X-Requested-With": "XMLHttpRequest",
    Authorization: "Token token=fg88hUkUczuzGL8gxyXJAA",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getContacts = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-459662296123098611.myfreshworks.com/crm/sales/contacts`,
    method: "get",
    params: {
      page: "1",
      per_page: "25",
      segment_id: "70003418989",
      sort: "updated_at",
      sort_type: "desc",
      timestamp: "2022-06-30T08:02:58.453Z",
      _: "1656576177511'",
      ...params,
    },
    headers,
    data,
  });
};
