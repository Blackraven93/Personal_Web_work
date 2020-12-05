# 1.0 Life Before Flexbox
Flexbox 사용의 목적은 px단위로 반응형 웹을 만들기에 한계점이 있음
따라서 Flexbox를 이용해 더 손쉽게 grid layout을 수정

# 1.1 First Rule of Flexbox
flexbox 적용시 꼭 부모 css display 프로퍼티에 flex value로 적용 시켜줘야한다.

# 1.2 Main Axis and Cross Axis
flexbox는 row, column으로 정렬 기준을 삼는다
flex-direction: row;일 때 horizontal가 main axis가 됨
이때 cross axis vertical(수평)축이 된다.
cross axis 방향으로 item을 옮길 땐 align-items를 사용
주의 할점은 부모 셀렉터의 높이를 확인해 봐야함

# 1.3 Column and Row
만약 flex-direction: column; 일 때 main axis와 cross axis가 뒤바뀜

# 1.4 align-self and order
align-self를 통해 자식의 셀렉터를 지정해 정렬 할 수 있다.
html을 바꿀 수 없을 때 order: {number}; 를 이용해서 순서를 정의 할 수 있다 (default : 0)

# 1.5 wrap, nowrap, reverse, align-content
flex는 자동적으로 제한 넓이와 높이를 초과하면 자동 조정된다.
flexbox는 하나의 줄로 정렬하는게 우선이다.
변경이 필요하다면 flew-wrap을 이용하여 크기를 유지하며 변경 시킬 수 있다.
flex-direction value에 reverse 기능이 있음
flex-wrap: wrap-reverse; 이용하면 역순부터 채워나감
align-content: line을 변경한다. line은 cross axis

# 1.6 flex-grow, flex-shrink
flex가 no-wrap일 때 적용시키는 프로퍼티
flex-shrink 설정값의 배로 줄어든다. default = 1
flex-grow 반대로 작용(넓어지면  여분의 공간만큼 밀면서 설정값의 배 만큼 커짐) default = 0
공간이 남으면 설정 셀렉터들이 모두 가져감

# 1.7 flex-basis
flex-basis child에 적용하는 프로퍼티
main axis 에 따라 변경 width => height

# 1.8 Flexbox Froggy 1-13

# 1.9 Flexbox Froggy 14-24