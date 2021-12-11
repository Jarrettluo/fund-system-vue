<template>
  <div id="canvas-container">
    <canvas id="myChart" width="100%" height="100%"></canvas>
  </div>

</template>

<script>
import F2 from '@antv/f2';
export default {
  data() {
    return {}

  },
  props: {
    trendData: []
  },
  mounted() {
    // var that = this
    // this.$nextTick(()=>{
    //   this.init(that)
    // })
  },
  methods: {
    init(data) {
      const data1 = [{
        time: 'Jan.',
        tem: 1000
      }, {
        time: 'Feb.',
        tem: 2200
      }, {
        time: 'Mar.',
        tem: 2000
      }, {
        time: 'Apr.',
        tem: 2600
      }, {
        time: 'May.',
        tem: 2000
      }, {
        time: 'Jun.',
        tem: 2600
      }, {
        time: 'Jul.',
        tem: 2800
      }, {
        time: 'Aug.',
        tem: 2000
      }];
      // var data = this.trendData
      console.log(data)

      var myCanvas = document.getElementById("myChart");
      var container = document.getElementById('canvas-container')
      myCanvas.setAttribute("width", container.clientWidth);
      myCanvas.setAttribute("height", container.clientHeight);

      const chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio
      });

      chart.source(data);
      chart.tooltip({
        showCrosshairs: true
      });
      chart.scale({
        time: {
          range: [ 0, 1 ]
        },
        tem: {
          tickCount: 5,
          min: 0
        }
      });
      chart.axis('time', {
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        }
      });
      chart.area().position('time*tem');
      chart.line().position('time*tem');
      chart.render();
    }
  }
}

</script>

<style scoped>
  #canvas-container {
    width: 100%;
    height: 100%;
  }

</style>