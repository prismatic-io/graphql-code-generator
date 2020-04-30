(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{173:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return b}));var t=n(1),r=n(10),p=(n(0),n(245)),o={id:"flow",title:"Flow Types"},l={id:"plugins/flow",title:"Flow Types",description:"The `@graphql-codegen/flow` plugin generates Flow types based on your `GraphQLSchema`.",source:"@site/docs/plugins/flow.md",permalink:"/docs/plugins/flow",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/flow.md",sidebar:"sidebar",previous:{title:"TypeScript GraphQL-Request",permalink:"/docs/plugins/typescript-graphql-request"},next:{title:"Flow Resolvers",permalink:"/docs/plugins/flow-resolvers"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],c={rightToc:i};function b(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"@graphql-codegen/flow")," plugin generates Flow types based on your ",Object(p.b)("inlineCode",{parentName:"p"},"GraphQLSchema"),"."),Object(p.b)("p",null,"It generates types for your entire schema: types, input types, enum, interface, scalar and union."),Object(p.b)("h2",{id:"installation"},"Installation"),Object(p.b)("p",null,"Install using ",Object(p.b)("inlineCode",{parentName:"p"},"npm")," (or ",Object(p.b)("inlineCode",{parentName:"p"},"yarn"),"):"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/flow\n")),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"scalars (",Object(p.b)("inlineCode",{parentName:"h3"},"ScalarsMap"),")"),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},"namingConvention (",Object(p.b)("inlineCode",{parentName:"h3"},"NamingConvention"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"pascal-case#pascalCase"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output. You can either override all namings, or specify an object with specific custom naming convention per output. The format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),". Allowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'. You can also use "keep" to keep all GraphQL names as-is. Additionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behaviour, which is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Keep"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},"typesPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},'""'),")"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},'Usage Example: Add "I" Prefix'),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},"skipTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},"nonOptionalTypename (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified in the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"addUnderscoreToArgsType (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),")"),Object(p.b)("p",{parentName:"p"},"Adds ",Object(p.b)("inlineCode",{parentName:"p"},"_")," to generated ",Object(p.b)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),Object(p.b)("h4",{parentName:"p"},"Usage Example: With Custom Values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    addUnderscoreToArgsType: true\n")),Object(p.b)("h3",{parentName:"p"},"enumValues (",Object(p.b)("inlineCode",{parentName:"h3"},"EnumValuesMap"),")"),Object(p.b)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema. You can also map the entire enum to an external type by providing a string that of ",Object(p.b)("inlineCode",{parentName:"p"},"module#type"),"."),Object(p.b)("h4",{parentName:"p"},"Usage Example: With Custom Values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum:\n        A: 'foo'\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: With External Enum"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues:\n      MyEnum: ./my-file#MyCustomEnum\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Import All Enums from a file"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    enumValues: ./my-file\n")),Object(p.b)("h3",{parentName:"p"},"declarationKind (",Object(p.b)("inlineCode",{parentName:"h3"},"DeclarationKindConfig"),")"),Object(p.b)("p",{parentName:"p"},"Overrides the default output for various GraphQL elements."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override all declarations"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind: 'interface'\n")),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override only specific declarations"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    declarationKind:\n      type: 'interface'\n      input: 'interface'\n")),Object(p.b)("h3",{parentName:"p"},"enumPrefix (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to disable prefixing for generated enums, works in combination with ",Object(p.b)("inlineCode",{parentName:"p"},"typesPrefix"),"."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Disable enum prefixes"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),Object(p.b)("h3",{parentName:"p"},"fieldWrapperValue (",Object(p.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"T"),")"),Object(p.b)("p",{parentName:"p"},"Allow you to add wrapper for field type, use T as the generic value. Make sure to set ",Object(p.b)("inlineCode",{parentName:"p"},"wrapFieldDefinitions")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," in order to make this flag work."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Allow Promise"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n   fieldWrapperValue: T | Promise<T>\n")),Object(p.b)("h3",{parentName:"p"},"wrapFieldDefinitions (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Set the to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," in order to wrap field definitions with ",Object(p.b)("inlineCode",{parentName:"p"},"FieldWrapper"),". This is useful to allow return types such as Promises and functions."),Object(p.b)("h4",{parentName:"p"},"Usage Example: Enable wrapping fields"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   wrapFieldDefinitions: true\n")),Object(p.b)("h3",{parentName:"p"},"onlyOperationTypes (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"This will cause the generator to emit types for operations only (basically only enums and scalars)"),Object(p.b)("h4",{parentName:"p"},"Usage Example: Override all definition types"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   onlyOperationTypes: true\n"))),Object(p.b)("p",null,Object(p.b)("h3",{parentName:"p"},"useFlowExactObjects (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"true"),")"),Object(p.b)("p",{parentName:"p"},"Generates Flow types as Exact types."),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - flow\n config:\n   useFlowExactObjects: false\n")),Object(p.b)("h3",{parentName:"p"},"useFlowReadOnlyTypes (",Object(p.b)("inlineCode",{parentName:"h3"},"boolean"),", default value: ",Object(p.b)("inlineCode",{parentName:"h3"},"false"),")"),Object(p.b)("p",{parentName:"p"},"Generates read-only Flow types"),Object(p.b)("h4",{parentName:"p"},"Usage Example"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\npath/to/file.ts:\n plugins:\n   - flow\n config:\n   useFlowReadOnlyTypes: true\n"))))}b.isMDXComponent=!0},245:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):l({},a,{},e)),n},s=function(e){var a=b(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=b(n),u=t,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||p;return n?r.a.createElement(d,l({ref:a},c,{components:n})):r.a.createElement(d,l({ref:a},c))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=n.length,o=new Array(p);o[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<p;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);