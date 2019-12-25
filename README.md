## 자바스크립트 기본

- ES6이후에 ES7 8 9는 큰 변화는 없다.
- New modern javascript를 배운다.
- 차이를 알면서 공부(difference)/ common name
- var/ const / let의 차이
- const 는 변수지만 이후에 나온 변수에의해 변하는걸 막음(Read only, stop, i can not re-difine variables name)
- 장점(advantage) for block our variables
- let은 이전의 var와 같음
- top to bottom

```javascript
console.log(name);
var name = 'sangwoo';
```

#에러가 뜨지않고 undifined로 뜬다. 왜냐하면 자바스크립트 처리에서 hoising되기때문이다(스크립트를 읽을때 변수를 올려줌)
해당 호이스팅이 어떻게적용되냐하면

```javascript
var name;
console.log(name);
var name = 'sangwoo';
```

와 같은것이다.
따라서 let이나 const를 쓰면 경고창을 띄워주는 좋은 습관이될수있다.
경고창이 띄워지는것은 temporal dead zone을 의미한다.

- {}블록이라하는데, 블록은 괄호(braket)로 정의됨.
- var는 block / scope가 없고 let const는 있음
- {}블록안의 공간을 버블(scope)라고하는데 버블의 외부에서 내부에는 접근이 불가하다.

```javascript
let name = '박씨';
if (true) {
  let name = '조씨';
  if (true) {
    let name = '김씨';
  }
}
console.log(name);
```

- 콘솔창에는 박씨 가 뜬다. 왜냐하면 외부에서 선언되었기때문에 콘솔창에서 접근할수있는것은 박씨뿐이다.(외부->내부 불가)
- 덮어쓰기, 편집하고싶을떄 (over-write, modify) let 디폴트는 const
- arrow function은 make way more reliable(코드를 믿음직하게 만든다.)
- basically better easier way to look code.(기본적으로 코드를 더 쉽게 보기위한 방법이다.)
- what is maps do, map goes to each of items, and it calls a function(맵이 하는일은 맵은 각각의 아이템에 함수를 호출함)

## 애로우 펑션

- 애로우 펑션의 arguments가 2개 이상일때 ()를 써줘야한다.

```javascript
const names = ['김씨', '조씨', '손씨'];
const hearts = names.map((item, index) => {
  return item + '💝' + index;
});
console.log(hearts);
```

- argument가 하나도없는 경우는 리턴값만 돌려주는 함수가됨. 물론 괄호인 () parentheses는 필요함

```javascript
const names = ['김씨', '조씨', '손씨'];
const hearts = names.map(item => {
  return item + '💝';
});
console.log(hearts);
```

화살표함수는 implict return을 사용할수있다.
리턴이 사라진것을 볼 수 있다. 리턴값을 쓰게되면 반드시 브라켓을 써줘야함(블록)
body->내용

```javascript
const names = ['김씨', '조씨', '손씨'];
const hearts = names.map(item => item + '💝';
);
console.log(hearts);
```

- 애로우함수의 this scope.
- 아래와 같이 코드를 적는경우 애로우함수의 규칙에 의해 this가 가르키는것은 window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
  로 한정된다.
- 따라서 밑에 this.style함수는 button을 받지 못하기때문에 오류가 발생한다.
- 여기서 윈도우는 Outter bubble,즉 스코프 밖을 의미하게됨.
- 기본적인 함수는 this를 event로 가지고있고 애로우 펑션은 this를 윈도우로 가지고있음, 아우터버블을 참조함 따라서, 애로우 펑션을 쓰지 말하야할 경우를 생각하면 좋음.

```javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log(this);
  this.style.backgroundColor = 'red';
});
```

# 영어단어

- need return talk about little bit more
- new, nothing, value, array, put confusing
- create put it write here looks like, came to imporve(개선되다)
  -refer, whole, outter bubble.
