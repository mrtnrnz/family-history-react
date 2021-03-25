import React, { useState, useEffect, Fragment } from "react";
import { TableCell, MenuItem } from "@material-ui/core";

import TableComponent from "../components/TableComponent";
import ButtonComponent from "../components/ButtonComponent";
import TextFieldComponent from "../components/TextFieldComponent";
import SelectComponent from "../components/SelectComponent";

import { tableHeader, familyApi } from "../mocks";

import useStyles from "../styles/makeStyles";

const Container = () => {

  const [memberState, setMemberState] = useState([]);
  const [apiState, setApiState] = useState([...familyApi]);
  const [modifyName, setModifyName] = useState("");
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [relationshipState, setRelationshipState] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const styles = useStyles();

  const tableRowProp = (
    tableHeader && tableHeader.length > 0
    &&
    tableHeader.map((value, index) => {
      if(index === 0) {
        return(
          <TableCell key={index}>
            {value}
          </TableCell>
        );
      } else {
        return(
          <TableCell key={index} align="right">
            {value}
          </TableCell>
        );
      }
    })
  );

  const submitButtonEventHandler = () => {
    if(modifyName === "") {
      return;
    } else {
      if(modifyName !== "Delete") {
        if(firstNameState === "" || lastNameState === "" || relationshipState === "" ) {
          return;
        } else {
          if(modifyName === "Add") {
            setMemberState([
              ...memberState,
              {
                first_name: firstNameState,
                last_name: lastNameState,
                relationship: relationshipState,
              }
            ]);
          } else if(modifyName === "Edit") {

            const apiArray = [...apiState];

            apiArray.filter(item => {
              return item.first_name === selectValue
            })
            .map((value, index) => {
              apiArray.splice(apiArray.indexOf(value), 1, {
                first_name: firstNameState,
                last_name: lastNameState,
                relationship: relationshipState
              });
              setApiState(apiArray);
            });

            const memberArray = [...memberState];

            if(memberArray.length > 0) {
              memberArray.filter(item => {
                return item.first_name === selectValue
              })
              .map((value, index) => {
                memberArray.splice(memberArray.indexOf(value), 1, {
                  first_name: firstNameState,
                  last_name: lastNameState,
                  relationship: relationshipState
                });
                setMemberState(memberArray);
              });
            } 
          }
        }
      } else if(modifyName === "Delete" && firstNameState !== "") {

        const apiArray = [...apiState];

        const filteredApi = apiArray.filter(item => item.first_name === firstNameState);
        filteredApi.map((value, i) => {
          const index = filteredApi.indexOf(value);
          if(index !== -1) {
            apiArray.splice(index, 1);
            setApiState(apiArray);
          }
        });

        const memberArray = [...memberState];

        const filteredMemberpi = memberArray.filter(item => item.first_name === firstNameState);
        filteredMemberpi.map((value, i) => {
          const index = filteredMemberpi.indexOf(value);
          if(index !== -1) {
            memberArray.splice(index, 1);
            setMemberState(memberArray);
          }
        });
      }
    }
  };


  return(
    <div className={styles.containerRoot}>
      <TableComponent
         row={tableRowProp}
         rows={[...apiState, ...memberState]}
      />
      {
        modifyName !== ""
        &&
        modifyName === "Add" || modifyName === "Edit"
        ?
          (
            <Fragment>
              {
                modifyName === "Edit" &&
                (
                  <SelectComponent
                    selectValue={selectValue}
                    selectOnChange={event => setSelectValue(event.target.value)}
                  >
                    {
                      familyApi.map((item, index) => (
                        <MenuItem value={item.first_name} key={index}>
                          {item.first_name}
                        </MenuItem>
                      ))
                    }
                    {
                      memberState.length > 0
                      &&
                      memberState.map((item, index) => (
                        <MenuItem value={item.first_name} key={index}>
                          {item.first_name}
                        </MenuItem>
                      ))
                    }
                  </SelectComponent>
                )
              }
              <TextFieldComponent 
                style={styles.textFieldStyle}
                label="First Name"
                value={firstNameState}
                onChange={event => setFirstNameState(event.target.value)}
                id={modifyName}
              />
              <TextFieldComponent 
                style={styles.textFieldStyle}
                label="Last Name"
                value={lastNameState}
                onChange={event => setLastNameState(event.target.value)}
                id={modifyName}
              />
              <TextFieldComponent 
                style={styles.textFieldStyle}
                label="Relationship"
                value={relationshipState}
                onChange={event => setRelationshipState(event.target.value)}
                id={modifyName}
              />
            </Fragment>
          )
        :
        modifyName === "Delete" &&
          (
            <TextFieldComponent 
              style={styles.textFieldStyle}
              label="Delete Member"
              id={modifyName}
              value={firstNameState}
              onChange={event => setFirstNameState(event.target.value)}
            />
          ) 
      }
      {
        modifyName !== ""
        &&
        <ButtonComponent
          title="Submit"
          style={styles.buttonModifyStyle}
          onClick={submitButtonEventHandler}
        />
      }
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
        <ButtonComponent
          title="Add Member"
          style={styles.buttonModifyStyle}
          onClick={() => setModifyName("Add")}
        />
        <ButtonComponent
          title="Edit Member"
          style={styles.buttonModifyStyle}
          onClick={() => setModifyName("Edit")}
        />
        <ButtonComponent
          title="Delete Member"
          style={styles.buttonDeleteStyle}
          onClick={() => setModifyName("Delete")}
        />
      </div>
    </div>
  );
};

export default Container;