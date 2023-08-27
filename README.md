# 학습 목표

> 세상 처음해보는 Vue2와 클래스형 컴포넌트를 실무 레벨에서 핸들링 하기 위한 기본 학습

- [x] Vue 2 기본 학습
  - [x] Class component 복기
  - [x] Vue 데코레이터 학습
- [ ] Vue Router 기본 학습
- [ ] VueX 기본 학습

## Step

<ol>
  <li>using state</li>
  <li>bidirectional binding</li>
  <li>API fetch</li>
  <li>VueX</li>
  <li>Vue Router</li>
</ol>

### 생각해볼 관점

- 양방향 바인딩
  - 채팅 로직 순서도에 따라 에밋해보기
    - `v-model` ?
- 클래스 컴포넌트에서 api 레이어 위임
  - 기존 패턴인 vuex를 활용한 레포지토리 패턴을 사용할 것인가
    - 효율적인가? 대체한다면 어떻게

<br><hr><br>

### ref

컴포넌트 이벤트

- https://vuejs.org/guide/components/events.html
  > emit, . . .

이벤트 핸들링

- https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
  > @, key alias
