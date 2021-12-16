import styled from '@emotion/styled';

export const StatBox = styled.section`
  width: 500px;
  margin: 0 auto 30px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 20px;
  color: white;
  text-transform: uppercase;

  background-image: repeating-linear-gradient(
    to bottom,
    rgb(0, 183, 255),
    rgb(0, 183, 255) 10px,
    rgb(75, 204, 255) 10px,
    rgb(75, 204, 255) 10.5px
  );
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 3);
  text-align: center;
  padding: 10px 0;
`;

export const Label = styled.span`
  display: block;
  margin: 0 0 5px;
  color: rgb(240, 240, 240);
`;

export const Percentage = styled.span`
  font-family: Roboto;
  font-size: 30px;
  color: #fff;
`;
