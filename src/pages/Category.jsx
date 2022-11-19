import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { XSelectBtn } from '../../src/asset/icon';
import Transparency from '../asset/image/transparency.png';
import { categoryActivityData } from '../constants/categoryActivityData';
import { categoryCultureData } from '../constants/categoryCultureData';
import { categoryDevelopData } from '../constants/categoryDevelopData';
import { categoryFestivalData } from '../constants/categoryFestivalData';
import { categoryHabitData } from '../constants/categoryHabitData';
import { categorySportData } from '../constants/categorySportData';
import { categoryTravelData } from '../constants/categoryTravelData';

const Category = () => {
  const [selectedName, setSelectedName] = useState(''); // 선택된 카테고리 이름 저장위해 필요함
  // 클릭한
  const navigate = useNavigate();
  const goToXInfom = () => {
    navigate('/xinform');
  };
  return (
    <StWrap>
      <StTitle>당신의 X를 선택해주세요.</StTitle>
      <StSportTitle>
        <StColorChange>&#124;</StColorChange> 운동 <StColorChange>&#124;</StColorChange>
      </StSportTitle>
      <StFlex>
        {categorySportData.map((category) => (
          <CategoryBox
            onClick={() => setSelectedName(category.name)} // 클릭하면 선택된 카테고리 이름이 카테고리 이름으로 바뀜
            type="button"
            key={category.id}
            isactive={selectedName === category.name}>
            {category.name}
          </CategoryBox> // isactive => props를 통해 선택된 카테고리 이름과 카테고리 이름이 같으면 스타일 변경
        ))}
      </StFlex>

      <StSportTitle>
        <StColorChange>&#124;</StColorChange> 액티비티 <StColorChange>&#124;</StColorChange>
      </StSportTitle>
      <StFlex>
        {categoryActivityData.map((categoryA) => (
          <CategoryBox
            onClick={() => setSelectedName(categoryA.name)} // 클릭하면 선택된 카테고리 이름이 카테고리 이름으로 바뀜
            type="button"
            key={categoryA.id}
            isactive={selectedName === categoryA.name}>
            {categoryA.name}
          </CategoryBox> // isactive => props를 통해 선택된 카테고리 이름과 카테고리 이름이 같으면 스타일 변경
        ))}
      </StFlex>

      <StSportTitle>
        <StColorChange>&#124;</StColorChange> 취미 <StColorChange>&#124;</StColorChange>
      </StSportTitle>
      <StFlex>
        {categoryHabitData.map((categoryH) => (
          <CategoryBox
            onClick={() => setSelectedName(categoryH.name)} // 클릭하면 선택된 카테고리 이름이 카테고리 이름으로 바뀜
            type="button"
            key={categoryH.id}
            isactive={selectedName === categoryH.name}>
            {categoryH.name}
          </CategoryBox> // isactive => props를 통해 선택된 카테고리 이름과 카테고리 이름이 같으면 스타일 변경
        ))}
      </StFlex>

      <StSportTitle>
        <StColorChange>&#124;</StColorChange> 성장/자기계발 <StColorChange>&#124;</StColorChange>
      </StSportTitle>
      <StFlex>
        {categoryDevelopData.map((categoryD) => (
          <CategoryBox
            onClick={() => setSelectedName(categoryD.name)} // 클릭하면 선택된 카테고리 이름이 카테고리 이름으로 바뀜
            type="button"
            key={categoryD.id}
            isactive={selectedName === categoryD.name}>
            {categoryD.name}
          </CategoryBox> // isactive => props를 통해 선택된 카테고리 이름과 카테고리 이름이 같으면 스타일 변경
        ))}
      </StFlex>

      <StSportTitle>
        <StColorChange>&#124;</StColorChange> 문화/예술 <StColorChange>&#124;</StColorChange>
      </StSportTitle>
      <StFlex>
        {categoryCultureData.map((categoryCA) => (
          <CategoryBox
            onClick={() => setSelectedName(categoryCA.name)} // 클릭하면 선택된 카테고리 이름이 카테고리 이름으로 바뀜
            type="button"
            key={categoryCA.id}
            isactive={selectedName === categoryCA.name}>
            {categoryCA.name}
          </CategoryBox> // isactive => props를 통해 선택된 카테고리 이름과 카테고리 이름이 같으면 스타일 변경
        ))}
      </StFlex>

      <StSportTitle>
        <StColorChange>&#124;</StColorChange> 페스티벌 <StColorChange>&#124;</StColorChange>
      </StSportTitle>
      <StFlex>
        {categoryFestivalData.map((categoryF) => (
          <CategoryBox
            onClick={() => setSelectedName(categoryF.name)} // 클릭하면 선택된 카테고리 이름이 카테고리 이름으로 바뀜
            type="button"
            key={categoryF.id}
            isactive={selectedName === categoryF.name}>
            {categoryF.name}
          </CategoryBox> // isactive => props를 통해 선택된 카테고리 이름과 카테고리 이름이 같으면 스타일 변경
        ))}
      </StFlex>

      <StSportTitle>
        <StColorChange>&#124;</StColorChange> 여행 <StColorChange>&#124;</StColorChange>
      </StSportTitle>
      <StFlex>
        {categoryTravelData.map((categoryT) => (
          <CategoryBox
            onClick={() => setSelectedName(categoryT.name)} // 클릭하면 선택된 카테고리 이름이 카테고리 이름으로 바뀜
            type="button"
            key={categoryT.id}
            isactive={selectedName === categoryT.name}>
            {categoryT.name}
          </CategoryBox> // isactive => props를 통해 선택된 카테고리 이름과 카테고리 이름이 같으면 스타일 변경
        ))}
      </StFlex>
      <StSelect>
        <XSelectBtn onClick={goToXInfom} />
      </StSelect>
      <Img src={Transparency} alt="반투명 배경" />
    </StWrap>
  );
};

export default Category;

const StSelect = styled.div`
  position: fixed;
  z-index: 5;
  bottom: 15.3rem;
`;

const Img = styled.img`
  position: fixed;
  bottom: 0;
`;

const StColorChange = styled.span`
  color: #888888;
`;

const StFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  padding-top: 3.2rem;
`;

const CategoryBox = styled.button`
  width: auto;
  height: 37px;
  padding: 10px 15px 8px;

  background: #ffffff;
  border-radius: 18px;
  font-family: 'S-CoreDream-3Light';
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  border: none;

  ${(props) =>
    props.isactive &&
    css`
      border: 0.2rem solid #853636;
      color: #853636;
    `};
`; // props 를 받아서 조건부 스타일링

const StSportTitle = styled.p`
  padding-top: 6.3rem;

  color: #3e3838;
  font-family: 'S-CoreDream-3Light';
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;
`;

const StTitle = styled.h1`
  padding-top: 10.5rem;

  color: #853636;
  font-family: 'S-CoreDream-3Light';
  font-style: normal;
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 2.6rem;
`;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 39rem;
`;
