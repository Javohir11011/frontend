const url = process.env.BACE_URL;

export const deleteUser = async () => {
  const res = await fetch(`${url}/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Xatolik yuz berdi!!!");
  }
  
};
