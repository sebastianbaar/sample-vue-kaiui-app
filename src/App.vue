<template>
  <kaiui-content>
    <kaiui-header title="ToDo List" />
    <kaiui-tabs>
      <kaiui-tab-item name="Item One" selected>
        <kaiui-text text="This is a standard Text element with a lot of Text in it. Hope you like it. Enjoy!" />
        <kaiui-input v-on:onEnter="toggleSoftkeys" label="Add a Task" placeholder="New Item" />
        <kaiui-separator title="Separator Title" />
        <kaiui-input-multi label="Multi" placeholder="More Items" />
        <kaiui-separator title="Separator Title" />
        <kaiui-button icon="kai-icon-calendar" title="Button Title" />
        <kaiui-button
          v-bind:softkeys="softkeysPhone"
          v-on:softRight="phoneButtonSoftRightClicked"
          v-on:softCenter="phoneButtonSoftCenterClicked"
          icon="kai-icon-phone"
          iconRight
          title="Button Title"
        />
        <kaiui-button title="Button Title" />
      </kaiui-tab-item>

      <kaiui-tab-item name="Item Two">
        <kaiui-list-item primaryText="List Item Title" />
        <kaiui-list-item primaryText="List Item Title" iconLeft="kai-icon-download" />
        <kaiui-list-item
          primaryText="List Item Title"
          secondaryText="Subtitle for List Item Title"
          iconRight
        />
        <kaiui-list-item
          primaryText="List Item Title"
          secondaryText="Subtitle for List Item Title"
          iconLeft="kai-icon-contacts"
          iconRight="none"
        />
        <kaiui-list-item primaryText="List Item Title" iconLeft="kai-icon-favorite-on" />
        <kaiui-list-item
          primaryText="List Item Title"
          secondaryText="Subtitle for List Item Title"
          tertiaryText="Tertiary Text for List Item Title"
          iconLeft="kai-icon-calendar"
          iconRight="kai-icon-favorite-on"
        />
      </kaiui-tab-item>

      <kaiui-tab-item name="Item Three">
        <kaiui-toast title="Hi, I'm a Toast!" ref="toast" />
        <kaiui-button
          v-on:softCenter="toggleToastButtonSoftCenterClicked"
          title="Show Toast"
        />
        <kaiui-checkbox
          primaryText="Checkbox Item Title"
          secondaryText="Subtitle for Checkbox List Item Title"
          v-bind:isChecked="true"
        />
        <kaiui-checkbox primaryText="Checkbox Item Title" />
      </kaiui-tab-item>

      <kaiui-tab-item name="Item Four">
        <kaiui-text text="Slider Fun..." />
        <kaiui-separator title="Separator Title" />
        <kaiui-slider title="Alarm" v-bind:maxValue="10" />
        <kaiui-checkbox primaryText="Checkbox Item Title" />
      </kaiui-tab-item>

      <kaiui-tab-item name="Item Five">
        <kaiui-separator title="Separator Title" />
        <kaiui-input v-on:onEnter="toggleSoftkeys" label="Add a Task" placeholder="New Item" />
      </kaiui-tab-item>
    </kaiui-tabs>
  </kaiui-content>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: () => ({
    softkeysPhone: { left: "What's App", center: "Call", right: "SMS" },
  }),
  methods: {
    toggleSoftkeys(input) {
      alert(input);
    },
    phoneButtonSoftRightClicked() {
      alert("SMS send");
    },
    phoneButtonSoftCenterClicked() {
      alert("Calling Mom...");
    },
    toggleToastButtonSoftCenterClicked() {
      this.$refs.toast.show()
    }
  }
};
</script>

<style>
</style>
