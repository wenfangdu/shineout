(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[44],{1078:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(561),i=t(563),o=t(41),l=t(1079),s=t.n(l),u=t(1080),d=t.n(u),f=Object(o.b)(s.a,d.a),h=[{name:"1-base",title:Object(o.b)("基本用法 \n 基本的 Switch","Base \n Base Switch."),component:t(1081).default,rawText:t(1082)},{name:"2-disabled",title:Object(o.b)("禁用 \n 设置 disabled 为 true 禁用 switch","Disabled \n disabled check while disabled true"),component:t(1083).default,rawText:t(1084)},{name:"3-content",title:Object(o.b)("内容 \n 为每个状态添加描述","Base \n Description for every status."),component:t(1085).default,rawText:t(1086)},{name:"4-size",title:Object(o.b)("大小 \n 通过 size 设置 Switch 大小","Size \n size set"),component:t(1087).default,rawText:t(1088)}];n.default=Object(r.a)(function(e){return c.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:f,examples:h}))})},1079:function(e,n){e.exports="# Switch *开关选择器*\n\n<example />\n\n## API\n\n### Switch\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | boolean | 无 | 当前选中状态，checked 传入时为受控组件 |\n| disabled | boolean | false | 是否禁用 |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | (checked: boolean) => void | 无 | checked 表示选中状态 |\n| content | ReactNode[] | 无 | 选中和未选中时的内容 |\n| size | 'default' \\| 'small' \\| 'large' | default | 开关大小 |\n| value | boolean | 无 | checked 未设置的情况下， checked = value |\n| defaultValue | boolean | 无 | 初始值 |\n\n"},1080:function(e,n){e.exports="# Switch *Switching Selector*\n\n<example />\n\n## API\n\n### Switch\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | boolean | none | checked status，will in control when pass |\n| disabled | boolean | false | disable switch |\n| name | string | none | The name of the Form which access data |\n| onChange | (checked: boolean) => void | none | checked is status |\n| content | ReactNode[] | none | content with checked and unchecked |\n| size | 'default' \\| 'small' \\| 'large' | 'default' | size of switch |\n| value | boolean | none | set while no checked |\n| defaultValue | boolean | none | init value |\n"},1081:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(313);n.default=function(){return c.a.createElement(r.a,null)}},1082:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基本的 Switch\n * en - Base\n *    -- Base Switch.\n */\nimport React from 'react'\nimport { Switch } from 'shineout'\n\nexport default function() {\n  return <Switch />\n}\n"},1083:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var c=t(4),r=t(5),i=t(6),o=t(7),l=t(2),a=t(0),s=t.n(a),u=t(313),d=t(67);function f(a){return function(){var e,n=Object(l.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(l.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(o.a)(this,e)}}var h=function(e){Object(i.a)(a,e);var t=f(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleToggle=function(){n.setState(function(e){return{disabled:!e.disabled}})},n.state={disabled:!0},n}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,{disabled:this.state.disabled}),s.a.createElement(d.a,{style:{marginInlineStart:14},type:"primary",onClick:this.handleToggle},"Toggle"))}}]),a}(s.a.Component)},1084:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- 设置 disabled 为 true 禁用 switch\n * en - Disabled\n *    -- disabled check while disabled true\n */\nimport React from 'react'\nimport { Switch, Button } from 'shineout'\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      disabled: true,\n    }\n  }\n\n  handleToggle = () => {\n    this.setState(prev => ({\n      disabled: !prev.disabled,\n    }))\n  }\n\n  render() {\n    return (\n      <div>\n        <Switch disabled={this.state.disabled} />\n        <Button style={{ marginInlineStart: 14 }} type=\"primary\" onClick={this.handleToggle}>\n          Toggle\n        </Button>\n      </div>\n    )\n  }\n}\n"},1085:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(313),i=t(185);n.default=function(){return c.a.createElement("div",null,c.a.createElement(r.a,{defaultValue:!0,content:["开","关"]}),c.a.createElement("br",null),c.a.createElement(r.a,{content:[c.a.createElement(i.a,{name:"btc"}),c.a.createElement(i.a,{name:"yen"})]}))}},1086:function(e,n){e.exports="/**\n * cn - 内容\n *    -- 为每个状态添加描述\n * en - Base\n *    -- Description for every status.\n */\nimport React from 'react'\nimport { Switch } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nexport default function() {\n  return (\n    <div>\n      <Switch defaultValue={true} content={['开', '关']} />\n      <br />\n      <Switch content={[<FontAwesome name=\"btc\" />, <FontAwesome name=\"yen\" />]} />\n    </div>\n  )\n}\n"},1087:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(313);n.default=function(){return c.a.createElement("div",null,c.a.createElement(r.a,{size:"small"}),c.a.createElement("br",null),c.a.createElement(r.a,null),c.a.createElement("br",null),c.a.createElement(r.a,{size:"large"}))}},1088:function(e,n){e.exports="/**\n * cn - 大小\n *    -- 通过 size 设置 Switch 大小\n * en - Size\n *    -- size set\n */\nimport React from 'react'\nimport { Switch } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <Switch size=\"small\" />\n      <br />\n      <Switch />\n      <br />\n      <Switch size=\"large\" />\n    </div>\n  )\n}\n"},313:function(e,n,t){"use strict";var a=t(60),c=t(21),r=t(143),i=Object(r.a)("switch"),o=t(562),l=Object(c.compose)(a.a,o.b)(i);l.displayName="ShineoutSwitch",l.Switch=i;n.a=l},562:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return l});var a=t(0),c=t.n(a),r=t(38),i=Object(r.a)(),o=i.Provider,l=function(t){return function(n){return c.a.createElement(i.Consumer,null,function(e){return c.a.createElement(t,Object.assign({},n,e))})}}}}]);