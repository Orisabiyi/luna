import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import ContentEditable from "react-contenteditable";
import { FaPencilAlt } from "react-icons/fa";

function Invoice() {
  const [userAddress] = useState(function () {
    return JSON.parse(sessionStorage.getItem("address"));
  });
  const [issuedDate, setIssuedDate] = useState("");
  const { userProfile } = UserContext();

  const [text, setText] = useState("Click the pencil to edit me");
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  useEffect(function () {
    setIssuedDate(new Date().toLocaleDateString());
  }, []);

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center">
      <figure className="bg-gray-200 px-[3rem] py-[1.5rem] w-[50%] rounded-[1.5rem] flex flex-col gap-[1rem]">
        <div className="text-[2rem]">
          <h1>{`Invoice LN-${new Date().toISOString().slice(-4)}`}</h1>
          <h3>{`Issued Date: ${issuedDate}`}</h3>
        </div>

        <div className="text-[1.8rem]">
          <p>
            <span>To: </span>
            <span>El-Mubaraq Ajibola</span>
          </p>

          <p>
            <span>From: </span>
            <span>
              {userProfile.length > 0
                ? userProfile.profile.stxAddress.mainnet
                : userAddress.profile.stxAddress.mainnet}
            </span>
          </p>
        </div>

        <ul>
          <li>
            <ContentEditable
              html={text}
              disabled={!isEditing}
              onChange={handleChange}
              onBlur={handleBlur}
              tagName="span"
            />
            <FaPencilAlt
              onClick={handleEditClick}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            />
          </li>
          <li></li>
          <li></li>
        </ul>
      </figure>
    </section>
  );
}

export default Invoice;
