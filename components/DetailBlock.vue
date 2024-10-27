<template>
  <div class="detail-block">
    <div class="block-title"><slot name="titleComponent"></slot></div>
    <div class="detail-info"><slot name="detailComponent"></slot></div>
  </div>
</template>

<style lang="scss" scoped>
$header-background-color: #2c77a8;
$header-text-color: black;
$body-background-color: #dfdddd;
$detail-block-border-color: #1f5099;

.detail-block {
  display: flex;
  flex-direction: row;
  border: 2px solid $detail-block-border-color;
  background-color: #a8c9d4;

  .block-title,
  .detail-info {
    padding: 10px;
  }

  .block-title {
    flex-basis: 25%;
    border-right: 1px solid $detail-block-border-color;
    background-color: #96c5d4;
    display: flex;
    flex-direction: column;

    h4 + br + h4 {
      margin-top: 0.5em;
    }

    > * {
      text-align: center;
      margin: auto;
    }
  }

  .detail-info {
    flex-basis: 75%;
    margin: auto;
  }
}

@media (width <= 850px) {
  .detail-block {
    flex-direction: column;

    .block-title {
      border-bottom: 1px solid $detail-block-border-color;
      border-right: none;
    }
  }
}
</style>
