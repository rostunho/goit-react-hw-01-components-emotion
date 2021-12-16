import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 10px;
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(240, 240, 240),
    rgb(240, 240, 240) 20px,
    #fff 20px,
    #fff 21px
  );
`;

export const Description = styled.div`
  padding: 20px 20px 0;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;

  margin: 0 auto;

  border-radius: 100%;
  background-color: rgb(0, 183, 255);
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0 10px;
`;

export const Tag = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 10px;
  color: rgb(105, 105, 105);
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 10px;
  color: rgb(105, 105, 105);
`;

export const Stats = styled.ul`
  display: flex;
  background-color: rgb(0, 183, 255);
  height: 100%;
  margin: 0;
  padding: 10px 0;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  text-align: center;

  &:not(:first-of-type) {
    border-left: 1px solid rgb(75, 204, 255);
  }
`;

export const Label = styled.span`
  display: block;
  margin: 0 0 5px;
  color: rgb(240, 240, 240);
`;

export const Quantity = styled.span`
  font-family: Roboto;
  font-size: 30px;
  color: #fff;
`;
