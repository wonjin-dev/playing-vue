# 학습 목표

> 세상 처음해보는 Vue2와 클래스형 컴포넌트를 실무 레벨에서 핸들링 하기 위한 기본 학습

- [x] Vue 2 기본 학습
  - [x] Class component 복기
  - [x] Vue 데코레이터 학습
- [x] Vue Router 3 기본 학습
- [ ] VueX 3 기본 학습

## Step 설정

<ol>
  <li>using state</li>
  <li>bidirectional binding</li>
  <li>Vue Router</li>
  <li>VueX</li>
</ol>

## Additional

- [ ] TypeScript
- [ ] Sass
- [ ] Life cycle
- [ ] bootstrap

<br><hr><br>

### 생각해볼 관점

- 양방향 바인딩
  - 채팅 로직 순서도에 따라 에밋해보기
    - `v-model` ?
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
