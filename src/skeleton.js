import Vue from 'vue';
import Skeleton from './Skeleton.vue';
import Skeleton2 from './Skeleton2.vue'
export default new Vue({
  components: {
    Skeleton,
    Skeleton2
  },
  template: `<div>
    <skeleton id="skeleton1" style="display:none"/>
    <skeleton2 id="skeleton2" style="display:none"/>
  </div>`
});
