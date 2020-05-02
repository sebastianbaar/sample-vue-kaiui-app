<template>
  <kaiui-content>
    <kaiui-header title="Sample Vue KaiUI App" />
    <kaiui-tabs>
      <kaiui-tab-item name="Welcome" selected>
        <kaiui-text text="Welcome to the Vue KaiUI sample App." />
        <kaiui-text text="See all components live in action! Enjoy :-)" />
      </kaiui-tab-item>

      <kaiui-tab-item name="Buttons & Alerts" selected>
        <kaiui-separator title="Buttons" />
        <kaiui-button
          v-bind:softkeys="softkeysPhone"
          v-on:softRight="phoneButtonSoftRightClicked"
          v-on:softCenter="phoneButtonSoftCenterClicked"
          icon="ion-ios-telephone"
          iconRight
          title="Action Button"
        />

        <kaiui-button title="Show Notice" v-on:softCenter="showANotice" />
      </kaiui-tab-item>

      <kaiui-tab-item name="Dialogs" selected>
        <kaiui-button title="Dialog" v-on:softCenter="showDialog" />

        <kaiui-button title="Value Selector Dialog" v-on:softCenter="showValueSelectorDialog" />

        <kaiui-button icon="ion-android-calendar" title="ToDo: Date/Time Selector" />

        <kaiui-dialog
          title="Select"
          v-model="shouldShowValueSelectorDialog"
          v-on:softLeft="valueSelectorDialogLeftSelected"
          v-on:softRight="valueSelectorDialogRightSelected"
        >
          <kaiui-checkbox
            primaryText="Checkbox One"
            secondaryText="Subtitle for Checkbox List Item Title"
          />
          <kaiui-checkbox
            primaryText="Checkbox Two"
            secondaryText="Subtitle for Checkbox List Item Title"
          />
          <kaiui-checkbox
            primaryText="Checkbox Three"
            secondaryText="Subtitle for Checkbox List Item Title"
          />
        </kaiui-dialog>

        <kaiui-dialog
          title="Congratulations"
          v-model="shouldShowDialog"
          v-on:softLeft="dialogLeftSelected"
          v-on:softRight="dialogRightSelected"
        >
          <kaiui-text text="You have successfully signed in. Good Job!" />
        </kaiui-dialog>
      </kaiui-tab-item>

      <kaiui-tab-item name="Controls">
        <kaiui-separator title="Radio button" />
        <kaiui-radiogroup v-model="selectedInputValue">
          <kaiui-radiobutton value="One" primaryText="Radio button 'One'" />
          <kaiui-radiobutton
            value="Two"
            primaryText="Radio button 'Two'"
            secondaryText="Subtitle for Radio button"
          />
          <kaiui-radiobutton
            value="Three"
            primaryText="Checkbox Item 'Three'"
            secondaryText="Subtitle for Radio button"
          />
        </kaiui-radiogroup>
        <kaiui-text v-bind:text="'> Selected: '+selectedInputValue" />

        <kaiui-separator title="Checkbox" />
        <kaiui-checkbox primaryText="Checkbox Item Title" />
        <kaiui-checkbox
          primaryText="Checkbox Item Title"
          secondaryText="Subtitle for Checkbox List Item Title"
        />
        <kaiui-checkbox
          primaryText="Checkbox Item Title"
          secondaryText="Subtitle for Checkbox List Item Title"
        />
      </kaiui-tab-item>

      <kaiui-tab-item name="List Items">
        <kaiui-list-item primaryText="List Item Title" />
        <kaiui-list-item primaryText="List Item Title" iconLeft="ion-android-download" />
        <kaiui-list-item
          primaryText="List Item Title"
          secondaryText="Subtitle for List Item Title"
        />
        <kaiui-list-item
          primaryText="List Item Title"
          secondaryText="Subtitle for List Item Title"
          iconLeft="ion-android-contacts"
          iconRight="none"
        />
        <kaiui-list-item primaryText="List Item Title" iconLeft="ion-android-favorite" />
        <kaiui-list-item
          primaryText="List Item Title"
          secondaryText="Subtitle for List Item Title"
          tertiaryText="Very very long Tertiary Text for List Item Title"
          iconLeft="ion-android-calendar"
          iconRight="ion-android-favorite"
        />
      </kaiui-tab-item>

      <kaiui-tab-item name="Inputs">
        <kaiui-separator title="Inputs" />
        <kaiui-input v-on:input="onInputChanged" label="Add a Task" placeholder="New Item" />
        <kaiui-text v-bind:text="inputFieldText" />

        <kaiui-separator title="Multiline Input" />
        <kaiui-input-multi v-on:input="onMultiInputChanged" label="Title" placeholder="More Items" />
        <kaiui-text v-bind:text="multiInputFieldText" />
      </kaiui-tab-item>

      <kaiui-tab-item name="Slider & Progress">
        <kaiui-separator title="Slider" />
        <kaiui-slider
          title="Alarm"
          v-bind:startValue="sliderStartValue"
          v-on:change="sliderValueChanged"
          v-bind:minValue="0"
          v-bind:maxValue="20"
          v-bind:step="0.5"
        />
        <kaiui-text v-bind:text="sliderTextValue" />

        <kaiui-separator title="Progress" />
        <kaiui-text text="ToDo.." />
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
    multiInputFieldText: "...",
    sliderStartValue: 10,
    sliderTextValue: "Slider value is 10",
    shouldShowDialog: false,
    shouldShowValueSelectorDialog: false,
    selectedInputValue: "Two"
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
    onMultiInputChanged(newValue) {
      this.multiInputFieldText = newValue;
    },
    showValueSelectorDialog() {
      this.shouldShowValueSelectorDialog = !this.shouldShowValueSelectorDialog;
    },
    valueSelectorDialogRightSelected() {
      this.showToast("Dialog 'OK' selected");
    },
    valueSelectorDialogLeftSelected() {
      this.showToast("Dialog 'Cancel' selected");
    },
    showDialog() {
      this.shouldShowDialog = !this.shouldShowDialog;
    },
    dialogRightSelected() {
      this.showToast("Dialog 'OK' selected");
    },
    dialogLeftSelected() {
      this.showToast("Dialog 'Cancel' selected");
    },
    showANotice() {
      this.showNotice(
        "ion-battery-charging",
        "Battery Full",
        "Battery is fully charged"
      );
    }
  }
};
</script>

<style>
</style>
