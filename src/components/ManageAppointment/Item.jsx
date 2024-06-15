import { useParams } from "react-router-dom";
import UICircularIndeterminate from "../UI/CircularIndeterminate.jsx";
import { useQuery } from "@tanstack/react-query";
import { getValuationRequestByID } from "../../services/api.js";

const RequestItem = () => {
  const { requestId } = useParams();
  const { data: request, isLoading } = useQuery({
    queryKey: ["request"],
    queryFn: () => getValuationRequestByID(requestId),
  });
  if (isLoading) {
    return <UICircularIndeterminate />;
  }
  const location = useLocation();
  return (
    <>
      <DetailList />
    </>
  );
};

export default RequestItem;
