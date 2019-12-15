(function () {
    // Configuration
    let domain = 'http://localhost:3000',
    // let domain = 'https://okonst.github.io/badge-stop-repressions',
        ribbonHeight    = 146,
        ribbonWidth     = 103,
        badgeHeight     = 35,
        badgeWidth      = 37,
        badgeWidthLarge = 112,
        link = '#';

    let d = document,
        h = d.head,
        b = d.body,
        s = d.getElementById('stop-repressions'),

        badge = document.createElement('a'),
        classes = ['stop-r'],

        badgeX = s.getAttribute('data-position-x'),
        badgeY = s.getAttribute('data-position-y'),
        badgeC = s.getAttribute('data-color'),
        badgeT = s.getAttribute('data-type'),
        badgeS = s.getAttribute('data-size-badge');

    
    /**
     * Define default options if not set or not valid
     */
    badgeX = typeof badgeX == 'undefined' || ['left', 'right'].indexOf(badgeX) === -1 ? 'left' : badgeX;
    badgeY = typeof badgeY == 'undefined' || ['top', 'bottom', 'middle'].indexOf(badgeY) === -1 ? 'top' : badgeY;
    badgeC = typeof badgeC == 'undefined' || ['light', 'dark'].indexOf(badgeC) === -1 ? 'dark' : badgeC;
    badgeT = typeof badgeT == 'undefined' || ['ribbon', 'badge'].indexOf(badgeT) === -1 ? 'badge' : badgeT;
    badgeS = typeof badgeS == 'undefined' || ['small', 'large'].indexOf(badgeS) === -1 ? 'large' : badgeS;


    let styles = document.createElement('style'),
        css = `
            .stop-r {
                position: absolute;
                background-size: contain;
                background-repeat: no-repeat;
                -webkit-transition: -webkit-transform .3s ease;transition: -webkit-transform .3s ease;-o-transition: transform .3s ease;transition: transform .3s ease;transition: transform .3s ease, -webkit-transform .3s ease;
                background-image: url("${domain}/image/${badgeT}/${badgeT == 'ribbon' ? badgeX : badgeS}-${badgeC}.png");
            }

            @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { 
                .stop-r {
                    background-image: url("${domain}/image/${badgeT}/${badgeT == 'ribbon' ? badgeX : badgeS}-${badgeC}@2x.png");
                }
            }

            .stop-r__x--left {
                left: 0px;
                -webkit-transform: translateX(-4px);-ms-transform: translateX(-4px);transform: translateX(-4px);
                background-position: 0% 50%;
            }
            .stop-r__x--left.stop-r__t--badge {
                left: 30px;
            }
            .stop-r__x--right {
                right: 0px;
                -webkit-transform: translateX(4px);-ms-transform: translateX(4px);transform: translateX(4px);
                background-position: 100% 50%;
            }
            .stop-r__x--right.stop-r__t--badge {
                right: 30px;
            }
            .stop-r__y--top {
                top: 100px;
            }
            .stop-r__y--top.stop-r__t--badge {
                top: 30px;
            }
            .stop-r__y--middle {
                top: 50%;
            }
            .stop-r__y--bottom {
                bottom: 100px;
            }
            .stop-r__y--bottom.stop-r__t--badge {
                top: 30px;
            }
            .stop-r:hover {
                -webkit-transform: translateX(0px);-ms-transform: translateX(0px);transform: translateX(0px);
            }
            .stop-r__t--ribbon {
                height: ${ribbonHeight}px;
                width: ${ribbonWidth}px;
                max-width: 20vw;
            }
            .stop-r__t--ribbon.stop-r__y--middle {
                margin-top: -${ribbonHeight / 2}px;
            }
            .stop-r__t--badge {
                height: ${badgeHeight}px;
                width: ${badgeWidth}px;
                -webkit-transform: translateX(0px);-ms-transform: translateX(0px);transform: translateX(0px);
            }
            .stop-r__t--badge:hover {
                -webkit-transform: translateY(-3px);-ms-transform: translateY(-3px);transform: translateY(-3px);
            }
            .stop-r__t--badge--large {
                width: ${badgeWidthLarge}px;
            }
            .stop-r__t--badge.stop-r__y--middle {
                margin-top: -${badgeHeight / 2}px;
            }
        `;

    styles.setAttribute('type', 'text/css');

    if (styles.styleSheet) {
        styles.styleSheet.styles = css;
    } else {
        styles.appendChild(d.createTextNode(css));
    }

    classes.push(`stop-r__x--${badgeX}`);
    classes.push(`stop-r__y--${badgeY}`);
    classes.push(`stop-r__c--${badgeC}`);
    classes.push(`stop-r__t--${badgeT}`);
    if (badgeT == 'badge') {
        classes.push(`stop-r__t--${badgeT}--${badgeS}`);
    }

    badge.setAttribute('class', classes.join(' '));
    badge.setAttribute('href', link);
    badge.setAttribute('target', '_blank');
    h.append(styles);
    b.appendChild(badge);
    s.remove();
})();