(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[44],{1083:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(547),o=t(548),r=t(35),l=t(1084),s=t.n(l),u=t(1085),d=t.n(u),h=Object(r.b)(s.a,d.a),m=[{name:"1-base",title:Object(r.b)("基本用法 \n 基本的 Switch","Base \n Base Switch."),component:t(1086).default,rawText:t(1087)},{name:"2-disabled",title:Object(r.b)("禁用 \n 设置 disabled 为 true 禁用 switch","Disabled \n disabled check while disabled true"),component:t(1088).default,rawText:t(1089)},{name:"3-content",title:Object(r.b)("内容 \n 为每个状态添加描述","Base \n Description for every status."),component:t(1090).default,rawText:t(1091)},{name:"4-size",title:Object(r.b)("大小 \n 通过 size 设置 Switch 大小","Size \n size set"),component:t(1092).default,rawText:t(1093)}];n.default=Object(i.a)(function(e){return c.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:h,examples:m}))})},1084:function(e,n){e.exports="# Switch *开关选择器*\n\n<example />\n\n## API\n\n### Switch\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | boolean | 无 | 当前选中状态，checked 传入时为受控组件 |\n| disabled | boolean | false | 是否禁用 |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | (checked: boolean) => void | 无 | checked 表示选中状态 |\n| content | ReactNode[] | 无 | 选中和未选中时的内容 |\n| size | 'default' \\| 'small' \\| 'large' | default | 开关大小 |\n| value | boolean | 无 | checked 未设置的情况下， checked = value |\n| defaultValue | boolean | 无 | 初始值 |\n\n"},1085:function(e,n){e.exports="# Switch *Switching Selector*\n\n<example />\n\n## API\n\n### Switch\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | boolean | none | checked status，will in control when pass |\n| disabled | boolean | false | disable switch |\n| name | string | none | The name of the Form which access data |\n| onChange | (checked: boolean) => void | none | checked is status |\n| content | ReactNode[] | none | content with checked and unchecked |\n| size | 'default' \\| 'small' \\| 'large' | 'default' | size of switch |\n| value | boolean | none | set while no checked |\n| defaultValue | boolean | none | init value |\n"},1086:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(303);n.default=function(){return c.a.createElement(i.a,null)}},1087:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基本的 Switch\n * en - Base\n *    -- Base Switch.\n */\nimport React from 'react'\nimport { Switch } from 'shineout'\n\nexport default function() {\n  return <Switch />\n}\n"},1088:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var a=t(5),c=t(6),i=t(7),o=t(4),r=t(8),l=t(0),s=t.n(l),u=t(303),d=t(57),h=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleToggle=function(){n.setState(function(e){return{disabled:!e.disabled}})},n.state={disabled:!0},n}return Object(r.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,{disabled:this.state.disabled}),s.a.createElement(d.a,{style:{marginLeft:14},type:"primary",onClick:this.handleToggle},"Toggle"))}}]),t}(s.a.Component)},1089:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- 设置 disabled 为 true 禁用 switch\n * en - Disabled\n *    -- disabled check while disabled true\n */\nimport React from 'react'\nimport { Switch, Button } from 'shineout'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      disabled: true,\n    }\n  }\n\n  handleToggle = () => {\n    this.setState(prev => ({\n      disabled: !prev.disabled,\n    }))\n  }\n\n  render() {\n    return (\n      <div>\n        <Switch disabled={this.state.disabled} />\n        <Button style={{ marginLeft: 14 }} type=\"primary\" onClick={this.handleToggle}>\n          Toggle\n        </Button>\n      </div>\n    )\n  }\n}\n"},1090:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(303),o=t(163);n.default=function(){return c.a.createElement("div",null,c.a.createElement(i.a,{defaultValue:!0,content:["开","关"]}),c.a.createElement("br",null),c.a.createElement(i.a,{content:[c.a.createElement(o.a,{name:"btc"}),c.a.createElement(o.a,{name:"yen"})]}))}},1091:function(e,n){e.exports="/**\n * cn - 内容\n *    -- 为每个状态添加描述\n * en - Base\n *    -- Description for every status.\n */\nimport React from 'react'\nimport { Switch } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nexport default function() {\n  return (\n    <div>\n      <Switch defaultValue={true} content={['开', '关']} />\n      <br />\n      <Switch content={[<FontAwesome name=\"btc\" />, <FontAwesome name=\"yen\" />]} />\n    </div>\n  )\n}\n"},1092:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(303);n.default=function(){return c.a.createElement("div",null,c.a.createElement(i.a,{size:"small"}),c.a.createElement("br",null),c.a.createElement(i.a,null),c.a.createElement("br",null),c.a.createElement(i.a,{size:"large"}))}},1093:function(e,n){e.exports="/**\n * cn - 大小\n *    -- 通过 size 设置 Switch 大小\n * en - Size\n *    -- size set\n */\nimport React from 'react'\nimport { Switch } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <Switch size=\"small\" />\n      <br />\n      <Switch />\n      <br />\n      <Switch size=\"large\" />\n    </div>\n  )\n}\n"},303:function(e,n,t){"use strict";var a=t(50),c=t(19),i=t(125),o=Object(i.a)("switch"),r=t(550),l=Object(c.compose)(a.a,r.b)(o);l.displayName="ShineoutSwitch",l.Switch=o;n.a=l},550:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return l});var a=t(0),c=t.n(a),i=t(29),o=t.n(i)()(),r=o.Provider,l=function(t){return function(n){return c.a.createElement(o.Consumer,null,function(e){return c.a.createElement(t,Object.assign({},n,e))})}}}}]);