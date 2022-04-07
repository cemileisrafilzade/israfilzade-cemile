import React from "react";
import styled from "styled-components";

const UserInfo =(userId)=>{
    console.log(userId);
    return(
        <Card>
            
            {userId}
        </Card>
    )
}
export default UserInfo;

const Card=styled.div`
 width: 30%;
  margin: 25px auto;
  background-color: #f7f7f7;
  border-radius: 20px;
  padding: 20px;
  text-align: left;
  -webkit-box-shadow: 1px 1px 5px 1px rgba(114, 114, 114, 0.23);
  box-shadow: 1px 1px 5px 1px rgba(114, 114, 114, 0.23);

`