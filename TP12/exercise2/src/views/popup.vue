<template>
  <div>
    <button @click="showPopup = true">Open Popup</button>

    <Popup v-if="showPopup">
      <h2>Popup Content</h2>
      <p>This is some content for the popup.</p>
      <button @click="showPopup = false">Close Popup</button>
    </Popup>
  </div>
</template>

<script>
import Popup from '../components/Popup.vue';

export default {
  components: {
    Popup
  },
  data() {
    return {
      showPopup: false
    }
  }
}
</script>