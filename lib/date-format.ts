import dayjs from "dayjs";

const formatDate = (createdAt: Date) => {
  return dayjs(createdAt).format("DD/MM/YYYY");
};

export default formatDate;
