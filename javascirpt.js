var render = i2d.svgLayer('#load', {});
var parrllelchain = i2d.chain.parrllelchain().loop(10)
var circou = 100
var radius = 100

var g = render.createEl({
    el: 'group',
    attr: {
        transform: {
            translate: [render.width / 2, render.height / 2]
        }
    }
})

g.createEls((newArray(circou)).fill().map(function(d, i) {
        return i
    }), {
        el: 'circle',
        attr: {
            r: 5,
            cx: 0,
            cy: 0
        },
        style: {
            fill: function(d) {
                return 'hsl(' + ((d % 50) / 50) * 360 + ',70%,50%)'
            }
        }
    })
    .exec(animateEachCircle)

function animateEachCircle(d) {
    parrllelchain.add(this.animateExe({
        duration: 2000,
        delay: (d % 50) * 30,
        ease: 'easeInOutSin',
        attr: function(f) {
            this.setAttr({
                cx: radius * Math.cos(f * Math.PI * 2 + Math.PI * Math.floor(d / 50)) + (-radius + Math.floor(d / 50) * radius * 2),
                cy: radius * Math.sin(f * Math.PI * 2 + Math.PI * Math.floor(d / 50))
            })
        }
    }))
}
parrllelchain.start()