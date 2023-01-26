/*! For license information please see 76199.faf51525.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkuidcustomcomponents=self.webpackChunkuidcustomcomponents||[]).push([[76199],{"./node_modules/@pega/cosmos-react-core/lib/components/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>Avatar_Avatar});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js");const StyledImage=styled_components_browser_esm.ZP.img`
  max-width: 100%;
`,Image_Image=(0,react.forwardRef)(((props,ref)=>{const{alt,...restProps}=props;return(0,jsx_runtime.jsx)(StyledImage,{...restProps,alt,ref})}));var theme=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),Icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/Icon.js");const StyledAlert=styled_components_browser_esm.ZP.div((props=>{const alerts=props.theme.components.badges.alert,{background}=alerts[props.variant],{"border-color":borderColor}=alerts.base;return styled_components_browser_esm.iv`
    background: ${background};
    border: 0.0625rem solid ${borderColor};
    border-radius: 100%;
    display: inline-block;
    height: 0.625rem;
    width: 0.625rem;
  `}));StyledAlert.defaultProps=theme.ns;const Badges_Alert=(0,react.forwardRef)(((props,ref)=>{const{variant,...restProps}=props;return(0,jsx_runtime.jsx)(StyledAlert,{...restProps,variant,ref})}));var useI18n=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useI18n.js"),utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js");const sizeToRem={s:1,m:2,l:2.5,xl:4},fontSizeToRem={s:.5625,m:.8125,l:1,xl:1.5},sizeToBorderRadius={s:.25,m:.5,l:1,xl:1},StyledAvatarImage=(0,styled_components_browser_esm.ZP)(Image_Image)`
  min-height: 100%;
  min-width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: inherit;
  height: fit-content;
  width: fit-content;
`,StyledAvatar=styled_components_browser_esm.ZP.div((({hasBrokenImage,hasSrc,size,shape,color,backgroundColor,theme:{base:{palette:{"foreground-color":foregroundColor,"primary-background":primaryBackground}},components:{avatar}}})=>{const sizeRem=sizeToRem[size],fontSize=fontSizeToRem[size];let bgColor=hasSrc&&!hasBrokenImage?primaryBackground:backgroundColor||avatar["background-color"];!color||backgroundColor||hasSrc&&!hasBrokenImage||(bgColor=(0,utils.Y3)((()=>(0,polished_esm.XV)(color)),(()=>avatar["background-color"])));const shadowColor=(0,utils.Y3)((()=>(0,polished_esm.m4)(foregroundColor,.1))),iconColor=color||(0,utils.Y3)((()=>(0,polished_esm.XV)(bgColor)));return styled_components_browser_esm.iv`
      position: relative;
      background-color: ${bgColor};
      color: ${iconColor};
      width: ${sizeRem}rem;
      height: ${sizeRem}rem;
      min-width: ${sizeRem}rem;
      min-height: ${sizeRem}rem;
      font-size: ${fontSize}rem;
      text-transform: uppercase;
      line-height: ${sizeRem}rem;
      text-align: center;
      vertical-align: top;
      display: inline-block;
      border-radius: 100%;
      user-select: none;
      -webkit-user-select: none;

      ${"squircle"===shape&&styled_components_browser_esm.iv`
        border-radius: calc(${sizeToBorderRadius[size]} * ${avatar["border-radius"]});
      `}

      ${Icon.xL} {
        width: 50%;
        height: 100%;
        vertical-align: initial;
      }

      ::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        box-shadow: inset 0 0 0 0.0625rem ${shadowColor};
      }
    `}));StyledAvatar.defaultProps=theme.ns;const StyledStatus=styled_components_browser_esm.ZP.div((({size,theme})=>{const sizeDimensions=.625*sizeToRem[size]/sizeToRem.m;return styled_components_browser_esm.iv`
    position: absolute;
    height: ${sizeDimensions}rem;
    width: ${sizeDimensions}rem;
    inset-block-end: 0;
    inset-inline-end: 0;
    z-index: 1;
    animation: pop calc(${theme.base.animation.speed} * 2) cubic-bezier(1, 1.65, 0.3, 1.24);

    @keyframes pop {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1);
      }
    }
  `}));StyledStatus.defaultProps=theme.ns;const Avatar_Avatar=(0,react.forwardRef)(((props,ref)=>{const{shape="circle",size="m",imageSrc,icon,name,status,onImageError,...restProps}=props,[hasBrokenImage,setHasBrokenImage]=(0,react.useState)(),t=(0,useI18n.Z)();(0,react.useEffect)((()=>{setHasBrokenImage(void 0)}),[imageSrc]);const content=(0,react.useMemo)((()=>icon?(0,jsx_runtime.jsx)(Icon.ZP,{name:icon}):imageSrc&&!hasBrokenImage?(0,jsx_runtime.jsx)(StyledAvatarImage,{src:imageSrc,alt:name,onError:e=>{setHasBrokenImage(!0),onImageError?.(e)},onLoad:()=>{setHasBrokenImage(!1)}}):((name,size)=>{const words=name.split(" "),firstInitial=words[0][0];return 1===words.length||"s"===size?firstInitial:`${firstInitial}${words[1][0]}`})(name,size)),[imageSrc,name,size,icon,hasBrokenImage,onImageError]);return(0,jsx_runtime.jsxs)(StyledAvatar,{role:"img",hasSrc:!!imageSrc,hasBrokenImage,shape,size,ref,"aria-label":`${name}${status?` ${t("status")} ${status}`:""}`,...restProps,children:[content,"active"===status&&(0,jsx_runtime.jsx)(Badges_Alert,{as:StyledStatus,size,variant:"success"})]})}))},"./node_modules/@pega/cosmos-react-core/lib/components/Backdrop/Backdrop.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,h:()=>StyledBackdrop});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js"),_Flex__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Flex/Flex.js");const transitionSpeedToTheme={slow:2,medium:1,fast:.5,none:0},StyledBackdrop=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div((props=>{const{theme:{base}}=props,{opacity,alpha,variant,position}=props,transitionDuration=`max(calc(${transitionSpeedToTheme[props.transitionSpeed]} * ${base.animation.speed}), 1ms)`;return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    position: ${position};
    z-index: ${"fixed"===position?base["z-index"].backdrop:base["z-index"].popover+1};
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    opacity: ${opacity};
    transition-property: opacity;
    transition-timing-function: ${props.theme.base.animation.timing.ease};

    /* stylelint-disable declaration-block-no-duplicate-properties */
    transition-duration: 1ms;
    transition-duration: ${transitionDuration};

    /* stylelint-enable declaration-block-no-duplicate-properties */

    ${"dark"===variant&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      background: rgba(0, 0, 0, ${alpha});
    `}

    ${"light"===variant&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      background: rgba(255, 255, 255, ${alpha});
    `}
  `}));StyledBackdrop.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_3__.ns;const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>{const{children,container,open=!1,variant="dark",transitionSpeed="medium",alpha=.6,position="fixed",onBeforeTransitionIn,onAfterTransitionIn,onBeforeTransitionOut,onAfterTransitionOut,...restProps}=props,[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("closed"),onTransitionEnd=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>{if("opacity"!==e.propertyName||e.target!==e.currentTarget)return;let nextState;"closing"===state?(nextState="closed",onAfterTransitionOut?.()):(nextState="open",onAfterTransitionIn?.()),setState(nextState)}),[state,onAfterTransitionOut,onAfterTransitionIn]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{open?"closed"!==state&&"closing"!==state||(onBeforeTransitionIn?.(),(0,_utils__WEBPACK_IMPORTED_MODULE_4__.nq)(),setState("opening")):"open"!==state&&"opening"!==state||(onBeforeTransitionOut?.(),setState("closing"))}),[open,onBeforeTransitionIn,onBeforeTransitionOut]),open||"closed"!==state?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex__WEBPACK_IMPORTED_MODULE_5__.Z,{container:{justify:"center",alignItems:"center",...container},as:StyledBackdrop,transitionSpeed,opacity:"opening"===state||"open"===state?1:0,alpha,variant,position,onTransitionEnd,ref,...restProps,children}):null}))},"./node_modules/@pega/cosmos-react-core/lib/components/Badges/Status.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/styles/utils.js"),_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js");const StyledStatus=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span((props=>{const{spacing}=props.theme.base,borderRadius=props.theme.base["border-radius"],{status}=props.theme.components.badges,{background,foreground}=status[props.variant],shadow=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.Y3)((()=>(0,polished__WEBPACK_IMPORTED_MODULE_4__.m4)(foreground,.1))),fontSize=(0,_styles__WEBPACK_IMPORTED_MODULE_5__.MX)(props.theme.base["font-size"],props.theme.base["font-scale"]);return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    background-color: ${background};
    border-radius: calc(0.25 * ${borderRadius});
    color: ${foreground};
    box-shadow: inset 0 0 0 0.0625rem ${shadow};
    display: inline-block;
    font-size: ${fontSize.xxs};
    font-weight: bold;
    line-height: calc(${spacing} * 2.5);
    padding: 0 ${spacing};
    text-transform: uppercase;
  `}));StyledStatus.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_6__.ns;const Status=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({variant,children,...restProps},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledStatus,{...restProps,variant,ref,children})));Status.defaultProps={variant:"info"};const __WEBPACK_DEFAULT_EXPORT__=Status},"./node_modules/@pega/cosmos-react-core/lib/components/Button/BareButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,g:()=>StyledBareButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConsolidatedRef.js");const StyledBareButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  color: inherit;

  & + & {
    margin-inline-start: ${props=>props.theme.base.spacing};
  }
`;StyledBareButton.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_3__.ns;const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({type="button",disabled=!1,href,...restProps},ref)=>{const mouseDownEvent=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),buttonRef=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.Z)(ref);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{mouseDownEvent.current=void 0}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledBareButton,{ref:buttonRef,as:href?"a":void 0,type:href?void 0:type,disabled,...restProps,href,onMouseDown:e=>{restProps.onMouseDown?.(e),e.persist(),mouseDownEvent.current=e},onMouseUp:e=>{const shouldFocus=mouseDownEvent.current&&!mouseDownEvent.current.defaultPrevented;return mouseDownEvent.current=void 0,shouldFocus&&buttonRef.current!==document.activeElement&&buttonRef.current?.focus(),restProps.onMouseUp?.(e)}})}))},"./node_modules/@pega/cosmos-react-core/lib/components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>StyledButton,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/styles/utils.js"),_hooks__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useElement.js"),_hooks__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConsolidatedRef.js"),_Tooltip__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Tooltip/Tooltip.js"),_Progress__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Progress/Ring.js"),_Progress__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Progress/Progress.js"),_Backdrop__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Backdrop/Backdrop.js"),_Icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/Icon.js"),_Popover__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Popover/Popover.styles.js");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button.withConfig((0,_styles__WEBPACK_IMPORTED_MODULE_3__.cZ)("loading"))((({variant,icon,loading,compact,theme:{base:{spacing,"border-radius":baseBorderRadius,palette:{"primary-background":backgroundColor,"foreground-color":textColor},"hit-area":{"mouse-min":hitAreaMouse,"finger-min":hitAreaFinger,"compact-min":hitAreaCompact},animation:{speed,timing:{ease}},"disabled-opacity":disabledOpacity},components:{button:{color,"secondary-color":secondaryColor,padding,"border-radius":borderRadius,"border-width":borderWidth,"focus-shadow":focusShadow,touch:{padding:touchPadding}},link:{color:linkColor}}}})=>{const borderColor="secondary"===variant?color:"transparent",contrastColor=(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Y3)((()=>(0,polished__WEBPACK_IMPORTED_MODULE_5__.XV)(color))),hoverColors=(0,_styles__WEBPACK_IMPORTED_MODULE_3__.B)(color),hoverPrimaryColor=hoverColors.background,hoverContrastColor=hoverColors.foreground,secondaryHoverColor=(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Y3)((()=>(0,polished__WEBPACK_IMPORTED_MODULE_5__.CD)(.85,secondaryColor,color)));let buttonColor=contrastColor,buttonBackgroundColor=color;return"secondary"===variant?(buttonColor=color,buttonBackgroundColor=secondaryColor):"simple"===variant?icon?(buttonColor="currentColor",buttonBackgroundColor="transparent"):(buttonColor=color,buttonBackgroundColor=backgroundColor):"link"===variant?(buttonColor=linkColor,buttonBackgroundColor="transparent"):"text"===variant&&(buttonColor=textColor,buttonBackgroundColor="transparent"),styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      color: ${buttonColor};
      background-color: ${buttonBackgroundColor};
      display: ${"link"===variant||"text"===variant?"inline":"inline-flex"};
      align-items: center;
      outline: none;
      text-decoration: none;
      transition-property: background-color, color, box-shadow;
      transition-duration: calc(0.5 * ${speed});
      transition-timing-function: ${ease};
      cursor: pointer;

      ${"link"!==variant&&"text"!==variant?styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            justify-content: center;
            line-height: 1;
            border: ${borderWidth} solid ${borderColor};
            position: relative;
          `:styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            text-align: start;
            border: none;

            > ${_Icon__WEBPACK_IMPORTED_MODULE_6__.xL} {
              vertical-align: bottom;
            }
          `}

      & + & {
        margin-inline-start: ${spacing};
      }

      /* Not able to combine with selector above. Stylis bug? */
      & + ${_Popover__WEBPACK_IMPORTED_MODULE_7__.uv} + & {
        margin-inline-start: ${spacing};
      }

      @media (hover: hover) {
        &:hover {
          ${"primary"===variant&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            background-color: ${hoverPrimaryColor};
            color: ${hoverContrastColor};
            text-decoration: none;
          `}

          ${("secondary"===variant||"simple"===variant&&!icon)&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            background-color: ${secondaryHoverColor};
            text-decoration: none;
          `}

          ${"simple"===variant&&icon&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            ::before {
              content: '';
              position: absolute;
              top: calc(${borderWidth} * -1);
              bottom: calc(${borderWidth} * -1);
              left: calc(${borderWidth} * -1);
              right: calc(${borderWidth} * -1);
              border-radius: inherit;
              background-color: currentColor;
              opacity: 0.15;
            }
          `}

          ${("link"===variant||"text"===variant)&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            text-decoration: underline;
          `}
        }
      }

      ${"link"!==variant&&"text"!==variant&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        min-height: ${hitAreaMouse};
        min-width: ${hitAreaMouse};
        border-radius: calc(${baseBorderRadius} * ${borderRadius});
        -webkit-user-select: none;
        user-select: none;
      `}

      ${compact&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        min-height: ${hitAreaCompact};
        min-width: ${hitAreaCompact};
      `}

      ${!icon&&"link"!==variant&&"text"!==variant&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        padding: ${padding};
      `}

      ${"link"!==variant&&"text"!==variant&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        @media (pointer: coarse) {
          ${!compact&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            min-height: ${hitAreaFinger};
            min-width: ${hitAreaFinger};
          `}
          border-radius: calc(${baseBorderRadius} * ${borderRadius});
          ${!icon&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            padding: ${touchPadding};
          `}
        }
      `}

      &:disabled,
      &[disabled] {
        opacity: ${disabledOpacity};
        cursor: not-allowed;
        pointer-events: none;
      }

      &:enabled:focus,
      &:not([disabled]):focus {
        box-shadow: ${focusShadow};
      }

      ${icon&&"link"!==variant&&"text"!==variant&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        border-radius: calc(${baseBorderRadius} * ${borderRadius});
        > svg {
          display: block;
        }
      `}

      ${loading&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        ${_Backdrop__WEBPACK_IMPORTED_MODULE_8__.h} {
          background-color: ${buttonBackgroundColor};
          border-radius: inherit;
        }
        ${_Progress__WEBPACK_IMPORTED_MODULE_9__.Y} {
          width: 1em;
          height: 1em;
          circle:nth-child(2) {
            animation-duration: calc(${speed} * 2);
          }
        }
      `}
    `}));StyledButton.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_10__.ns;const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({variant="secondary",type="button",disabled=!1,icon=!1,compact=!1,href,as,forwardedAs,label,"aria-label":ariaLabel,loading=!1,children,...restProps},ref)=>{const[buttonEl,setButtonEl]=(0,_hooks__WEBPACK_IMPORTED_MODULE_11__.Z)(),mouseDownEvent=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),buttonRef=(0,_hooks__WEBPACK_IMPORTED_MODULE_12__.Z)(ref,setButtonEl),showProgress=loading&&"link"!==variant&&"text"!==variant;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>()=>{mouseDownEvent.current=void 0}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledButton,{...restProps,ref:buttonRef,as:as||(href?"a":"button"),forwardedAs:forwardedAs||(href?"a":"button"),variant,icon,compact,type:href?void 0:type,href,disabled:disabled&&!href,loading:showProgress,"aria-label":ariaLabel||label,onMouseDown:e=>{restProps.onMouseDown?.(e),e.persist(),mouseDownEvent.current=e},onMouseUp:e=>{const shouldFocus=mouseDownEvent.current&&!mouseDownEvent.current.defaultPrevented;return mouseDownEvent.current=void 0,shouldFocus&&buttonRef.current!==document.activeElement&&buttonRef.current?.focus(),restProps.onMouseUp?.(e)},children:[showProgress&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Progress__WEBPACK_IMPORTED_MODULE_13__.Z,{variant:"ring",placement:"local"}),children]}),buttonEl&&label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_14__.Z,{target:buttonEl,showDelay:"none",hideDelay:"none",describeTarget:!1,children:label})]})}))},"./node_modules/@pega/cosmos-react-core/lib/components/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>StyledCard,Z:()=>Card_Card});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),Flex_Flex=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Flex/Flex.js"),Popover_styles=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Popover/Popover.styles.js");const StyledCardMedia=styled_components_browser_esm.ZP.div`
  img,
  video,
  audio {
    object-fit: cover;
    width: 100%;
  }
`,StyledCard=styled_components_browser_esm.ZP.article((props=>{const{"border-radius":borderRadius,"border-color":borderColor,background}=props.theme.components.card,interactive=props.interactive?styled_components_browser_esm.iv`
        &:hover {
          border: 0;
          box-shadow: 0 0 0 0.0625rem ${borderColor};
        }
        &:focus {
          border: 0;
          box-shadow: 0 0 0 0.125rem ${borderColor};
        }
      `:void 0;return styled_components_browser_esm.iv`
    ${Popover_styles.uv} &, &:not(& &) {
      background-color: ${background};
      border-radius: ${borderRadius};

      &:focus {
        outline: none;
      }

      ${interactive}

      ${StyledCardMedia} {
        &:first-child img {
          border-radius: ${borderRadius} ${borderRadius} 0 0;
        }
      }
    }
  `}));StyledCard.defaultProps=theme.ns;const Card=(0,react.forwardRef)(((props,ref)=>{const{children,as,onClick,interactive,role,...restProps}=props,interactiveProps={...onClick&&{onClick,tabIndex:0,role:"button"},...interactive&&{tabIndex:0},...role&&{role},interactive};return(0,jsx_runtime.jsx)(Flex_Flex.Z,{container:{direction:"column"},as:StyledCard,forwardedAs:as,ref,...interactiveProps,...restProps,children})}));Card.defaultProps={interactive:!1,role:"region"};const Card_Card=Card},"./node_modules/@pega/cosmos-react-core/lib/components/Configuration/Configuration.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>ConfigurationContext,Z:()=>Configuration_Configuration});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/styles/utils.js");const GlobalStyle=(0,styled_components_browser_esm.vJ)((({theme})=>{const{base:{"custom-scrollbar":customScrollbar,"border-radius":borderRadius,palette:{"foreground-color":foreground,"scrollbar-track":scrollbarTrack,"scrollbar-thumb":scrollbarThumb,"scrollbar-thumb-hover":scrollbarThumbHover},transparency:{"transparent-3":transparent}},components:{"form-control":{"background-color":backgroundColor}}}=theme;return styled_components_browser_esm.iv`
    ${"\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"}

    body {
      overscroll-behavior: none;
    }

    ::placeholder {
      color: ${(0,polished_esm.CD)(transparent,foreground,backgroundColor)};
      opacity: unset;
    }

    ${customScrollbar&&styled_components_browser_esm.iv`
      * {
        scrollbar-color: ${scrollbarThumb} ${scrollbarTrack};
        scrollbar-width: thin;
      }

      @supports not ((scrollbar-width: thin) or (scrollbar-color: black white)) {
        /* stylelint-disable unit-allowed-list */

        *::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }

        *::-webkit-scrollbar-track {
          background-color: ${scrollbarTrack};
        }

        *::-webkit-scrollbar-corner {
          background-color: ${scrollbarTrack};
          border-bottom-right-radius: inherit;
        }

        *::-webkit-scrollbar-thumb {
          background-color: transparent;
          border: 3px solid transparent;
          border-radius: calc(1.125 * ${borderRadius});
          box-shadow: inset 0 0 2px 4px ${scrollbarThumb};
        }

        *::-webkit-scrollbar-thumb:hover {
          box-shadow: inset 0 0 2px 4px ${scrollbarThumbHover};
        }

        *::-webkit-scrollbar-track:horizontal {
          border-bottom-left-radius: inherit;
        }

        *::-webkit-scrollbar-track:vertical {
          border-top-right-radius: inherit;
        }

        /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
        *::-webkit-scrollbar-track:not(:corner-present) {
          border-bottom-right-radius: inherit;
        }

        /* stylelint-enable unit-allowed-list */
      }
    `}

    ${(({base:{scale}})=>`\n    :root,\n    :host {\n      height: 100%;\n      -webkit-text-size-adjust: 100%;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      font-size: calc(${scale} * 1rem);\n    }\n  `)(theme)}

      ${(({base:{"font-size":baseFontSize,"font-scale":baseFontScale,"font-family":fontFamily,palette:{"foreground-color":foregroundColor},"line-height":lineHeight},components:{text}})=>`\n    body,\n    :host {\n      min-height: 100%;\n      margin: 0;\n      padding: 0;\n      font-size: ${(0,utils.MX)(baseFontSize,baseFontScale)[text.primary["font-size"]]};\n      font-family: ${fontFamily};\n      color: ${foregroundColor};\n      line-height: ${lineHeight};\n    }\n  `)(theme)}

      input,
      button,
      select,
      optgroup,
      textarea {
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
  `}));var theme=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),ThemeMachine=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/ThemeMachine.js");const i18n_default={yes:"Yes",no:"No",filters:"Filters",actions:"Actions",status:"Status",additional_info:"Additional info",search_placeholder_default:"Search…",select_placeholder_default:"Select…",description:"Description",all:"All",default:"default",app_default:"app default",remove:"Remove",follow:"Follow",unfollow:"Unfollow",add:"Add",cancel:"Cancel",try_again:"Try again",update:"Update",submit:"Submit",apply:"Apply",select:"Select",edit:"Edit",preview:"Preview",delete:"Delete",close:"Close",activate:"Activate",expand:"Expand",collapse:"Collapse",accept:"Accept",clear:"Clear",use:"Use",undo:"Undo",redo:"Redo",filter:"Filter",sort:"Sort",group:"Group",filter_by:"Filter by",sort_by:"Sort by",group_by:"Group by",go:"Go",configure:"Configure",view_all:"View all",view_less:"View less",show_more:"Show more",show_less:"Show less",show_all:"Show all",clear_all:"Clear all",link_open_in_tab_text:"Open in tab",edit_details:"Edit details",add_emoji:"Add emoji",create_new:"Create new",submit_and_open:"Submit and open",add_condition:"Add condition",open_noun:"Open {0}",close_noun:"Close {0}",view_all_noun:"View all {0}",view_less_noun:"View less {0}",expand_noun:"Expand {0}",add_noun:"Add {0}",collapse_noun:"Collapse {0}",checked_noun:"{0} checked",selected_noun:"{0} selected",deselected_noun:"{0} unselected",use_input_value:"Use {0}",preview_of_noun:"Preview of {0}",go_to_noun:"Go to {0}",insert_noun:"Insert {0}",edited:"Edited {0}",done:"Done",uploading:"Uploading",loading:"Loading…",submitting:"Submitting…",no_items:"No items",unknown_error:"Unknown error",image_load_error:"Error loading image",selected:"Selected",selected_count:{zero:"{0} selected",one:"{0} selected",two:"{0} selected",few:"{0} selected",many:"{0} selected",other:"{0} selected"},completed:"Completed",current:"Current",not_started:"Not started",empty_value:"Empty value",delivered:"Delivered",sent:"Sent",active:"Active",read_only:"Read only",day_placeholder:"DD",month_placeholder:"MM",year_placeholder:"YYYY",hour_placeholder:"hh",minute_placeholder:"mm",second_placeholder:"ss",meridiem_value_am:"AM",meridiem_value_pm:"PM",week_placeholder:"ww",seconds_text:"Seconds",minutes_text:"Minutes",hours_text:"Hours",days_text:"Days",time_text:"Time",time_format_info:"hh:mm:ss",date_quarter_q1:"Q1 {0}",date_quarter_q2:"Q2 {0}",date_quarter_q3:"Q3 {0}",date_quarter_q4:"Q4 {0}",time_unit:"Time Unit",attachments_count:{zero:"No attachments",one:"{0} attachment",two:"{0} attachments",few:"{0} attachments",many:"{0} attachments",other:"{0} attachments"},results_count:{zero:"No results",one:"{0} result",two:"{0} results",few:"{0} results",many:"{0} results",other:"{0} results"},new_emails_count:{zero:"No new emails",one:"{0} new email",two:"{0} new emails",few:"{0} new emails",many:"{0} new emails",other:"{0} new emails"},pagination_page_of:"Page {0} of {1}",pagination_next:"Next",pagination_prev:"Previous",range_from_datetime:"Since",range_to_datetime:"Until",range_from_numeric:"From",range_to_numeric:"To",x_of_y:"{0} of {1}",preview_link_instruction:"Press {0} and p to open this link in a preview.",go_to_main_content:"Go to main content",main_content:"Main content",app_shell_create:"Create",app_shell_open_nav:"Open navigation menu",combobox_open_close:"Arrow down to open, press escape to close.",combobox_search_instructions:"Start typing to search",combobox_open_list_button_a11y:"Open combobox list",combobox_close_list_button_a11y:"Close combobox list",multiselect_instructions:"Arrow {0} from start to review selected items",selected_items:"Selected items",menu_selection_instructions:"Press enter to select items.",menu_item_expand_arrow:"Arrow right to expand.",menu_item_collapse_arrow:"Arrow left to collapse.",menu_item_collapse_shift_space:"Press shift space to collapse.",menu_item_shift_space_expand_collapse:"Press shift space to expand and collapse.",menu_option_list:"Options list",modal_minimize:"Minimize modal",modal_maximize:"Maximize modal",modal_dock:"Dock Modal",modal_close:"Close modal",selected_date_a11y:"Selected date:",open_calendar_button_a11y:"Open calendar",close_calendar_button_a11y:"Close calendar",open_time_button_a11y:"Open time picker",close_time_button_a11y:"Close time picker",picker_next_month:"Next month",picker_prev_month:"Previous month",picker_jump_to_month_and_year:"Jump to month and year selection",calendar_assist:"Use cursor keys to navigate dates",calendar:"Calendar",boolean_display_true_label:"Yes",boolean_display_false_label:"No",step_changed_to_name:"Step changed to {0}",measured_in:"measured in {0}",banner_dismiss_button_label_a11y:"Dismiss banner",file_upload_text_main:"Drag and drop or {0}",file_upload_text_one:"Choose file",file_upload_text_multiple:"Choose files",my_current_location_button_a11y:"Use my current location",location_input_placeholder:"Enter a location",location_not_found_text:"Location not found",allow_location_permissions_text:"To get current location, allow location permissions for this app",advanced_search:"Advanced search",select_search_filter:"Select search filter",recent_searches:"Recent searches",clear_search:"Clear search",utilities_summary:"Utilities summary",expand_summary_panel:"Expand summary panel",collapse_summary_panel:"Collapse summary panel",expand_utilities_panel:"Expand utilities panel",collapse_utilities_panel:"Collapse utilities panel",accept_suggestion_button_a11y:"Accept AI suggestion",reject_suggestion_button_a11y:"Reject AI suggestion",suggestion_info:"Accept AI suggestion?",suggestion_assist:"Either press Enter to accept the AI suggestion or edit the value to reject it",select_country_code:"Select country code",enter_a_number:"Enter a number",close_preview:"Close preview",confirmation_details:"Details",confirmation_whats_next:"What's next",confirmation_open_tasks:"Open tasks",add_stakeholders:"Add stakeholder",edit_stakeholder:"Edit stakeholder",view_stakeholders:"Stakeholders",stakeholders_role:"Role",stakeholders:{zero:"{0} stakeholders",one:"{0} stakeholder",two:"{0} stakeholders",few:"{0} stakeholders",many:"{0} stakeholders",other:"{0} stakeholders"},edit_tags:"Edit tags",tags:"Tags",timeline_toolbar_sort_descending:"Newest first",timeline_toolbar_sort_ascending:"Oldest first",timeline_toolbar_group_date:"By day",timeline_toolbar_group_monthyear:"By month",timeline_toolbar_group_quarteryear:"By quarter",timeline_toolbar_group_year:"By year",timeline_toolbar_group_none:"Off",app_announcement_dismiss_button_label_a11y:"Hide until next update",app_announcement_details_list_header:"Announcements",app_announcement_whats_new_button_label:"See what's new",stages_label:"Case stages",stages_see_full_lifecycle:"See full lifecycle",stages_case_lifecycle:"{0} lifecycle",stages_default_case_lifecycle:"Case lifecycle",stages_stage_label:"Stage {0}, {1}",rte_heading_style:"Heading style",rte_bold:"Bold",rte_italic:"Italic",rte_strike_through:"Strike-through",rte_cut:"Cut",rte_copy:"Copy",rte_paste:"Paste",rte_bulleted_list:"Bulleted list",rte_numbered_list:"Numbered list",rte_indent:"Indent",rte_unindent:"Unindent",rte_table:"Table",rte_link:"Link",rte_image:"Image",rte_invalid_html:"Invalid HTML",rte_insert_field:"Insert field",rte_invalid_url:"Invalid URL",rte_change_text_format:"Change text format to",rte_toggle_unordered_list:"Toggle unordered list",rte_indent_selection:"Indent selection",rte_unindent_selection:"Unindent selection",rte_toolbar_instructions:"Hit tab to enter the editor toolbar",rte_text_formatting_toolbar:"Text formatting toolbar",rte_image_description_info:"Provides an alternate (ALT) description for the visually impaired",rte_image_custom_size:"Custom size",rte_width_in_pixels:"Width (in pixels)",rte_height_in_pixels:"Height (in pixels)",rte_image_settings:"Image settings",rte_image_key_command:"Press enter to edit the image",expand_forwarded_message:"Expand forwarded message",collapse_forwarded_message:"Collapse forwarded message",copy_to:"Copy to",subject_label:"Subject: {0}",feed_new_post:"New post",feed_new_reply:"New reply",feed_edit_post:"Edit post",feed_edit_reply:"Edit reply",feed_cancel_conversation:"Cancel conversation",feed_context:"in {0}",feed_liked_by:"Liked by {0}",feed_likes:"Likes",feed_private_post:"Private post",feed_public_post:"Public post",feed_recipients:"Recipients",feed_post_likes:{zero:"No likes",one:"{0} like",two:"{0} likes",few:"{0} likes",many:"{0} likes",other:"{0} likes"},feed_attachments_added:{zero:"No attachments added",one:"{0} attachment added",two:"{0} attachments added",few:"{0} attachments added",many:"{0} attachments added",other:"{0} attachments added"},feed_attachments_removed:{zero:"No attachments removed",one:"{0} attachment removed",two:"{0} attachments removed",few:"{0} attachments removed",many:"{0} attachments removed",other:"{0} attachments removed"},feed_post_liked:"Post has been liked",feed_post_deliked:"Post has been deliked",feed_post_removed:"Post has been removed",feed_reply_removed:"Reply has been removed",showing_num_of_num:"Showing {0} of {1}",feed_new_post_added:{zero:"No posts added",one:"{0} post added",two:"{0} posts added",few:"{0} posts added",many:"{0} posts added",other:"{0} posts added"},new_item_added:{zero:"No items added",one:"{0} new item added",two:"{0} new items added",few:"{0} new items added",many:"{0} new items added",other:"{0} new items added"},loading_post:"Loading post",mention_type:"Mention a {0}",scroll_to_latest_message:"Scroll to latest message",scroll_to_unread_messages:"Scroll to unread messages",suggested_replies_current_of_total:"Suggested replies {0} of {1}",confidence_percentage:"{0}% confidence",next_suggested_reply:"Next suggested reply",prev_suggested_reply:"Previous suggested reply",dismiss_suggested_replies:"Dismiss suggested replies",message_sent:"Message sent",unique_entities:{zero:"No unique entities",one:"{0} unique entity",two:"{0} unique entities",few:"{0} unique entities",many:"{0} unique entities",other:"{0} unique entities"},more_count:"{0} more…",other_responses:"Other responses",empty_search:"Enter a search term",new_messages:"New messages",earlier_transcripts:"Earlier transcripts",send_label:"Send",save_as_draft:"Save as draft",enter_message:"Enter message",download:"Download",close_chat_utility:"Close chat utility",subject:"Subject",to:"To",from:"From",cc:"Cc",bcc:"Bcc",date:"Date",reply:"Reply",reply_all:"Reply all",auto_reply:"Auto-Reply",forward:"Forward",email:"Email",email_message:"Email message",email_filters:"Email filters",unread_email_count:"unread email count is {0}",priority:"Priority",inbox:"Inbox",insert:"Insert",email_add_attachment:"Add attachment, the maximum number of attachments allowed is {0}.",email_disable_attachment:"Adding attachments are disabled, the maximum number of attachments allowed is {0}.",email_remove_attachment:"Remove attachment",loading_email:"Loading email",draft:{zero:"No drafts",one:"{0} draft",two:"{0} drafts",few:"{0} drafts",many:"{0} drafts",other:"{0} drafts"},undelivered:"Undelivered",article_list_label_a11y:"Article list",article_list_filter_label_a11y:"Article lists filter",article_list_header_submit_label:"Submit",call_panel_heading:"Pega call",call_panel_make_new_call:"Make new call",call_panel_agent_status:"Status",call_panel_pause_call_menu_item:"Pause call",call_panel_resume_call_menu_item:"Resume call",call_panel_mute_mic_menu_item:"Mute microphone",call_panel_unmute_mic_menu_item:"Unmute microphone",call_panel_call_on_hold:"On hold {0}",call_panel_consult_call_menu_item:"Consult",call_panel_transfer_call_menu_item:"Transfer",call_panel_menu_item_call_only:"Call only",call_panel_menu_item_call_with_interaction:"Call and interaction",call_panel_send_dtmf_menu_item:"Send DTMF",call_panel_conference_call_menu_item:"Conference",call_panel_hangup_call_menu_item:"Hang up",call_panel_contacts_add_to_favorites:"Add to favorites",call_panel_contacts_remove_from_favorites:"Remove from favorites",call_panel_contacts_call_button_label:"Call",call_panel_contacts_list_heading:"Contacts",call_panel_contacts_favorites_heading:"Favorites",call_panel_contacts_dial_pad_heading:"Dial pad",call_panel_new_call_heading:"New call",call_panel_interaction_transfer_heading:"Interaction transfer has been initiated…",call_panel_interaction_transfer_complete_button_label:"Complete transfer",call_panel_incoming_call:"Incoming call…",call_panel_answer_call:"Answer",call_panel_conference_heading:"Conference",call_panel_consult_with_call_heading:"Consult by call",call_panel_consult_with_call_and_interactions_heading:"Consult by call and interaction",call_panel_transfer_with_call_heading:"Transfer call",call_panel_transfer_with_call_and_interactions_heading:"Transfer call and interaction",call_panel_conference_submit:"Conference",call_panel_transfer_call_submit:"Transfer",call_panel_consult_call_submit:"Consult",call_panel_handover_reason_label:"Reason",call_panel_handover_to_label:"To",call_panel_handover_comments_label:"Comments",call_panel_handover_call_option_label:"Call option",call_panel_handover_call_only_option:"Call only",call_panel_handover_call_and_interaction_option:"Call and interaction",call_panel_handover_interaction_label:"Interaction",call_panel_merge_call_menu_item:"Merge",call_panel_handoff_call_menu_item:"Hand off",call_panel_send_dtmf_heading:"Send DTMF",call_panel_expand:"Expand call control panel",call_panel_collapse:"Collapse call control panel",call_panel_nav_label:"Phone panel",dial_pad_keyboard:"Dial pad keyboard",dial_pad_phone_number_input_label:"Phone number input",dial_pad_call_button_label:"Call {0}",select_multiple:"Select multiple",dismiss_case:"Dismiss case",task_manager_add_task:"Add task",task_manager_wrap_up:"Wrap up",task_manager_tasks:"Tasks",add_tasks:"Add tasks",open_tasks:"Open tasks",resolved_tasks:"Resolved tasks",selected_tasks:"Selected tasks",no_selected_tasks:"No selected tasks",task_picker_close:"Close task picker",task_manager_overflow_menu:"All tasks",continue_label:"Continue",continue_label_a11y:"Continue with {0}",review_label:"Review",review_label_a11y:"Review {0}",dismiss_label:"Dismiss",dismiss_label_a11y:"Dismiss {0}",task_manager_search_results_empty_text:"No tasks",task_manager_delete_task:"Delete {0}",search_tasks:"Search tasks…",task_manager_picker_add_label:{zero:"No items to add",one:"Add {0} new item",two:"Add {0} new items",few:"Add {0} new items",many:"Add {0} new items",other:"Add {0} new items"},show_detected_entities:"Show detected entities",nothing_detected_yet:"Nothing detected yet",ai_detected_entities:"AI detected entities",close_conversation:"Close conversation",sentiment_positive:"Positive",sentiment_negative:"Negative",sentiment_neutral:"Neutral",no_recommendations:"No recommendations",condition_builder_advanced_condition_label:"Advanced condition",condition_builder_advanced_condition_placeholder:"Advanced condition",condition_builder_advanced_mode_button_label:"Advanced mode",condition_builder_basic_mode_button_label:"Basic mode",condition_builder_condition_select_info_default:"No selection",condition_builder_possible_values_label:"Values",condition_builder_possible_values_error:"Error retrieving values",condition_builder_multi_selection_text_default:"Select values",condition_builder_single_selection_text_default:"Select value",condition_builder_add_button_label:"Add new condition",condition_builder_remove_button_label:"Remove condition",condition_builder_switch_banner_text:"Switching from Advanced mode can reset all AND/OR/NOT operators. Do you want to continue?",condition_builder_confirm_button_label:"OK",condition_builder_empty_selection_error_text:"No selection",condition_builder_empty_value_text:"Empty value",condition_builder_compare_with:"Compare with",condition_builder_compare_with_another_field:"Another field",condition_builder_compare_with_parameter:"Parameter",condition_builder_compare_with_relative_date:"Relative date",condition_builder_compare_with_text_value:"Text value",condition_builder_compare_with_numeric_value:"Numeric value",condition_builder_compare_with_date_value:"Date value",condition_builder_compare_with_time_value:"Time value",condition_builder_compare_with_numeric_range_value:"Numeric range value",condition_builder_compare_with_date_range_value:"Date range value",condition_builder_compare_with_time_range_value:"Time range value",condition_builder_invalid_time_period:"Invalid time period",condition_builder_invalid_relative_date:"Invalid relative date",condition_builder_invalid_value:"Invalid value",condition_builder_invalid_values:"Invalid values",condition_builder_invalid_time:"Invalid time",condition_builder_invalid_date:"Invalid date",condition_builder_invalid_number:"Invalid number",condition_builder_invalid_date_range:"Invalid date range",condition_builder_invalid_time_range:"Invalid time range",condition_builder_invalid_number_range:"Invalid range",condition_builder_date_function_year:"Year",condition_builder_date_function_quarter:"Quarter",condition_builder_select_placeholder:"Select…",condition_builder_rhs_with_readOnly_input:"Rhs with readOnly input",condition_builder_rhs_with_input_type:"Rhs with input type",condition_builder_rhs_with_time_only_input:"Rhs with Time only input",condition_builder_rhs_with_date_only_input:"Rhs with Date only input",condition_builder_rhs_with_date_time_input:"Rhs with Date Time input",condition_builder_rhs_with_csv_input:"Rhs with csv input",condition_builder_no_selection:"No selection",condition_builder_enter_csv_placeholder:"Enter comma separated values",condition_builder_day_number_of_month:{zero:"{0}th day of the month",one:"{0}st day of the month",two:"{0}nd day of the month",few:"{0}rd day of the month",many:"{0}th day of the month",other:"{0}th day of the month"},condition_builder_date_function_month:"Month",condition_builder_date_function_week:"Week",condition_builder_date_function_day:"Day",condition_builder_date_function_hour:"Hour",condition_builder_date_function_month_of_year:"Month of year",condition_builder_date_function_day_of_month:"Day of month",condition_builder_date_function_day_of_week:"Day of week",condition_builder_date_part:"Date part",condition_builder_relative_dates_minute:"Minute(s)",condition_builder_relative_dates_hour:"Hour(s)",condition_builder_relative_dates_day:"Day(s)",condition_builder_relative_dates_week:"Week(s)",condition_builder_relative_dates_month:"Month(s)",condition_builder_relative_dates_quarter:"Quarter(s)",condition_builder_relative_dates_year:"Year(s)",condition_builder_current_minute:"Current minute",condition_builder_current_hour:"Current hour",condition_builder_current_day:"Current day",condition_builder_current_week:"Current week",condition_builder_current_month:"Current month",condition_builder_current_quarter:"Current quarter",condition_builder_current_year:"Current year",condition_builder_last_X_minutes:{zero:"Current minute",one:"Last minute",two:"Last {0} minutes",few:"Last {0} minutes",many:"Last {0} minutes",other:"Last {0} minutes"},condition_builder_last_X_hours:{zero:"Current hour",one:"Last hour",two:"Last {0} hours",few:"Last {0} hours",many:"Last {0} hours",other:"Last {0} hours"},condition_builder_last_X_days:{zero:"Current day",one:"Last day",two:"Last {0} days",few:"Last {0} days",many:"Last {0} days",other:"Last {0} days"},condition_builder_last_X_weeks:{zero:"Current week",one:"Last week",two:"Last {0} weeks",few:"Last {0} weeks",many:"Last {0} weeks",other:"Last {0} weeks"},condition_builder_last_X_months:{zero:"Current month",one:"Last month",two:"Last {0} months",few:"Last {0} months",many:"Last {0} months",other:"Last {0} months"},condition_builder_last_X_quarters:{zero:"Current quarter",one:"Last quarter",two:"Last {0} quarters",few:"Last {0} quarters",many:"Last {0} quarters",other:"Last {0} quarters"},condition_builder_last_X_years:{zero:"Current year",one:"Last year",two:"Last {0} years",few:"Last {0} years",many:"Last {0} years",other:"Last {0} years"},condition_builder_next_X_minutes:{zero:"Current minute",one:"Next minute",two:"Next {0} minutes",few:"Next {0} minutes",many:"Next {0} minutes",other:"Next {0} minutes"},condition_builder_next_X_hours:{zero:"Current hour",one:"Next hour",two:"Next {0} hours",few:"Next {0} hours",many:"Next {0} hours",other:"Next {0} hours"},condition_builder_next_X_days:{zero:"Current day",one:"Next day",two:"Next {0} days",few:"Next {0} days",many:"Next {0} days",other:"Next {0} days"},condition_builder_next_X_weeks:{zero:"Current week",one:"Next week",two:"Next {0} weeks",few:"Next {0} weeks",many:"Next {0} weeks",other:"Next {0} weeks"},condition_builder_next_X_months:{zero:"Current month",one:"Next month",two:"Next {0} months",few:"Next {0} months",many:"Next {0} months",other:"Next {0} months"},condition_builder_next_X_quarters:{zero:"Current quarter",one:"Next quarter",two:"Next {0} quarters",few:"Next {0} quarters",many:"Next {0} quarters",other:"Next {0} quarters"},condition_builder_next_X_years:{zero:"Current year",one:"Next year",two:"Next {0} years",few:"Next {0} years",many:"Next {0} years",other:"Next {0} years"},condition_builder_previous_X_minutes:{zero:"Current minute",one:"Previous minute",two:"Previous {0} minutes",few:"Previous {0} minutes",many:"Previous {0} minutes",other:"Previous {0} minutes"},condition_builder_previous_X_hours:{zero:"Current hour",one:"Previous hour",two:"Previous {0} hours",few:"Previous {0} hours",many:"Previous {0} hours",other:"Previous {0} hours"},condition_builder_previous_X_days:{zero:"Current day",one:"Previous day",two:"Previous {0} days",few:"Previous {0} days",many:"Previous {0} days",other:"Previous {0} days"},condition_builder_previous_X_weeks:{zero:"Current week",one:"Previous week",two:"Previous {0} weeks",few:"Previous {0} weeks",many:"Previous {0} weeks",other:"Previous {0} weeks"},condition_builder_previous_X_months:{zero:"Current month",one:"Previous month",two:"Previous {0} months",few:"Previous {0} months",many:"Previous {0} months",other:"Previous {0} months"},condition_builder_previous_X_quarters:{zero:"Current quarter",one:"Previous quarter",two:"Previous {0} quarters",few:"Previous {0} quarters",many:"Previous {0} quarters",other:"Previous {0} quarters"},condition_builder_previous_X_years:{zero:"Current year",one:"Previous year",two:"Previous {0} years",few:"Previous {0} years",many:"Previous {0} years",other:"Previous {0} years"},condition_builder_time_period_label:"Time period",condition_builder_time_period_last:"Last",condition_builder_time_period_current:"Current",condition_builder_time_period_previous:"Previous",condition_builder_time_period_next:"Next",condition_builder_value_label:"Value",condition_builder_field_label:"Field",condition_builder_comparator_label:"Comparator",promoted_filters_clear_all_button_label:"Clear all filters",dev_mode:"Dev mode",expand_navigation:"Expand navigation",collapse_navigation:"Collapse navigation",branch_with_no_changes:"{0} with no changes",branch_with_no_potential_conflicts:"{0} with no potential conflicts and {1} unmerged changes",branch_with_potential_conflicts:"{0} with potential conflicts",parallel:"Parallel",stage:"Stage",alternate_stage:"Alternate stage",add_stage:"Add stage",add_process:"Add process",add_alternate_stage:"Add alternate stage",stage_name:"{0} stage",process_name:"{0} process",step_name:"{0} step",item_error:"{0} error",add_node:"Add node",search_nodes:"Search nodes",delete_step:"This step has multiple outcomes, are you sure want to delete this step?",delete_decision_step:"Select outcome that you want to retain. The remaining highlighted outcomes will be deleted",delete_step_title:"Delete step",delete_step_outcome:"Outcome to keep",delete_all_outcomes:"None (delete all outcomes)",delete_step_error:'This step can\'t be deleted as the outcome selected has a "Go to" step.',delete_referenced_step_error:'This step can\'t be deleted as it is referenced by a "Go to" step.',delete_connector_error:"Connector cannot be deleted unless Goto step is deleted from all branches",zoom_level:"Zoom level",close_configuration_panel:"Close configuration panel",clear_object_summary:"Clear {0} selection",create_in_new_tab:"Create new, opens in new tab",expression_editor:"Expression editor",output_parameters:"Output parameters",input_parameters:"Input parameters",no_app_build:"There is no app build",build_app:"Build app",build_in_progress:"Building…",rebuild_app:"Rebuild app",download_app:"Download app",qr_code_not_available:"No QR code available yet",qr_code:"QR code",app_header_notifications_empty:"No notifications",app_header_notifications_loading:"Loading notifications",open_app_header_notifications:"Open notifications",open_app_header_drawer:"Open navigation menu",preview_frame:"Preview frame",open_in_new_window_text:"Open in new window",more_options:"More options",dev_tools:"dev tools",active_session_info:"Debugging for this session is active in another window",continue_debugging:"Continue debugging"},create=translations=>Object.freeze({...i18n_default,...translations}),i18n=create,DefaultTranslation=create(),rightToLeftLangs=["ar","arc","ckb","dv","fa","ha","he","khw","ks","ps","ur","yi"],i18n_direction=localeTag=>rightToLeftLangs.includes(localeTag.split("-")[0])?"rtl":"ltr";var utils_utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js");__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/init.js");const defaultLocale=utils_utils.SX?navigator.language:"en",ConfigurationContext=(0,react.createContext)({locale:defaultLocale,direction:i18n_direction(defaultLocale),translations:DefaultTranslation,themeMachine:theme.kY,styleSheetTarget:utils_utils.jL?document.head:void 0,portalTarget:utils_utils.jL?document.body:void 0,overrideMap:{},renderNativeControls:!1,initialized:!1}),mountedConfigs=new Set,instance={version:"3.0.5",mountedConfigs:[],mountOrder:[],mountCount:{}};utils_utils.B3&&(window.cosmos.instances||(window.cosmos.instances=[]),window.cosmos.instances.push(instance));const Configuration_Configuration=({children,locale,direction,translations:customTranslations,theme,disableDefaultFontLoading,styleSheetTarget,portalTarget,overrideMap,renderNativeControls,id})=>{const context=utils_utils.B3?window.cosmos.configurationContext??ConfigurationContext:ConfigurationContext,ctx=(0,react.useContext)(context),themeMachine=theme?new ThemeMachine.Z({theme,parent:ctx.themeMachine}):ctx.themeMachine,translations=(0,react.useMemo)((()=>i18n({...ctx.translations,...customTranslations})),[ctx.translations,customTranslations]),[mounted,setMounted]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setMounted(!0)}),[]),(0,react.useEffect)((()=>{const sym=Symbol(id);return(sym=>{mountedConfigs.add(sym),instance.mountedConfigs=[...mountedConfigs].map((i=>i.description??"Unknown"));const description=sym.description??"Unknown";instance.mountOrder.push(description),description in instance.mountCount||(instance.mountCount[description]=0),instance.mountCount[description]+=1})(sym),()=>{(sym=>{mountedConfigs.delete(sym),instance.mountedConfigs=[...mountedConfigs].map((i=>i.description??"Unknown"))})(sym)}}),[id]);const wrappedChildren=ctx.initialized?children:(0,jsx_runtime.jsx)(styled_components_browser_esm.LC,{disableVendorPrefixes:!0,target:styleSheetTarget??ctx.styleSheetTarget,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!disableDefaultFontLoading&&mounted&&utils_utils.jL&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..700;1,400..700&display=swap","data-cosmos-global-style":!0}),styleSheetTarget??ctx.styleSheetTarget??document.head),(0,jsx_runtime.jsx)(GlobalStyle,{}),children]})});return(0,jsx_runtime.jsx)(context.Provider,{value:{locale:locale??ctx.locale,direction:direction??(void 0!==locale?i18n_direction(locale):ctx.direction),translations,themeMachine,styleSheetTarget:styleSheetTarget??ctx.styleSheetTarget,portalTarget:portalTarget??ctx.portalTarget,overrideMap:overrideMap?{...ctx.overrideMap,...overrideMap}:ctx.overrideMap,renderNativeControls:renderNativeControls??ctx.renderNativeControls,initialized:!0},children:(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:themeMachine.theme,children:wrappedChildren})})}},"./node_modules/@pega/cosmos-react-core/lib/components/Email/EmailDisplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Link__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Link/Link.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({value,displayText,variant="link",...restProps},ref)=>{const displayValue=value?displayText||value:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{"aria-hidden":"true",children:"––"});return"text"!==variant&&value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_2__.ZP,{ref,...restProps,href:`mailto:${value}`,children:displayValue}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{ref,...restProps,children:displayValue})}))},"./node_modules/@pega/cosmos-react-core/lib/components/Flex/Flex.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js");const prefix=value=>["between","around","evenly"].includes(value)?`space-${value}`:["start","end"].includes(value)?`flex-${value}`:value,getContainerStyles=container=>{if(!container)return"";if(!0===container)return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      display: flex;
    `;if(container&&"object"==typeof container){const isRow=!container.direction||container.direction.includes("row"),isReverse=container.direction&&container.direction.includes("reverse");return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      display: ${container.inline?"inline-flex":"flex"};

      ${void 0!==container.pad&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        /* stylelint-disable function-name-case, function-whitespace-after */
        padding: ${({theme:{base:{spacing}}})=>(Array.isArray(container.pad)?container.pad:[container.pad]).map((p=>`calc(${p} * ${spacing})`)).join(" ")};

        /* stylelint-enable function-name-case, function-whitespace-after */
      `}

      ${container.direction&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        flex-direction: ${container.direction};
      `}

      ${container.justify&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        justify-content: ${prefix(container.justify)};
      `}

      ${container.wrap&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        flex-wrap: ${container.wrap};
      `}

      ${container.alignItems&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        align-items: ${prefix(container.alignItems)};
      `}

      ${container.alignContent&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        align-content: ${prefix(container.alignContent)};
      `}

      ${container.itemGap&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          > * {
            margin-${isRow?"inline-start":"block-start"}: calc(${container.itemGap} * ${props=>props.theme.base.spacing});
            ${isReverse?":last-child":":first-child"} {
              margin-${isRow?"inline-start":"block-start"}: 0;
            }
          }
        `}

      ${void 0!==container.gap&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        gap: calc(${container.gap} * ${props=>props.theme.base.spacing});
      `}

      ${void 0!==container.colGap&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        column-gap: calc(${container.colGap} * ${props=>props.theme.base.spacing});
      `}

      ${void 0!==container.rowGap&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        row-gap: calc(${container.rowGap} * ${props=>props.theme.base.spacing});
      `}
    `}},getItemStyles=item=>styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    ${item&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      max-width: 100%;
      min-width: 0;

      ${void 0!==item.grow&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        flex-grow: ${item.grow};
      `}

      ${void 0!==item.shrink&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        flex-shrink: ${item.shrink};
      `}

      ${item.alignSelf&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        align-self: ${prefix(item.alignSelf)};
      `}

      ${item.basis&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
        flex-basis: ${item.basis};
      `}
    `}
  `,breakpointOrder=["xs","sm","md","lg","xl"],StyledFlex=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div((({container,item,theme:{base:{breakpoints:themeBreakpoints}},xs,sm,md,lg,xl})=>{const breakpoints={xs,sm,md,lg,xl};return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      ${getContainerStyles(container)}
      ${getItemStyles(item)}

    ${breakpointOrder.map((breakpoint=>breakpoints[breakpoint]&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            @media screen and (min-width: ${themeBreakpoints[breakpoint]}) {
              ${getContainerStyles(breakpoints[breakpoint]?.container)}
              ${getItemStyles(breakpoints[breakpoint]?.item)}
            }
          `))}
    `}));StyledFlex.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_3__.ns;const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledFlex,{...props,ref})))},"./node_modules/@pega/cosmos-react-core/lib/components/Grid/Grid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>StyledGrid,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js");const prefix=value=>["between","around","evenly"].includes(value)?`space-${value}`:value,getContainerStyles=gridProps=>{if(!gridProps)return;if(!0===gridProps)return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      display: grid;
    `;const{inline,pad,cols,autoCols,rows,autoRows,autoFlow,areas,template,colGap,rowGap,gap,justifyItems,justifyContent,alignItems,alignContent}=gridProps;return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    display: ${inline?"inline-grid":"grid"};

    ${void 0!==pad&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      /* stylelint-disable function-name-case, function-whitespace-after */
      padding: ${({theme:{base:{spacing}}})=>(Array.isArray(pad)?pad:[pad]).map((p=>`calc(${p} * ${spacing})`)).join(" ")};

      /* stylelint-enable function-name-case, function-whitespace-after */
    `}

    ${cols&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-template-columns: ${cols};
    `}

    ${autoCols&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-auto-columns: ${autoCols};
    `}

    ${rows&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-template-rows: ${rows};
    `}

    ${autoRows&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-auto-rows: ${autoRows};
    `}

    ${autoFlow&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-auto-flow: ${autoFlow};
    `}

    ${areas&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-template-areas: ${areas};
    `}

    ${template&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-template: ${template};
    `}

    ${void 0!==gap&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      gap: calc(${gap} * ${props=>props.theme.base.spacing});
    `}

    ${void 0!==colGap&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      column-gap: calc(${colGap} * ${props=>props.theme.base.spacing});
    `}

    ${void 0!==rowGap&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      row-gap: calc(${rowGap} * ${props=>props.theme.base.spacing});
    `}

    ${justifyItems&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      justify-items: ${justifyItems};
    `}

    ${justifyContent&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      justify-content: ${prefix(justifyContent)};
    `}

    ${alignItems&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      align-items: ${alignItems};
    `}

    ${alignContent&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      align-content: ${prefix(alignContent)};
    `}
  `},getItemStyles=props=>{if(!props)return;const{colStart,colEnd,colStartEnd,rowStart,rowEnd,rowStartEnd,area,justifySelf,alignSelf}=props;return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    ${colStart&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-column-start: ${colStart};
    `}

    ${colEnd&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-column-end: ${colEnd};
    `}

    ${colStartEnd&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-column: ${colStartEnd};
    `}

    ${rowStart&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-row-start: ${rowStart};
    `}

    ${rowEnd&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-row-end: ${rowEnd};
    `}

    ${rowStartEnd&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-row: ${rowStartEnd};
    `}

    ${area&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      grid-area: ${area};
    `}

    ${justifySelf&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      justify-self: ${justifySelf};
    `}

    ${alignSelf&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      align-self: ${alignSelf};
    `}
  `},breakpointOrder=["xs","sm","md","lg","xl"],StyledGrid=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div((({container,item,theme:{base:{breakpoints:themeBreakpoints}},xs,sm,md,lg,xl})=>{const breakpoints={xs,sm,md,lg,xl};return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
      ${getContainerStyles(container)}
      ${getItemStyles(item)}

    ${breakpointOrder.map((breakpoint=>breakpoints[breakpoint]&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            @media screen and (min-width: ${themeBreakpoints[breakpoint]}) {
              ${getContainerStyles(breakpoints[breakpoint]?.container)}
              ${getItemStyles(breakpoints[breakpoint]?.item)}
            }
          `))}
    `}));StyledGrid.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_3__.ns;const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledGrid,{...props,ref})))},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,q5:()=>registerIcon,xL:()=>StyledIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const iconRegistry=new Map,registerIcon=(...icons)=>{icons.forEach((({name,...iconDef})=>{iconRegistry.has(name)||iconRegistry.set(name,iconDef)}))},StyledIcon=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.svg`
  display: inline-block;
  fill: currentColor;
  height: 1.125rem;
  width: 1.125rem;
  vertical-align: middle;
`,emptyIconDefinition=Object.freeze({Component:()=>null}),__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({name,...restProps},ref)=>{const[iconDef,setIconDef]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(iconRegistry.get(name)??emptyIconDefinition);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(iconRegistry.has(name))return void setIconDef(iconRegistry.get(name));const controller=new AbortController;return(async()=>{try{const module=await __webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons lazy recursive ^\\.\\/.*\\.icon$")(`./${encodeURIComponent(name)}.icon`);if(module.name!==name||!module.Component)throw new Error("Malformed icon definition");registerIcon(module)}catch{registerIcon({name,...emptyIconDefinition})}controller.signal.aborted||setIconDef(iconRegistry.get(name)??emptyIconDefinition)})(),()=>controller.abort()}),[name]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledIcon,{role:"presentation",...restProps,viewBox:iconDef.viewBox,ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(iconDef.Component,{})})}))},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/arrow-micro-down.icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,name:()=>name,viewBox:()=>viewBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const name="arrow-micro-down",Component=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M8,9.5 C8,9.5 17,9.5 17,9.5 C17,9.5 12.5981383,15.5 12.5981383,15.5 C12.5981383,15.5 8.00079787,9.5 8.00079787,9.5 L8,9.5 Z"}),viewBox="0 0 25 25"},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/caret-left.icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,name:()=>name,viewBox:()=>viewBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const name="caret-left",Component=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon",{points:"17.25 21 14.5 21 8 12.4995445 14.5 4 17.25 4 10.75 12.4995445"}),viewBox="0 0 25 25"},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/caret-right.icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,name:()=>name,viewBox:()=>viewBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const name="caret-right",Component=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon",{points:"8 4 10.75 4 17.25 12.5004555 10.75 21 8 21 14.5 12.5004555"}),viewBox="0 0 25 25"},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/check.icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,name:()=>name,viewBox:()=>viewBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const name="check",Component=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M3.46428318,11.3714451 C3.46428318,11.3714451 9.68636719,17.3451711 9.68636719,17.3451711 C9.68636719,17.3451711 21.5819888,5 21.5819888,5 C21.5819888,5 23,6.37144507 23,6.37144507 C23,6.37144507 9.73189281,20 9.73189281,20 C9.73189281,20 2,12.7428901 2,12.7428901 C2,12.7428901 3.46428318,11.3714451 3.46428318,11.3714451 L3.46428318,11.3714451 Z"}),viewBox="0 0 25 25"},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/flag-wave-solid.icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,name:()=>name,viewBox:()=>viewBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const name="flag-wave-solid",Component=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M13.8179687,1.96328125 C13.8179687,1.96328125 13.8179687,1.96328125 13.8179687,1.96328125 C13.8179687,1.96328125 13.8179687,10.7757812 13.8179687,10.7757812 C13.8179687,10.7757812 5.96328125,10.7757812 5.96328125,10.7757812 C5.96328125,10.7757812 5.96328125,0.9578125 5.96328125,0.9578125 C5.96328125,0.9578125 12.8117188,0.9578125 12.8117188,0.9578125 C13.0992187,0.9578125 13.3382812,1.05390625 13.5304688,1.2453125 C13.721875,1.48515625 13.8179687,1.72421875 13.8179687,1.9640625 L13.8179687,1.96328125 Z M20.1875,1.96328125 C20.1875,1.96328125 20.1875,1.96328125 20.1875,1.96328125 C20.1875,1.96328125 14.7757812,1.96328125 14.7757812,1.96328125 C14.7757812,1.96328125 14.7757812,11.78125 14.7757812,11.78125 C14.7757812,12.0203125 14.871875,12.2601562 15.0632812,12.4515625 C15.2546875,12.6429687 15.4945312,12.7390625 15.7820312,12.7390625 C15.7820312,12.7390625 15.7820312,12.7390625 15.7820312,12.7390625 C15.7820312,12.7390625 20.1882812,12.7390625 20.1882812,12.7390625 C20.6195313,12.7390625 20.9546875,12.5953125 21.2421875,12.3078125 C21.5296875,12.0203125 21.6734375,11.6851562 21.6734375,11.2539062 C21.6734375,11.2539062 21.6734375,11.2539062 21.6734375,11.2539062 C21.6734375,11.2539062 21.6734375,3.44765625 21.6734375,3.44765625 C21.6734375,3.01640625 21.5296875,2.68125 21.2421875,2.39375 C20.9546875,2.10625 20.6195313,1.9625 20.1882812,1.9625 L20.1875,1.96328125 Z M4.9578125,0.47890625 C4.9578125,0.14375 4.8140625,0 4.47890625,0 C4.14375,0 4,0.14375 4,0.47890625 C4,0.47890625 4,0.47890625 4,0.47890625 C4,0.47890625 4,24.0421875 4,24.0421875 C4,24.3773437 4.14375,24.5210937 4.47890625,24.5210937 C4.8140625,24.5210937 4.9578125,24.3773437 4.9578125,24.0421875 C4.9578125,24.0421875 4.9578125,24.0421875 4.9578125,24.0421875 C4.9578125,24.0421875 4.9578125,0.47890625 4.9578125,0.47890625 L4.9578125,0.47890625 Z"}),viewBox="0 0 25 25"},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/galaxy.icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,name:()=>name,viewBox:()=>viewBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const name="galaxy",Component=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M17.66,3.3 L16.5,6.5 L13.2,7.66 C12.9795227,7.74758911 12.9359131,8.22244263 13.2,8.33 L16.500001,9.5 L17.66,12.8 C17.76,13.1 18.2030182,13.1 18.33,12.8 L19.5,9.5 C21.4814718,8.79919189 22.5814718,8.40919189 22.8,8.33 C23.1277924,8.21121216 23.0046539,7.73219299 22.8,7.66 C22.663564,7.61187134 21.563564,7.22520467 19.5,6.5 L18.33,3.3 C18.1428072,2.88545227 17.8075209,2.92276001 17.66,3.3 Z M15.5,22 C16.3284271,22 17,21.3284271 17,20.5 C17,19.6715729 16.3284271,19 15.5,19 C14.6715729,19 14,19.6715729 14,20.5 C14,21.3284271 14.6715729,22 15.5,22 Z M5,10 C6.65685425,10 8,11.3431458 8,13 C8,14.6568542 6.65685425,16 5,16 C3.34314575,16 2,14.6568542 2,13 C2,11.3431458 3.34314575,10 5,10 Z M5,12 C4.44771525,12 4,12.4477153 4,13 C4,13.5522847 4.44771525,14 5,14 C5.55228475,14 6,13.5522847 6,13 C6,12.4477153 5.55228475,12 5,12 Z"}),viewBox="0 0 25 25"},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/information.icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,name:()=>name,viewBox:()=>viewBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const name="information",Component=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M4.36924939,20.6307506 C2.12332739,18.3848286 1,15.6897222 1,12.5 C1,9.31027781 2.12332739,6.6151714 4.36924939,4.36924939 C6.6151714,2.12332739 9.31027781,1 12.5,1 C15.6897222,1 18.3848286,2.12332739 20.6307506,4.36924939 C22.8766726,6.6151714 24,9.31027781 24,12.5 C24,15.6897222 22.8766726,18.3848286 20.6307506,20.6307506 C18.3848286,22.8766726 15.6897222,24 12.5,24 C9.31027781,24 6.6151714,22.8766726 4.36924939,20.6307506 Z M1.8811875,12.447386 C1.8811875,12.447386 1.8811875,12.447386 1.8811875,12.447386 C1.8811875,14.5968497 2.46329283,16.5666437 3.67205609,18.312946 C4.83626674,20.1038006 6.40291157,21.4023893 8.37345132,22.2532644 C10.3439911,23.1041394 12.4029056,23.2830788 14.5071032,22.8799174 C16.6113007,22.476756 18.4021693,21.4922242 19.9249919,19.9694135 C19.9249919,19.9694135 19.9249919,19.9694135 19.9249919,19.9694135 C21.4025315,18.4918854 22.3878014,16.6564786 22.8355186,14.5515671 C23.2386831,12.447386 23.059012,10.4323093 22.2088606,8.46251536 C22.2088606,8.46251536 22.2088606,8.46251536 22.2088606,8.46251536 C21.4032619,6.49272137 20.1046631,4.92535842 18.3583471,3.7166046 C16.5674785,2.50785078 14.5976691,1.92575 12.4481886,1.92575 C12.4481886,1.92575 12.4481886,1.92575 12.4481886,1.92575 C9.53766197,1.92575 7.07558285,2.95556443 5.0159379,4.97064104 C2.95629295,7.0302699 1.92647047,9.53761241 1.88191787,12.4481163 L1.8811875,12.447386 Z M13.65,5.14 C14.4934394,5.14 15.26,5.8300444 15.26,6.75 C15.26,7.6699556 14.5699556,8.36 13.65,8.36 C12.8065606,8.36 12.04,7.6699556 12.04,6.75 C12.04,5.82983718 12.7300444,5.14 13.65,5.14 L13.65,5.14 Z M12.1006632,19.4 C10.8371558,19.4 9.92475184,18.3609236 10.2758078,17.1256209 L11.776451,12.765183 C11.9168781,12.2564972 12.1349341,11.3294309 11.6436075,11.3294309 C11.3160565,11.3294309 10.9157711,11.4931165 10.4427514,11.8204877 C10.7936367,10.7303906 11.7762613,10.2 12.8993368,10.2 C14.1628442,10.2 15.0752482,11.2390764 14.7241922,12.4743791 L13.223549,16.834817 C13.0831219,17.3435028 13.0547746,18.1723578 13.5461012,18.1723578 C13.8736522,18.1723578 14.2107014,18.0414093 14.5572486,17.7795123 C14.2063633,18.8696094 13.2237387,19.4 12.1006632,19.4 Z"}),viewBox="0 0 25 25"},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/times.icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,name:()=>name,viewBox:()=>viewBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const name="times",Component=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M12.5114907,13.9248255 L12.33115,14.1043729 C9.45348728,16.9709375 6.70574497,19.7080827 5.34382052,21.0647547 L4.96703584,21.4400862 C4.89381077,21.5130289 4.82779492,21.5787901 4.76940025,21.6369596 L4.5594575,21.8460927 C4.54215537,21.8633281 4.52691302,21.8785116 4.51378194,21.8915921 L4.45399692,21.9511465 L4.45399692,21.9511465 C4.45399692,21.9511465 3,20.6256955 3,20.6256955 L3.02618327,20.5993933 C3.37418959,20.2498064 7.13747755,16.4694259 11.0872757,12.5016881 L11.0863207,12.501129 L10.4680613,11.8835089 C9.78322875,11.1993844 9.10940241,10.5262547 8.46370312,9.88122304 L7.65036461,9.06872546 C7.56201521,8.98046741 7.47438959,8.89293239 7.38753764,8.80617024 L6.62810723,8.04752503 C6.38282536,7.80249676 6.14585432,7.56577074 5.91854181,7.33869326 L5.47719417,6.89780194 C5.26335869,6.68418755 5.06008021,6.48111926 4.86870645,6.28994335 L4.50223117,5.92384699 C4.44393055,5.86560665 4.38705251,5.80878742 4.33164696,5.75343915 L3.87410193,5.2963672 C3.68961642,5.11207243 3.53108666,4.95370658 3.40170721,4.8244609 L3.00079065,4.42395886 L3.00079065,4.42395886 L3.0545835,4.3694699 C3.27776663,4.14339868 4.12958222,3.28056018 4.35276534,3.05448896 L4.4065582,3 L4.4065582,3 L4.41330396,3.00673854 L4.64013689,3.23332822 C4.6908074,3.28394439 4.74930506,3.34237932 4.81521792,3.4082215 L5.16048802,3.75312134 C5.20410379,3.79669035 5.24941888,3.84195685 5.29638179,3.8888694 L6.11797528,4.70958185 C6.18012905,4.77166897 6.24367316,4.83514494 6.30855613,4.89995834 L6.9272616,5.51800034 C7.21707221,5.80750016 7.52583276,6.11592961 7.85024761,6.43999658 L8.60520732,7.19414671 C9.03776045,7.626236 9.49091136,8.07890097 9.95822323,8.54571172 L10.5253828,9.11226308 C10.6209049,9.2076828 10.7168905,9.30356547 10.8132881,9.39985966 L11.6905985,10.2762293 C11.7890044,10.3745296 11.8876677,10.4730871 11.986537,10.5718504 L12.4985694,11.0833337 L12.4985694,11.0833337 L12.5115216,11.0709734 L12.5115216,11.0709734 L13.0992017,10.4806241 C16.3188482,7.24635427 19.2945572,4.25712988 20.2374536,3.30995086 L20.386091,3.1606384 C20.4069978,3.13963665 20.4259383,3.12061006 20.4428629,3.10360864 L20.5394075,3.00662555 C20.543788,3.00222519 20.5460031,3 20.5460031,3 C20.5460031,3 22,4.47281234 22,4.47281234 L21.940215,4.53236679 C21.9270839,4.54544723 21.9118416,4.56063079 21.8945394,4.57786619 L21.7664213,4.7054902 C21.6904155,4.78120284 21.5967987,4.87445865 21.4869611,4.98387264 L21.1101764,5.3592042 C19.7178364,6.74617445 16.8770889,9.5759661 13.9298678,12.5118209 L13.9297108,12.5129405 L14.3725825,12.9553372 C14.8669289,13.4491536 15.3561259,13.937826 15.8337367,14.4149246 L16.4008962,14.9814759 C16.4943586,15.0748381 16.5872545,15.1676344 16.6795326,15.2598135 L17.7539122,16.3330409 C17.8404228,16.4194588 17.9261095,16.5050536 18.0109208,16.589774 L18.5088719,17.0871911 C18.5899756,17.1682078 18.6701009,17.2482472 18.7491963,17.3272578 L19.4318579,18.0091873 C19.5043105,18.0815623 19.5755788,18.1527541 19.6456112,18.2227114 L20.0505633,18.6272293 C20.3100952,18.8864829 20.5482054,19.1243378 20.7615983,19.3375018 L21.1986315,19.7740663 C21.2422472,19.8176353 21.2841637,19.8595068 21.3243293,19.8996294 L21.7189826,20.2938594 C21.7949883,20.3697837 21.853383,20.4281158 21.8927763,20.4674667 L21.9525613,20.5271877 L21.9525613,20.5271877 L21.9517706,20.5271877 L21.8998536,20.583546 C21.6513144,20.8533468 20.5950231,22 20.5950231,22 L20.4346714,21.8398141 C20.2040646,21.6094457 19.7348893,21.1407556 19.0935826,20.5001119 L18.5318152,19.9389253 C18.4654284,19.8726071 18.3977687,19.8050174 18.3288861,19.7362061 L17.6772719,19.0852656 C17.4499594,18.8581881 17.2129884,18.6214621 16.9677065,18.3764338 L16.2082761,17.6177886 C16.1214242,17.5310265 16.0337985,17.4434914 15.9454491,17.3552334 L15.1321106,16.5427358 C14.8553824,16.2662937 14.5734879,15.9846907 14.2877749,15.6992731 L13.4205283,14.8329232 C13.3231942,14.7356898 13.2255856,14.6381821 13.1277524,14.54045 L12.5114907,13.9248255 L12.5114907,13.9248255 Z"}),viewBox="0 0 25 25"},"./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/warn-solid.icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Component:()=>Component,name:()=>name,viewBox:()=>viewBox});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const name="warn-solid",Component=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M23.5,22.5 C23.5,22.5 1.5,22.5 1.5,22.5 C1.5,22.5 12.4996198,2.5 12.4996198,2.5 C12.4996198,2.5 23.4992397,22.5 23.4992397,22.5 L23.5,22.5 Z M13.7587178,15.5647398 C13.7587178,15.5647398 13.7587178,15.5647398 13.7587178,15.5647398 C13.7587178,15.5647398 13.7587178,9.39000803 13.7587178,9.39000803 C13.4325384,9.0768922 13.0128391,8.94259543 12.5931398,8.94259543 C12.5931398,8.94259543 12.5931398,8.94259543 12.5931398,8.94259543 C12.1734405,8.94259543 11.8008813,9.0768922 11.381182,9.39000803 C11.381182,9.39000803 11.381182,9.39000803 11.381182,9.39000803 C11.381182,9.39000803 11.381182,15.5647398 11.381182,15.5647398 C11.7073613,15.6990366 12.1270607,15.7880812 12.5931398,15.7880812 C13.0592189,15.7880812 13.4317781,15.6983067 13.7587178,15.5647398 Z M12.54676,20.3519816 C12.54676,20.3519816 12.54676,20.3519816 12.54676,20.3519816 C13.0128391,20.3519816 13.4325384,20.1731625 13.7587178,19.8600467 C14.0848972,19.5469309 14.224797,19.1885629 14.224797,18.7864025 C14.224797,18.7864025 14.224797,18.7864025 14.224797,18.7864025 C14.224797,18.3389899 14.0848972,17.9360996 13.7587178,17.6229837 C13.4325384,17.3098679 13.0128391,17.1755711 12.54676,17.1755711 C12.54676,17.1755711 12.54676,17.1755711 12.54676,17.1755711 C12.1270607,17.1755711 11.7545015,17.3098679 11.4283221,17.6229837 C11.1021427,17.9360996 10.9158631,18.3389899 10.9158631,18.7864025 C10.9158631,18.7864025 10.9158631,18.7864025 10.9158631,18.7864025 C10.9158631,19.1892928 11.1021427,19.5469309 11.4283221,19.8600467 C11.7545015,20.1731625 12.127821,20.3519816 12.54676,20.3519816 Z"}),viewBox="0 0 25 25"},"./node_modules/@pega/cosmos-react-core/lib/components/Input/Input.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Input_Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),theme=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),Flex=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Flex/Flex.js"),useI18n=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useI18n.js"),Button=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Button/Button.js"),Icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/Icon.js"),useUID=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useUID.js"),useConsolidatedRef=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConsolidatedRef.js"),utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js");const hooks_useFocusWithin=(els,onFocusChange)=>{const[hasFocus,setFocus]=(0,react.useState)(!1),focusedElRef=(0,react.useRef)(null),blurTimerRef=(0,react.useRef)(),elsRef=(0,react.useRef)(els);elsRef.current=els;const onBlur=(0,react.useCallback)((({relatedTarget})=>{if(!hasFocus)return;const elements=(0,utils.WV)(elsRef.current);if(relatedTarget instanceof Node){const focusedEl=elements.find((el=>el?.contains(relatedTarget)));if(focusedEl)return void(focusedElRef.current=focusedEl)}clearTimeout(blurTimerRef.current),blurTimerRef.current=setTimeout((()=>{elements.some((el=>el?.contains(document.activeElement)))||(setFocus(!1),onFocusChange?.(!1,focusedElRef.current),focusedElRef.current=null)}))}),[hasFocus,onFocusChange]),onFocus=(0,react.useCallback)((({currentTarget})=>{if(clearTimeout(blurTimerRef.current),!hasFocus){setFocus(!0);const targetEl=currentTarget;onFocusChange?.(!0,targetEl),focusedElRef.current=targetEl}}),[hasFocus,onFocusChange]);return(0,react.useEffect)((()=>{const elements=(0,utils.WV)(els);return elements.forEach((el=>{el?.addEventListener("focusin",onFocus),el?.addEventListener("focusout",onBlur)})),()=>{elements.forEach((el=>{el?.removeEventListener("focusin",onFocus),el?.removeEventListener("focusout",onBlur)}))}}),[els,onFocus,onBlur]),(0,react.useEffect)((()=>()=>{clearTimeout(blurTimerRef.current)}),[]),hasFocus};var useConfiguration=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConfiguration.js");const hooks_useDirection=()=>{const{direction}=(0,useConfiguration.Z)();return(0,react.useMemo)((()=>"ltr"===direction?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0}),[direction])};var Popover_styles=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Popover/Popover.styles.js"),Popover=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Popover/Popover.js");const hooks_useActiveDescendant=({focusEl,scope,scopeSelector,selector,orientation="vertical",focusDescendantEl,clearFocusDescendant,focusReturnEl,clearFocusReturn,currentDescendantId,onClick,preventInitialScroll,pauseDescendantEvaluation=!1,clearPreventScroll},dependencyArray=[])=>{const[resetId,setResetId]=(0,react.useState)(0),previousActiveId=(0,react.useRef)(""),paused=(0,react.useRef)(pauseDescendantEvaluation),[focusDescendantElIndex,setFocusDescendantElIndex]=(0,react.useState)(null),[currentIndex,setCurrentIndex]=(0,react.useState)(null),[descendants,setDescendants]=(0,react.useState)(),{rtl}=hooks_useDirection(),clearDescendants=(0,react.useCallback)((()=>{descendants?.forEach((node=>{node.setAttribute("data-current","false")}))}),[descendants]),clearThenSetDescendants=(0,react.useCallback)((setVal=>{clearDescendants(),setDescendants(setVal?Array.from(setVal).filter((item=>item instanceof HTMLElement)):null)}),[descendants]),setIdsAndOwns=(0,react.useCallback)((({clear}={clear:!1})=>{const ownedIds=[];if(descendants&&descendants.length&&descendants.forEach((node=>{node.id=node.id||(0,utils.xG)(),ownedIds.push(node.id)})),clear){const currentOwnedIds=focusEl?.getAttribute("aria-owns")?.split(" "),clearedIds=currentOwnedIds?.filter((id=>!ownedIds.includes(id)));focusEl?.setAttribute("aria-owns",clearedIds?.join(" ")||"")}else focusEl?.setAttribute("aria-owns",ownedIds.join(" "))}),[focusEl,descendants]),updateDescendants=(0,react.useCallback)((()=>{if(pauseDescendantEvaluation)return;let hasScope=scope;if(hasScope&&hasScope instanceof HTMLElement){if(scopeSelector&&(hasScope=hasScope.querySelector(scopeSelector)),!hasScope)return void clearThenSetDescendants(null);if(selector){const setVal=hasScope.querySelectorAll(selector);clearThenSetDescendants(setVal)}else{const setVal=hasScope.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');clearThenSetDescendants(setVal)}}else clearThenSetDescendants(null)}),[scope,scopeSelector,selector,pauseDescendantEvaluation]);return(0,react.useEffect)((()=>{paused.current=pauseDescendantEvaluation}),[pauseDescendantEvaluation]),(0,react.useEffect)((()=>{if(!scope||!focusEl)return;scope.setAttribute("data-active-scope",(0,utils.vY)()===focusEl?"true":"false");const onFocus=()=>{scope.setAttribute("data-active-scope","true")},onBlur=()=>{scope.setAttribute("data-active-scope","false")};return focusEl.addEventListener("focus",onFocus),focusEl.addEventListener("blur",onBlur),()=>{focusEl.removeEventListener("focus",onFocus),focusEl.removeEventListener("blur",onBlur)}}),[scope,focusEl]),(0,react.useEffect)((()=>{pauseDescendantEvaluation||updateDescendants()}),[pauseDescendantEvaluation]),(0,react.useEffect)((()=>{const timeoutId=setTimeout((()=>{updateDescendants(),paused.current||setCurrentIndex(0)}),0);return()=>clearTimeout(timeoutId)}),[...dependencyArray]),(0,react.useEffect)((()=>{pauseDescendantEvaluation?(clearDescendants(),setIdsAndOwns({clear:!0})):(setIdsAndOwns(),setResetId(Math.random()))}),[pauseDescendantEvaluation,focusEl,descendants]),(0,react.useEffect)((()=>{const nextIndex=()=>{clearFocusReturn?.(),clearPreventScroll?.(),null!==currentIndex&&currentIndex+1<descendants.length?setCurrentIndex(currentIndex+1):setCurrentIndex(0)},prevIndex=()=>{clearFocusReturn?.(),clearPreventScroll?.(),setCurrentIndex(null!==currentIndex&&currentIndex-1>-1?currentIndex-1:descendants.length-1)},onKeyDown=e=>{descendants?.length&&(["ArrowDown","ArrowUp"].includes(e.key)&&"vertical"===orientation&&e.preventDefault(),["ArrowLeft","ArrowRight"].includes(e.key)&&"horizontal"===orientation&&e.preventDefault(),setTimeout((()=>{switch(e.key){case"ArrowDown":"vertical"===orientation&&nextIndex();break;case"ArrowUp":"vertical"===orientation&&prevIndex();break;case"ArrowRight":"horizontal"===orientation&&(rtl?prevIndex():nextIndex());break;case"ArrowLeft":"horizontal"===orientation&&(rtl?nextIndex():prevIndex());break;case"Enter":if(null!==currentIndex){if(onClick){onClick(descendants[currentIndex]);break}const nodeName=descendants[currentIndex].nodeName.toLowerCase();"input"===nodeName||"button"===nodeName||"a"===nodeName?descendants[currentIndex].click():descendants[currentIndex].querySelector("button, a, input")?.click()}}}),0))};return!pauseDescendantEvaluation&&focusEl&&descendants?.length&&!currentDescendantId&&focusEl.addEventListener("keydown",onKeyDown),()=>{focusEl?.removeEventListener("keydown",onKeyDown)}}),[focusEl,currentIndex,descendants,pauseDescendantEvaluation]),(0,react.useEffect)((()=>{!pauseDescendantEvaluation&&descendants&&currentDescendantId&&descendants.forEach(((node,index)=>{node.id===currentDescendantId&&setCurrentIndex(index)}))}),[currentDescendantId,descendants,pauseDescendantEvaluation]),(0,react.useEffect)((()=>{if(paused.current)return;const nextIndex=focusDescendantElIndex||currentIndex,focusReturnId=focusReturnEl?.id;let focusReturnIndex;const focusDescendantElId=focusDescendantEl?.id;let focusDescendantIndex,foundFocusDescendantEl=!1;if(descendants&&descendants.length){if(descendants.forEach(((node,index)=>{null===focusDescendantElIndex&&node.id===focusDescendantElId&&(focusDescendantIndex=index,foundFocusDescendantEl=!0,setFocusDescendantElIndex(index)),node.id===focusReturnId&&(focusReturnIndex=index),node.setAttribute("data-current","false")})),focusReturnIndex&&focusReturnIndex!==currentIndex)return setCurrentIndex(focusReturnIndex),void clearFocusReturn?.();if(foundFocusDescendantEl&&void 0!==focusDescendantIndex)return setResetId(Math.random()),void setCurrentIndex(focusDescendantIndex);if(null!==nextIndex&&descendants[nextIndex]){const itemEl=descendants[nextIndex];if(itemEl.setAttribute("data-current","true"),focusEl?.setAttribute("aria-activedescendant",itemEl.id),itemEl.id!==previousActiveId.current&&!preventInitialScroll){(Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView)?.call(itemEl,!1)}null!==focusDescendantElIndex&&(setFocusDescendantElIndex(null),clearFocusDescendant?.()),previousActiveId.current=itemEl.id}}return()=>{focusEl?.removeAttribute("aria-activedescendant")}}),[descendants,currentIndex,focusDescendantEl,focusEl,resetId]),{activeDescendant:null!==currentIndex&&descendants?descendants[currentIndex]:void 0,descendants:descendants||null}},hooks_usePrevious=value=>{const ref=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{ref.current=value}),[value]),ref.current},StyledVisuallyHiddenText=styled_components_browser_esm.ZP.span`
  ${polished_esm.G0}
  -webkit-user-select: none;
  user-select: none;
`,VisuallyHiddenText_VisuallyHiddenText=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(StyledVisuallyHiddenText,{...props,ref}))),hooks_useItemIntersection=(containerRef,offset,cb,itemSelector)=>{(0,react.useEffect)((()=>{let item=null;if(offset>0){const items=(null===containerRef.current?document.body:containerRef.current).querySelectorAll(itemSelector);items.length>offset&&(item=items[offset])}if(item){const intersectionObserver=new IntersectionObserver((entries=>{entries[0].isIntersecting&&cb()}),{root:containerRef.current});return intersectionObserver.observe(item),()=>{intersectionObserver.disconnect()}}}),[cb,containerRef.current,offset])};var useAfterInitialEffect=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useAfterInitialEffect.js"),Progress=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Progress/Progress.js"),galaxy_icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/galaxy.icon.js"),Text=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Text/Text.js");(0,Icon.q5)(galaxy_icon);const StyledEmptyState=styled_components_browser_esm.ZP.div((({theme})=>{const color=(0,utils.Y3)((()=>(0,polished_esm.m4)(theme.base.palette["foreground-color"],theme.base.transparency["transparent-2"])));return styled_components_browser_esm.iv`
    height: 100%;

    ${Icon.xL} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${color};
    }
  `}));StyledEmptyState.defaultProps=theme.ns;const EmptyState_EmptyState=(0,react.forwardRef)(((props,ref)=>{const t=(0,useI18n.Z)(),{message=t("no_items"),...restProps}=props;return(0,jsx_runtime.jsxs)(Flex.Z,{...restProps,as:StyledEmptyState,ref,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[(0,jsx_runtime.jsx)(Icon.ZP,{name:"galaxy"}),(0,jsx_runtime.jsx)(Text.Z,{variant:"secondary",children:message})]})})),Menu_context=(0,react.createContext)({mode:"action",variant:"drill-down",scrollAt:7,loading:!1,componentId:(0,utils.xG)(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null}),StyledMetaList=styled_components_browser_esm.ZP.ul((({wrapItems})=>styled_components_browser_esm.iv`
    list-style: none;
    overflow: hidden;

    ${!wrapItems&&styled_components_browser_esm.iv`
      white-space: nowrap;
    `}
  `)),StyledMetaListItem=styled_components_browser_esm.ZP.li((({wrapItems})=>styled_components_browser_esm.iv`
    min-width: 0;
    display: inline-block;

    ${wrapItems?styled_components_browser_esm.iv`
          overflow-wrap: break-word;
        `:styled_components_browser_esm.iv`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `)),MetaList_MetaList=(0,react.forwardRef)(((props,ref)=>{const{items,wrapItems=!0,...restProps}=props;return(0,jsx_runtime.jsx)(Flex.Z,{as:StyledMetaList,container:{colGap:.5,alignItems:"center",wrap:wrapItems?"wrap":"nowrap"},wrapItems,ref,...restProps,children:items.flatMap(((item,i,arr)=>item?[(0,jsx_runtime.jsx)(Text.Z,{as:StyledMetaListItem,variant:"secondary",wrapItems,children:item},`${i+0}`)].concat(i!==arr.length-1?[(0,jsx_runtime.jsx)(Text.Z,{as:StyledMetaListItem,role:"separator",variant:"secondary",children:"•"},`${i+0}-sep`)]:[]):[]))})}));var Grid=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Grid/Grid.js"),Ring=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Progress/Ring.js");const StyledVisual=styled_components_browser_esm.ZP.div`
  > ${Ring.Y}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;StyledVisual.defaultProps=theme.ns;const StyledPrimary=(0,styled_components_browser_esm.ZP)(Grid.Z)((({theme,isString,overflowStrategy})=>styled_components_browser_esm.iv`
    ${"ellipsis"===overflowStrategy?styled_components_browser_esm.iv`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:styled_components_browser_esm.iv`
          word-break: break-word;
        `}

    ${isString&&styled_components_browser_esm.iv`
      font-weight: ${theme.base["font-weight"]["semi-bold"]};
    `}
  `));StyledPrimary.defaultProps=theme.ns;const StyledSecondary=(0,styled_components_browser_esm.ZP)(Grid.Z)((({overflowStrategy})=>styled_components_browser_esm.iv`
    ${"ellipsis"===overflowStrategy?styled_components_browser_esm.iv`
          overflow: hidden;
          text-overflow: ellipsis;
        `:styled_components_browser_esm.iv`
          word-break: break-word;
        `}
  `)),StyledSummaryItemActions=styled_components_browser_esm.ZP.div`
  white-space: nowrap;
`,StyledSummaryItem=styled_components_browser_esm.ZP.div``,getColumns=({visual,actions})=>`${visual?"auto ":""}minmax(0, 1fr)${actions?" auto":""}`,getAreas=({secondary,visual,actions})=>`"${visual?"visual ":""}primary${actions?" actions":""}"${secondary?`\n"${visual?"visual ":""}secondary${actions?" actions":""}"`:""}`,SummaryItem_SummaryItem=(0,react.forwardRef)((({visual,primary,secondary,actions,container,overflowStrategy="wrap",as,...restProps},ref)=>(0,jsx_runtime.jsxs)(Grid.Z,{...restProps,ref,container:{cols:getColumns({visual,actions}),colGap:2,areas:getAreas({secondary,visual,actions}),...container},as:StyledSummaryItem,forwardedAs:as,children:[visual&&(0,jsx_runtime.jsx)(Grid.Z,{as:StyledVisual,item:{area:"visual",alignSelf:"center"},children:visual}),(0,jsx_runtime.jsx)(StyledPrimary,{item:{area:"primary",alignSelf:secondary?"end":"center"},isString:"string"==typeof primary,overflowStrategy,children:primary}),secondary&&(0,jsx_runtime.jsx)(StyledSecondary,{item:{area:"secondary",alignSelf:"start"},overflowStrategy,children:secondary}),actions&&(0,jsx_runtime.jsx)(Grid.Z,{as:StyledSummaryItemActions,item:{area:"actions",alignSelf:"center"},children:actions})]})));var caret_left_icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/caret-left.icon.js"),caret_right_icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/caret-right.icon.js"),check_icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/check.icon.js"),styles_utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/styles/utils.js");const StyledCount=styled_components_browser_esm.ZP.span((props=>{const{foreground,background}="default"===props.variant?props.theme.components.badges.count.base:props.theme.components.badges.count[props.variant],invertedBackground=(0,utils.Y3)((()=>(0,polished_esm.DZ)(.5,(0,polished_esm.CD)(.2,background,"#ffffff")))),displayBackground="inverted"===props.variant?invertedBackground:background,borderRadius=props.theme.base["border-radius"],{spacing}=props.theme.base,fontSize=(0,styles_utils.MX)(props.theme.base["font-size"],props.theme.base["font-scale"]);return styled_components_browser_esm.iv`
    background: ${displayBackground};
    border-radius: calc(1.125 * ${borderRadius});
    color: ${foreground};
    display: inline-block;
    font-size: ${fontSize.xxs};
    font-weight: bold;
    line-height: normal;
    text-align: center;
    ${props.children.length>1&&styled_components_browser_esm.iv`
      padding: 0 ${spacing};
    `}
    ${1===props.children.length&&styled_components_browser_esm.iv`
      width: 1.125rem;
    `}
  `}));StyledCount.defaultProps=theme.ns;const getLabel=val=>val<1e3?"":1e3<=val&&val<1e6?"K":1e6<=val&&val<1e9?"M":1e9<=val&&val<1e12?"B":1e12<=val&&val<1e15?"T":"",formatValue=val=>{const absVal=Math.abs(val);return absVal<1e3?`${val}`:`${val<0?"-":""}${(val=>{for(let magnitude=3;magnitude<15;magnitude+=3){if(val<10**(magnitude+1))return`${`${val}`.slice(0,1)}.${`${val}`.slice(1,2)}${getLabel(val)}`;if(val<10**(magnitude+2))return`${`${val}`.slice(0,2)}${getLabel(val)}`;if(val<10**(magnitude+3))return`${`${val}`.slice(0,3)}${getLabel(val)}`}return"999T+"})(absVal)}`},Badges_Count=(0,react.forwardRef)(((props,ref)=>{const{variant="default",children,...restProps}=props;return Number.isInteger(children)?(0,jsx_runtime.jsx)(StyledCount,{variant,...restProps,ref,children:formatValue(children)}):null}));var BareButton=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Button/BareButton.js"),useElement=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useElement.js"),Tooltip=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Tooltip/Tooltip.js");const StyledMark=styled_components_browser_esm.ZP.mark((({theme})=>styled_components_browser_esm.iv`
    color: ${theme.base.colors.black};
    background-color: ${theme.components.mark["background-color"]};
    font-weight: ${theme.components.mark["font-weight"]};
  `));StyledMark.defaultProps=theme.ns;const Mark_Mark=props=>(0,jsx_runtime.jsx)(StyledMark,{...props}),Menu_helpers={isItem:item=>(0,utils.m2)(item,"primary"),getItem(items,id){let found;return items.some((item=>this.isItem(item)&&item.id===id?(found=item,!0):!!item.items&&(found=this.getItem(item.items,id),!!found))),found},getPath(items,id){let path=[];return items.some((item=>{if(item.id===id)return path=[item],!0;if(item.items){const innerPath=this.getPath(item.items,id);return innerPath.length&&(path=innerPath.concat(item)),!!path.length}return!1})),path},setItem(items,id,newItem){return items.map((item=>item.id===id?{...newItem}:item.items?{...item,items:this.setItem(item.items,id,newItem)}:item))},mapItem(items,id,fn){return items.map(((item,index,array)=>{let newItem=item;return item.items&&(newItem={...newItem,items:this.mapItem(item.items,id,fn)}),this.isItem(newItem)&&item.id===id&&(newItem=fn(newItem,index,array)),newItem}))},mapTree(items,fn){return items.map(((item,index,array)=>{let newItem=item;return item.items&&(newItem={...newItem,items:this.mapTree(item.items,fn)}),this.isItem(newItem)?fn(newItem,index,array):newItem}))},flatten(items,ancestors=[],options={parentFirst:!1}){let allItems=[],leafItems=[];return items.forEach((item=>{if(this.isItem(item)&&allItems.push(ancestors.length>0?{...item,ancestors}:item),item.items){const children=this.flatten(item.items,[...ancestors,item],options);options.parentFirst?leafItems=[...leafItems,...children]:allItems=[...allItems,...children]}})),options.parentFirst?[...allItems,...leafItems]:allItems},toggleSelected(items,id,mode,bool){return this.mapTree(items,(item=>{if(this.isItem(item)){if(item.id===id)return{...item,selected:void 0!==bool?bool:!item.selected};if("single-select"===mode)return{...item,selected:!1}}return item}))},selectItem(items,id,mode){return this.toggleSelected(items,id,mode,!0)},deselectItem(items,id,mode){return this.toggleSelected(items,id,mode,!1)},getSelected(items){return items.reduce(((selections,item)=>(this.isItem(item)&&item.selected&&(selections=[...selections,item]),item.items&&(selections=[...selections,...this.getSelected(item.items)]),selections)),[])},prependTo(items,newItems,id){return id?this.mapItem(items,id,(item=>({...item,items:[...newItems,...item.items??[]]}))):[...newItems,...items]},appendTo(items,newItems,id){return id?this.mapItem(items,id,(item=>({...item,items:[...item.items??[],...newItems]}))):[...items,...newItems]},getNextItem(items,itemId){if(!itemId)return items[0];let nextItem;return this.mapItem(items,itemId,((item,index,list)=>(nextItem=list[index+1],item))),nextItem},getPrevItem(items,itemId){if(!itemId)return items[0];let prevItem;return this.mapItem(items,itemId,((item,index,list)=>(prevItem=list[index-1],item))),prevItem},getParentItem(items,itemId){if(!itemId)return;const[,parentItem]=this.getPath(items,itemId);return parentItem}},StyledExpandButton=(0,styled_components_browser_esm.ZP)(Button.Z)`
  align-self: center;
`,StyledItemLabel=styled_components_browser_esm.ZP.label((({theme})=>{const hoverCheckColor=(0,utils.Y3)((()=>(0,polished_esm.m4)(theme.components["radio-check"][":checked"]["background-color"],theme.base.transparency["transparent-5"]))),checkedBackground=theme.components["radio-check"][":checked"]["background-color"],checkedForeground=(0,utils.Y3)((()=>(0,polished_esm.XV)(checkedBackground)));return styled_components_browser_esm.iv`
    padding: calc(0.5 * ${theme.base.spacing}) ${theme.base.spacing};
    cursor: pointer;

    &:hover {
      & > input[type='radio']:not(:checked) + ${Icon.xL} {
        color: ${hoverCheckColor};
      }

      & > input[type='checkbox'] + ${Icon.xL} {
        border-color: ${theme.components["form-control"][":hover"]["border-color"]};
      }
    }

    > ${Grid.H} {
      flex-grow: 1;
    }

    > input {
      ${polished_esm.G0}

      & + ${Icon.xL} {
        margin-inline-start: 0;
        flex-shrink: 0;
      }

      &[type='radio'] + ${Icon.xL} {
        color: transparent;
      }

      &[type='radio']:checked + ${Icon.xL} {
        color: ${checkedBackground};
      }

      &[type='checkbox'] + ${Icon.xL} {
        border: 0.0625rem solid ${theme.components["radio-check"]["border-color"]};
        border-radius: min(
          calc(${theme.base["border-radius"]} * ${theme.components.checkbox["border-radius"]}),
          0.25rem
        );
        color: transparent;
        background-color: ${theme.components["radio-check"]["background-color"]};
      }

      &[type='checkbox']:checked + ${Icon.xL} {
        background-color: ${checkedBackground};
        border-color: ${theme.components["radio-check"][":checked"]["border-color"]};
        color: ${checkedForeground};
      }
    }
  `}));StyledItemLabel.defaultProps=theme.ns;const StyledMenuItem=styled_components_browser_esm.ZP.li((({theme:{base,components},isParentItem})=>{const activeColor=(0,utils.Y3)((()=>(0,polished_esm.CD)(.85,base.palette["primary-background"],base.palette.interactive))),hoverColor=(0,utils.Y3)((()=>(0,polished_esm.CD)(.95,base.palette["primary-background"],base.palette.interactive)));return styled_components_browser_esm.iv`
      min-height: ${base["hit-area"]["mouse-min"]};

      @media (pointer: coarse) {
        min-height: ${base["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${activeColor};
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${hoverColor};
      }

      > button:first-child,
      > a:first-child {
        display: block;
        width: 100%;
        padding: calc(0.5 * ${base.spacing}) ${base.spacing};
        text-align: start;
        text-decoration: none;
        color: inherit;
        ${isParentItem&&styled_components_browser_esm.iv`
          padding-inline-start: calc(1.125rem + 2 * ${base.spacing});
        `}
      }

      &[aria-disabled='true'] {
        label,
        ${BareButton.g} {
          background-color: ${components["form-control"][":disabled"]["background-color"]};
          opacity: ${base["disabled-opacity"]};
        }
      }
    `}));StyledMenuItem.defaultProps=theme.ns;const StyledAncestors=styled_components_browser_esm.ZP.div`
  ${Icon.xL} {
    width: 1em;
    height: 1em;
  }

  & > ${Text.q} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,StyledVisibilityHidden=styled_components_browser_esm.ZP.p`
  ${polished_esm.G0}
`,StyledSeparator=styled_components_browser_esm.ZP.li((({theme})=>styled_components_browser_esm.iv`
    height: 0.0625rem;
    background-color: ${theme.base.palette["border-line"]};
    margin: ${theme.base.spacing} 0;
  `));StyledSeparator.defaultProps=theme.ns;const StyledMenuGroupList=styled_components_browser_esm.ZP.ul((({theme})=>styled_components_browser_esm.iv`
    ${StyledMenuItem} button {
      padding-inline-start: calc(1.5 * ${theme.base.spacing});
    }
  `));StyledMenuGroupList.defaultProps=theme.ns;const StyledMenuGroupHeader=styled_components_browser_esm.ZP.div((({theme})=>styled_components_browser_esm.iv`
    min-height: ${theme.base["hit-area"]["mouse-min"]};
    font-weight: ${theme.base["font-weight"]["semi-bold"]};
    background-color: ${theme.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${theme.base["hit-area"]["finger-min"]};
    }
  `));StyledMenuGroupHeader.defaultProps=theme.ns;const StyledMenuListHeader=styled_components_browser_esm.ZP.legend((({theme:{base}})=>{const hoverColor=(0,utils.Y3)((()=>(0,polished_esm.CD)(.95,base.palette["primary-background"],base.palette.interactive))),activeColor=(0,utils.Y3)((()=>(0,polished_esm.CD)(.85,base.palette["primary-background"],base.palette.interactive)));return styled_components_browser_esm.iv`
    width: 100%;
    background-color: ${base.palette["primary-background"]};

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:focus-within {
      box-shadow: inset ${base.shadow.focus};
      background-color: ${activeColor};
    }

    &:hover:not([aria-disabled='true']):not([data-current='true']) {
      background-color: ${hoverColor};
    }

    & > ${BareButton.g}, & > button {
      color: ${base.palette["foreground-color"]};
      width: 100%;
      padding: calc(0.5 * ${base.spacing}) ${base.spacing};
      text-align: start;
      border-radius: inherit;

      > ${Grid.H} {
        grid-column-gap: ${base.spacing};
      }

      ${Icon.xL} {
        /* Fixes vertical align issue increasing box size beyond square */
        display: block;
      }
    }
  `}));StyledMenuListHeader.defaultProps=theme.ns;const StyledMenuList=styled_components_browser_esm.ZP.ul((({theme})=>styled_components_browser_esm.iv`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${StyledEmptyState} {
      padding: ${theme.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${StyledMenuGroupHeader} {
      margin-block-start: ${theme.base.spacing};
    }
  `));StyledMenuList.defaultProps=theme.ns;const StyledMenuListContainer=styled_components_browser_esm.ZP.fieldset((({theme})=>styled_components_browser_esm.iv`
    background-color: ${theme.base.palette["primary-background"]};
    max-height: ${"50vh"};
    border: 0;
    border-radius: inherit;
  `));StyledMenuListContainer.defaultProps=theme.ns;const StyledFlyoutMenuListContainer=(0,styled_components_browser_esm.ZP)(StyledMenuListContainer)`
  min-width: 10rem;
`,StyledLoadingItem=styled_components_browser_esm.ZP.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,StyledMenuListWrapper=styled_components_browser_esm.ZP.div((({theme})=>styled_components_browser_esm.iv`
    position: relative;
    overflow: hidden;
    transition: height ${theme.base.animation.speed} ${theme.base.animation.timing.ease};
    max-height: ${"50vh"};

    & > fieldset:first-child {
      position: relative;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  `));StyledMenuListWrapper.defaultProps=theme.ns;const StyledMenu=styled_components_browser_esm.ZP.div((({theme})=>{const borderStyle=`0.0625rem solid ${theme.base.palette["border-line"]}`,activeColor=(0,utils.Y3)((()=>(0,polished_esm.CD)(.85,theme.base.palette["primary-background"],theme.base.palette.interactive)));return styled_components_browser_esm.iv`
    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &[data-active-scope='true'] [data-current='true'] {
      background-color: ${activeColor};
    }

    ${StyledVisuallyHiddenText}:first-child {
      + ${StyledMenuListWrapper}, + header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    > header,
    > footer {
      padding: ${theme.base.spacing};
    }

    > header {
      border-bottom: ${borderStyle};
    }

    > footer {
      border-top: ${borderStyle};
    }
  `}));StyledMenu.defaultProps=theme.ns,(0,Icon.q5)(caret_left_icon,caret_right_icon,check_icon);const AncestorPath=({ancestors=[]})=>{const truncatedPath=ancestors.length>2,pathParts=truncatedPath?[ancestors[0],ancestors[ancestors.length-1]]:ancestors,{end}=hooks_useDirection();return(0,jsx_runtime.jsx)(Flex.Z,{container:{gap:.5,alignItems:"center"},as:StyledAncestors,title:ancestors.map((a=>Menu_helpers.isItem(a)?a.primary:a.label)).join(" > "),children:pathParts.map(((ancestor,i,arr)=>{const label=Menu_helpers.isItem(ancestor)?ancestor.primary:ancestor.label;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(Text.Z,{variant:"secondary",children:label}),i<arr.length-1&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Text.Z,{variant:"secondary",children:(0,jsx_runtime.jsx)(Icon.ZP,{name:`caret-${end}`})}),truncatedPath&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Text.Z,{variant:"secondary",children:"…"}),(0,jsx_runtime.jsx)(Text.Z,{variant:"secondary",children:(0,jsx_runtime.jsx)(Icon.ZP,{name:`caret-${end}`})})]})]})]},label)}))})},Menu_MenuItem=({id,primary,secondary,ancestors,visual,count,items,selected,partial,href,tooltip,onClick,onExpand,disabled,role="menuitem",...restProps})=>{const t=(0,useI18n.Z)(),{mode,onItemClick,accent,radioName,variant:menuVariant,setFocusDescendant,getScopedItemId,arrowNavigationUnsupported}=(0,react.useContext)(Menu_context),previouslySelected=hooks_usePrevious(selected),selectionMode="single-select"===mode||"multi-select"===mode,isParentItem=(0,react.useMemo)((()=>selectionMode&&items),[selectionMode,items]),selectableParent=isParentItem&&"boolean"==typeof selected,inputRef=(0,react.useRef)(null),itemId=(0,react.useMemo)((()=>getScopedItemId(id)),[id,getScopedItemId]),{end}=hooks_useDirection(),clickHandler=(0,react.useCallback)((e=>{if(0!==e.detail){const target=e.target,focusAtEl=target.getAttribute("role")===role?target:target.closest(`li[role="${role}"]`);focusAtEl&&setFocusDescendant(focusAtEl)}onClick?.(id,e),onItemClick?.(id,e)}),[onClick,onItemClick,id]),expandHandler=(0,react.useCallback)((e=>{onExpand?.(id,e)}),[onExpand,id]),navigationInteractionId=`${id}-description`,secondaryId=`${id}-secondary`;let accentedPrimary;if(accent&&!items){const accentRegex="function"==typeof accent?accent(primary):accent;accentedPrimary=(0,utils.Ae)(primary,accentRegex,(str=>(0,jsx_runtime.jsx)(Mark_Mark,{children:str})))}const secondaryContent=ancestors?(0,jsx_runtime.jsx)(AncestorPath,{ancestors}):secondary&&(0,jsx_runtime.jsx)(MetaList_MetaList,{items:secondary,id:secondaryId,wrapItems:!1}),[summaryItemRef,setSummaryItemRef]=(0,useElement.Z)(),summaryItem=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SummaryItem_SummaryItem,{ref:setSummaryItemRef,primary:accentedPrimary||(items?primary:(0,jsx_runtime.jsx)(Text.Z,{children:primary})),secondary:secondaryContent,visual,actions:items&&!selectableParent||count?(0,jsx_runtime.jsxs)(Flex.Z,{container:{gap:1},children:[(0,jsx_runtime.jsx)(Badges_Count,{children:count??null}),items&&!selectableParent&&(0,jsx_runtime.jsx)(Icon.ZP,{name:`caret-${end}`})]}):void 0,container:{colGap:1}}),tooltip&&(0,jsx_runtime.jsx)(Tooltip.Z,{target:summaryItemRef,hideDelay:"none",showDelay:"none",portal:!0,children:tooltip})]});let InteractiveWrap;href?InteractiveWrap=href?"a":BareButton.Z:("action"===mode||items)&&(InteractiveWrap=BareButton.Z);const itemChild=InteractiveWrap?(0,jsx_runtime.jsx)(InteractiveWrap,{onMouseDown:e=>{e.preventDefault()},onClick:items?expandHandler:clickHandler,onMouseEnter:"flyout"===menuVariant?expandHandler:void 0,href,tabIndex:"-1",disabled,children:summaryItem}):summaryItem;(0,react.useEffect)((()=>{inputRef.current&&(inputRef.current.indeterminate=!!partial)}),[partial]);const labelRef=(0,react.useRef)(null),itemLabel=(0,react.useMemo)((()=>{const label=selected?t("checked_noun",[primary]):primary;return isParentItem?t("expand_noun",[label]):label}),[selected,primary,isParentItem]),describedBy=(0,react.useMemo)((()=>{const hasSecondary=!!secondary;let idString=hasSecondary?secondaryId:void 0;return!!items&&(idString=hasSecondary?idString.concat(`, ${navigationInteractionId}`):navigationInteractionId),idString}),[items,secondary,navigationInteractionId,secondaryId]),navigationInstructions=(0,react.useMemo)((()=>t(arrowNavigationUnsupported?"menu_item_shift_space_expand_collapse":"menu_item_expand_arrow")),[]),interactionNotification=(0,react.useMemo)((()=>void 0===previouslySelected?"":`${t(selected?"selected_noun":"deselected_noun",[primary])}`),[selected]);return(0,jsx_runtime.jsxs)(Flex.Z,{...restProps,container:{alignItems:"stretch",justify:"between"},id:itemId,as:StyledMenuItem,"aria-label":itemLabel,"aria-describedby":describedBy,isParentItem,role,"aria-disabled":disabled,"data-expand":!!items,tabIndex:"-1",children:[selectionMode&&"boolean"==typeof selected?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Flex.Z,{ref:labelRef,as:StyledItemLabel,container:{alignItems:"center",gap:1},item:{grow:1},onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(labelRef.current?.control!==e.target){e.preventDefault();const event=new window.MouseEvent(e.nativeEvent.type,e.nativeEvent);labelRef.current?.control?.dispatchEvent(event)}},children:[(0,jsx_runtime.jsx)("input",{ref:inputRef,type:"single-select"===mode?"radio":"checkbox",name:"single-select"===mode?radioName:void 0,"aria-label":primary,checked:!!selected,disabled,onClick:clickHandler,onKeyDown:e=>{"single-select"===mode&&"Enter"===e.key&&e.currentTarget.click()},onChange:()=>{},onMouseDown:e=>{e.preventDefault()},tabIndex:-1}),("single-select"===mode||"multi-select"===mode)&&(0,jsx_runtime.jsx)(Icon.ZP,{name:"check"}),summaryItem]}),isParentItem&&(0,jsx_runtime.jsx)(StyledExpandButton,{icon:!0,variant:"simple",onClick:expandHandler,tabIndex:"-1",children:(0,jsx_runtime.jsx)(Icon.ZP,{name:`caret-${end}`})})]}):itemChild,!!items&&(0,jsx_runtime.jsx)(StyledVisibilityHidden,{id:navigationInteractionId,children:navigationInstructions}),(0,jsx_runtime.jsx)(StyledVisibilityHidden,{role:"alert",children:interactionNotification})]})},resizeRootEl=(el,rootEl,itemCount,scrollAt)=>{const hasLegend=!!el.firstElementChild?.matches("legend"),lastVisibleLI=el.querySelectorAll([':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'].join(", "))[Math.max(Math.min(scrollAt-(hasLegend?2:1),itemCount-1),0)];let menuRootElHeight;if(lastVisibleLI){const containerTop=el.getBoundingClientRect().top,lastVisibleLIRect=lastVisibleLI.getBoundingClientRect(),ulScrollTop=el.querySelector(":scope > ul")?.scrollTop??0;let btm=lastVisibleLIRect.bottom;itemCount>scrollAt&&(btm=(lastVisibleLIRect.top+lastVisibleLIRect.bottom)/2),menuRootElHeight=btm-containerTop+ulScrollTop}requestAnimationFrame((()=>{rootEl.style.height=menuRootElHeight?`${menuRootElHeight}px`:""}))},Menu_MenuGroup=({id,label,items,itemRole})=>{const{componentId}=(0,react.useContext)(Menu_context),groupId=`${componentId}-${id}`;return(0,jsx_runtime.jsxs)("li",{role:"presentation",children:[(0,jsx_runtime.jsx)(Flex.Z,{container:{alignItems:"center",pad:[.5,1]},as:StyledMenuGroupHeader,id:groupId,children:label}),(0,jsx_runtime.jsx)(StyledMenuGroupList,{role:"group","aria-labelledby":groupId,children:items.length>0&&items.map((item=>(0,react.createElement)(Menu_MenuItem,{...item,key:item.id,role:itemRole??"menuitem"})))})]})},FlyoutMenuList=(0,react.forwardRef)((({items,parent,menuRole},ref)=>{const selfRef=(0,useConsolidatedRef.Z)(ref),ulRef=(0,react.useRef)(null),menuListWrapperRef=(0,react.useRef)(null),returnFocusRef=(0,react.useRef)(null),[expandedItem,setExpandedItem]=(0,react.useState)(),{componentId,loadMore,loading,scrollAt,emptyText,onItemExpand,pushFlyoutId,flyOutActiveIdStack,updateActiveDescendants,updateParentDescendantStack}=(0,react.useContext)(Menu_context);hooks_useItemIntersection(ulRef,items.length-1,(()=>{loadMore?.(parent?.item?.id)}),":scope > li"),(0,useAfterInitialEffect.Z)((()=>{expandedItem&&setExpandedItem(items.find((item=>item.id===expandedItem.id)))}),[expandedItem,items]),(0,react.useEffect)((()=>{items.some((item=>flyOutActiveIdStack.includes(item.id)))||(returnFocusRef.current=null,setExpandedItem(void 0))}),[flyOutActiveIdStack]);const listContent=(0,react.useMemo)((()=>items.length?items.map((item=>Menu_helpers.isItem(item)?(0,react.createElement)(Menu_MenuItem,{...item,key:item.id,"aria-haspopup":!!item.items,"aria-expanded":item.id===expandedItem?.id,role:"listbox"===menuRole?"option":"menuitem",onExpand:(id,e)=>{item.items?(returnFocusRef.current=e.currentTarget,setExpandedItem(item),item?.onExpand?.(id,e),onItemExpand?.(id,e),pushFlyoutId(item.id||componentId),updateActiveDescendants(),updateParentDescendantStack&&updateParentDescendantStack(returnFocusRef.current.closest("li"))):(returnFocusRef.current=null,setExpandedItem(void 0))}}):(0,react.createElement)(Menu_MenuGroup,{...item,key:item.id,itemRole:"listbox"===menuRole?"option":"menuitem"}))):loading?null:(0,jsx_runtime.jsx)(EmptyState_EmptyState,{message:emptyText,forwardedAs:"li"})),[items,loading,emptyText,expandedItem,flyOutActiveIdStack]),list=(0,jsx_runtime.jsxs)(StyledMenuList,{ref:ulRef,role:menuRole,children:[listContent,loading&&!expandedItem&&(0,jsx_runtime.jsx)(StyledLoadingItem,{children:(0,jsx_runtime.jsx)(Progress.Z,{placement:"local"})})]});(0,react.useLayoutEffect)((()=>{setExpandedItem(void 0),selfRef.current&&(menuListWrapperRef.current=selfRef.current.parentElement,resizeRootEl(selfRef.current,selfRef.current,items.length,scrollAt))}),[items]);const handleMenuListScroll=(0,react.useCallback)((()=>{expandedItem&&setExpandedItem(void 0)}),[expandedItem]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledFlyoutMenuListContainer,{ref:selfRef,onScroll:handleMenuListScroll,"data-flyout-menu-parent-id":componentId,"data-flyout-menu-id":parent?.item.id||componentId,children:list}),expandedItem&&selfRef.current&&(0,jsx_runtime.jsx)(Popover.Z,{target:returnFocusRef.current,show:!0,strategy:"fixed",placement:"right-start",children:(0,jsx_runtime.jsx)(FlyoutMenuList,{items:expandedItem.items,parent:{el:selfRef.current,item:expandedItem,siblingItems:items,setExpandedItem,returnFocusRef},menuRole})})]})})),Menu_FlyoutMenuList=FlyoutMenuList,hooks_useOuterEvent=(eventName,nodes,handler)=>{const onEvent=(0,react.useCallback)((event=>{const path=event.composedPath(),target=path[0];if(!(target instanceof Node))return;let childIdx=0,parentIdx=1;for(;path[childIdx]!==document;){const child=path[childIdx],parent=path[parentIdx];if(!child||!parent)return;if(parent instanceof DocumentFragment||parent instanceof Document){if(!(child instanceof Node&&parent.contains(child)))return;childIdx=parentIdx}else if(child instanceof DocumentFragment){if(!(parent instanceof Element)||parent.shadowRoot!==child)return;childIdx=parentIdx}parentIdx+=1}nodes.every((n=>{const node=n instanceof Node?n:n?.current;return!node||node!==target&&!node.contains(target)}))&&handler(event)}),[...nodes,handler]);(0,react.useEffect)((()=>{const eventNames=Array.isArray(eventName)?eventName:[eventName];return eventNames.forEach((event=>document.addEventListener(event,onEvent))),()=>eventNames.forEach((event=>document.removeEventListener(event,onEvent)))}),[eventName,onEvent])},StyledDrawer=styled_components_browser_esm.ZP.div((props=>{const{state,shadow,position,placement,transitionSpeed,size,theme}=props;let dimension="horizontal",axis="X",anchor="top";"top"!==placement&&"bottom"!==placement||(dimension="vertical",axis="Y",anchor="left");const translate="open"===state||"opening"===state?0:"100%",speed=transitionSpeed||theme.base.animation.speed;return styled_components_browser_esm.iv`
    z-index: ${theme.base["z-index"].drawer};
    position: ${position};
    ${placement}: 0;
    ${anchor}: 0;
    height: ${"vertical"===dimension?size:"100%"};
    width: ${"horizontal"===dimension?size:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${speed}, 0.0001s);
    transition-timing-function: ${theme.base.animation.timing.ease};
    transform: ${"open"===state?"none":`translate${axis}(${"top"===placement||"left"===placement?"-":""}${translate})`};

    ${shadow&&styled_components_browser_esm.iv`
      box-shadow: ${theme.base.shadow.high};
    `}
  `}));StyledDrawer.defaultProps=theme.ns;const Drawer_Drawer=(0,react.forwardRef)(((props,ref)=>{const{open=!1,shadow=!1,position="absolute",children,placement="right",transitionSpeed,size="100%",onAfterOpen,onAfterClose,onBeforeOpen,onBeforeClose,onOuterClick,nullWhenClosed=!1,...restProps}=props,drawerRef=(0,useConsolidatedRef.Z)(ref),[state,setState]=(0,react.useState)(open?"open":"closed");let prevState=hooks_usePrevious(state);prevState||(prevState=state),hooks_useOuterEvent("mousedown",[drawerRef.current],(0,react.useCallback)((()=>{open&&onOuterClick?.()}),[open,onOuterClick])),(0,react.useEffect)((()=>{!open||"closed"!==state&&"closing"!==state?open||"open"!==state&&"opening"!==state?open&&"open"===state&&"open"!==prevState?onAfterOpen?.():open||"closed"!==state||"closed"===prevState||onAfterClose?.():(onBeforeClose?.(),setState("closing")):(onBeforeOpen?.(),(0,utils.nq)(drawerRef.current),setState("opening"))}),[open,state,prevState,onBeforeOpen,onBeforeClose,onAfterOpen,onAfterClose]);const onTransitionEnd=(0,react.useCallback)((e=>{e.target===drawerRef.current&&"transform"===e.propertyName&&setState(open?"open":"closed")}),[open]);return"closed"===state&&!open&&nullWhenClosed?null:(0,jsx_runtime.jsx)(StyledDrawer,{ref:drawerRef,position,shadow:shadow&&open,transitionSpeed,placement,size,open,state,onTransitionEnd,...restProps,children})}));(0,Icon.q5)(caret_left_icon,caret_right_icon);const Menu_MenuListHeader=({text,onClick})=>{const t=(0,useI18n.Z)(),{arrowNavigationUnsupported}=(0,react.useContext)(Menu_context),{start}=hooks_useDirection(),onKeyDown=(0,react.useCallback)((ev=>{"Enter"!==ev.key&&ev.key!==`Arrow${(0,utils.Tk)(start)}`||onClick()}),[onClick,start]);return(0,jsx_runtime.jsx)(Flex.Z,{container:{alignItems:"center"},as:StyledMenuListHeader,children:(0,jsx_runtime.jsx)(BareButton.Z,{onClick,onKeyDown,"data-collapse":"true","aria-expanded":"true","aria-label":`${t("collapse_noun",[text||""])} ${t(arrowNavigationUnsupported?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,tabIndex:-1,children:(0,jsx_runtime.jsx)(SummaryItem_SummaryItem,{visual:(0,jsx_runtime.jsx)(Icon.ZP,{name:`caret-${start}`}),primary:text})})})},setParentDisabled=(fieldset,bool)=>{fieldset.disabled=bool;const legendButton=fieldset.querySelector("legend button");legendButton&&(legendButton.disabled=bool)},countVisibleItems=menuItems=>menuItems.reduce(((acc,item)=>!Menu_helpers.isItem(item)&&item.items?acc+item.items.length+1:acc+1),0),MenuList=(0,react.forwardRef)((({items,parent,id,menuRole,...restProps},ref)=>{const menuListWrapperRef=(0,react.useRef)(null),selfRef=(0,useConsolidatedRef.Z)(ref),ulRef=(0,react.useRef)(null),returnFocusRef=(0,react.useRef)(null),[open,setOpen]=(0,react.useState)(!parent),[expandedItem,setExpandedItem]=(0,react.useState)(),{scrollAt,loadMore,loading,emptyText,currentItemId,onItemExpand,focusControl,updateActiveDescendants,setFocusReturnEl,onItemCollapse}=(0,react.useContext)(Menu_context),{end}=hooks_useDirection();hooks_useItemIntersection(ulRef,items.length-1,(()=>{loading||loadMore?.(parent?.item?.id)}),":scope > li"),(0,react.useLayoutEffect)((()=>{selfRef.current&&!expandedItem&&(menuListWrapperRef.current=selfRef.current.parentElement,resizeRootEl(selfRef.current,menuListWrapperRef.current,countVisibleItems(items),scrollAt))})),(0,react.useEffect)((()=>{parent&&setOpen(!0)}),[]),(0,useAfterInitialEffect.Z)((()=>{expandedItem&&setExpandedItem(items.find((item=>item.id===expandedItem.id)))}),[expandedItem,items]),(0,useAfterInitialEffect.Z)((()=>{if(currentItemId){const ancestor=items.find((item=>item.items?.length&&void 0!==Menu_helpers.getItem(item.items,currentItemId)));ancestor&&(setExpandedItem(ancestor),updateActiveDescendants({preventScroll:!0}))}}),[currentItemId,items,parent]);const onExpandCallback=(0,react.useCallback)(((itemId,e)=>{const item=Menu_helpers.getItem(items,itemId);returnFocusRef.current=e.currentTarget,setExpandedItem(item),item?.onExpand?.(itemId,e),onItemExpand?.(itemId,e),updateActiveDescendants({preventScroll:!0})}),[items]),listContent=(0,react.useMemo)((()=>items.length?items.map(((item,index)=>Menu_helpers.isItem(item)?(0,react.createElement)(Menu_MenuItem,{...item,key:item.id,role:"listbox"===menuRole?"option":"menuitem",onExpand:item.items?onExpandCallback:void 0}):(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(Menu_MenuGroup,{...item,itemRole:"listbox"===menuRole?"option":"menuitem"}),items[index+1]&&Menu_helpers.isItem(items[index+1])&&(0,jsx_runtime.jsx)(StyledSeparator,{role:"separator"})]},item.id))):loading?null:(0,jsx_runtime.jsx)(EmptyState_EmptyState,{message:emptyText,forwardedAs:"li"})),[items,loading,emptyText]),list=(0,jsx_runtime.jsxs)(StyledMenuList,{id:expandedItem?void 0:id,ref:ulRef,role:menuRole,...restProps,children:[parent&&(0,jsx_runtime.jsx)("li",{role:"presentation",children:(0,jsx_runtime.jsx)(Menu_MenuListHeader,{text:parent.item.primary,onClick:()=>{setOpen(!1)}})}),listContent,loading&&!expandedItem&&(0,jsx_runtime.jsx)(StyledLoadingItem,{children:(0,jsx_runtime.jsx)(Progress.Z,{placement:"local"})})]});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Drawer_Drawer,{"aria-hidden":!!expandedItem,as:StyledMenuListContainer,ref:selfRef,open,style:{opacity:expandedItem?0:1},disabled:!!expandedItem,placement:end,onBeforeOpen:()=>{parent&&(parent.el.style.opacity="0"),selfRef.current&&(selfRef.current.style.opacity="1")},onAfterOpen:()=>{parent&&setParentDisabled(parent.el,!0)},onBeforeClose:()=>{parent&&menuListWrapperRef.current&&(setParentDisabled(parent.el,!1),parent.el.style.opacity="1",resizeRootEl(parent.el,menuListWrapperRef.current,countVisibleItems(parent.siblingItems),scrollAt)),selfRef.current&&(selfRef.current.style.opacity="0")},onAfterClose:()=>{if(parent){focusControl?.focus();const expandBtn=parent.returnFocusRef.current;parent.setExpandedItem(void 0),expandBtn&&setFocusReturnEl(expandBtn?.closest("li")),onItemCollapse?.(parent.item.id),updateActiveDescendants()}},children:list}),expandedItem&&selfRef.current&&(0,jsx_runtime.jsx)(MenuList,{id,items:expandedItem.items,parent:{el:selfRef.current,item:expandedItem,siblingItems:items,setExpandedItem,returnFocusRef},menuRole})]})})),Menu_MenuList=MenuList,Menu_Menu=(0,react.forwardRef)(((props,ref)=>{const uid=(0,useUID.Z)(),{id=uid,items=[],mode="action",accent,scrollAt=7,emptyText,onItemClick,onItemActive,onItemExpand,loadMore,onItemCollapse,loading=!1,currentItemId,header,footer,variant="drill-down",focusControlEl,focusElOnClose=!0,arrowNavigationUnsupported,"aria-describedby":ariaDescribedBy,"aria-label":label,role="menu",listId,pauseDescendantEvaluation,...restProps}=props,t=(0,useI18n.Z)(),{end:endDirection,start:startDirection}=hooks_useDirection(),radioName=(0,useUID.Z)(),menuRef=(0,useConsolidatedRef.Z)(ref),previousItemCount=(0,react.useRef)(0),[activeDescendantUpdateId,setActiveDescendantUpdateId]=(0,react.useState)(0),[focusDescendant,setFocusDescendant]=(0,react.useState)(null),[flyOutActiveIdStack,setFlyoutActiveIdStack]=(0,react.useState)([id]),[focusReturnEl,setFocusReturnEl]=(0,react.useState)(),[preventInitialScroll,setPreventInitialScroll]=(0,react.useState)(!1),[flyoutFocusReturnStack,setFlyoutFocusReturnStack]=(0,react.useState)([]),activeFlyoutSelector=(0,react.useMemo)((()=>`fieldset[data-flyout-menu-id="${flyOutActiveIdStack[flyOutActiveIdStack.length-1]}"]`),[flyOutActiveIdStack]),focusControl=(0,react.useMemo)((()=>focusControlEl||menuRef.current),[focusControlEl,menuRef.current]),pushFlyoutId=(0,react.useCallback)((flyoutId=>{setFlyoutActiveIdStack([...flyOutActiveIdStack,flyoutId])}),[flyOutActiveIdStack]);(0,react.useEffect)((()=>{setFlyoutActiveIdStack([...flyOutActiveIdStack,id])}),[id]);const updateParentDescendantStack=(0,react.useCallback)((item=>{setFlyoutFocusReturnStack([...flyoutFocusReturnStack,item])}),[flyoutFocusReturnStack]),getScopedItemId=(0,react.useCallback)((itemId=>`${id}-item-${itemId}`),[id]),getUnscopedItemId=(0,react.useCallback)((itemId=>itemId.split(`${id}-item-`)[1]),[id]),updateActiveDescendants=(0,react.useCallback)((({preventScroll=!1}={})=>{setPreventInitialScroll(preventScroll),setActiveDescendantUpdateId(Math.random())}),[]),uadConfig=(0,react.useMemo)((()=>({focusEl:focusControl,scope:menuRef.current,scopeSelector:"drill-down"===variant?'fieldset[aria-hidden="false"]':activeFlyoutSelector,selector:`[role="${"menu"===role?"menuitem":"option"}"], legend button`,focusDescendantEl:focusDescendant,clearFocusDescendant:()=>{setFocusDescendant(null),focusElOnClose&&focusControl?.focus()},focusReturnEl,clearFocusReturn:()=>{setFocusReturnEl(null)},currentDescendantId:currentItemId?getScopedItemId(currentItemId):void 0,preventInitialScroll,clearPreventScroll:()=>{setPreventInitialScroll(!1)},pauseDescendantEvaluation})),[focusControl,menuRef.current,activeFlyoutSelector,focusReturnEl,focusDescendant,currentItemId,preventInitialScroll,pauseDescendantEvaluation]),{activeDescendant,descendants}=hooks_useActiveDescendant(uadConfig,[activeDescendantUpdateId]),previousActiveDescendant=hooks_usePrevious(activeDescendant);(({loading,descendants,previousActiveDescendant,activeDescendant,focusReturnEl,setFocusReturnEl,scrollEl})=>{(0,react.useEffect)((()=>{if(loading&&descendants&&descendants.length&&activeDescendant){const lastItem=[...descendants].pop();let timeoutId;return(lastItem?.id||void 0)===activeDescendant.id?(scrollEl&&(scrollEl.scrollTop=scrollEl.scrollHeight-scrollEl.offsetHeight),focusReturnEl?.id!==activeDescendant.id&&(timeoutId=setTimeout((()=>{setFocusReturnEl(lastItem)}),0))):focusReturnEl?.id!==activeDescendant.id&&(timeoutId=setTimeout((()=>{setFocusReturnEl(activeDescendant)}),0)),()=>clearTimeout(timeoutId)}}),[loading,descendants,previousActiveDescendant,activeDescendant,scrollEl,focusReturnEl])})({loading,descendants,previousActiveDescendant,activeDescendant,focusReturnEl,setFocusReturnEl,scrollEl:uadConfig.scope?.querySelector(uadConfig.scopeSelector)?.querySelector("ul")}),(0,react.useEffect)((()=>{const expandOrCollapse=(action=null)=>{if(activeDescendant){if("true"===activeDescendant.dataset.expand&&"collapse"!==action)return void activeDescendant.querySelector("button")?.click();if("expand"!==action)if("flyout"===variant&&flyOutActiveIdStack.length>1&&flyoutFocusReturnStack.length>0){setFlyoutActiveIdStack([...flyOutActiveIdStack].slice(0,-1));const parentDescendant=flyoutFocusReturnStack.pop();void 0!==parentDescendant&&setFocusReturnEl(parentDescendant),updateActiveDescendants()}else"true"===activeDescendant.dataset.collapse&&activeDescendant.click()}},additionalKeydown=e=>{switch(e.key){case`Arrow${(0,utils.Tk)(endDirection)}`:if(arrowNavigationUnsupported)break;expandOrCollapse("expand");break;case`Arrow${(0,utils.Tk)(startDirection)}`:if(arrowNavigationUnsupported)break;expandOrCollapse("collapse");break;case"Escape":if("flyout"===variant&&flyOutActiveIdStack.length>1&&flyoutFocusReturnStack.length>0){e.preventDefault(),e.stopPropagation(),setFlyoutActiveIdStack([...flyOutActiveIdStack].slice(0,-1));const parentDescendant=flyoutFocusReturnStack.pop();void 0!==parentDescendant&&setFocusReturnEl(parentDescendant),updateActiveDescendants()}}arrowNavigationUnsupported&&(" "===e.key||"Spacebar"===e.key)&&e.shiftKey&&(e.preventDefault(),expandOrCollapse())};return activeDescendant&&onItemActive?.(getUnscopedItemId(activeDescendant.id)),focusControl?.addEventListener("keydown",additionalKeydown),()=>focusControl?.removeEventListener("keydown",additionalKeydown)}),[focusControl,activeDescendant,flyOutActiveIdStack]),(0,react.useEffect)((()=>{const timeoutId=setTimeout((()=>{if(items.length!==previousItemCount.current)previousItemCount.current=items.length,updateActiveDescendants();else{const previousDescendantIds=descendants?.map((node=>node.id)),newDescendants=uadConfig.scope?.querySelector(uadConfig.scopeSelector)?.querySelectorAll(uadConfig.selector);if(!newDescendants)return void updateActiveDescendants();const scopedDescendants=Array.from(newDescendants);if(scopedDescendants?.length!==previousDescendantIds?.length)return void updateActiveDescendants();scopedDescendants.every(((node,index)=>node.id===previousDescendantIds[index]))||updateActiveDescendants()}}),0);return()=>clearTimeout(timeoutId)}),[items]);const contextValue=(0,react.useMemo)((()=>({componentId:id,mode,arrowNavigationUnsupported,onItemClick,onItemActive,onItemExpand,onItemCollapse,accent,scrollAt,emptyText,radioName,loadMore,loading,variant,focusControl,updateActiveDescendants,setFocusReturnEl,setFocusDescendant,getScopedItemId,pushFlyoutId,flyOutActiveIdStack,updateParentDescendantStack})),[id,mode,arrowNavigationUnsupported,onItemClick,onItemActive,onItemExpand,onItemCollapse,accent,scrollAt,emptyText,radioName,loadMore,loading,variant,focusControl,updateActiveDescendants,setFocusReturnEl,setFocusDescendant,getScopedItemId,pushFlyoutId,flyOutActiveIdStack,updateParentDescendantStack]);return(0,jsx_runtime.jsxs)(StyledMenu,{id,"aria-describedby":focusControlEl?void 0:`${id}-menuDescription`,...restProps,ref:menuRef,children:[!focusControlEl&&(0,jsx_runtime.jsx)("span",{id:`${id}-menuDescription`,hidden:!0,children:`${t("menu_selection_instructions")} `&&ariaDescribedBy||""}),label&&(0,jsx_runtime.jsx)(VisuallyHiddenText_VisuallyHiddenText,{id:`${id}-menuLabel`,children:label}),header&&(0,jsx_runtime.jsx)("header",{children:header}),(0,jsx_runtime.jsx)(StyledMenuListWrapper,{children:(0,jsx_runtime.jsx)(Menu_context.Provider,{value:contextValue,children:"drill-down"===variant?(0,jsx_runtime.jsx)(Menu_MenuList,{items,id:listId,menuRole:role,"aria-labelledby":label?`${id}-menuLabel`:void 0}):(0,jsx_runtime.jsx)(Menu_FlyoutMenuList,{items,menuRole:role})})}),footer&&(0,jsx_runtime.jsx)("footer",{children:footer})]})}));var arrow_micro_down_icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/arrow-micro-down.icon.js");(0,Icon.q5)(arrow_micro_down_icon);const StyledMenuButton=styled_components_browser_esm.ZP.button((({theme:{base:{spacing}}})=>styled_components_browser_esm.iv`
      gap: ${spacing};
      flex-shrink: 0;
      white-space: nowrap;

      & + ${Popover_styles.uv} + ${Button.S} {
        margin-inline-start: ${spacing};
      }
    `));StyledMenuButton.defaultProps=theme.ns;const StyledMenuButtonPopover=(0,styled_components_browser_esm.ZP)(Popover.Z)`
  min-width: 20ch;
`,MenuButton_MenuButton=(0,react.forwardRef)(((props,ref)=>{const uid=(0,useUID.Z)(),{id=uid,text,menu,popover,onClick,onKeyDown,icon,count,iconOnly=!1,...restProps}=props,[isOpen,setIsOpen]=(0,react.useState)(!1),buttonRef=(0,useConsolidatedRef.Z)(ref),popoverRef=(0,useConsolidatedRef.Z)(popover?.ref),menuRef=(0,useConsolidatedRef.Z)(menu?.ref);hooks_useFocusWithin([popoverRef,buttonRef],(0,react.useCallback)((isFocused=>{isFocused||setIsOpen(!1)}),[]));const{rtl}=hooks_useDirection();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Button.Z,{as:StyledMenuButton,...restProps,id,ref:buttonRef,"aria-expanded":isOpen,"aria-haspopup":"menu","aria-controls":`${id}-popover`,"aria-label":text,label:iconOnly&&!isOpen?text:void 0,onClick:e=>{const clickCount=e.detail;setIsOpen(!isOpen||!(clickCount>0||"multi-select"!==menu?.mode)),onClick?.(e)},onKeyDown:e=>{"Escape"===e.key&&setIsOpen(!1),onKeyDown?.(e)},icon:iconOnly,children:[icon&&(0,jsx_runtime.jsx)(Icon.ZP,{name:icon}),!iconOnly&&(0,jsx_runtime.jsxs)(Text.Z,{children:[text," ",void 0!==count&&(0,jsx_runtime.jsx)(Badges_Count,{children:count}),text&&(0,jsx_runtime.jsx)(Icon.ZP,{name:"arrow-micro-down"})]})]}),(0,jsx_runtime.jsx)(StyledMenuButtonPopover,{placement:rtl?"bottom-end":"bottom-start",id:`${id}-popover`,...popover,hideOnTargetHidden:!0,show:!!menu&&isOpen,target:buttonRef.current,ref:popoverRef,children:menu&&(0,jsx_runtime.jsx)(Menu_Menu,{...menu,ref:menuRef,items:menu.items,onItemClick:(itemId,e)=>{"multi-select"!==menu.mode&&e.detail>0&&setIsOpen(!1),menu.onItemClick?.(itemId,e)},focusControlEl:buttonRef.current||void 0})})]})})),Actions_Actions=(0,react.forwardRef)((({items,menuAt=2,iconOnly=!0,menuButtonProps},ref)=>{const t=(0,useI18n.Z)();return items&&0!==items.length?items.length>=menuAt?(0,jsx_runtime.jsx)(MenuButton_MenuButton,{ref,text:t("actions"),iconOnly:!0,icon:"more",variant:"simple",onClick:menuButtonProps?.onClick,onKeyDown:menuButtonProps?.onKeyDown,menu:{items:items.map((({text,...restProps})=>({primary:text,...restProps})))}}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map((({id,icon,text,onClick,...restProps})=>(0,jsx_runtime.jsx)(Button.Z,{ref,variant:icon&&iconOnly?"simple":void 0,onClick:event=>onClick?.(id,event),label:icon?text:void 0,icon:!!icon&&iconOnly,...restProps,children:icon&&iconOnly?(0,jsx_runtime.jsx)(Icon.ZP,{name:icon}):text},id)))}):null}));var Label=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Label/Label.js"),warn_solid_icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/warn-solid.icon.js"),flag_wave_solid_icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/flag-wave-solid.icon.js"),purify=__webpack_require__("./node_modules/dompurify/dist/purify.js"),purify_default=__webpack_require__.n(purify);const listStyles=styled_components_browser_esm.iv`
  ul,
  ol {
    padding-inline-start: 2.5rem;
  }

  li {
    margin: 0.5rem 0;
  }

  ul li {
    ul {
      margin-inline-start: 1rem;
      list-style-type: circle;
    }

    ul ul {
      margin-inline-start: 2rem;
      list-style-type: square;
    }

    ul ul ul {
      margin-inline-start: 3rem;
      list-style-type: disc;
    }
  }

  ol li {
    ol {
      margin-inline-start: 1rem;
      list-style-type: lower-alpha;
    }

    ol ol {
      margin-inline-start: 2rem;
      list-style-type: lower-roman;
    }

    ol ol ol {
      margin-inline-start: 3rem;
      list-style-type: decimal;
    }
  }
`,getHtmlStyles=theme=>{const{base:{"font-size":baseFontSize,"font-scale":baseFontScale,palette},components:{text}}=theme,fontSize=(0,styles_utils.MX)(baseFontSize,baseFontScale);return`\n    ${listStyles}\n    table {\n      ${(theme=>styled_components_browser_esm.iv`
  border-collapse: collapse;

  td {
    border: 0.0625rem solid ${theme.base.palette["border-line"]};
    min-width: 6.25rem;
  }

  tr:first-child {
    td:first-child {
      border-top-left-radius: 0.125rem;
    }

    td:last-child {
      border-top-right-radius: 0.125rem;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 0.125rem;
    }

    td:last-child {
      border-bottom-right-radius: 0.125rem;
    }
  }
`)(theme)}\n    }\n    img {\n      max-width: 100%;\n      height: auto;\n      border-radius: 0.25rem;\n    }\n    a {\n      color: ${palette.interactive};\n    }\n    pre {\n      white-space: break-spaces;\n    }\n    p {\n      min-height: ${fontSize[text.primary["font-size"]]};\n    }\n    h1 {\n      font-size: ${fontSize[text.h1["font-size"]]};\n      font-weight: ${text.h1["font-weight"]};\n      min-height: ${fontSize[text.h1["font-size"]]};\n    }\n    h2 {\n      font-size: ${fontSize[text.h2["font-size"]]};\n      font-weight: ${text.h2["font-weight"]};\n      min-height: ${fontSize[text.h2["font-size"]]};\n    }\n    h3 {\n      font-size: ${fontSize[text.h3["font-size"]]};\n      font-weight: ${text.h3["font-weight"]};\n      min-height: ${fontSize[text.h3["font-size"]]};\n    }\n    h4 {\n      font-size: ${fontSize[text.h4["font-size"]]};\n      font-weight: ${text.h4["font-weight"]};\n      min-height: ${fontSize[text.h4["font-size"]]};\n    }\n    h5 {\n      font-size: ${fontSize[text.h5["font-size"]]};\n      font-weight: ${text.h5["font-weight"]};\n      min-height: ${fontSize[text.h5["font-size"]]};\n    }\n    h6 {\n      font-size: ${fontSize[text.h6["font-size"]]};\n      font-weight: ${text.h6["font-weight"]};\n      min-height: ${fontSize[text.h6["font-size"]]};\n    }\n  `},StyledHTML=styled_components_browser_esm.ZP.div((({theme})=>styled_components_browser_esm.iv`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    ${getHtmlStyles(theme)}

    ${Popover_styles.uv} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${Popover_styles.uv} li {
      margin: 0;
    }
  `));StyledHTML.defaultProps=theme.ns;const targetBlankSet=new WeakSet;purify_default().addHook("beforeSanitizeAttributes",(node=>{(node instanceof HTMLElement||node instanceof SVGElement)&&(node.removeAttribute("class"),"A"===node.tagName&&node.hasAttribute("href")&&"_blank"===node.getAttribute("target")&&targetBlankSet.add(node))})),purify_default().addHook("afterSanitizeAttributes",(node=>{if("A"===node.tagName&&node.hasAttribute("href")){const href=node.getAttribute("href");let fullURL;try{fullURL=new URL(href,window.location.href)}catch(e){return}(0,utils._0)(window.location,fullURL)?targetBlankSet.has(node)&&(node.setAttribute("target","_blank"),targetBlankSet.delete(node)):(node.setAttribute("target","_blank"),node.setAttribute("rel","noopener"))}}));const HTML_HTML=(0,react.forwardRef)((({content,customTags,...restProps},ref)=>{const[mounted,setMounted]=(0,react.useState)(!1),sanitizedHtml=(0,react.useMemo)((()=>mounted?purify_default().sanitize(content,{CUSTOM_ELEMENT_HANDLING:{tagNameCheck:customTags?tagName=>customTags.includes(tagName):null}}):""),[content,customTags,mounted]);return(0,react.useEffect)((()=>{setMounted(!0)}),[]),(0,jsx_runtime.jsx)(StyledHTML,{...restProps,dangerouslySetInnerHTML:{__html:sanitizedHtml},ref})}));const hooks_useEvent=function useEvent(eventName,cb,{target=document,eventOptions,dependencies=[]}={}){(0,react.useEffect)((()=>{const[element]=(0,utils.WV)([target]);if(element)return element.addEventListener(eventName,cb,eventOptions),()=>{element.removeEventListener(eventName,cb,eventOptions)}}),[eventName,target,cb,eventOptions,...dependencies])},hooks_useEscape=(cb,target=document,dependencies=[])=>{const onKeydown=(0,react.useCallback)((e=>{"Escape"===e.key&&cb(e)}),[cb,...dependencies]);hooks_useEvent("keydown",onKeydown,{target})},hooks_useFocusTrap=(elementRef,attachToDocument=!0,dependencies=[])=>{const onKeydown=(0,react.useCallback)((e=>{if("Tab"===e.key){const focusables=(0,utils.sd)(elementRef),{0:firstFocusable,[focusables.length-1]:lastFocusable}=focusables,activeEl=(0,utils.vY)();e.shiftKey||activeEl!==elementRef.current&&activeEl!==lastFocusable?!e.shiftKey||activeEl!==elementRef.current&&activeEl!==firstFocusable||(lastFocusable?.focus(),e.preventDefault()):(firstFocusable?.focus(),e.preventDefault())}}),dependencies);hooks_useEvent("keydown",onKeydown,{target:attachToDocument?void 0:elementRef})};var Card=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Card/Card.js");const StyledCardFooter=styled_components_browser_esm.ZP.footer((({theme})=>styled_components_browser_esm.iv`
    ${Popover_styles.uv} &, &:not(${Card.r} ${Card.r} > &) {
      padding: calc(1.5 * ${theme.base.spacing}) calc(${theme.components.card.padding} * 2);
    }
  `));StyledCardFooter.defaultProps=theme.ns;const Card_CardFooter=props=>{const{children,justify,...restProps}=props;return(0,jsx_runtime.jsx)(Flex.Z,{as:StyledCardFooter,container:{wrap:"wrap",alignItems:"center",justify},...restProps,children})},StyledCardContent=styled_components_browser_esm.ZP.div((({theme})=>styled_components_browser_esm.iv`
    ${Popover_styles.uv} &, &:not(${Card.r} ${Card.r} > &) {
      position: relative;
      padding: calc(1.5 * ${theme.base.spacing}) calc(${theme.components.card.padding} * 2);

      & + &,
      & + ${StyledCardFooter} {
        padding-block-start: 0;
      }
    }
  `));StyledCardContent.defaultProps=theme.ns;const Card_CardContent=({children,container,...restProps})=>(0,jsx_runtime.jsx)(Flex.Z,{...restProps,container:{direction:"column",...container},as:StyledCardContent,children}),StyledCardHeader=styled_components_browser_esm.ZP.header((({theme,onClick})=>styled_components_browser_esm.iv`
    ${Popover_styles.uv} &, &:not(${Card.r} ${Card.r} > &) {
      padding: calc(1.5 * ${theme.base.spacing}) calc(${theme.components.card.padding} * 2);

      + ${StyledCardContent} {
        padding-block-start: 0;
      }

      &:hover {
        ${onClick?"cursor: pointer;":void 0}
      }
    }
  `));StyledCardHeader.defaultProps=theme.ns;const CardHeader=(0,react.forwardRef)((({children,actions,...restProps},ref)=>(0,jsx_runtime.jsx)(Flex.Z,{container:{alignItems:"center",justify:"between"},as:StyledCardHeader,...restProps,ref,children:actions?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Flex.Z,{container:{alignItems:"center"},item:{grow:1},children}),(0,jsx_runtime.jsx)("div",{children:actions})]}):children})));CardHeader.displayName="CardHeader";const Card_CardHeader=CardHeader,StyledDialog=styled_components_browser_esm.ZP.dialog((({theme:{base:{"content-width":contentWidth,palette:{"foreground-color":foregroundColor}}}})=>styled_components_browser_esm.iv`
      border: none;
      min-width: ${contentWidth.sm};
      max-width: ${contentWidth.lg};
      color: ${foregroundColor};
    `));StyledDialog.defaultProps=theme.ns;const StyledDialogTitle=(0,styled_components_browser_esm.ZP)(Text.Z)((({theme:{base:{shadow,"border-radius":borderRadius}}})=>styled_components_browser_esm.iv`
      position: relative;
      ::after {
        content: '';
        border-radius: ${borderRadius};
        position: absolute;
        inset: -0.25rem;
      }
      :focus-visible {
        outline: none;
        ::after {
          box-shadow: ${shadow.focus}, inset ${shadow["focus-solid"]};
        }
      }
    `));StyledDialogTitle.defaultProps=theme.ns;const Dialog_Dialog=(0,react.forwardRef)((({target,placement,heading,headingHidden=!1,onSubmit,onClose,onOpen,loading,children,...restProps},ref)=>{const t=(0,useI18n.Z)(),headingId=(0,useUID.Z)(),[popoverEl,setPopoverEl]=(0,useElement.Z)(),popoverRef=(0,useConsolidatedRef.Z)(ref,setPopoverEl),headingRef=(0,react.useRef)(null),[currentTarget,setCurrentTarget]=(0,react.useState)((()=>target)),[show,setShow]=(0,react.useState)(!1),skipChangeShow=(0,react.useRef)(!1),prevTarget=hooks_usePrevious(target);hooks_useEscape((()=>{show&&setShow(!1)}),void 0,[show,setShow]),hooks_useOuterEvent("mousedown",[target,popoverEl],(()=>{target&&popoverEl&&show&&(setShow(!1),onClose?.())})),hooks_useFocusTrap(popoverRef),(0,react.useEffect)((()=>{show||currentTarget?.focus()}),[show]),(0,react.useEffect)((()=>{if(show&&popoverEl)if(headingRef.current)headingRef.current.focus();else{(0,utils.sd)(popoverRef)[0]?.focus()}}),[show,popoverEl]),(0,react.useLayoutEffect)((()=>{const onTargetClick=e=>{setCurrentTarget((prev=>e.target?e.target:prev)),skipChangeShow.current?skipChangeShow.current=!1:setShow((prev=>!prev))};return target instanceof HTMLElement&&target.addEventListener("click",onTargetClick),()=>{target instanceof HTMLElement&&target.removeEventListener("click",onTargetClick)}}),[target]),(0,react.useEffect)((()=>{show?onOpen?.():onClose?.()}),[show]),(0,react.useEffect)((()=>{target!==prevTarget&&show&&(skipChangeShow.current=!0)}),[target,show]);const progress=loading?(0,jsx_runtime.jsx)(Progress.Z,{placement:"local"}):null;return(0,jsx_runtime.jsxs)(Popover.Z,{...restProps,as:StyledDialog,ref:popoverRef,target:currentTarget,placement,show,open:show,"aria-labelledby":headingId,children:[(0,jsx_runtime.jsx)(Card_CardHeader,{actions:onSubmit?void 0:(0,jsx_runtime.jsx)(Button.Z,{icon:!0,variant:"simple",onClick:()=>setShow(!1),"aria-label":t("close"),children:(0,jsx_runtime.jsx)(Icon.ZP,{name:"times"})}),children:headingHidden?(0,jsx_runtime.jsx)(VisuallyHiddenText_VisuallyHiddenText,{id:headingId,children:heading}):(0,jsx_runtime.jsx)(StyledDialogTitle,{variant:"h2",tabIndex:-1,ref:headingRef,onKeyDown:e=>{const focusables=(0,utils.sd)(popoverRef);e.shiftKey&&"Tab"===e.key&&(e.preventDefault(),focusables[focusables.length-1].focus())},id:headingId,children:heading})}),(0,jsx_runtime.jsxs)(Card_CardContent,{children:[children,progress]}),onSubmit&&(0,jsx_runtime.jsxs)(Card_CardFooter,{justify:"between",children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"secondary",onClick:()=>setShow(!1),children:t("cancel")}),(0,jsx_runtime.jsx)(Button.Z,{variant:"primary",onClick:()=>onSubmit({close:()=>setShow(!1)}),disabled:loading,children:t("submit")})]})]})}));var information_icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/information.icon.js");(0,Icon.q5)(information_icon);const StyledAdditionalInfo=styled_components_browser_esm.ZP.div((({theme})=>styled_components_browser_esm.iv`
    & > ${StyledDialog} {
      max-width: ${theme.base["content-width"].md};
    }
  `));StyledAdditionalInfo.defaultProps=theme.ns;const AdditionalInfo_AdditionalInfo=(0,react.forwardRef)((({heading,children,...restProps},ref)=>{const{target,events}=(()=>{const[target,setTarget]=(0,react.useState)(null),[loading,setLoading]=(0,react.useState)(!1),setTargetWithEvent=e=>{e.target instanceof HTMLElement&&setTarget(e.target)};return{target,loading,setLoading,events:{onMouseDown:e=>{setTargetWithEvent(e)},onKeyDown:e=>{"Enter"===e.key&&setTargetWithEvent(e)}},setTargetWithEvent}})(),t=(0,useI18n.Z)();return(0,jsx_runtime.jsxs)(StyledAdditionalInfo,{ref,...restProps,children:[(0,jsx_runtime.jsx)(Button.Z,{variant:"simple",label:t("additional_info"),compact:!0,icon:!0,...events,children:(0,jsx_runtime.jsx)(Icon.ZP,{name:"information"})}),(0,jsx_runtime.jsx)(Dialog_Dialog,{heading,target,children:"string"==typeof children?(0,jsx_runtime.jsx)(HTML_HTML,{content:children}):children})]})}));(0,Icon.q5)(warn_solid_icon,flag_wave_solid_icon,check_icon);const StyledStatusIcon=(0,styled_components_browser_esm.ZP)(Icon.ZP)((({theme,status})=>styled_components_browser_esm.iv`
      height: 1em;
      width: 1em;
      color: ${theme.components["form-field"][status]["status-color"]};
      vertical-align: baseline;
      margin-inline-end: 0.5ch;
    `));StyledStatusIcon.defaultProps=theme.ns;const StyledFormFieldInfo=styled_components_browser_esm.ZP.div((({status,theme:{base:{"font-size":fontSize,"font-scale":fontScale,spacing},components:{"form-field":formField}}})=>{const{xxs:infoFontSize}=(0,styles_utils.MX)(fontSize,fontScale);return styled_components_browser_esm.iv`
      max-width: max-content;
      margin-top: calc(0.25 * ${spacing});
      font-size: ${infoFontSize};
      word-break: break-word;
      ${status&&formField[status]&&styled_components_browser_esm.iv`
        color: ${formField[status]["status-color"]};
      `}
    `}));StyledFormFieldInfo.defaultProps=theme.ns;const StyledLabelRow=styled_components_browser_esm.ZP.div``,StyledFormField=styled_components_browser_esm.ZP.div((props=>{const{disabled,required,theme:{base:{palette:{urgent},"disabled-opacity":disabledOpacity,spacing}}}=props;return styled_components_browser_esm.iv`
    ${disabled&&styled_components_browser_esm.iv`
      opacity: ${disabledOpacity};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    > ${Label.a}, > ${StyledLabelRow} {
      margin-bottom: calc(0.25 * ${spacing});
    }

    > ${Label.a}, > ${StyledLabelRow} > ${Label.a} {
      &::after {
        display: ${required?"inline":"none"};
        content: '\\00a0*';
        vertical-align: top;
        color: ${urgent};
      }

      ${disabled&&styled_components_browser_esm.iv`
        cursor: not-allowed;
      `}
    }
  `}));StyledFormField.defaultProps=theme.ns;const StyledSuggestionButton=(0,styled_components_browser_esm.ZP)(Button.Z)((({theme:{base:{"font-size":fontSize,"font-scale":fontScale,"border-radius":baseRadius,spacing},components:{"form-control":{"border-radius":radius,"border-width":borderWidth},"form-field":formField}}})=>{const{xxs:buttonFontSize}=(0,styles_utils.MX)(fontSize,fontScale),backgroundColor=formField.pending["status-color"],hoverColors=(0,styles_utils.B)(backgroundColor),color=(0,utils.Y3)((()=>(0,polished_esm.XV)(backgroundColor))),borderColor=color?(0,polished_esm.m4)(color,.4):color;return styled_components_browser_esm.iv`
      background-color: ${backgroundColor};
      color: ${color};
      font-size: ${buttonFontSize};
      min-width: calc(3 * ${spacing});
      min-height: calc(3 * ${spacing});
      padding: 0 ${spacing};
      border-radius: 0;
      border: none;
      &:first-child {
        border-inline-end: ${borderWidth} solid ${borderColor};
        border-end-start-radius: calc(${baseRadius} * ${radius});
        margin-inline-start: calc(2 * ${spacing});
      }
      &:last-child {
        border-end-end-radius: calc(${baseRadius} * ${radius});
        margin-inline-start: 0;
      }
      &:hover {
        background-color: ${hoverColors.background};
      }

      @media (pointer: coarse) {
        min-height: 2rem;
      }
    `}));StyledSuggestionButton.defaultProps=theme.ns;const statusIconMap={error:"warn-solid",warning:"flag-wave-solid",success:"check"},FormField_FormField=(0,react.forwardRef)(((props,ref)=>{const uid=(0,useUID.Z)(),{children:controlElement,id=uid,as="div",label,labelAs="label",labelFor=id,labelId,labelHidden=!1,labelAfter=!1,info,status,isRadioCheck,charLimitDisplay,required=!1,disabled=!1,readOnly=!1,inline=!1,actions,container,additionalInfo,onResolveSuggestion,...restProps}=props,t=(0,useI18n.Z)(),labelAsLegend="legend"===labelAs,hasSuggestion="pending"===status&&!!onResolveSuggestion,consolidatedRef=(0,useConsolidatedRef.Z)(ref),showAdditionalInfo=!!additionalInfo&&!disabled&&!labelHidden,labelAndInfo=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Label.Z,{id:labelId,as:labelAs,htmlFor:"label"===labelAs?labelFor:void 0,labelHidden,onClick:e=>{readOnly&&e.preventDefault()},inline,children:[status&&"pending"!==status&&!labelHidden&&(0,jsx_runtime.jsx)(StyledStatusIcon,{status,name:statusIconMap[status]}),label]}),showAdditionalInfo&&(0,jsx_runtime.jsx)(AdditionalInfo_AdditionalInfo,{heading:additionalInfo.heading,children:additionalInfo.content})]}),labelRow=showAdditionalInfo&&!isRadioCheck?(0,jsx_runtime.jsx)(Flex.Z,{as:StyledLabelRow,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:labelAndInfo}):labelAndInfo,[liveRegionInfo,setLiveRegionInfo]=(0,react.useState)(null);(0,react.useEffect)((()=>{setLiveRegionInfo(info)}),[info]);let content=labelAsLegend?controlElement:(0,react.cloneElement)(controlElement,{"aria-describedby":info&&`${id}-info`});actions&&(content=(0,jsx_runtime.jsxs)(Flex.Z,{container:{alignItems:"center",gap:.5},children:[content,(0,jsx_runtime.jsx)(Actions_Actions,{items:actions,menuAt:3})]}));let infoContent=info?(0,jsx_runtime.jsx)(StyledFormFieldInfo,{status,role:"error"===status||"warning"===status?"alert":void 0,id:`${id}-info`,children:liveRegionInfo}):void 0;if(charLimitDisplay&&(infoContent=(0,jsx_runtime.jsxs)(Flex.Z,{container:{justify:infoContent?"between":"end",gap:1},children:[infoContent,(0,jsx_runtime.jsx)(Flex.Z,{item:{shrink:0},children:charLimitDisplay})]})),hasSuggestion){const focusables=(0,utils.sd)(consolidatedRef);infoContent=(0,jsx_runtime.jsxs)(Flex.Z,{container:{alignItems:"start",justify:"between"},children:[(0,jsx_runtime.jsxs)(StyledFormFieldInfo,{status,id:`${id}-info`,children:[t("suggestion_info"),(0,jsx_runtime.jsx)(VisuallyHiddenText_VisuallyHiddenText,{"aria-live":"polite",children:t("suggestion_assist")})]}),(0,jsx_runtime.jsxs)(Flex.Z,{container:{wrap:"nowrap"},children:[(0,jsx_runtime.jsx)(StyledSuggestionButton,{onClick:()=>{onResolveSuggestion(!1),focusables[0]?.focus()},"aria-label":t("reject_suggestion_button_a11y"),children:t("no")}),(0,jsx_runtime.jsx)(StyledSuggestionButton,{onClick:()=>{onResolveSuggestion(!0),focusables[0]?.focus()},"aria-label":t("accept_suggestion_button_a11y"),children:t("yes")})]})]})}return(0,jsx_runtime.jsxs)(Flex.Z,{...restProps,container:{direction:inline?"row":"column",alignItems:inline?"center":void 0,...container},as:StyledFormField,id:`${id}-field`,forwardedAs:as,required,disabled,readOnly,onKeyDown:hasSuggestion?e=>{if("Enter"===e.key){e.target.closest("button")||(e.preventDefault(),onResolveSuggestion?.(!0))}}:void 0,"aria-describedby":labelAsLegend&&info?`${id}-info`:void 0,ref:consolidatedRef,children:[(labelAsLegend||!labelAfter)&&labelRow,content,!labelAsLegend&&labelAfter&&labelRow,!readOnly&&infoContent]})})),StyledFormControl=styled_components_browser_esm.ZP.div((({theme:{base:{"border-radius":baseRadius,"font-size":baseFontSize,"font-scale":baseFontScale,animation:{speed,timing},palette},components:{"form-field":formField,"form-control":{"foreground-color":foreground,"background-color":background,"border-color":brd,"border-radius":radius,"border-width":borderWidth,":hover":{"border-color":hoverBorderColor},":focus":{"border-color":focusBorderColor,"box-shadow":shadow},":disabled":{"border-color":disabledBorderColor,"background-color":disabledBackgroundColor},":read-only":{"border-color":readOnlyBorderColor,"background-color":readOnlyBackgroundColor}}}},status,hasSuggestion})=>{const fontSize=(0,styles_utils.MX)(baseFontSize,baseFontScale),borderColor=status&&formField[status]?formField[status]["status-color"]:brd,backgroundColor=hasSuggestion&&status?(0,polished_esm.CD)(.1,formField[status]["status-color"],palette["primary-background"]):background;return styled_components_browser_esm.iv`
      color: ${foreground};
      background-color: ${backgroundColor};
      border-radius: calc(${baseRadius} * ${radius});
      border-color: ${borderColor};
      border-width: ${borderWidth};
      border-style: solid;
      transition: all ${timing.ease} ${speed};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${disabledBackgroundColor};
        border-color: ${disabledBorderColor};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${focusBorderColor};
        box-shadow: ${shadow};
        ${hasSuggestion&&styled_components_browser_esm.iv`
          background-color: ${background};
        `}
      }

      &:focus-within:not([disabled]) {
        ${hasSuggestion&&styled_components_browser_esm.iv`
          background-color: ${background};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!status&&styled_components_browser_esm.iv`
          border-color: ${hoverBorderColor};
        `}
        ${hasSuggestion&&styled_components_browser_esm.iv`
          background-color: ${background};
          box-shadow: 0 0 0 0.125rem ${(0,polished_esm.m4)(borderColor,.2)};
        `}
      }

      ${hasSuggestion&&styled_components_browser_esm.iv`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${readOnlyBackgroundColor};
        border-color: ${readOnlyBorderColor};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${fontSize.s}, 16px);
      }
    `}));StyledFormControl.defaultProps=theme.ns;(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(StyledFormControl,{ref,...props})));styled_components_browser_esm.ZP.div`
  gap: 1rem;

  ${StyledFormControl} {
    position: relative;
  }

  > :first-child {
    > ${StyledFormControl}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${StyledFormControl}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }

  > * {
    flex-grow: 1;
  }
`.defaultProps=theme.ns;const StyledInput=styled_components_browser_esm.ZP.input((({theme:{base,components}})=>styled_components_browser_esm.iv`
    width: 100%;
    height: ${components.input.height};
    min-height: ${base["hit-area"]["mouse-min"]};
    padding: 0 ${components.input.padding};
    appearance: none;
    -webkit-appearance: none;
    text-align: inherit;

    @media (pointer: coarse) {
      min-height: ${base["hit-area"]["finger-min"]};
    }
  `));StyledInput.defaultProps=theme.ns;const Input_styles=StyledInput,Input_Input=(0,react.forwardRef)(((props,ref)=>{const uid=(0,useUID.Z)(),{id=uid,value,defaultValue,required=!1,disabled=!1,readOnly=!1,label,additionalInfo,labelHidden,info,status,actions,onResolveSuggestion,...restProps}=props,controlProp={};(0,utils.m2)(props,"value")?controlProp.value=value??"":(0,utils.m2)(props,"defaultValue")&&(controlProp.defaultValue=defaultValue??"");const Comp=(0,jsx_runtime.jsx)(StyledFormControl,{...{ref,id,required,disabled,readOnly,status,hasSuggestion:!!onResolveSuggestion&&"pending"===status,...controlProp,...restProps,as:Input_styles}});return label?(0,jsx_runtime.jsx)(FormField_FormField,{additionalInfo,label,labelHidden,id,info,readOnly,status,required,disabled,actions,onResolveSuggestion,children:Comp}):Comp}))},"./node_modules/@pega/cosmos-react-core/lib/components/Label/Label.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,a:()=>StyledLabel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js"),_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/styles/utils.js");const StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.label((({theme,labelHidden})=>{const color=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.Y3)((()=>(0,polished__WEBPACK_IMPORTED_MODULE_4__.m4)((0,polished__WEBPACK_IMPORTED_MODULE_4__.XV)(theme.base.palette["primary-background"]),theme.base.transparency["transparent-3"]))),fontSize=(0,_styles__WEBPACK_IMPORTED_MODULE_5__.MX)(theme.base["font-size"],theme.base["font-scale"]);return labelHidden?polished__WEBPACK_IMPORTED_MODULE_4__.G0:styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          max-width: max-content;
          font-size: ${fontSize[theme.components.label["font-size"]]};
          font-weight: ${theme.base["font-weight"]["semi-bold"]};
          color: ${color};
        `}));StyledLabel.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_6__.ns;const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children,labelHidden=!1,htmlFor,...restProps},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledLabel,{ref,labelHidden,htmlFor:""===htmlFor?void 0:htmlFor,...restProps,children})))},"./node_modules/@pega/cosmos-react-core/lib/components/Link/Link.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>Link_Link});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),Button=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Button/Button.js"),Popover=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Popover/Popover.js"),BareButton=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Button/BareButton.js"),theme=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),utils=(__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/init.js"),__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js")),Contexts=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Modal/Contexts.js");const hooks_useModalManager=()=>{const context=utils.B3?window.cosmos.modalManagerContext??Contexts.Ek:Contexts.Ek;return(0,react.useContext)(context)},hooks_useModalContext=()=>{const{ModalContext}=hooks_useModalManager();return(0,react.useContext)(ModalContext)};var useUID=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useUID.js"),useConsolidatedRef=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConsolidatedRef.js"),useTheme=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useTheme.js");const hooks_useBreakpoint=(breakpoint,{breakpointRef,defaultValue=!1,themeProp="breakpoints"}={})=>{const{base:{breakpoints,"content-width":contentWidth}}=(0,useTheme.Z)(),breakpointVal="content-width"===themeProp?contentWidth[breakpoint]:breakpoints[breakpoint],[matches,setMatches]=(0,react.useState)(utils.B3?window.matchMedia(`(min-width: ${breakpointVal})`).matches:!!defaultValue),onResize=(0,react.useCallback)((e=>{setMatches(e.matches)}),[]);return(0,react.useLayoutEffect)((()=>{if(breakpointRef&&breakpointRef.current){const observer=new ResizeObserver((entries=>{const matchesBreakpoint=entries.some((({target,contentRect})=>{if(target!==breakpointRef.current)return;const fontSize=window.getComputedStyle(target)?.fontSize||"16";return contentRect.width>=parseFloat(breakpointVal)*parseFloat(fontSize)}));setMatches(matchesBreakpoint)}));return observer.observe(breakpointRef.current),()=>{observer.disconnect()}}if(utils.B3){const mediaMatch=window.matchMedia(`(min-width: ${breakpointVal})`),mediaMatchAvailable="addEventListener"in mediaMatch,resizeHandler=(0,utils.Ds)((()=>{setMatches(window.innerWidth>=parseInt(breakpointVal,10))}),100);return mediaMatchAvailable?(mediaMatch.addEventListener("change",onResize),setMatches(mediaMatch.matches)):(window.addEventListener("resize",resizeHandler),setMatches(window.innerWidth>=parseInt(breakpointVal,10))),()=>{mediaMatchAvailable?mediaMatch.removeEventListener("change",onResize):window.removeEventListener("resize",resizeHandler)}}}),[breakpointRef?.current]),matches};var useI18n=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useI18n.js");let os;const getOperatingSystem=()=>os||(os=utils.SX?navigator.userAgent.match(/(Windows|Macintosh)/)?.[0]||"Other":"",os),hooks_useOS=()=>{const[operatingSystem,setOperatingSystem]=(0,react.useState)(getOperatingSystem);return(0,react.useEffect)((()=>{operatingSystem||setOperatingSystem(getOperatingSystem())}),[]),{windows:"Windows"===operatingSystem,macintosh:"Macintosh"===operatingSystem,name:operatingSystem}};var styles_utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/styles/utils.js");(0,react.createContext)({drawerOpen:!1,openDrawer:()=>{},closeDrawer:()=>{}});const AppShell_AppShellContext=(0,react.createContext)({navOpen:!1,navState:"closed",collapsedHoverMenus:!1,focusedImperatively:{get current(){return!1}},headerEl:null,previewTriggerRef:{get current(){return null},set current(val){}},searchContainerEl:null,setSearchContainerEl:()=>{},mobileNavOpen:!1}),osxKeyMapper={Command:"⌘",Option:"⌥",Alt:"⌥",Control:"⌃",Return:"↵",Delete:"Del"},windowsKeyMapper={Control:"Ctrl",Alt:"Alt",Windows:"⊞",Backspace:"Backspace",Option:"Alt"},generalKeyMapper={"Page up":"Pg up","Page down":"Pg dn",Ins:"Insert"},StyledKeyboard=styled_components_browser_esm.ZP.kbd((({theme:{base,components:{text:{primary},badges:{keyboard}}}})=>styled_components_browser_esm.iv`
      background-color: ${keyboard["background-color"]};
      color: ${base.palette["foreground-color"]};
      display: inline-block;
      position: relative;
      font-family: ${base["font-family"]};
      font-weight: ${primary["font-weight"]};
      overflow: hidden;
      white-space: nowrap;
      padding: 0.125rem;
      border: 0.0125rem solid ${keyboard["border-color"]};
      border-radius: calc(${base["border-radius"]} / 4);
      text-transform: capitalize;
      text-align: center;
      min-width: 1.25rem;
      height: 1.25rem;
      text-overflow: ellipsis;
      line-height: 1rem;
      inset-block-start: calc(1.25rem / 4 - 0.125rem);
    `));StyledKeyboard.defaultProps=theme.ns;const Badges_Keyboard=({keyName,...restProps})=>{const{windows:isWindows}=hooks_useOS();return(0,jsx_runtime.jsx)(StyledKeyboard,{...restProps,"aria-label":keyName,children:isWindows&&windowsKeyMapper[keyName]||osxKeyMapper[keyName]||generalKeyMapper[keyName]||keyName})};var Text=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Text/Text.js"),Flex=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Flex/Flex.js");const StyledLinkPopover=styled_components_browser_esm.ZP.div((({theme,preview})=>styled_components_browser_esm.iv`
    background-color: ${theme.components.tooltip["background-color"]};
    ${preview&&styled_components_browser_esm.iv`
      padding: ${theme.base.spacing};
    `}
  `));StyledLinkPopover.defaultProps=theme.ns;const StyledLinkPopoverBtn=(0,styled_components_browser_esm.ZP)(BareButton.Z)((({theme})=>{const contrastColor=(0,utils.Y3)((()=>(0,polished_esm.XV)(theme.base.palette.interactive))),fontSize=(0,styles_utils.MX)(theme.base["font-size"],theme.base["font-scale"]);return styled_components_browser_esm.iv`
    position: relative;
    display: inline-flex;
    align-items: center;
    z-index: 1;
    padding: 0 ${theme.base.spacing};
    min-height: 1.5rem;
    line-height: 1;
    color: ${contrastColor};
    font-size: ${fontSize.xs};
    text-decoration: none;

    /* FIXME: Button selector specificity... */
    & + & {
      margin: 0;
    }

    & + &::before {
      content: '';
      position: absolute;
      inset-inline-start: 0;
      inset-block: 0;
      width: 1px; /* stylelint-disable-line unit-allowed-list */
      background-color: ${contrastColor};
      opacity: ${theme.base.transparency["transparent-3"]};
    }

    &:hover,
    &:active {
      text-decoration: underline;
    }

    &:focus {
      box-shadow: inset 0 0 0 0.0625rem ${theme.base.palette.light},
        0 0 0.125rem 0.0625rem ${theme.base.palette.interactive};
    }
  `}));StyledLinkPopoverBtn.defaultProps=theme.ns;const StyledLinkPreviewPopoverBtn=(0,styled_components_browser_esm.ZP)(StyledLinkPopoverBtn)((({theme})=>styled_components_browser_esm.iv`
    width: 100%;
    padding: unset;

    &:hover,
    &:active {
      text-decoration: none;
      ${Text.q} span {
        text-decoration: underline;
      }
    }

    ${Text.q} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    ${StyledKeyboard} {
      color: ${theme.base.palette.light};
      background-color: ${theme.base.colors.gray.dark};
      border-color: ${theme.base.colors.gray.medium};
      inset-block-start: unset;

      &:first-of-type {
        margin-inline: ${theme.base.spacing};
      }
    }
  `));StyledLinkPreviewPopoverBtn.defaultProps=theme.ns;const StyledLink=(0,styled_components_browser_esm.ZP)(Button.Z)``;StyledLink.defaultProps=theme.ns;const Link_Link=(0,react.forwardRef)((({href,variant="link",previewable,onPreview,...restProps},ref)=>{const{initialized:inModal}=hooks_useModalContext(),{previewTriggerRef}=(0,react.useContext)(AppShell_AppShellContext),uid=(0,useUID.Z)(),linkRef=(0,useConsolidatedRef.Z)(ref),[popover,setPopover]=(0,react.useState)(!1),[popoverHideDelay,setPopoverHideDelay]=(0,react.useState)("short"),[previewPopover,setPreviewPopover]=(0,react.useState)(!1),previewBtnRef=(0,react.useRef)(null),isSmallOrAbove=hooks_useBreakpoint("sm"),t=(0,useI18n.Z)(),{macintosh}=hooks_useOS(),contextMenuOpened=(0,react.useRef)(!1),showPopover=()=>{isSmallOrAbove&&(setPopover(!0),setPreviewPopover(!1))},showPreviewPopover=()=>{!isSmallOrAbove||popover||contextMenuOpened.current||setPreviewPopover(!0)},hidePopover=()=>{setPopover(!1)},hidePreviewPopover=()=>{setPreviewPopover(!1)},onPreviewClick=()=>{previewTriggerRef.current=linkRef.current,onPreview?.({href})};return(0,react.useEffect)((()=>{"none"!==popoverHideDelay||popover||previewPopover||setPopoverHideDelay("short")}),[popoverHideDelay,popover,previewPopover]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(StyledLink,{href,variant,ref:linkRef,...restProps,onMouseEnter:()=>{previewable&&showPopover()},onMouseLeave:hidePopover,onFocus:()=>{previewable&&showPreviewPopover()},onBlur:()=>{contextMenuOpened.current=!1,hidePreviewPopover()},onKeyUp:e=>{e.getModifierState("Alt")&&"KeyP"===e.code&&onPreviewClick()},onContextMenu:()=>{contextMenuOpened.current=!0,setPopoverHideDelay("none"),setPreviewPopover(!1),setPopover(!1)},"aria-describedby":previewable?`${uid}-preview-instructions`:void 0}),!inModal&&(0,jsx_runtime.jsx)(Popover.Z,{show:previewPopover,groupId:"link_preview",showDelay:"short",hideDelay:popoverHideDelay,placement:"bottom",target:linkRef.current,onMouseEnter:showPreviewPopover,onMouseLeave:hidePreviewPopover,as:StyledLinkPopover,arrow:!0,preview:!0,onHide:hidePreviewPopover,children:(0,jsx_runtime.jsx)(StyledLinkPreviewPopoverBtn,{preview:!0,type:"button",ref:previewBtnRef,onClick:onPreviewClick,tabIndex:"-1",children:(0,jsx_runtime.jsxs)(Text.Z,{children:[(0,jsx_runtime.jsx)("span",{children:t("preview")}),(0,jsx_runtime.jsxs)(Flex.Z,{container:{inline:!0,justify:"end"},children:[(0,jsx_runtime.jsx)(Badges_Keyboard,{keyName:"Alt"}),(0,jsx_runtime.jsx)(Badges_Keyboard,{keyName:"P"})]})]})})}),(0,jsx_runtime.jsxs)(Popover.Z,{show:popover,groupId:"link_preview",showDelay:"short",hideDelay:popoverHideDelay,placement:"bottom",target:linkRef.current,onMouseEnter:showPopover,onMouseLeave:hidePopover,as:StyledLinkPopover,arrow:!0,children:[!inModal&&(0,jsx_runtime.jsx)(StyledLinkPopoverBtn,{preview:!0,type:"button",ref:previewBtnRef,onClick:onPreviewClick,tabIndex:"-1",children:t("preview")}),(0,jsx_runtime.jsx)(StyledLinkPopoverBtn,{forwardedAs:"a",href,target:"_blank",rel:"noreferrer",tabIndex:"-1",children:t("link_open_in_tab_text")})]}),previewable&&(0,jsx_runtime.jsx)("span",{id:`${uid}-preview-instructions`,hidden:!0,children:t("preview_link_instruction",[macintosh?"option":"alt"])})]})}))},"./node_modules/@pega/cosmos-react-core/lib/components/Modal/Contexts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ek:()=>ModalManagerContext,tC:()=>ModalContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialMethods={update:()=>{},dismiss:()=>{},activate:()=>{},minimize:()=>{},maximize:()=>{},dock:()=>{},unmount:()=>{}},initialModalContext={alert:!1,dismissible:!0,minimizable:!1,maximizable:!1,dockable:!1,defaultMinimized:!1,unmountWhenMinimized:!0,state:"open",top:!1,initialized:!1,...initialMethods},ModalContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialModalContext),ModalManagerContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({create:()=>initialMethods,ModalContext,initialized:!1})},"./node_modules/@pega/cosmos-react-core/lib/components/Modal/ModalManager.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Modal_ModalManager});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js"),useConfiguration=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConfiguration.js");const hooks_useScrollToggle=(selector=":root")=>{const scrollbarWidthRef=(0,react.useRef)(0),styleRef=(0,react.useRef)(null),{styleSheetTarget}=(0,useConfiguration.Z)(),enableScroll=(0,react.useCallback)((()=>{styleRef.current?.remove(),styleRef.current=null}),[]),disableScroll=(0,react.useCallback)((()=>{if(styleRef.current)return;const scrollEl=document.querySelector(selector);if(!scrollEl)return;const[overflowX,overflowY]=(0,utils.Tc)(scrollEl);(overflowX||overflowY)&&(styleRef.current=document.createElement("style"),styleRef.current.textContent=`\n      ${selector} {\n        ${overflowY?`padding-inline-end: ${scrollbarWidthRef.current}px !important`:""};\n        ${overflowX?`padding-block-end: ${scrollbarWidthRef.current}px !important`:""};\n        overflow: hidden !important;\n      }\n    `,(styleSheetTarget??document.head).append(styleRef.current))}),[selector]);return(0,react.useLayoutEffect)((()=>(scrollbarWidthRef.current=(0,utils.np)(),enableScroll)),[enableScroll]),{enableScroll,disableScroll}};__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/init.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),Flex=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Flex/Flex.js");const StyledDockedModals=styled_components_browser_esm.ZP.div((({theme})=>styled_components_browser_esm.iv`
    position: fixed;
    z-index: ${theme.base["z-index"].modal};
    bottom: 0;
    right: 0;
    pointer-events: none;
    width: 100%;
  `));StyledDockedModals.defaultProps=theme.ns;const Modal_DockedModals=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(Flex.Z,{container:{justify:"end",alignItems:"end",gap:2,pad:[0,2]},as:StyledDockedModals,...props,ref})));var Contexts=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Modal/Contexts.js");const reducer=(modals,payload)=>{switch(payload.action){case"create":return[...modals.map((modal=>((!payload.modal.options.alert&&"open"===payload.modal.state&&!modal.options.alert&&"open"===modal.state&&modal.options.minimizable||payload.modal.options.dockable)&&(modal.state="minimized"),modal))),payload.modal];case"unmount":return modals.filter((modal=>modal.id!==payload.modal.id));case"dismiss":return modals.map((modal=>(modal.state=modal.id===payload.modal.id?"closed":modal.state,modal)));case"update":return modals.map((modal=>(modal.props=modal.id===payload.modal.id?{...modal.props,...payload.modal.props}:modal.props,modal)));case"activate":return modals.map((modal=>(modal.id!==payload.modal.id||modal.options.dockable?modal.id===payload.modal.id&&modal.options.dockable?modal.state="docked":!modal.options.alert&&"open"===modal.state&&modal.options.minimizable&&(modal.state="minimized"):modal.state="open",modal)));case"minimize":return modals.map((modal=>(modal.state=modal.id===payload.modal.id&&modal.options.minimizable?"minimized":modal.state,modal)));case"maximize":return modals.map((modal=>(modal.state=modal.id===payload.modal.id&&modal.options.maximizable?"maximized":modal.state,modal)));case"dock":return modals.map((modal=>(modal.state=modal.id===payload.modal.id&&modal.options.dockable?"docked":"minimized",modal)));default:return modals}},WrappedModal=(0,react.memo)((({Component,id,options:{alert,dismissible,dockable,minimizable,maximizable},state,methods,props,top})=>(0,jsx_runtime.jsx)(Contexts.tC.Provider,{value:{id,alert,dismissible,minimizable,maximizable,dockable,state,top,initialized:!0,...methods},children:(0,jsx_runtime.jsx)(Component,{...props})}))),RenderModals=({modals})=>{const{open,minimized,alerts}=modals.reduce(((obj,modal)=>(modal.options.alert?obj.alerts.push(modal):"minimized"===modal.state||"docked"===modal.state?obj.minimized.push(modal):obj.open.push(modal),obj)),{open:[],minimized:[],alerts:[]});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[open.map(((modal,i)=>(0,react.createElement)(WrappedModal,{...modal,top:0===alerts.length&&i===open.length-1,key:modal.id}))),minimized.length>0&&(0,jsx_runtime.jsx)(Modal_DockedModals,{children:minimized.map((modal=>(0,react.createElement)(WrappedModal,{...modal,top:!1,key:modal.id})))}),alerts.map(((modal,i)=>(0,react.createElement)(WrappedModal,{...modal,top:i===open.length-1,key:modal.id})))]})},Modal_ModalManager=({children})=>{const[modals,dispatch]=(0,react.useReducer)(reducer,[]),{disableScroll,enableScroll}=hooks_useScrollToggle(),providerValue=(0,react.useMemo)((()=>({create:(Component,props,options)=>{const id=options?.id||(0,utils.xG)(),initiatorRef=document.activeElement?new WeakRef(document.activeElement):null,methods={dismiss:()=>{dispatch({action:"dismiss",modal:{id}}),options?.onDismiss?.(id);const initiator=initiatorRef?.deref();initiator?.isConnected&&(initiator instanceof HTMLElement||initiator instanceof SVGElement)&&initiator.focus()},update:updateProps=>{dispatch({action:"update",modal:{id,props:updateProps}})},minimize:()=>{dispatch({action:"minimize",modal:{id}}),options?.onMinimize?.(id)},maximize:()=>{dispatch({action:"maximize",modal:{id}}),options?.onMaximize?.(id)},dock:()=>{dispatch({action:"dock",modal:{id}}),options?.onDock?.(id)},activate:()=>{dispatch({action:"activate",modal:{id}}),options?.onActivate?.(id)},unmount:()=>{dispatch({action:"unmount",modal:{id}})}};let defaultState;return defaultState=options?.defaultMinimized?"minimized":options?.dockable?"docked":"open",dispatch({action:"create",modal:{id,methods,Component,props,state:defaultState,options:{alert:!1,minimizable:!1,maximizable:!1,dockable:!1,defaultMinimized:!1,unmountWhenMinimized:!0,...options,dismissible:!(options?.alert||!(options?.dismissible??1))}}}),methods},ModalContext:Contexts.tC,initialized:!0})),[]);(0,react.useEffect)((()=>{modals.some((modal=>"open"===modal.state&&!modal.options.dockable))?disableScroll():enableScroll()}),[modals]);const{portalTarget}=(0,useConfiguration.Z)(),context=utils.B3?window.cosmos.modalManagerContext??Contexts.Ek:Contexts.Ek,priorCtx=(0,react.useContext)(context);return priorCtx.initialized?(0,jsx_runtime.jsx)(context.Provider,{value:priorCtx,children}):(0,jsx_runtime.jsxs)(context.Provider,{value:providerValue,children:[children,modals.length>0&&portalTarget&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)(RenderModals,{modals}),portalTarget)]})}},"./node_modules/@pega/cosmos-react-core/lib/components/Popover/Popover.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Popover_Popover});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");function getWindow(node){if(null==node)return window;if("[object Window]"!==node.toString()){var ownerDocument=node.ownerDocument;return ownerDocument&&ownerDocument.defaultView||window}return node}function isElement(node){return node instanceof getWindow(node).Element||node instanceof Element}function isHTMLElement(node){return node instanceof getWindow(node).HTMLElement||node instanceof HTMLElement}function isShadowRoot(node){return"undefined"!=typeof ShadowRoot&&(node instanceof getWindow(node).ShadowRoot||node instanceof ShadowRoot)}var math_max=Math.max,math_min=Math.min,round=Math.round;function getUAString(){var uaData=navigator.userAgentData;return null!=uaData&&uaData.brands?uaData.brands.map((function(item){return item.brand+"/"+item.version})).join(" "):navigator.userAgent}function isLayoutViewport(){return!/^((?!chrome|android).)*safari/i.test(getUAString())}function getBoundingClientRect(element,includeScale,isFixedStrategy){void 0===includeScale&&(includeScale=!1),void 0===isFixedStrategy&&(isFixedStrategy=!1);var clientRect=element.getBoundingClientRect(),scaleX=1,scaleY=1;includeScale&&isHTMLElement(element)&&(scaleX=element.offsetWidth>0&&round(clientRect.width)/element.offsetWidth||1,scaleY=element.offsetHeight>0&&round(clientRect.height)/element.offsetHeight||1);var visualViewport=(isElement(element)?getWindow(element):window).visualViewport,addVisualOffsets=!isLayoutViewport()&&isFixedStrategy,x=(clientRect.left+(addVisualOffsets&&visualViewport?visualViewport.offsetLeft:0))/scaleX,y=(clientRect.top+(addVisualOffsets&&visualViewport?visualViewport.offsetTop:0))/scaleY,width=clientRect.width/scaleX,height=clientRect.height/scaleY;return{width,height,top:y,right:x+width,bottom:y+height,left:x,x,y}}function getWindowScroll(node){var win=getWindow(node);return{scrollLeft:win.pageXOffset,scrollTop:win.pageYOffset}}function getNodeName(element){return element?(element.nodeName||"").toLowerCase():null}function getDocumentElement(element){return((isElement(element)?element.ownerDocument:element.document)||window.document).documentElement}function getWindowScrollBarX(element){return getBoundingClientRect(getDocumentElement(element)).left+getWindowScroll(element).scrollLeft}function getComputedStyle(element){return getWindow(element).getComputedStyle(element)}function isScrollParent(element){var _getComputedStyle=getComputedStyle(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return/auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX)}function getCompositeRect(elementOrVirtualElement,offsetParent,isFixed){void 0===isFixed&&(isFixed=!1);var isOffsetParentAnElement=isHTMLElement(offsetParent),offsetParentIsScaled=isHTMLElement(offsetParent)&&function isElementScaled(element){var rect=element.getBoundingClientRect(),scaleX=round(rect.width)/element.offsetWidth||1,scaleY=round(rect.height)/element.offsetHeight||1;return 1!==scaleX||1!==scaleY}(offsetParent),documentElement=getDocumentElement(offsetParent),rect=getBoundingClientRect(elementOrVirtualElement,offsetParentIsScaled,isFixed),scroll={scrollLeft:0,scrollTop:0},offsets={x:0,y:0};return(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)&&(("body"!==getNodeName(offsetParent)||isScrollParent(documentElement))&&(scroll=function getNodeScroll(node){return node!==getWindow(node)&&isHTMLElement(node)?function getHTMLElementScroll(element){return{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop}}(node):getWindowScroll(node)}(offsetParent)),isHTMLElement(offsetParent)?((offsets=getBoundingClientRect(offsetParent,!0)).x+=offsetParent.clientLeft,offsets.y+=offsetParent.clientTop):documentElement&&(offsets.x=getWindowScrollBarX(documentElement))),{x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height}}function getLayoutRect(element){var clientRect=getBoundingClientRect(element),width=element.offsetWidth,height=element.offsetHeight;return Math.abs(clientRect.width-width)<=1&&(width=clientRect.width),Math.abs(clientRect.height-height)<=1&&(height=clientRect.height),{x:element.offsetLeft,y:element.offsetTop,width,height}}function getParentNode(element){return"html"===getNodeName(element)?element:element.assignedSlot||element.parentNode||(isShadowRoot(element)?element.host:null)||getDocumentElement(element)}function getScrollParent(node){return["html","body","#document"].indexOf(getNodeName(node))>=0?node.ownerDocument.body:isHTMLElement(node)&&isScrollParent(node)?node:getScrollParent(getParentNode(node))}function listScrollParents(element,list){var _element$ownerDocumen;void 0===list&&(list=[]);var scrollParent=getScrollParent(element),isBody=scrollParent===(null==(_element$ownerDocumen=element.ownerDocument)?void 0:_element$ownerDocumen.body),win=getWindow(scrollParent),target=isBody?[win].concat(win.visualViewport||[],isScrollParent(scrollParent)?scrollParent:[]):scrollParent,updatedList=list.concat(target);return isBody?updatedList:updatedList.concat(listScrollParents(getParentNode(target)))}function isTableElement(element){return["table","td","th"].indexOf(getNodeName(element))>=0}function getTrueOffsetParent(element){return isHTMLElement(element)&&"fixed"!==getComputedStyle(element).position?element.offsetParent:null}function getOffsetParent(element){for(var window=getWindow(element),offsetParent=getTrueOffsetParent(element);offsetParent&&isTableElement(offsetParent)&&"static"===getComputedStyle(offsetParent).position;)offsetParent=getTrueOffsetParent(offsetParent);return offsetParent&&("html"===getNodeName(offsetParent)||"body"===getNodeName(offsetParent)&&"static"===getComputedStyle(offsetParent).position)?window:offsetParent||function getContainingBlock(element){var isFirefox=/firefox/i.test(getUAString());if(/Trident/i.test(getUAString())&&isHTMLElement(element)&&"fixed"===getComputedStyle(element).position)return null;var currentNode=getParentNode(element);for(isShadowRoot(currentNode)&&(currentNode=currentNode.host);isHTMLElement(currentNode)&&["html","body"].indexOf(getNodeName(currentNode))<0;){var css=getComputedStyle(currentNode);if("none"!==css.transform||"none"!==css.perspective||"paint"===css.contain||-1!==["transform","perspective"].indexOf(css.willChange)||isFirefox&&"filter"===css.willChange||isFirefox&&css.filter&&"none"!==css.filter)return currentNode;currentNode=currentNode.parentNode}return null}(element)||window}var enums_top="top",bottom="bottom",right="right",left="left",basePlacements=[enums_top,bottom,right,left],variationPlacements=basePlacements.reduce((function(acc,placement){return acc.concat([placement+"-start",placement+"-end"])}),[]),enums_placements=[].concat(basePlacements,["auto"]).reduce((function(acc,placement){return acc.concat([placement,placement+"-start",placement+"-end"])}),[]),modifierPhases=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function order(modifiers){var map=new Map,visited=new Set,result=[];function sort(modifier){visited.add(modifier.name),[].concat(modifier.requires||[],modifier.requiresIfExists||[]).forEach((function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);depModifier&&sort(depModifier)}})),result.push(modifier)}return modifiers.forEach((function(modifier){map.set(modifier.name,modifier)})),modifiers.forEach((function(modifier){visited.has(modifier.name)||sort(modifier)})),result}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return!args.some((function(element){return!(element&&"function"==typeof element.getBoundingClientRect)}))}function popperGenerator(generatorOptions){void 0===generatorOptions&&(generatorOptions={});var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=void 0===_generatorOptions$def?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=void 0===_generatorOptions$def2?DEFAULT_OPTIONS:_generatorOptions$def2;return function createPopper(reference,popper,options){void 0===options&&(options=defaultOptions);var fn,pending,state={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,defaultOptions),modifiersData:{},elements:{reference,popper},attributes:{},styles:{}},effectCleanupFns=[],isDestroyed=!1,instance={state,setOptions:function setOptions(setOptionsAction){var options="function"==typeof setOptionsAction?setOptionsAction(state.options):setOptionsAction;cleanupModifierEffects(),state.options=Object.assign({},defaultOptions,state.options,options),state.scrollParents={reference:isElement(reference)?listScrollParents(reference):reference.contextElement?listScrollParents(reference.contextElement):[],popper:listScrollParents(popper)};var orderedModifiers=function orderModifiers(modifiers){var orderedModifiers=order(modifiers);return modifierPhases.reduce((function(acc,phase){return acc.concat(orderedModifiers.filter((function(modifier){return modifier.phase===phase})))}),[])}(function mergeByName(modifiers){var merged=modifiers.reduce((function(merged,current){var existing=merged[current.name];return merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current,merged}),{});return Object.keys(merged).map((function(key){return merged[key]}))}([].concat(defaultModifiers,state.options.modifiers)));return state.orderedModifiers=orderedModifiers.filter((function(m){return m.enabled})),function runModifierEffects(){state.orderedModifiers.forEach((function(_ref3){var name=_ref3.name,_ref3$options=_ref3.options,options=void 0===_ref3$options?{}:_ref3$options,effect=_ref3.effect;if("function"==typeof effect){var cleanupFn=effect({state,name,instance,options}),noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn)}}))}(),instance.update()},forceUpdate:function forceUpdate(){if(!isDestroyed){var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;if(areValidElements(reference,popper)){state.rects={reference:getCompositeRect(reference,getOffsetParent(popper),"fixed"===state.options.strategy),popper:getLayoutRect(popper)},state.reset=!1,state.placement=state.options.placement,state.orderedModifiers.forEach((function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data)}));for(var index=0;index<state.orderedModifiers.length;index++)if(!0!==state.reset){var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=void 0===_state$orderedModifie2?{}:_state$orderedModifie2,name=_state$orderedModifie.name;"function"==typeof fn&&(state=fn({state,options:_options,name,instance})||state)}else state.reset=!1,index=-1}}},update:(fn=function(){return new Promise((function(resolve){instance.forceUpdate(),resolve(state)}))},function(){return pending||(pending=new Promise((function(resolve){Promise.resolve().then((function(){pending=void 0,resolve(fn())}))}))),pending}),destroy:function destroy(){cleanupModifierEffects(),isDestroyed=!0}};if(!areValidElements(reference,popper))return instance;function cleanupModifierEffects(){effectCleanupFns.forEach((function(fn){return fn()})),effectCleanupFns=[]}return instance.setOptions(options).then((function(state){!isDestroyed&&options.onFirstUpdate&&options.onFirstUpdate(state)})),instance}}var passive={passive:!0};function getBasePlacement(placement){return placement.split("-")[0]}function getVariation(placement){return placement.split("-")[1]}function getMainAxisFromPlacement(placement){return["top","bottom"].indexOf(placement)>=0?"x":"y"}function computeOffsets(_ref){var offsets,reference=_ref.reference,element=_ref.element,placement=_ref.placement,basePlacement=placement?getBasePlacement(placement):null,variation=placement?getVariation(placement):null,commonX=reference.x+reference.width/2-element.width/2,commonY=reference.y+reference.height/2-element.height/2;switch(basePlacement){case enums_top:offsets={x:commonX,y:reference.y-element.height};break;case bottom:offsets={x:commonX,y:reference.y+reference.height};break;case right:offsets={x:reference.x+reference.width,y:commonY};break;case left:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y}}var mainAxis=basePlacement?getMainAxisFromPlacement(basePlacement):null;if(null!=mainAxis){var len="y"===mainAxis?"height":"width";switch(variation){case"start":offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case"end":offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2)}}return offsets}var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mapToStyles(_ref2){var _Object$assign2,popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,variation=_ref2.variation,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets,isFixed=_ref2.isFixed,_offsets$x=offsets.x,x=void 0===_offsets$x?0:_offsets$x,_offsets$y=offsets.y,y=void 0===_offsets$y?0:_offsets$y,_ref3="function"==typeof roundOffsets?roundOffsets({x,y}):{x,y};x=_ref3.x,y=_ref3.y;var hasX=offsets.hasOwnProperty("x"),hasY=offsets.hasOwnProperty("y"),sideX=left,sideY=enums_top,win=window;if(adaptive){var offsetParent=getOffsetParent(popper),heightProp="clientHeight",widthProp="clientWidth";if(offsetParent===getWindow(popper)&&"static"!==getComputedStyle(offsetParent=getDocumentElement(popper)).position&&"absolute"===position&&(heightProp="scrollHeight",widthProp="scrollWidth"),placement===enums_top||(placement===left||placement===right)&&"end"===variation)sideY=bottom,y-=(isFixed&&offsetParent===win&&win.visualViewport?win.visualViewport.height:offsetParent[heightProp])-popperRect.height,y*=gpuAcceleration?1:-1;if(placement===left||(placement===enums_top||placement===bottom)&&"end"===variation)sideX=right,x-=(isFixed&&offsetParent===win&&win.visualViewport?win.visualViewport.width:offsetParent[widthProp])-popperRect.width,x*=gpuAcceleration?1:-1}var _Object$assign,commonStyles=Object.assign({position},adaptive&&unsetSides),_ref4=!0===roundOffsets?function roundOffsetsByDPR(_ref){var x=_ref.x,y=_ref.y,dpr=window.devicePixelRatio||1;return{x:round(x*dpr)/dpr||0,y:round(y*dpr)/dpr||0}}({x,y}):{x,y};return x=_ref4.x,y=_ref4.y,gpuAcceleration?Object.assign({},commonStyles,((_Object$assign={})[sideY]=hasY?"0":"",_Object$assign[sideX]=hasX?"0":"",_Object$assign.transform=(win.devicePixelRatio||1)<=1?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign)):Object.assign({},commonStyles,((_Object$assign2={})[sideY]=hasY?y+"px":"",_Object$assign2[sideX]=hasX?x+"px":"",_Object$assign2.transform="",_Object$assign2))}const modifiers_offset={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function offset(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name,_options$offset=options.offset,offset=void 0===_options$offset?[0,0]:_options$offset,data=enums_placements.reduce((function(acc,placement){return acc[placement]=function distanceAndSkiddingToXY(placement,rects,offset){var basePlacement=getBasePlacement(placement),invertDistance=[left,enums_top].indexOf(basePlacement)>=0?-1:1,_ref="function"==typeof offset?offset(Object.assign({},rects,{placement})):offset,skidding=_ref[0],distance=_ref[1];return skidding=skidding||0,distance=(distance||0)*invertDistance,[left,right].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance}}(placement,state.rects,offset),acc}),{}),_data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;null!=state.modifiersData.popperOffsets&&(state.modifiersData.popperOffsets.x+=x,state.modifiersData.popperOffsets.y+=y),state.modifiersData[name]=data}};var hash={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,(function(matched){return hash[matched]}))}var getOppositeVariationPlacement_hash={start:"end",end:"start"};function getOppositeVariationPlacement(placement){return placement.replace(/start|end/g,(function(matched){return getOppositeVariationPlacement_hash[matched]}))}function contains(parent,child){var rootNode=child.getRootNode&&child.getRootNode();if(parent.contains(child))return!0;if(rootNode&&isShadowRoot(rootNode)){var next=child;do{if(next&&parent.isSameNode(next))return!0;next=next.parentNode||next.host}while(next)}return!1}function rectToClientRect(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height})}function getClientRectFromMixedType(element,clippingParent,strategy){return"viewport"===clippingParent?rectToClientRect(function getViewportRect(element,strategy){var win=getWindow(element),html=getDocumentElement(element),visualViewport=win.visualViewport,width=html.clientWidth,height=html.clientHeight,x=0,y=0;if(visualViewport){width=visualViewport.width,height=visualViewport.height;var layoutViewport=isLayoutViewport();(layoutViewport||!layoutViewport&&"fixed"===strategy)&&(x=visualViewport.offsetLeft,y=visualViewport.offsetTop)}return{width,height,x:x+getWindowScrollBarX(element),y}}(element,strategy)):isElement(clippingParent)?function getInnerBoundingClientRect(element,strategy){var rect=getBoundingClientRect(element,!1,"fixed"===strategy);return rect.top=rect.top+element.clientTop,rect.left=rect.left+element.clientLeft,rect.bottom=rect.top+element.clientHeight,rect.right=rect.left+element.clientWidth,rect.width=element.clientWidth,rect.height=element.clientHeight,rect.x=rect.left,rect.y=rect.top,rect}(clippingParent,strategy):rectToClientRect(function getDocumentRect(element){var _element$ownerDocumen,html=getDocumentElement(element),winScroll=getWindowScroll(element),body=null==(_element$ownerDocumen=element.ownerDocument)?void 0:_element$ownerDocumen.body,width=math_max(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0),height=math_max(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0),x=-winScroll.scrollLeft+getWindowScrollBarX(element),y=-winScroll.scrollTop;return"rtl"===getComputedStyle(body||html).direction&&(x+=math_max(html.clientWidth,body?body.clientWidth:0)-width),{width,height,x,y}}(getDocumentElement(element)))}function getClippingRect(element,boundary,rootBoundary,strategy){var mainClippingParents="clippingParents"===boundary?function getClippingParents(element){var clippingParents=listScrollParents(getParentNode(element)),clipperElement=["absolute","fixed"].indexOf(getComputedStyle(element).position)>=0&&isHTMLElement(element)?getOffsetParent(element):element;return isElement(clipperElement)?clippingParents.filter((function(clippingParent){return isElement(clippingParent)&&contains(clippingParent,clipperElement)&&"body"!==getNodeName(clippingParent)})):[]}(element):[].concat(boundary),clippingParents=[].concat(mainClippingParents,[rootBoundary]),firstClippingParent=clippingParents[0],clippingRect=clippingParents.reduce((function(accRect,clippingParent){var rect=getClientRectFromMixedType(element,clippingParent,strategy);return accRect.top=math_max(rect.top,accRect.top),accRect.right=math_min(rect.right,accRect.right),accRect.bottom=math_min(rect.bottom,accRect.bottom),accRect.left=math_max(rect.left,accRect.left),accRect}),getClientRectFromMixedType(element,firstClippingParent,strategy));return clippingRect.width=clippingRect.right-clippingRect.left,clippingRect.height=clippingRect.bottom-clippingRect.top,clippingRect.x=clippingRect.left,clippingRect.y=clippingRect.top,clippingRect}function mergePaddingObject(paddingObject){return Object.assign({},{top:0,right:0,bottom:0,left:0},paddingObject)}function expandToHashMap(value,keys){return keys.reduce((function(hashMap,key){return hashMap[key]=value,hashMap}),{})}function detectOverflow(state,options){void 0===options&&(options={});var _options=options,_options$placement=_options.placement,placement=void 0===_options$placement?state.placement:_options$placement,_options$strategy=_options.strategy,strategy=void 0===_options$strategy?state.strategy:_options$strategy,_options$boundary=_options.boundary,boundary=void 0===_options$boundary?"clippingParents":_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=void 0===_options$rootBoundary?"viewport":_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=void 0===_options$elementConte?"popper":_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=void 0!==_options$altBoundary&&_options$altBoundary,_options$padding=_options.padding,padding=void 0===_options$padding?0:_options$padding,paddingObject=mergePaddingObject("number"!=typeof padding?padding:expandToHashMap(padding,basePlacements)),altContext="popper"===elementContext?"reference":"popper",popperRect=state.rects.popper,element=state.elements[altBoundary?altContext:elementContext],clippingClientRect=getClippingRect(isElement(element)?element:element.contextElement||getDocumentElement(state.elements.popper),boundary,rootBoundary,strategy),referenceClientRect=getBoundingClientRect(state.elements.reference),popperOffsets=computeOffsets({reference:referenceClientRect,element:popperRect,strategy:"absolute",placement}),popperClientRect=rectToClientRect(Object.assign({},popperRect,popperOffsets)),elementClientRect="popper"===elementContext?popperClientRect:referenceClientRect,overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right},offsetData=state.modifiersData.offset;if("popper"===elementContext&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach((function(key){var multiply=[right,bottom].indexOf(key)>=0?1:-1,axis=[enums_top,bottom].indexOf(key)>=0?"y":"x";overflowOffsets[key]+=offset[axis]*multiply}))}return overflowOffsets}function within(min,value,max){return math_max(min,math_min(value,max))}const modifiers_preventOverflow={name:"preventOverflow",enabled:!0,phase:"main",fn:function preventOverflow(_ref){var state=_ref.state,options=_ref.options,name=_ref.name,_options$mainAxis=options.mainAxis,checkMainAxis=void 0===_options$mainAxis||_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=void 0!==_options$altAxis&&_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=void 0===_options$tether||_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=void 0===_options$tetherOffset?0:_options$tetherOffset,overflow=detectOverflow(state,{boundary,rootBoundary,padding,altBoundary}),basePlacement=getBasePlacement(state.placement),variation=getVariation(state.placement),isBasePlacement=!variation,mainAxis=getMainAxisFromPlacement(basePlacement),altAxis=function getAltAxis(axis){return"x"===axis?"y":"x"}(mainAxis),popperOffsets=state.modifiersData.popperOffsets,referenceRect=state.rects.reference,popperRect=state.rects.popper,tetherOffsetValue="function"==typeof tetherOffset?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset,normalizedTetherOffsetValue="number"==typeof tetherOffsetValue?{mainAxis:tetherOffsetValue,altAxis:tetherOffsetValue}:Object.assign({mainAxis:0,altAxis:0},tetherOffsetValue),offsetModifierState=state.modifiersData.offset?state.modifiersData.offset[state.placement]:null,data={x:0,y:0};if(popperOffsets){if(checkMainAxis){var _offsetModifierState$,mainSide="y"===mainAxis?enums_top:left,altSide="y"===mainAxis?bottom:right,len="y"===mainAxis?"height":"width",offset=popperOffsets[mainAxis],min=offset+overflow[mainSide],max=offset-overflow[altSide],additive=tether?-popperRect[len]/2:0,minLen="start"===variation?referenceRect[len]:popperRect[len],maxLen="start"===variation?-popperRect[len]:-referenceRect[len],arrowElement=state.elements.arrow,arrowRect=tether&&arrowElement?getLayoutRect(arrowElement):{width:0,height:0},arrowPaddingObject=state.modifiersData["arrow#persistent"]?state.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},arrowPaddingMin=arrowPaddingObject[mainSide],arrowPaddingMax=arrowPaddingObject[altSide],arrowLen=within(0,referenceRect[len],arrowRect[len]),minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis:minLen-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis,maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis:maxLen+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis,arrowOffsetParent=state.elements.arrow&&getOffsetParent(state.elements.arrow),clientOffset=arrowOffsetParent?"y"===mainAxis?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0,offsetModifierValue=null!=(_offsetModifierState$=null==offsetModifierState?void 0:offsetModifierState[mainAxis])?_offsetModifierState$:0,tetherMax=offset+maxOffset-offsetModifierValue,preventedOffset=within(tether?math_min(min,offset+minOffset-offsetModifierValue-clientOffset):min,offset,tether?math_max(max,tetherMax):max);popperOffsets[mainAxis]=preventedOffset,data[mainAxis]=preventedOffset-offset}if(checkAltAxis){var _offsetModifierState$2,_mainSide="x"===mainAxis?enums_top:left,_altSide="x"===mainAxis?bottom:right,_offset=popperOffsets[altAxis],_len="y"===altAxis?"height":"width",_min=_offset+overflow[_mainSide],_max=_offset-overflow[_altSide],isOriginSide=-1!==[enums_top,left].indexOf(basePlacement),_offsetModifierValue=null!=(_offsetModifierState$2=null==offsetModifierState?void 0:offsetModifierState[altAxis])?_offsetModifierState$2:0,_tetherMin=isOriginSide?_min:_offset-referenceRect[_len]-popperRect[_len]-_offsetModifierValue+normalizedTetherOffsetValue.altAxis,_tetherMax=isOriginSide?_offset+referenceRect[_len]+popperRect[_len]-_offsetModifierValue-normalizedTetherOffsetValue.altAxis:_max,_preventedOffset=tether&&isOriginSide?function withinMaxClamp(min,value,max){var v=within(min,value,max);return v>max?max:v}(_tetherMin,_offset,_tetherMax):within(tether?_tetherMin:_min,_offset,tether?_tetherMax:_max);popperOffsets[altAxis]=_preventedOffset,data[altAxis]=_preventedOffset-_offset}state.modifiersData[name]=data}},requiresIfExists:["offset"]};const modifiers_arrow={name:"arrow",enabled:!0,phase:"main",fn:function arrow(_ref){var _state$modifiersData$,state=_ref.state,name=_ref.name,options=_ref.options,arrowElement=state.elements.arrow,popperOffsets=state.modifiersData.popperOffsets,basePlacement=getBasePlacement(state.placement),axis=getMainAxisFromPlacement(basePlacement),len=[left,right].indexOf(basePlacement)>=0?"height":"width";if(arrowElement&&popperOffsets){var paddingObject=function toPaddingObject(padding,state){return mergePaddingObject("number"!=typeof(padding="function"==typeof padding?padding(Object.assign({},state.rects,{placement:state.placement})):padding)?padding:expandToHashMap(padding,basePlacements))}(options.padding,state),arrowRect=getLayoutRect(arrowElement),minProp="y"===axis?enums_top:left,maxProp="y"===axis?bottom:right,endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len],startDiff=popperOffsets[axis]-state.rects.reference[axis],arrowOffsetParent=getOffsetParent(arrowElement),clientSize=arrowOffsetParent?"y"===axis?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0,centerToReference=endDiff/2-startDiff/2,min=paddingObject[minProp],max=clientSize-arrowRect[len]-paddingObject[maxProp],center=clientSize/2-arrowRect[len]/2+centerToReference,offset=within(min,center,max),axisProp=axis;state.modifiersData[name]=((_state$modifiersData$={})[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$)}},effect:function arrow_effect(_ref2){var state=_ref2.state,_options$element=_ref2.options.element,arrowElement=void 0===_options$element?"[data-popper-arrow]":_options$element;null!=arrowElement&&("string"!=typeof arrowElement||(arrowElement=state.elements.popper.querySelector(arrowElement)))&&contains(state.elements.popper,arrowElement)&&(state.elements.arrow=arrowElement)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function getSideOffsets(overflow,rect,preventedOffsets){return void 0===preventedOffsets&&(preventedOffsets={x:0,y:0}),{top:overflow.top-rect.height-preventedOffsets.y,right:overflow.right-rect.width+preventedOffsets.x,bottom:overflow.bottom-rect.height+preventedOffsets.y,left:overflow.left-rect.width-preventedOffsets.x}}function isAnySideFullyClipped(overflow){return[enums_top,right,bottom,left].some((function(side){return overflow[side]>=0}))}var popper_createPopper=popperGenerator({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function fn(){},effect:function effect(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options,_options$scroll=options.scroll,scroll=void 0===_options$scroll||_options$scroll,_options$resize=options.resize,resize=void 0===_options$resize||_options$resize,window=getWindow(state.elements.popper),scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);return scroll&&scrollParents.forEach((function(scrollParent){scrollParent.addEventListener("scroll",instance.update,passive)})),resize&&window.addEventListener("resize",instance.update,passive),function(){scroll&&scrollParents.forEach((function(scrollParent){scrollParent.removeEventListener("scroll",instance.update,passive)})),resize&&window.removeEventListener("resize",instance.update,passive)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function popperOffsets(_ref){var state=_ref.state,name=_ref.name;state.modifiersData[name]=computeOffsets({reference:state.rects.reference,element:state.rects.popper,strategy:"absolute",placement:state.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function computeStyles(_ref5){var state=_ref5.state,options=_ref5.options,_options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=void 0===_options$gpuAccelerat||_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=void 0===_options$adaptive||_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=void 0===_options$roundOffsets||_options$roundOffsets,commonStyles={placement:getBasePlacement(state.placement),variation:getVariation(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration,isFixed:"fixed"===state.options.strategy};null!=state.modifiersData.popperOffsets&&(state.styles.popper=Object.assign({},state.styles.popper,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive,roundOffsets})))),null!=state.modifiersData.arrow&&(state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets})))),state.attributes.popper=Object.assign({},state.attributes.popper,{"data-popper-placement":state.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function applyStyles(_ref){var state=_ref.state;Object.keys(state.elements).forEach((function(name){var style=state.styles[name]||{},attributes=state.attributes[name]||{},element=state.elements[name];isHTMLElement(element)&&getNodeName(element)&&(Object.assign(element.style,style),Object.keys(attributes).forEach((function(name){var value=attributes[name];!1===value?element.removeAttribute(name):element.setAttribute(name,!0===value?"":value)})))}))},effect:function applyStyles_effect(_ref2){var state=_ref2.state,initialStyles={popper:{position:state.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(state.elements.popper.style,initialStyles.popper),state.styles=initialStyles,state.elements.arrow&&Object.assign(state.elements.arrow.style,initialStyles.arrow),function(){Object.keys(state.elements).forEach((function(name){var element=state.elements[name],attributes=state.attributes[name]||{},style=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]).reduce((function(style,property){return style[property]="",style}),{});isHTMLElement(element)&&getNodeName(element)&&(Object.assign(element.style,style),Object.keys(attributes).forEach((function(attribute){element.removeAttribute(attribute)})))}))}},requires:["computeStyles"]},modifiers_offset,{name:"flip",enabled:!0,phase:"main",fn:function flip(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(!state.modifiersData[name]._skip){for(var _options$mainAxis=options.mainAxis,checkMainAxis=void 0===_options$mainAxis||_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=void 0===_options$altAxis||_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=void 0===_options$flipVariatio||_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements,preferredPlacement=state.options.placement,basePlacement=getBasePlacement(preferredPlacement),fallbackPlacements=specifiedFallbackPlacements||(basePlacement===preferredPlacement||!flipVariations?[getOppositePlacement(preferredPlacement)]:function getExpandedFallbackPlacements(placement){if("auto"===getBasePlacement(placement))return[];var oppositePlacement=getOppositePlacement(placement);return[getOppositeVariationPlacement(placement),oppositePlacement,getOppositeVariationPlacement(oppositePlacement)]}(preferredPlacement)),placements=[preferredPlacement].concat(fallbackPlacements).reduce((function(acc,placement){return acc.concat("auto"===getBasePlacement(placement)?function computeAutoPlacement(state,options){void 0===options&&(options={});var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=void 0===_options$allowedAutoP?enums_placements:_options$allowedAutoP,variation=getVariation(placement),placements=variation?flipVariations?variationPlacements:variationPlacements.filter((function(placement){return getVariation(placement)===variation})):basePlacements,allowedPlacements=placements.filter((function(placement){return allowedAutoPlacements.indexOf(placement)>=0}));0===allowedPlacements.length&&(allowedPlacements=placements);var overflows=allowedPlacements.reduce((function(acc,placement){return acc[placement]=detectOverflow(state,{placement,boundary,rootBoundary,padding})[getBasePlacement(placement)],acc}),{});return Object.keys(overflows).sort((function(a,b){return overflows[a]-overflows[b]}))}(state,{placement,boundary,rootBoundary,padding,flipVariations,allowedAutoPlacements}):placement)}),[]),referenceRect=state.rects.reference,popperRect=state.rects.popper,checksMap=new Map,makeFallbackChecks=!0,firstFittingPlacement=placements[0],i=0;i<placements.length;i++){var placement=placements[i],_basePlacement=getBasePlacement(placement),isStartVariation="start"===getVariation(placement),isVertical=[enums_top,bottom].indexOf(_basePlacement)>=0,len=isVertical?"width":"height",overflow=detectOverflow(state,{placement,boundary,rootBoundary,altBoundary,padding}),mainVariationSide=isVertical?isStartVariation?right:left:isStartVariation?bottom:enums_top;referenceRect[len]>popperRect[len]&&(mainVariationSide=getOppositePlacement(mainVariationSide));var altVariationSide=getOppositePlacement(mainVariationSide),checks=[];if(checkMainAxis&&checks.push(overflow[_basePlacement]<=0),checkAltAxis&&checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0),checks.every((function(check){return check}))){firstFittingPlacement=placement,makeFallbackChecks=!1;break}checksMap.set(placement,checks)}if(makeFallbackChecks)for(var _loop=function _loop(_i){var fittingPlacement=placements.find((function(placement){var checks=checksMap.get(placement);if(checks)return checks.slice(0,_i).every((function(check){return check}))}));if(fittingPlacement)return firstFittingPlacement=fittingPlacement,"break"},_i=flipVariations?3:1;_i>0;_i--){if("break"===_loop(_i))break}state.placement!==firstFittingPlacement&&(state.modifiersData[name]._skip=!0,state.placement=firstFittingPlacement,state.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},modifiers_preventOverflow,modifiers_arrow,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function hide(_ref){var state=_ref.state,name=_ref.name,referenceRect=state.rects.reference,popperRect=state.rects.popper,preventedOffsets=state.modifiersData.preventOverflow,referenceOverflow=detectOverflow(state,{elementContext:"reference"}),popperAltOverflow=detectOverflow(state,{altBoundary:!0}),referenceClippingOffsets=getSideOffsets(referenceOverflow,referenceRect),popperEscapeOffsets=getSideOffsets(popperAltOverflow,popperRect,preventedOffsets),isReferenceHidden=isAnySideFullyClipped(referenceClippingOffsets),hasPopperEscaped=isAnySideFullyClipped(popperEscapeOffsets);state.modifiersData[name]={referenceClippingOffsets,popperEscapeOffsets,isReferenceHidden,hasPopperEscaped},state.attributes.popper=Object.assign({},state.attributes.popper,{"data-popper-reference-hidden":isReferenceHidden,"data-popper-escaped":hasPopperEscaped})}}]}),react_fast_compare=__webpack_require__("./node_modules/react-fast-compare/index.js"),react_fast_compare_default=__webpack_require__.n(react_fast_compare),fromEntries=function fromEntries(entries){return entries.reduce((function(acc,_ref){var key=_ref[0],value=_ref[1];return acc[key]=value,acc}),{})},useIsomorphicLayoutEffect="undefined"!=typeof window&&window.document&&window.document.createElement?react.useLayoutEffect:react.useEffect,EMPTY_MODIFIERS=[],useConfiguration=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConfiguration.js"),useElement=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useElement.js"),useConsolidatedRef=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConsolidatedRef.js"),useUID=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useUID.js"),useAfterInitialEffect=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useAfterInitialEffect.js"),utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js"),PopoverContext=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Popover/PopoverContext.js"),Popover_styles=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Popover/Popover.styles.js");Object.freeze({name:"sameWidth",enabled:!0,phase:"beforeWrite",fn({state}){state.styles.popper.width=`${state.rects.reference.width}px`},requires:["computeStyles"]});const maxSize=Object.freeze({name:"maxSize",enabled:!0,phase:"main",requiresIfExists:["offset","preventOverflow","flip"],fn({state,name,options}){const overflow=detectOverflow(state,options),{x,y}=state.modifiersData.preventOverflow||{x:0,y:0},{width,height}=state.rects.popper,[basePlacement]=state.placement.split("-"),widthProp="left"===basePlacement?"left":"right",heightProp="top"===basePlacement?"top":"bottom";state.modifiersData[name]={width:width-overflow[widthProp]-x,height:height-overflow[heightProp]-y}}}),applyMaxSize=Object.freeze({name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn({state}){const{height}=state.modifiersData.maxSize;state.styles.popper.maxHeight=`${height}px`}}),delays={none:0,short:500,long:1e3},Popover=(0,react.forwardRef)((({show=!0,portal=!1,target,placement,strategy="fixed",style,modifiers=[],arrow=!1,groupId,showDelay="none",hideDelay="none",hideOnTargetHidden=!1,children,onHide,...restProps},ref)=>{const{portalTarget:configurationPortal}=(0,useConfiguration.Z)(),{checkActive,setActive,popovers}=(0,react.useContext)(PopoverContext.k),[,setPopperEl]=(0,useElement.Z)(),popperRef=(0,useConsolidatedRef.Z)(ref,setPopperEl),arrowRef=(0,react.useRef)(null),forceUpdateRef=(0,react.useRef)(),[showPopover,setShowPopover]=(0,react.useState)(show),timeout=(0,react.useRef)(),uid=(0,useUID.Z)(),portalTarget="boolean"==typeof portal?configurationPortal:portal,memoedModifiers=(0,react.useMemo)((()=>[{name:"computeStyles",options:{gpuAcceleration:!1}},{name:"offset",options:{offset:[0,arrow?5.5:2]}},{name:"hide",enabled:hideOnTargetHidden},{name:"arrow",enabled:arrow,options:{element:arrowRef.current}},{name:"preventOverflow",options:{tether:!modifiers.find((m=>"sameWidth"===m.name))}},maxSize,applyMaxSize,...modifiers]),[modifiers,arrow,hideOnTargetHidden]),offset=(0,react.useMemo)((()=>{const offsetModifier=[...memoedModifiers].reverse().find((m=>"offset"===m.name&&!1!==m.enabled));return Array.isArray(offsetModifier?.options?.offset)?offsetModifier?.options?.offset[1]??0:0}),[memoedModifiers]),{styles,attributes,forceUpdate}=function usePopper(referenceElement,popperElement,options){void 0===options&&(options={});var prevOptions=react.useRef(null),optionsWithDefaults={onFirstUpdate:options.onFirstUpdate,placement:options.placement||"bottom",strategy:options.strategy||"absolute",modifiers:options.modifiers||EMPTY_MODIFIERS},_React$useState=react.useState({styles:{popper:{position:optionsWithDefaults.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),state=_React$useState[0],setState=_React$useState[1],updateStateModifier=react.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function fn(_ref){var state=_ref.state,elements=Object.keys(state.elements);react_dom.flushSync((function(){setState({styles:fromEntries(elements.map((function(element){return[element,state.styles[element]||{}]}))),attributes:fromEntries(elements.map((function(element){return[element,state.attributes[element]]})))})}))},requires:["computeStyles"]}}),[]),popperOptions=react.useMemo((function(){var newOptions={onFirstUpdate:optionsWithDefaults.onFirstUpdate,placement:optionsWithDefaults.placement,strategy:optionsWithDefaults.strategy,modifiers:[].concat(optionsWithDefaults.modifiers,[updateStateModifier,{name:"applyStyles",enabled:!1}])};return react_fast_compare_default()(prevOptions.current,newOptions)?prevOptions.current||newOptions:(prevOptions.current=newOptions,newOptions)}),[optionsWithDefaults.onFirstUpdate,optionsWithDefaults.placement,optionsWithDefaults.strategy,optionsWithDefaults.modifiers,updateStateModifier]),popperInstanceRef=react.useRef();return useIsomorphicLayoutEffect((function(){popperInstanceRef.current&&popperInstanceRef.current.setOptions(popperOptions)}),[popperOptions]),useIsomorphicLayoutEffect((function(){if(null!=referenceElement&&null!=popperElement){var popperInstance=(options.createPopper||popper_createPopper)(referenceElement,popperElement,popperOptions);return popperInstanceRef.current=popperInstance,function(){popperInstance.destroy(),popperInstanceRef.current=null}}}),[referenceElement,popperElement,options.createPopper]),{state:popperInstanceRef.current?popperInstanceRef.current.state:null,styles:state.styles,attributes:state.attributes,update:popperInstanceRef.current?popperInstanceRef.current.update:null,forceUpdate:popperInstanceRef.current?popperInstanceRef.current.forceUpdate:null}}(target,popperRef.current,{placement,strategy,modifiers:memoedModifiers});forceUpdate&&(forceUpdateRef.current=forceUpdate),(0,react.useEffect)((()=>{const observer=new ResizeObserver((()=>{forceUpdateRef.current?.()}));return popperRef.current&&observer.observe(popperRef.current),target instanceof Element&&observer.observe(target),()=>{observer.disconnect()}}),[forceUpdate,popperRef.current,target]),(0,react.useEffect)((()=>{groupId&&show&&setActive(uid,groupId),utils.B3?(timeout.current&&clearTimeout(timeout.current),timeout.current=window.setTimeout((()=>{setShowPopover(show)}),delays[show?showDelay:hideDelay])):setShowPopover(show)}),[show]),(0,react.useEffect)((()=>()=>clearTimeout(timeout.current)),[]),(0,useAfterInitialEffect.Z)((()=>{showPopover||onHide?.()}),[showPopover]),(0,react.useEffect)((()=>{groupId&&popovers[groupId]&&popovers[groupId]!==uid&&setShowPopover(!1)}),[groupId?popovers[groupId]:void 0]);const content=(0,jsx_runtime.jsxs)(Popover_styles.uv,{...restProps,offset,ref:popperRef,style:{...style,...styles.popper},...attributes.popper,children:[arrow&&(0,jsx_runtime.jsx)(Popover_styles.JM,{ref:arrowRef,style:{...styles.arrow}}),(0,jsx_runtime.jsx)(Popover_styles.Ij,{children})]});return!target||!showPopover||groupId&&!checkActive(uid,groupId)?null:portal&&portalTarget?(0,react_dom.createPortal)(content,portalTarget):content})),Popover_Popover=Popover},"./node_modules/@pega/cosmos-react-core/lib/components/Popover/Popover.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ij:()=>StyledPopoverContent,JM:()=>StyledPopoverArrow,uv:()=>StyledPopover});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js");const StyledPopoverArrow=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
  background-color: inherit;

  ::before {
    content: '';
    display: block;
    position: absolute;
    inset: -0.25rem;
    background-color: inherit;
    transform: rotate(45deg);
  }
`;StyledPopoverArrow.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_1__.ns;const StyledPopoverContent=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
  max-width: inherit;
  max-height: inherit;
  border-radius: inherit;
  overflow: auto;
`,StyledPopover=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div((({theme:{base:{"border-radius":borderRadius,"z-index":{popover:zIndex},shadow:{low}},components:{card:{background},"form-control":{"border-radius":formControlBorderRadius}}},offset})=>styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
      /*
        Margin should never be used with Popper.
        https://popper.js.org/docs/v2/migration-guide/#4-remove-all-css-margins
      */
      margin: 0 !important;
      z-index: ${zIndex};
      background-color: ${background};
      border-radius: calc(${formControlBorderRadius} * ${borderRadius});
      box-shadow: ${low};

      &[data-popper-reference-hidden='true'] {
        visibility: hidden;
        pointer-events: none;
      }

      &[data-popper-placement^='top'] {
        > ${StyledPopoverArrow} {
          top: calc(100%);

          ::before {
            border-bottom-right-radius: calc(${borderRadius} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${offset}px;
          bottom: -${offset}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='bottom'] {
        > ${StyledPopoverArrow} {
          bottom: calc(100%);

          ::before {
            border-top-left-radius: calc(${borderRadius} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${offset}px;
          top: -${offset}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='right'] {
        > ${StyledPopoverArrow} {
          right: calc(100%);

          ::before {
            border-bottom-left-radius: calc(${borderRadius} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${offset}px;
          left: -${offset}px;
          top: 0;
          bottom: 0;
        }
      }

      &[data-popper-placement^='left'] {
        > ${StyledPopoverArrow} {
          left: calc(100%);

          ::before {
            border-top-right-radius: calc(${borderRadius} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${offset}px;
          right: -${offset}px;
          top: 0;
          bottom: 0;
        }
      }
    `));StyledPopover.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_1__.ns},"./node_modules/@pega/cosmos-react-core/lib/components/Popover/PopoverContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>PopoverManagerContext});const PopoverManagerContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({checkActive:()=>!0,setActive:()=>{},popovers:{}})},"./node_modules/@pega/cosmos-react-core/lib/components/Popover/PopoverManager.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_PopoverContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Popover/PopoverContext.js");const __WEBPACK_DEFAULT_EXPORT__=({children})=>{const[popovers,setPopovers]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PopoverContext__WEBPACK_IMPORTED_MODULE_2__.k.Provider,{value:{checkActive:(id,groupId)=>popovers[groupId]===id,setActive:(id,groupId)=>{setPopovers((curr=>({...curr,[groupId]:id})))},popovers},children})}},"./node_modules/@pega/cosmos-react-core/lib/components/Progress/Progress.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Progress_Progress});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),Backdrop=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Backdrop/Backdrop.js"),Text=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Text/Text.js"),utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/styles/utils.js"),utils_utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js"),useConfiguration=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConfiguration.js"),theme=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js");const StyledProgressBar=styled_components_browser_esm.ZP.div((({theme,placement,determinate})=>styled_components_browser_esm.iv`
      height: 0.375rem;
      background-color: ${theme.base.colors.gray["extra-light"]};
      border-radius: ${theme.base["border-radius"]};
      min-width: 2rem;
      overflow: hidden;

      @keyframes LoadingBar {
        0% {
          transform: translateX(-100%);
        }

        100% {
          transform: translateX(200%);
        }
      }

      ::before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        left: 0;
        border-radius: ${theme.base["border-radius"]};
        background-color: ${theme.components.progress["progress-color"]};
        ${determinate&&styled_components_browser_esm.iv`
          transform: translateX(var(--progress, 0));
          transform-origin: 0 50%;
          transition: transform calc(0.5 * ${theme.base.animation.speed})
            ${theme.base.animation.timing.ease};
        `}

        ${!determinate&&styled_components_browser_esm.iv`
          animation: LoadingBar calc(8 * ${theme.base.animation.speed}) linear infinite;
          width: 50%;
        `}
      }

      ${"inline"===placement?styled_components_browser_esm.iv`
            display: inline-block;
            position: relative;
          `:styled_components_browser_esm.iv`
            width: 50%;
          `}
    `));StyledProgressBar.defaultProps=theme.ns;const Progress_Bar=(0,react.forwardRef)((({value,minValue=0,maxValue=100,message,placement,style,...restProps},ref)=>{let percentage=value;return"number"==typeof value&&(percentage=value>maxValue||minValue>maxValue?0:value<minValue?100:-100*(1-(value-minValue)/(maxValue-minValue))),(0,jsx_runtime.jsx)(StyledProgressBar,{ref,role:"progressbar","aria-valuemin":minValue,"aria-valuemax":maxValue,"aria-valuenow":value,placement,determinate:"number"==typeof value,style:{...style,"--progress":percentage?`${percentage}%`:""},...restProps})})),StyledProgressEllipsis=styled_components_browser_esm.ZP.div((({theme,placement})=>styled_components_browser_esm.iv`
      line-height: 1;
      display: ${"inline"===placement?"inline-flex":"block"};

      @keyframes LoadingEllipsis {
        0% {
          transform: scale(0);
          opacity: 0;
        }

        50% {
          transform: scale(1);
          opacity: 1;
        }

        100% {
          transform: scale(0);
          opacity: 0;
        }
      }

      > span {
        display: flex;
        mix-blend-mode: multiply;

        ${"inline"===placement&&styled_components_browser_esm.iv`
          display: inline-flex;
          margin-left: 0.1875rem;
        `}
      }

      > span span {
        margin: 0 0.3125rem;
        background: ${theme.components.progress["progress-color"]};
        border-radius: 50%;
        animation: LoadingEllipsis calc(4 * ${theme.base.animation.speed}) infinite;

        ${"global"===placement&&styled_components_browser_esm.iv`
          width: 1.25rem;
          height: 1.25rem;
        `}

        ${"local"===placement&&styled_components_browser_esm.iv`
          width: 0.625rem;
          height: 0.625rem;
        `}

      ${"inline"===placement&&styled_components_browser_esm.iv`
          width: 0.1875rem;
          height: 0.1875rem;
          margin: 0 0.1875rem;
          animation-duration: calc(4 * ${theme.base.animation.speed});
        `}

      &:nth-child(2) {
          animation-delay: 0.1667s;
        }

        &:nth-child(3) {
          animation-delay: ${.3334}s;
        }
      }
    `));StyledProgressEllipsis.defaultProps=theme.ns;const Progress_Ellipsis=(0,react.forwardRef)((({message,placement,...restProps},ref)=>(0,jsx_runtime.jsx)(StyledProgressEllipsis,{ref,role:"progressbar",placement,...restProps,children:(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsx)("span",{}),(0,jsx_runtime.jsx)("span",{}),(0,jsx_runtime.jsx)("span",{})]})})));var Ring=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Progress/Ring.js");const StyledMessage=styled_components_browser_esm.ZP.span((({theme})=>{const color=(0,utils_utils.Y3)((()=>(0,polished_esm.m4)((0,polished_esm.XV)(theme.base.palette["primary-background"]),theme.base.transparency["transparent-3"]))),fontSize=(0,utils.MX)(theme.base["font-size"],theme.base["font-scale"]);return styled_components_browser_esm.iv`
    margin-top: 0.5rem;
    font-size: ${fontSize[theme.components.label["font-size"]]};
    font-weight: ${theme.base["font-weight"]["semi-bold"]};
    color: ${color};
  `})),Progress_Progress=(0,react.forwardRef)((({variant="ring",placement="global",visible=!0,onTransitionEndIn,onTransitionEndOut,value,message,...restProps},ref)=>{const[isVisible,setIsVisible]=(0,react.useState)(visible),[isNull,setIsNull]=(0,react.useState)(!visible),{portalTarget}=(0,useConfiguration.Z)(),showTime=(0,react.useRef)(),showTimeout=(0,react.useRef)(),hideTimeout=(0,react.useRef)();let Comp=Ring.Z;"bar"===variant?Comp=Progress_Bar:"ellipsis"===variant&&(Comp=Progress_Ellipsis);if((0,react.useEffect)((()=>{if(visible)clearTimeout(hideTimeout.current),showTime.current=Date.now(),showTimeout.current=window.setTimeout((()=>{setIsVisible(!0),setIsNull(!1)}),100);else if(clearTimeout(showTimeout.current),"number"==typeof showTime.current){const minimumDuration=1e3,timeElapsed=Date.now()-showTime.current;timeElapsed>minimumDuration?setIsVisible(!1):hideTimeout.current=window.setTimeout((()=>{setIsVisible(!1)}),minimumDuration-timeElapsed)}else setIsVisible(!1)}),[visible]),(0,react.useEffect)((()=>()=>{clearTimeout(showTimeout.current),clearTimeout(hideTimeout.current)}),[]),isNull)return null;const comp=(0,jsx_runtime.jsx)(Comp,{...restProps,placement,value,"aria-valuetext":message&&"number"==typeof value?`${message} - ${value}`:message,ref}),content="inline"===placement?comp:(0,jsx_runtime.jsxs)(Backdrop.Z,{open:isVisible,container:{direction:"column"},position:"global"===placement?"fixed":"absolute",variant:"light",alpha:.5,onAfterTransitionIn:onTransitionEndIn,onAfterTransitionOut:()=>{setIsNull(!0),onTransitionEndOut?.()},children:[comp,!!message&&(0,jsx_runtime.jsx)(Text.Z,{as:StyledMessage,variant:"secondary","aria-hidden":"true",children:message})]});return"global"===placement&&portalTarget?(0,react_dom.createPortal)(content,portalTarget):content}))},"./node_modules/@pega/cosmos-react-core/lib/components/Progress/Ring.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>StyledProgressRing,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js");const StyledProgressRing=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div((({theme,placement,determinate})=>styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    position: relative;
    min-width: 1em;
    min-height: 1em;

    @keyframes LoadingRing {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    svg {
      display: block;
      position: absolute;
      height: 100%;

      circle {
        fill: transparent;
        stroke: ${theme.base.colors.gray["extra-light"]};
        stroke-width: 2;
        r: 45%;
        cx: 50%;
        cy: 50%;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;

        &:nth-child(2) {
          stroke: ${theme.components.progress["progress-color"]};
          transition: stroke-dashoffset calc(0.5 * ${theme.base.animation.speed})
            ${theme.base.animation.timing.ease};

          ${!determinate&&styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
            animation: LoadingRing calc(4 * ${theme.base.animation.speed}) linear infinite;
          `}
        }
      }
    }

    ${"inline"===placement?styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          display: inline-flex;
          vertical-align: top;
        `:styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
          width: 2rem;
          height: 2rem;
        `}
  `));StyledProgressRing.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_3__.ns;const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({value,minValue=0,maxValue=100,placement,...restProps},ref)=>{let strokeDashoffset;const circumference=18*Math.PI;return strokeDashoffset="number"!=typeof value?(1-.33)*circumference:value>maxValue||minValue>maxValue?0:value<minValue?circumference:(1-(value-minValue)/(maxValue-minValue))*circumference,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledProgressRing,{ref,role:"progressbar","aria-valuemin":minValue,"aria-valuemax":maxValue,"aria-valuenow":value,placement,determinate:"number"==typeof value,...restProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",{viewBox:"0 0 20 20",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{strokeDasharray:circumference,style:{strokeDashoffset}})]})})}))},"./node_modules/@pega/cosmos-react-core/lib/components/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,q:()=>StyledText});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),polished__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js"),_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/styles/utils.js");const StyledText=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span((props=>{const{variant,status,theme:{base:{"font-size":fontSize,"font-scale":fontScale,palette:{"foreground-color":foregroundColor,urgent:error,warn:warning,success},transparency:{"transparent-2":secondaryAlpha}},components:{text}}}=props;let color;status&&(color={error,warning,success}[status]),"secondary"===variant&&(color=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.Y3)((()=>(0,polished__WEBPACK_IMPORTED_MODULE_4__.m4)(color??foregroundColor,secondaryAlpha))));const fontSizes=(0,_styles__WEBPACK_IMPORTED_MODULE_5__.MX)(fontSize,fontScale);return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    font-size: ${fontSizes[text[variant]["font-size"]]};
    font-weight: ${text[variant]["font-weight"]};
    color: ${color};
  `}));StyledText.defaultProps=_theme__WEBPACK_IMPORTED_MODULE_6__.ns;const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({variant="primary",as,...restProps},ref)=>(!as&&/h\d/i.test(variant)&&(as=variant),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledText,{ref,variant,as,...restProps}))))},"./node_modules/@pega/cosmos-react-core/lib/components/Toaster/Toaster.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Toaster_Toaster});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Button/Button.js"),Icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/Icon.js"),times_icon=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Icon/icons/times.icon.js"),utils=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/utils/utils.js"),useI18n=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useI18n.js"),useConfiguration=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConfiguration.js"),theme=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),Flex=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Flex/Flex.js");__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/init.js");const ToasterContext=(0,react.createContext)({push:()=>{},initialized:!1});(0,Icon.q5)(times_icon);const StyledToastButton=styled_components_browser_esm.ZP.button((({theme})=>styled_components_browser_esm.iv`
    border: none;
    color: inherit;
    padding: 0;
    font-size: 1rem;

    &:enabled:hover {
      background: #ffffff19;
    }

    &:enabled:focus {
      box-shadow: ${theme.base.shadow["focus-inverted"]};
    }
  `));StyledToastButton.defaultProps=theme.ns;const StyledToastContent=styled_components_browser_esm.ZP.div((({theme})=>styled_components_browser_esm.iv`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${theme.base["font-size"]};
    margin-inline-start: calc(${theme.base["border-radius"]} / 2);
  `));StyledToastContent.defaultProps=theme.ns;const StyledToast=styled_components_browser_esm.ZP.div((({theme})=>styled_components_browser_esm.iv`
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    padding: calc(${theme.base.spacing} / 2);
    background: ${theme.base.colors.slate["extra-dark"]};
    color: ${theme.base.colors.white};
    border-radius: calc(${theme.base["border-radius"]} / 2);
    opacity: var(--opacity);
    transform: translateY(var(--translateY)) scale(var(--scale));
    transition-property: transform, opacity;
    transition-duration: ${theme.base.animation.speed};
    transition-timing-function: ${theme.base.animation.timing.ease};
  `));StyledToast.defaultProps=theme.ns;const StyledToaster=styled_components_browser_esm.ZP.div`
  position: fixed;
  z-index: ${({theme})=>theme.base["z-index"].toast};
  width: min(40ch, calc(100% - 1rem));
  inset-inline-start: 50%;
  transform: translateX(-50%);
  top: 100%;
`;function reducer(current,action){switch(action.type){case"push":return[...current,{...action.payload}];case"unmount":return current.filter((m=>m.id!==action.payload));default:return current}}StyledToaster.defaultProps=theme.ns;const Toast=(0,react.forwardRef)((({dispatch,topLevelDismiss,dismissAfter,...message},ref)=>{const{content,translateY}=message,[dismissed,setDismissed]=(0,react.useState)(!1),timeoutRef=(0,react.useRef)(NaN),t=(0,useI18n.Z)(),dismiss=()=>{clearTimeout(timeoutRef.current),dismissed||(setDismissed(!0),topLevelDismiss?.({id:message.id,timeout:!1}))};return(0,react.useEffect)((()=>(Number.isFinite(dismissAfter)&&(timeoutRef.current=setTimeout(dismiss,dismissAfter)),()=>{clearTimeout(timeoutRef.current)})),[]),(0,jsx_runtime.jsxs)(Flex.Z,{container:{alignItems:"center",gap:.25},as:StyledToast,ref,style:{"--translateY":-translateY+"px","--opacity":dismissed?"0":"1","--scale":dismissed?"0":"1"},onTransitionEnd:e=>{dismissed&&"opacity"===e.propertyName&&e.target===e.currentTarget&&dispatch({type:"unmount",payload:message.id})},children:[(0,jsx_runtime.jsx)(Flex.Z,{item:{grow:1},as:StyledToastContent,children:content}),(0,jsx_runtime.jsx)(Button.Z,{as:StyledToastButton,variant:"simple",onClick:dismiss,icon:!0,"aria-label":t("dismiss_label"),children:(0,jsx_runtime.jsx)(Icon.ZP,{name:"times"})})]})})),Toaster_Toaster=({children,dismissAfter=1/0,onDismiss})=>{const{portalTarget}=(0,useConfiguration.Z)(),[messages,dispatch]=(0,react.useReducer)(reducer,[]),[yOffsets,setYOffsets]=(0,react.useState)([]),heightHashRef=(0,react.useRef)({});(0,react.useLayoutEffect)((()=>{const heights=[...messages].reverse().map((({id})=>heightHashRef.current[id]));setYOffsets(heights.map(((_,i)=>heights.slice(0,i+1).reduce(((sum,cur)=>sum+cur+4),0))).reverse())}),[messages.length]);const providerValue=(0,react.useMemo)((()=>({push(incoming){const message={...incoming,id:incoming.id??(0,utils.xG)()};dispatch({type:"push",payload:message})},initialized:!0})),[onDismiss,dismissAfter]),context=utils.B3?window.cosmos.toasterContext??ToasterContext:ToasterContext,priorCtx=(0,react.useContext)(context);return priorCtx.initialized?(0,jsx_runtime.jsx)(context.Provider,{value:priorCtx,children}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(context.Provider,{value:providerValue,children}),!!messages.length&&portalTarget&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)(StyledToaster,{children:messages.map(((message,i)=>(0,react.createElement)(Toast,{...message,translateY:yOffsets[i]??0,topLevelDismiss:onDismiss,dismissAfter:message.dismissAfter??dismissAfter,key:message.id,dispatch,ref:el=>{el?heightHashRef.current[message.id]=el.offsetHeight:delete heightHashRef.current[message.id]}})))}),portalTarget)]})}},"./node_modules/@pega/cosmos-react-core/lib/components/Tooltip/Tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/theme/theme.js"),_Popover__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/components/Popover/Popover.js"),_hooks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useUID.js"),_hooks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/hooks/useConsolidatedRef.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pega/cosmos-react-core/lib/styles/utils.js");const StyledTooltip=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div((({theme})=>{const fontSize=(0,_styles__WEBPACK_IMPORTED_MODULE_3__.MX)(theme.base["font-size"],theme.base["font-scale"]);return styled_components__WEBPACK_IMPORTED_MODULE_2__.iv`
    background-color: ${theme.components.tooltip["background-color"]};
    color: ${theme.components.tooltip["foreground-color"]};
    font-size: ${fontSize.xxs};
    max-width: 40ch;
    padding: ${theme.base.spacing};
    white-space: pre-line;
    word-break: break-word;
    pointer-events: none;
    z-index: ${theme.base["z-index"].tooltip};
//# sourceMappingURL=76199.faf51525.iframe.bundle.js.map