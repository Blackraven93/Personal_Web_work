# 2.1 Life Before Grid
flexbox를 이용할시 content의 공간조정을 개별적으로 해야한다.
따라서 gird 규칙을 적용해 쉽게 layout에 적용하는 방법이 나옴

# 2.2 CSS Grid Basic Concepts
display: grid; <= grid설정
font-size 만큼 height이 조정됨
grid-template-columns || row를 이용해 content들의 크기를 규정하여 격자를 생성
gap은 격자사이의 공간을 조정할 수 있음
마치 갤러리처럼 사용 가능

# 2.3 Grid Template Areas
grid-template repeat(반복수, 크기)를 이용해 반복을 줄일 수 있음
auto 크기 : 이용하면 전체화면을 오토로 조정함
grid-template-areas를 이용하여 배치할 grid-area 변수명 설정
변수 설정은 각 프로퍼티에 grid-area를 설정 value가 변수명
빈공간 설정 가능 (.)

# 2.4 Rows and Columns
grid-template-areas 와 다르게 숫자로 지정할 수 있는 방법이 있다
grid-column || rows-start || end를 이용하여 숫자로 지정
숫자는 line의 형태를 가지고 있음

# 2.5 Shortcuts
2.4에서 적용한 방법들의 단축
grid-colum || row: {number} / {number};
더 간단한 방법
처음부터 끝까지 갈 때 얼마나 큰지를 적는게 좋음
line수를 다 세는건 비효율적임 따라서 끝까지는 -1
span을 사용하면 채우기 쉬움 하지만 시작점을 적어줘야함
수직 수평 모두 사용 가능

# 2.6 Line Naming
grid-template-columns||rows로 지정 할 때 line에 직접적으로 []를 이용해 네이밍을 할 수 있다. 후에 grid-column || row 에 숫자 대신 네이밍을 넣을 수도 있다.