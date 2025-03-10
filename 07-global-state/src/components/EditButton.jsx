//EditButton.jsx

import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
    width: "100px",
    padding: "6px",
    borderRadius: "8px"
  };
  
  export const EditButton = () => {
    const { isAdmin } = useContext(AdminFlagContext)

    return (
      <button style={style} disabled={!isAdmin}>
        권한있는 유저만 수정 가능한 기능
      </button>
    );
  };