(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{402:function(t,s,e){"use strict";e.r(s);var a=e(29),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"champs-meta-de-la-route"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#champs-meta-de-la-route"}},[t._v("#")]),t._v(" Champs méta de la route")]),t._v(" "),e("p",[t._v("Parfois, vous pouvez vouloir attacher des informations arbitraires aux routes comme les noms de transition, qui peut accéder à la route, etc. Ceci peut être réalisé grâce à la propriété "),e("code",[t._v("meta")]),t._v(" qui accepte un objet de propriétés et peut être accédé à l'emplacement de l'itinéraire et aux gardes de navigation. Vous pouvez définir les propriétés "),e("code",[t._v("meta")]),t._v(" comme ceci :")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/posts'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PostsLayout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PostsNew"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// seuls les utilisateurs authentifiés peuvent créer des messages")]),t._v("\n        meta"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" requiresAuth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("':id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PostsDetail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tout le monde peut lire un message")]),t._v("\n        meta"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" requiresAuth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("Alors comment accéder à ce champ "),e("code",[t._v("meta")]),t._v(" ?")]),t._v(" "),e("p",[t._v("Premièrement, chaque objet route dans la configuration "),e("code",[t._v("routes")]),t._v(" est appelé un "),e("strong",[t._v("enregistrement de route")]),t._v(". Les enregistrements de routes peuvent être imbriqués. Par conséquent, lorsqu'une route est trouvée, elle peut potentiellement correspondre à plus d'un enregistrement de route.")]),t._v(" "),e("p",[t._v("Par exemple, avec la configuration de route ci-dessus, l'URL "),e("code",[t._v("/posts/new")]),t._v(" correspondra à la fois à l'enregistrement de route parent ("),e("code",[t._v("path : '/posts'")]),t._v(") et à l'enregistrement de route enfant ("),e("code",[t._v("path : 'new'")]),t._v(").")]),t._v(" "),e("p",[t._v("Tous les enregistrements de route correspondant à une route sont exposés sur l'objet "),e("code",[t._v("$route")]),t._v(" (et aussi les objets de route dans les gardes de navigation) comme le tableau "),e("code",[t._v("$route.matched")]),t._v(". Nous pourrions boucler à travers ce tableau pour vérifier tous les champs "),e("code",[t._v("meta")]),t._v(", mais Vue Router vous fournit également un "),e("code",[t._v("$route.meta")]),t._v(" qui est une fusion non récursive de "),e("strong",[t._v("tous les champs "),e("code",[t._v("meta")])]),t._v(" du parent à l'enfant. Cela signifie que vous pouvez simplement écrire")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// au lieu de devoir vérifier chaque enregistrement de route avec")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to.matched.some(record => record.meta.requiresAuth)")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requiresAuth "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("auth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLoggedIn")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cette route nécessite une authentification, vérifiez si vous êtes connecté.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// si non, redirige vers la page de connexion.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sauvegarder l'endroit où nous nous trouvons pour y revenir plus tard.")]),t._v("\n      query"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" redirect"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullPath "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"typescript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),e("p",[t._v("Il est possible de saisir le champ méta en étendant l'interface "),e("code",[t._v("RouteMeta")]),t._v(" :")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// typings.d.ts or router.ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RouteMeta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// est facultatif")]),t._v("\n    isAdmin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// doit être déclaré par chaque route")]),t._v("\n    requiresAuth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);