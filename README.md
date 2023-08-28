# 학습 목표

- [x] Vue 2 기본 학습
  - [x] Decorator
    - [x] Class component 복기
- [x] Vue Router 3 기본 학습
- [x] VueX 3 기본 학습
  - [x] Decorator

## Step 설정

<ol>
  <li>using state</li>
  <li>bidirectional binding</li>
  <li>Vue Router</li>
  <li>VueX</li>
</ol>

<br><hr><br>

### 생각해볼 관점

- 양방향 바인딩
  - 채팅 로직 순서도에 따라 에밋해보기
- 클래스 컴포넌트에서 api 레이어 위임
  - 기존 패턴인 vuex를 활용한 레포지토리 패턴을 사용할 것인가
    - 효율적인가? 대체한다면 어떻게

<br><hr><br>

## Vue Router

- remove hash

```
new VueRouter({
  mode: 'history',
  // ...
})
```

<br>

## VueX

<img width="730" alt="" src="https://github.com/wonjin-dev/playing-vue/assets/82315118/7fd5b3a7-2d88-46e5-a372-9b46a027d5d5" />

- mutation과 action
- decorator `@Action`의 `rawError`

  > true = 정의한 에러를 날려주고 아니면 기본 정의에러를 날림.
  > default 가 false이기 때문에 생략할 시,catch의 error가 포착이 안될 수 있다.

- Mutation = 동기적 처리, Action = 비동기적 처리도 가능.
  - Action에서는 Mutation으로 commit을 행함으로써 간접적으로 상태를 변경하지만, Action을 호출하기 위한 dispatch 메소드는 Promise를 반환하기 때문에 처리의 순서를 제어하는 것이 가능.
  - Mutation은 State의 변경으로 놓아두고, Action에서 처리를 행하게끔 하는 것이 각 처리의 책임이 명확.

<br><hr><br>

### ref

**_Vue decorator_**

- https://github.com/kaorun343/vue-property-decorator#readme
- http://ccambo.github.io/Dev/Vue/6.How-to-use-vue-property-decorator
  > @PropSync, @Watch, @Component, ...

**_컴포넌트 이벤트_**

- https://vuejs.org/guide/components/events.html
  > emit, . . .

**_이벤트 핸들링_**

- https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
  > @, key-alias, ...
