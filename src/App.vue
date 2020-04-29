<template>
  <kaiui-content>
    <kaiui-header title="ToDo List" />
    <kaiui-tabs>
      <kaiui-tab-item name="Item One" selected>
        <kaiui-text
          text="This is a standard Text element with a lot of Text in it. Hope you like it. Enjoy!"
        />
        <kaiui-input v-on:input="onInputChanged" label="Add a Task" placeholder="New Item" />
        <kaiui-text v-bind:text="inputFieldText" />
        <kaiui-separator title="Separator Title" />
        <kaiui-input-multi label="Multi" placeholder="More Items" />
        <kaiui-separator title="Separator Title" />
        <kaiui-button icon="kai-icon-calendar" title="Show Dialog" v-on:softCenter="showDialog" />
        <kaiui-button
          v-bind:softkeys="softkeysPhone"
          v-on:softRight="phoneButtonSoftRightClicked"
          v-on:softCenter="phoneButtonSoftCenterClicked"
          icon="kai-icon-phone"
          iconRight
          title="Button Title"
        />
        <kaiui-button title="Button Title" />

        <kaiui-dialog
          title="Congratulations"
          text="You have successfully signed in. Good Job!"
          v-model="shouldShowDialog"
          v-on:softLeft="dialogLeftSelected"
          v-on:softRight="dialogRightSelected"
        />
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
          tertiaryText="Very very long Tertiary Text for List Item Title"
          iconLeft="kai-icon-calendar"
          iconRight="kai-icon-favorite-on"
        />
      </kaiui-tab-item>

      <kaiui-tab-item name="Item Three">
        <kaiui-button v-on:softCenter="toggleToastButtonSoftCenterClicked" title="Show Toast" />
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
        <kaiui-slider
          title="Alarm"
          v-bind:startValue="sliderStartValue"
          v-on:change="sliderValueChanged"
          v-bind:minValue="0"
          v-bind:maxValue="20"
          v-bind:step="0.5"
        />
        <kaiui-text v-bind:text="sliderTextValue" />
        <kaiui-checkbox primaryText="Checkbox Item Title" />
      </kaiui-tab-item>

      <kaiui-tab-item name="Item Five">
        <kaiui-separator title="Separator Title" />
        <kaiui-input label="Add a Task" placeholder="New Item" />
        <kaiui-checkbox primaryText="Checkbox Item Title" />
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
    inputFieldText: "...",
    sliderStartValue: 10,
    sliderTextValue: "Slider value is 10",
    shouldShowDialog: false
  }),
  methods: {
    toggleSoftkeys(input) {
      this.showToast(input);
    },
    phoneButtonSoftRightClicked() {
      this.showToast("SMS send!");
    },
    phoneButtonSoftCenterClicked() {
      this.showToast("Calling Mom...!");
    },
    toggleToastButtonSoftCenterClicked() {
      this.showToast("Hi, I'm a Toast!");
    },
    sliderValueChanged(value) {
      this.sliderTextValue = "Slider value is " + value;
    },
    onInputChanged(newValue) {
      this.inputFieldText = newValue;
    },
    dialogRightSelected() {
      this.showToast("Dialog 'OK' selected");
    },
    dialogLeftSelected() {
      this.showToast("Dialog 'Cancel' selected");
    },
    showDialog() {
      this.shouldShowDialog = !this.shouldShowDialog
    }
  }
};
</script>

<style>
</style>
