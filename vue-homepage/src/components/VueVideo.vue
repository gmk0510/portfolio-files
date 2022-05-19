<template>
  <div id="video">
    <LazyYoutube
        ref="youtubeLazyVideo"
        :src="youtubeLink"
        max-width="100%"
        aspect-ratio="16:9"
        thumbnail-quality="standard"
    />
  </div>
</template>

<script>
import { LazyYoutube} from "vue-lazytube";

export default {
  name: 'App',
   components: {
        LazyYoutube,
    },
  data () {
    return {
      youtubeLink:'https://www.youtube.com/watch?v=0idLmiF2O84',
    }
  },
 
  mounted() {
    // this.$refs['lazyVideo'].playVideo();
  },
  methods: {
    handleClick(event, ref) {
      this.$refs[ref][event]()
    },
    handleSearch(e, platform) {
      if(platform === 'youtube')
        this.youtubeLink = e.target.value;
      else
        this.vimeoLink = e.target.value;
    }
  }

}
</script>

<style>

</style>
