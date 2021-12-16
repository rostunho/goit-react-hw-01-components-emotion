import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;

  :not(:last-of-type) {
    border-bottom: 1px solid rgb(75, 204, 255);
  }

  :nth-of-type(odd) {
    background-color: rgb(0, 169, 236);
  }
`;

export const Online = styled.span`
  display: block;
  margin: 0 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: green;
  border: 1px solid white;
`;

export const Offline = styled.span`
  display: block;
  margin: 0 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: red;
  border: 1px solid white;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 30px 0 0;
  border-radius: 50%;
  background-color: rgb(75, 204, 255);
`;

export const Name = styled.p`
  font-size: 25px;
  line-height: 1;
  color: white;
  margin: 0;
  /* text-align: center; */
  /* vertical-align: middle; */
  /* margin: 20px 0 10px; */
`;
