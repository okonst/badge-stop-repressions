(function () {
    // Configuration
    //let domain = 'http://localhost:3000',
    let domain = 'https://okonst.github.io/badge-stop-repressions',
        bannerHeights = {
            narrow: 60,
            wide: 90,
            vertical: 250
        },
        bannerImgWidths = {
            narrow: 295,
            wide: 442,
            vertical: 203
        },
        link = 'http://www.mothers-for-freedom.ru/';

    let d = document,
        h = d.head,
        b = d.body,
        s = d.getElementById('stop-repressions'),
        div = d.getElementById('stop-repressions-banner'),

        banner = document.createElement('a'),
        classes = ['stop-rb'],

        bannerC = s.getAttribute('data-color'),
        bannerS = s.getAttribute('data-size-banner');


    /**
     * Define default options if not set or not valid
     */
    bannerC = typeof bannerC == 'undefined' || ['light', 'dark'].indexOf(bannerC) === -1 ? 'dark' : bannerC;
    bannerS = typeof bannerS == 'undefined' || ['narrow', 'wide', 'vertical'].indexOf(bannerS) === -1 ? 'wide' : bannerS;


    let styles = document.createElement('style'),
        css = `
            .stop-rb {
                position: relative;
                display: block;
                text-align: center;
                box-sizing: border-box;
            }
            .stop-rb img {
                max-width: 90%;
                height: auto;
                display: inline-block;
                top: 50%;
                left: 50%;
                position: absolute;
                -webkit-transition: -webkit-transform .3s ease;transition: -webkit-transform .3s ease;-o-transition: transform .3s ease;transition: transform .3s ease;transition: transform .3s ease, -webkit-transform .3s ease;
                -webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);
            }
            .stop-rb:hover img {
                -webkit-transform: translate(-50%, -50%) scale(1.03);-ms-transform: translate(-50%, -50%) scale(1.03);transform: translate(-50%, -50%) scale(1.03);
            }
            .stop-rb__s--narrow {
                height: ${bannerHeights.narrow}px;
                padding-top: 3px;
            }
            .stop-rb__s--wide {
                height: ${bannerHeights.wide}px;
                padding-top: 10px;
            }
            .stop-rb__s--vertical {
                height: ${bannerHeights.vertical}px;
            }

            .stop-rb__s--narrow img {
                width: ${bannerImgWidths.narrow}px;
            }
            .stop-rb__s--wide img {
                width: ${bannerImgWidths.wide}px;
            }

            .stop-rb__c--dark {
                background-color: #4A4A4A;
            }
            .stop-rb__c--light {
                background-color: white;
            }

        `;

    styles.setAttribute('type', 'text/css');

    if (styles.styleSheet) {
        styles.styleSheet.styles = css;
    } else {
        styles.appendChild(d.createTextNode(css));
    }

    classes.push(`stop-rb__c--${bannerC}`);
    classes.push(`stop-rb__s--${bannerS}`);

    banner.setAttribute('class', classes.join(' '));
    banner.setAttribute('href', link);
    banner.setAttribute('target', '_blank');
    let imgType = bannerS == 'vertical' ? 'v' : 'h';
    banner.innerHTML = `<img src="${domain}/image/banner/${imgType}-${bannerC}.png" srcset="${domain}/image/banner/${imgType}-${bannerC}.png 1x, ${domain}/image/banner/${imgType}-${bannerC}@2x.png 2x">`;

    div.parentNode.replaceChild(banner, div);
    s.remove();
    h.append(styles);
})();