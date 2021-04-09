(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[49],{1476:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(547),l=n(548),a=n(35),c=n(1477),p=n.n(c),s=n(1478),m=n.n(s),d=Object(a.b)(p.a,m.a),u=[{name:"1-base",title:Object(a.b)("基本用法 \n 内置了四个弹出方向","Base \n There are four pop-up directions built in."),component:n(1479).default,rawText:n(1480)},{name:"2-click",title:Object(a.b)("点击触发 \n 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click","Click \n Set the trigger property to change the trigger event to 'click'."),component:n(1481).default,rawText:n(1482)},{name:"3-disabled-inner",title:Object(a.b)("禁用元素 \n 设置 disabledChild 来使内部禁用的元素正常工作","Disabled \n Set disabledChild make disabled child work"),component:n(1483).default,rawText:n(1484)}];t.default=Object(r.a)(function(e){return i.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:d,examples:u}))})},1477:function(e,t){e.exports="# Tooltip *提示*\n\nTooltip 主要用来显示文字提示，如果需要显示更多内容，请使用 [Popover](/components/Popover)\n\n<example />\n\n## API\n\n### Tooltip\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| animation | boolean | true | 弹出是否使用动画，默认为 true |\n| className | string | 无 | 扩展className |\n| children | ReactNode | 必填 | 子元素只能为一个 ReactElement |\n| position | 'left' \\| 'top' \\| 'right' \\| 'bottom' | 'top' | 弹出层位置 |\n| style | object | 无 | 最外层扩展样式 |\n| tip | ReactNode | 必填 | 弹出文字 | \n| trigger| string | \"hover\" | 弹出方式, 可选值: \\[\"hover\", \"click\"]|\n| disabledChild | boolean | false | 使被禁用的元素正常显示提示 |\n\n\n## 注意\n请确保 Popover 的父元素能接受 onMouseEnter、onMouseLeave、onFocus、onClick 事件。\n"},1478:function(e,t){e.exports="# Tooltip\n\nTooltip is used to display text prompts, and if you need to more content, use [Popover](/components/Popover).\n\n<example />\n\n## API\n\n### Tooltip\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| animation | boolean | true | use animation |\n| className | string | none | Extend className |\n| children | ReactNode | required | The child element can only be a ReactElement. |\n| position | 'left' \\| 'top' \\| 'right' \\| 'bottom' | 'top' | The position of the pop-up layer, options: \\['left', 'top', 'right', 'bottom'] |\n| style | object | null | extend style |\n| tip | ReactNode | required | Pop up texts |\n| trigger| string | \"hover\" | Pop-up type, one of  \\[\"hover\", \"click\"]\n| disabledChild | boolean | false | make disabled element work |\n\n\n### TooltipNote\nPlease ensure that the parent node of `Popover` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.\n"},1479:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(316),l=n(163),a={fontSize:20,lineHeight:1,margin:4};t.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{tip:"Some text.",position:"left"},i.a.createElement(l.a,{name:"arrow-circle-o-left",style:a})),i.a.createElement(r.a,{tip:"Some text.",position:"top"},i.a.createElement(l.a,{name:"arrow-circle-o-up",style:a})),i.a.createElement(r.a,{tip:"Some text.",position:"bottom"},i.a.createElement(l.a,{name:"arrow-circle-o-down",style:a})),i.a.createElement(r.a,{tip:"Some text.",position:"right"},i.a.createElement(l.a,{name:"arrow-circle-o-right",style:a})))}},1480:function(e,t){e.exports='/**\n * cn - 基本用法\n *    -- 内置了四个弹出方向\n * en - Base\n *    -- There are four pop-up directions built in.\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nexport default function() {\n  return (\n    <div>\n      <Tooltip tip="Some text." position="left">\n        <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="top">\n        <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="bottom">\n        <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." position="right">\n        <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n      </Tooltip>\n    </div>\n  )\n}\n'},1481:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(316),l=n(163),a={fontSize:20,lineHeight:1,margin:4};t.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"left"},i.a.createElement(l.a,{name:"arrow-circle-o-left",style:a})),i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"top"},i.a.createElement(l.a,{name:"arrow-circle-o-up",style:a})),i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"bottom",style:{width:"200px"}},i.a.createElement(l.a,{name:"arrow-circle-o-down",style:a})),i.a.createElement(r.a,{tip:"Some text.",trigger:"click",position:"right"},i.a.createElement(l.a,{name:"arrow-circle-o-right",style:a})))}},1482:function(e,t){e.exports='/**\n * cn - 点击触发\n *    -- 默认触发事件为 hover，如果需要点击触发，可以设置 trigger 为 click\n * en - Click\n *    -- Set the trigger property to change the trigger event to \'click\'.\n */\nimport React from \'react\'\nimport { Tooltip } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst fontStyle = { fontSize: 20, lineHeight: 1, margin: 4 }\n\nexport default function() {\n  return (\n    <div>\n      <Tooltip tip="Some text." trigger="click" position="left">\n        <FontAwesome name="arrow-circle-o-left" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="top">\n        <FontAwesome name="arrow-circle-o-up" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="bottom" style={{ width: \'200px\' }}>\n        <FontAwesome name="arrow-circle-o-down" style={fontStyle} />\n      </Tooltip>\n      <Tooltip tip="Some text." trigger="click" position="right">\n        <FontAwesome name="arrow-circle-o-right" style={fontStyle} />\n      </Tooltip>\n    </div>\n  )\n}\n'},1483:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(316),l=n(57);t.default=function(){return i.a.createElement("div",null,i.a.createElement(r.a,{tip:"Some text.",position:"left",disabledChild:!0},i.a.createElement(l.a,{disabled:!0},"Disabled")))}},1484:function(e,t){e.exports="/**\n * cn - 禁用元素\n *    -- 设置 disabledChild 来使内部禁用的元素正常工作\n * en - Disabled\n *    -- Set disabledChild make disabled child work\n */\nimport React from 'react'\nimport { Tooltip, Button } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <Tooltip tip=\"Some text.\" position=\"left\" disabledChild>\n        <Button disabled>Disabled</Button>\n      </Tooltip>\n    </div>\n  )\n}\n"}}]);