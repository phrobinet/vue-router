(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{403:function(e,t,a){"use strict";a.r(t);var s=a(29),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"attendre-le-resultat-d-une-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attendre-le-resultat-d-une-navigation"}},[e._v("#")]),e._v(" Attendre le résultat d'une navigation")]),e._v(" "),a("p",[e._v("Lorsque vous utilisez "),a("code",[e._v("router-link")]),e._v(", Vue Router appelle "),a("code",[e._v("router.push")]),e._v(" pour déclencher une navigation. Alors que le comportement attendu pour la plupart des liens est de faire naviguer un utilisateur vers une nouvelle page, il y a quelques situations où les utilisateurs resteront sur la même page :")]),e._v(" "),a("ul",[a("li",[e._v("Les utilisateurs sont déjà sur la page vers laquelle ils essaient de naviguer.")]),e._v(" "),a("li",[e._v("Une "),a("RouterLink",{attrs:{to:"/guide/advanced/navigation-guards.html"}},[e._v("garde de navigation")]),e._v(" interrompt la navigation en faisant "),a("code",[e._v("return false")]),e._v(".")],1),e._v(" "),a("li",[e._v("Une nouvelle garde de navigation a lieu alors que la précédente n'est pas terminée.")]),e._v(" "),a("li",[e._v("Un "),a("RouterLink",{attrs:{to:"/guide/advanced/navigation-guards.html"}},[e._v("garde de navigation")]),e._v(" redirige vers un autre endroit en renvoyant un nouvel emplacement (par exemple, "),a("code",[e._v("return '/login'")]),e._v(").")],1),e._v(" "),a("li",[e._v("Un "),a("RouterLink",{attrs:{to:"/guide/advanced/navigation-guards.html"}},[e._v("garde de navigation")]),e._v(" génère une "),a("code",[e._v("Error")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Si nous voulons faire quelque chose après qu'une navigation soit terminée, nous avons besoin d'un moyen d'attendre après avoir appelé "),a("code",[e._v("router.push")]),e._v(". Imaginons que nous ayons un menu mobile qui nous permet d'aller sur différentes pages et que nous voulions seulement cacher le menu une fois que nous avons navigué vers la nouvelle page, nous pourrions faire quelque chose comme ceci :")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/my-profile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("isMenuOpen "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n")])])]),a("p",[e._v("Mais cela fermera le menu immédiatement car "),a("strong",[e._v("les navigations sont asynchrones")]),e._v(", nous devons "),a("code",[e._v("await")]),e._v(" la promesse retournée par "),a("code",[e._v("router.push")]),e._v(" :")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/my-profile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("isMenuOpen "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n")])])]),a("p",[e._v("Maintenant, le menu se ferme une fois la navigation terminée, mais il se ferme aussi si la navigation a été empêchée. Nous avons besoin d'un moyen de détecter si nous avons réellement changé la page sur laquelle nous sommes ou non.")]),e._v(" "),a("h2",{attrs:{id:"detection-des-echecs-de-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detection-des-echecs-de-navigation"}},[e._v("#")]),e._v(" Détection des échecs de navigation")]),e._v(" "),a("p",[e._v("Si une navigation est empêchée et que l'utilisateur reste sur la même page, la valeur résolue de la promesse retournée par "),a("code",[e._v("router.push")]),e._v(" sera un "),a("em",[e._v("Échec de navigation")]),e._v(". Sinon, ce sera une valeur "),a("em",[e._v("falsy")]),e._v(" (généralement "),a("code",[e._v("undefined")]),e._v("). Cela nous permet de différencier le cas où nous avons navigué loin de l'endroit où nous sommes ou pas :")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" navigationResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/my-profile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("navigationResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// navigation empêchée")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// la navigation a réussi (cela inclut le cas d'une redirection)")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("isMenuOpen "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[a("em",[e._v("Navigation Failures")]),e._v(" sont des instances "),a("code",[e._v("Error")]),e._v(" avec quelques propriétés supplémentaires qui nous donnent suffisamment d'informations pour savoir quelle navigation a été empêchée et pourquoi. Pour vérifier la nature d'un résultat de navigation, utilisez la fonction "),a("code",[e._v("isNavigationFailure")]),e._v(" :")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" NavigationFailureType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" isNavigationFailure "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vue-router'")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// tentative de quitter la page d'édition d'un article sans l'enregistrer")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" failure "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/articles/2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("isNavigationFailure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("failure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" NavigationFailureType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("aborted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// montrer une petite notification à l'utilisateur")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("showToast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'You have unsaved changes, discard and leave anyway?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Si vous omettez le deuxième paramètre : "),a("code",[e._v("isNavigationFailure(failure)")]),e._v(", il vérifiera uniquement si "),a("code",[e._v("failure")]),e._v(" est un "),a("em",[e._v("Échecs de navigation")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"differenciation-des-echecs-de-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#differenciation-des-echecs-de-navigation"}},[e._v("#")]),e._v(" Différenciation des échecs de navigation")]),e._v(" "),a("p",[e._v("Comme nous l'avons dit au début, il y a différentes situations d'abandon de la navigation, toutes résultant en différents "),a("em",[e._v("Échecs de navigation")]),e._v(". On peut les différencier en utilisant les paramètres "),a("code",[e._v("isNavigationFailure")]),e._v(" et "),a("code",[e._v("NavigationFailureType")]),e._v(". Il existe trois types différents :")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("aborted")]),e._v(" : "),a("code",[e._v("false")]),e._v(" a été retourné à l'intérieur d'un garde de navigation à la navigation.")]),e._v(" "),a("li",[a("code",[e._v("cancelled")]),e._v(" : Une nouvelle navigation a eu lieu avant que la navigation en cours ne soit terminée. Par exemple, "),a("code",[e._v("router.push")]),e._v(" a été appelé alors qu'il attendait à l'intérieur d'un garde de navigation.")]),e._v(" "),a("li",[a("code",[e._v("duplicated")]),e._v(" : La navigation a été empêchée car nous sommes déjà à l'emplacement cible.")])]),e._v(" "),a("h2",{attrs:{id:"proprietes-de-navigation-failures-echecs-de-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proprietes-de-navigation-failures-echecs-de-navigation"}},[e._v("#")]),e._v(" Propriétés de "),a("em",[e._v("Navigation Failures")]),e._v(" (échecs de navigation)")]),e._v(" "),a("p",[e._v("Tous les échecs de navigation exposent les propriétés "),a("code",[e._v("to")]),e._v(" et "),a("code",[e._v("from")]),e._v(" pour refléter l'emplacement actuel ainsi que l'emplacement cible pour la navigation qui a échoué :")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// essayant d'accéder à la page d'administration")]),e._v("\n\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("failure")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("isNavigationFailure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("failure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" NavigationFailureType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("redirected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    failure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("path "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// '/admin'")]),e._v("\n    failure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("path "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// '/'")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("Dans tous les cas, "),a("code",[e._v("to")]),e._v(" et "),a("code",[e._v("from")]),e._v(" sont des emplacements de route normalisés.")]),e._v(" "),a("h2",{attrs:{id:"detection-des-redirections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detection-des-redirections"}},[e._v("#")]),e._v(" Détection des redirections")]),e._v(" "),a("p",[e._v("Lorsque l'on retourne un nouvel emplacement à l'intérieur d'un garde de navigation, on déclenche une nouvelle navigation qui remplace celle en cours. A la différence des autres valeurs de retour, une redirection n'empêche pas une navigation, "),a("strong",[e._v("elle en crée une nouvelle")]),e._v(". Elle est donc vérifiée différemment, en lisant la propriété "),a("code",[e._v("redirectedFrom")]),e._v(" dans une Route Location :")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/my-profile'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("currentRoute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("redirectedFrom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// redirectedFrom est un emplacement de route résolu comme to et from dans les gardes de navigation.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);