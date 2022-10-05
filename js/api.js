const BASE_URL = " http://127.0.0.1:5000";
const RESOURSE_URL = `${BASE_URL}/items`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
      
    }

    return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

// public functionality

export const getAllCameras = async () => {
  const rawResponse = await baseRequest({ method: "GET" });

  return await rawResponse.json();
};

export const postCamera = (body) => {baseRequest({ method: "POST", body }); console.log("hghg");};

export const updateCamera = (id, body) =>
  baseRequest({ urlPath: `/${id}`, method: "PATCH", body });

export const deleteCamera = (id) =>
  baseRequest({ urlPath: `/${id}`, method: "DELETE" });