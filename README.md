#  나의 X 소개서
> 내가 해보고 싶었지만 아직 해보지 못했던 활동 ‘X’에 대한 목표를 세우고 달성하게 도와주는 서비스

##  가치제안
> 고객은 그동안 못 해봤던 활동들에 대해 소개하면서 목표를 세운다면 도전의 동기부여를 얻을 수 있을 것이다.

##  문제정의 
> 고객은 그동안 못 해봤던 활동들을 그동안 도전하지 못한 똑같은 이유로 도전하기 어려울 것이다.

## 타겟정의 
> 하고 싶었지만 해보지 못한 활동들을 부담 없이 달성해보고 공유를 통해 성취감을 느끼고 싶은 사람
20대 / SNS를 즐겨 사용함 / 도전을 즐기지만 시간이 많이 없는 or 도전을 망설여하는 사람 / 자신의 도전에 대한 성과를 다른 사람들에게 공유하고 싶은 사람)


## 🧑🏻‍💻 웹소개서

<table align="center">
    <tr align="center" >
        <td style="min-width: 150px;">
            <a href="https://github.com/Happhee">
              <img src="https://user-images.githubusercontent.com/79238676/202853024-564f4786-4298-42de-b1da-a871a3861263.png" width="200">
              <br />
              <b>Happhee</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/wooyoung0830">
              <img src="https://user-images.githubusercontent.com/79238676/202852742-679b0626-f736-4673-ace1-b3129b9b097c.png" width="200" >
              <br />
              <b>Wooyoung</b>
            </a>
        </td>
        <td style="min-width: 150px;" background-color="white">
            <a href="https://github.com/Dangpy">
              <img src="https://user-images.githubusercontent.com/79238676/202845999-a361ee95-c163-4762-b1ef-96abc3739b69.png" width="200" >
              <br />
              <b>Dangpy</b>
            </a> 
        </td>
        <td style="min-width: 150px;" background-color="white">
            <a href="https://github.com/talkingOrange">
              <img src="https://user-images.githubusercontent.com/79238676/202845859-5876d1b1-4521-449a-9aff-1e835a9eb72b.png" width="200">
              <br />
              <b>talkingOrange</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            🌈 서히 🌈 <br/>
            Web FE - 나의 X결과, O결과
        </td>
        <td>
            💗 우영 💗<br />
            Web FE - O/X 선택, X결과 
        </td>
        <td>
            👼 명지 👼<br />
            Web FE - 시작, 카테고리 
        </td>
        <td>
            🌕 예원 🌕 <br />
            Web FE - 이름/비밀번호 , X 정보 입력 
        </td>
    </tr>
</table>


## ⚒️ 기술 스택 
```
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/react-router-dom": "^5.3.3",
    "axios": "^1.1.3",
    "eslint-plugin-simple-import-sort": "^8.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-route": "^1.0.3",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.6",
    "typescript": "^4.4.2",
```


## ✅ 커밋 컨벤션

| 제목     | 내용                                   |
| -------- | -------------------------------------- |
| init     | 작업 세팅 커밋 (패키지 설치 등)        |
| feat     | 새로운 기능을 추가할 경우       |
| style   | 기능에 영향을 주지 않는 커밋, 코드 순서, css등의 포맷에 관한 커밋                         |
| fix      | 버그를 고친 경우                       |
| refactor |프로덕션 코드 리팩토링        |
| docs      | 문서를 수정한 경우, 파일 삭제, 파일명 수정 등 ex) README.md|
| chore | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우, 주석 추가, 자잘한 문서 수정 |
| code review | 코드 리뷰 반영 |

----
## 📁 폴더 구조
```
|-- 📁 node_modules
|-- 📁 public
└── 📁 src
	|-- 📁 asset
	|-- 📁 components 
	└── 📁 pages
		├── Main.ts 
		├── Login.ts 
		├── Category.ts 
		├── XInfom.ts 
		├── XIntroduction.ts 
		├── SelectResult.ts 
		├── XCorrect.ts 
		└── XIncorrect.ts 
	|-- 📁 styles
	└── 📁 utils
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- README.md
|-- package.json
|-- tsconfig.json 
└── yarn.lock
```
---

## 🖥 코드 컨벤션


- 상수는 영문 대문자 스네이크 표기법 (예를 들면 키값)
    - API_KEY
- 컴포넌트는 대문자 `카멜 케이스`를 사용한다. (함수형 컴포넌트)
    - MainHeader
- 변수는 `var 사용 금지`, 그냥 const ! 안되면 let
- rsc 나머지 함수는 화살표 함수를 이용하자
- `암시적 반환`을 최대한 활용한다 (early return)
- axios, async await을 이용할 때 try & catch를 이용한다
- `구조분해할당`을 적극 이용하자
- 변수 등을 조합해서 문자열을 생성할 때는 `무조건 리터럴`을 이용한다
    - X) var1 + “ “ + var2
    - O) `${var1} ${var2}`
- switch-case 사용시 `break를 강제`하자. case문 사이들끼리는 가독성을 위해 띄어주자
- 조건문은 `무조건 삼중 등호 연산자만` 쓰도록 하자!!  ? :
- for는 지양하고 forEach, map을 사용
- 주석은 쓰려고 하는 대상 바로 위에 쓰자
단, 한 줄이면 끝에 쓰는 것도 허용. 즉, 아래에 쓰는 것은 금지한다.
- **img태그의 alt 꼭꼭 넣어주시고, 한글로 적어주세요! `alt=”foforever웨비들짱”`**
- button 태그에는 `type을 명시`  합시다!
<button type=”button”>asdf</button>
- TS
    - 버튼, 헤더와 같이 common component에서는 `children` 적극 활용
    
    ```tsx
    // 여기에 주석!
    interface SearchBarProps{
    }
    
    const SearchBar = (props : SearchBarProps) => {
      const { a, b, c } = props;
      ...
    ```
    
    - `interface`와 `export default function 컴포넌트 선언 사이 한줄` 띄어쓰기.
    - 컴포넌트에서 props로 전달받은 interface를 선언해줄때, `컴포넌트명+Props`로 선언하기
- `props → hooks → 핸들러`
- styled-componets 는 tsx 맨 아래에 선언해주자.
- 컴포넌트 최상단에 감싸는 것은 St{컴포넌트명}Wrapper. Root Container
- `컴포넌트 선언` 과 `처음 스타일드 컴포넌트 선언 사이 한`줄 띄어쓰기.
- 스타일드 컴포넌트는 속성별로 개행을 해주므로 한줄 띄어쓰기 하지 않음.


### 2️⃣ 네이밍 

- `컴포넌트`,`변수명` : 동사 , 명사 중요한게 앞으로 → UserImg, DeleteBtn, useInfo
- `함수명`  : 동사 + ~


## 💡 브랜치 운영

- **main**: 우리가 개발 최종시에 Merge를 하는 곳 ❗️
- **feature**: 기능을 개발하면서 각자가 사용할 브랜치
    
    Main, Search, Search-detail,  MyPage
    
    ```tsx
    $ git checkout -b feature-{기능이름}
    ```
    
    ex **) feature-review -> review/2**
    
    ex) feature-Main → main/2
    
    **feature브랜치에서 header/#{이슈번호} 브랜치 생성**
    
    **⇒ 추가 ) main_product O ~~mainProduct~~ X 스네이크 케이스로 명명하기**
