import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../store/slice/userSlice";
import { AiOutlineClose } from "react-icons/ai";

const List = () => {
  const data = useSelector(getAllData);

  console.log(data);
  const handelRemove = (value) => {
    // dispatch(removeData(value));
  };
  return (
    <>
      <div style={{ width: "50%" }}>
        <h3>List Component</h3>
        {data ? (
          <li>
            {data.gender === "Male" ? (
              <p>{`Mr. + ${data.firstname} +" "+ ${data.lastname}`}</p>
            ) : (
              <p>{`Mrs. + ${data.firstname} +" "+ ${data.lastname}`}</p>
            )}

            <i>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#delete"
              >
                <AiOutlineClose onClick={() => handelRemove(data.firstname)} />
              </button>
              <div
                className="modal fade"
                id="delete"
                area-hidden="true"
                tabindex="-1"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="delte">
                        Do You Want To Remove The User?
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </i>
          </li>
        ) : null}
      </div>
    </>
  );
};

export default List;
