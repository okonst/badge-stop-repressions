(function () {
    // Configuration
    let domain = 'https://okonst.github.io/badge-stop-repressions',
        badgeHeight = 100,
        badgeWidth = 100,
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

        styles = document.createElement('style'),
        css = `
            .stop-r {
                background-color: red;
                height: ${badgeHeight}px;
                width: ${badgeWidth}px;
                position: absolute;
                background-size: contain;
                background-repeat: no-repeat;
                
                -webkit-transition: -webkit-transform .3s ease;transition: -webkit-transform .3s ease;-o-transition: transform .3s ease;transition: transform .3s ease;transition: transform .3s ease, -webkit-transform .3s ease;
            }
            .stop-r__x--left {
                left: 0px;
                -webkit-transform: translateX(-4px);-ms-transform: translateX(-4px);transform: translateX(-4px);
            }
            .stop-r__x--right {
                right: 0px;
                -webkit-transform: translateX(4px);-ms-transform: translateX(4px);transform: translateX(4px);
            }
            .stop-r__y--top {
                top: 150px;
            }
            .stop-r__y--middle {
                top: 50%;
                margin-top: -${badgeHeight / 2}px;
            }
            .stop-r__y--bottom {
                bottom: 150px;
            }
            .stop-r:hover {
                -webkit-transform: translateX(0px);-ms-transform: translateX(0px);transform: translateX(0px);
            }
        `;

    styles.setAttribute('type', 'text/css');

    if (styles.styleSheet) {
        styles.styleSheet.styles = css;
    } else {
        styles.appendChild(d.createTextNode(css));
    }
    h.append(styles);


    badgeX = typeof badgeX == 'undefined' || ['left', 'right'].indexOf(badgeX) === -1 ? 'left' : badgeX;
    badgeY = typeof badgeY == 'undefined' || ['top', 'bottom', 'middle'].indexOf(badgeY) === -1 ? 'top' : badgeY;
    badgeC = typeof badgeC == 'undefined' || ['light', 'dark'].indexOf(badgeC) === -1 ? 'dark' : badgeC;
    badgeT = typeof badgeT == 'undefined' || ['ribbon', 'badge'].indexOf(badgeT) === -1 ? 'badge' : badgeT;

    classes.push(`stop-r__x--${badgeX}`);
    classes.push(`stop-r__y--${badgeY}`);
    classes.push(`stop-r__c--${badgeC}`);
    classes.push(`stop-r__t--${badgeT}`);

    badge.setAttribute('class', classes.join(' '));
    badge.setAttribute('href', link);
    badge.setAttribute('target', '_blank');
    badge.style.backgroundImage = `url("${domain}/image/${badgeT}/${badgeT == 'ribbon' ? badgeX + '-' : ''}${badgeC}.svg")`;
    b.appendChild(badge);
    s.remove();
})();