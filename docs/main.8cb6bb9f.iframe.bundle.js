(self.webpackChunktoastique=self.webpackChunktoastique||[]).push([[179],{"./src/stories/Toast.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Toast_stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),ANIMATION_BOTTOM="from bottom",ANIMATION_RIGHT_SIDE="from right side",animations=[ANIMATION_BOTTOM,ANIMATION_RIGHT_SIDE],AUTO_CLOSE_5=5e3,autoCloseTime=[3e3,AUTO_CLOSE_5,1e4],POSITION_TOP_RIGHT="top-right",positions=[POSITION_TOP_RIGHT,"bottom-right","top-left","bottom-left"],TOASTS_INFO="info",TOASTS_WARNING="warning",TOASTS_ERROR="error",TOASTS_SUCCESS="success",variants=[TOASTS_INFO,TOASTS_WARNING,TOASTS_ERROR,TOASTS_SUCCESS],GAP_SMALL="small",GAP_MEDIUM="medium",GAP_LARGE="large",gaps=[GAP_SMALL,GAP_MEDIUM,GAP_LARGE],classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spaces_xxs=2,spaces_xs=4,spaces_s=8,spaces_l=16,spaces_xl=32,spaces_xxl=64,fontSizes_m=20,Container=styled_components_browser_esm.ZP.h1(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  text-align: center;\n  margin: ","px;\n"])),spaces_xxl),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ErrorBoundary=function(_React$Component){(0,inherits.Z)(ErrorBoundary,_React$Component);var _super=(0,createSuper.Z)(ErrorBoundary);function ErrorBoundary(props){var _this;return(0,classCallCheck.Z)(this,ErrorBoundary),(_this=_super.call(this,props)).state={hasError:!1},_this}return(0,createClass.Z)(ErrorBoundary,[{key:"render",value:function render(){var hasError=this.state.hasError,children=this.props.children;return hasError?(0,jsx_runtime.jsx)(Container,{children:"Oops... Something went wrong :("}):children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(){return{hasError:!0}}}]),ErrorBoundary}(react.Component);ErrorBoundary.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0}}};var ErrorBoundary_ErrorBoundary=ErrorBoundary;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorBoundary/ErrorBoundary.jsx"]={name:"ErrorBoundary",docgenInfo:ErrorBoundary.__docgenInfo,path:"src/components/ErrorBoundary/ErrorBoundary.jsx"});var styled_templateObject,_templateObject2,colors_white="#fffff",colors_black="#eeeee",colors_transparent="transparent",colors_blue="#8ecae6",toastColors_purple="#9f86c0",toastColors_yellow="#fee440",toastColors_tomato="#d62828",toastColors_green="#57cc99",styled_Container=styled_components_browser_esm.ZP.div(styled_templateObject||(styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),StyledButton=styled_components_browser_esm.ZP.button(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n  border:  ","px solid ",";\n  border-radius:  ","px ;\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  padding: ","px;\n  margin: 0 auto;\n  font-size:  ","px;\n  letter-spacing:  ","px;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n  }\n"])),colors_transparent,spaces_xs,colors_blue,spaces_xxl,spaces_l,fontSizes_m,spaces_xs,colors_blue);function Button(_ref){var handleOnShow=_ref.handleOnShow;return(0,jsx_runtime.jsx)(styled_Container,{children:(0,jsx_runtime.jsx)(StyledButton,{onClick:handleOnShow,children:"Show Toast"})})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{handleOnShow:{description:"",type:{name:"func"},required:!0}}};var Button_Button=Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/Button/Button.jsx"});var Toast_styled_templateObject,styled_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),react_spring_esm=__webpack_require__("./node_modules/react-spring/dist/react-spring.esm.js"),Toast_styled_Container=styled_components_browser_esm.ZP.div(Toast_styled_templateObject||(Toast_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: ","px ","px;\n  margin-bottom: ",";\n  color: ",";\n  background-color: ",";\n  border-radius: ","px;\n  box-sizing: border-box;\n  transition: 0.2s;\n  font-family: sans-serif;\n"])),"350px",spaces_s,spaces_l,(function(_ref){return function handleMarginType(gap){switch(gap){case GAP_SMALL:return"".concat(spaces_xxs,"px");case GAP_MEDIUM:return"".concat(spaces_s,"px");case GAP_LARGE:return"".concat(spaces_xl,"px");default:return"".concat(spaces_s,"px")}}(_ref.gap)}),(function(_ref2){var variant=_ref2.variant;return"".concat(variant===TOASTS_WARNING?colors_black:colors_white)}),(function(_ref3){return _ref3.color}),spaces_l),Icon=styled_components_browser_esm.ZP.img(styled_templateObject2||(styled_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  max-width: ",";\n"])),"30px"),Close=styled_components_browser_esm.ZP.button(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  width: 10%;\n  background-color: ",";\n  border: none;\n  position: absolute;\n  top: ","px;\n  right: ","px;\n  cursor: pointer;\n"])),colors_transparent,spaces_s,spaces_xxs),CloseImg=styled_components_browser_esm.ZP.img(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  max-width: ",";\n"])),"30px"),Body=styled_components_browser_esm.ZP.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  font-size: ","px;\n  margin-left: ","px;\n  align-self: flex-start;\n  word-break: break-word;\n"])),fontSizes_m,spaces_xl),Heading=styled_components_browser_esm.ZP.h3(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)([""]))),Content=styled_components_browser_esm.ZP.p(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)([""])));function Toast(_ref){var toast=_ref.toast,onCloseToastClick=_ref.onCloseToastClick,id=toast.id,animation=toast.animation,variant=toast.variant,color=toast.color,content=toast.content,heading=toast.heading,icon=toast.icon,styles=(0,react_spring_esm.useSpring)({from:{y:animation===ANIMATION_BOTTOM?1e3:0,x:animation===ANIMATION_RIGHT_SIDE?500:0},to:{y:0,x:0}});return(0,jsx_runtime.jsxs)(Toast_styled_Container,{style:styles,as:react_spring_esm.animated.div,color:color,variant:variant,gap:toast["space between toasts"],children:[(0,jsx_runtime.jsx)(Icon,{src:icon}),(0,jsx_runtime.jsxs)(Body,{children:[(0,jsx_runtime.jsx)(Heading,{children:heading}),(0,jsx_runtime.jsx)(Content,{children:content})]}),(0,jsx_runtime.jsx)(Close,{onClick:function handleOnCloseToastClick(){onCloseToastClick(id)},children:(0,jsx_runtime.jsx)(CloseImg,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAWNElEQVR42u3dib/Wc97H8fc5R3tSoVIoZMkylkqyZGsMY2fsjG6M3ciNMcMgxrjduY3JFsbSprJL9hRZsrTIVilkL6mEEFNd87hc3J3qnM71u67f8v1+P6/n9y8438/n/T7XOec6v0sCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB16aQz1VeDNEz99Bf10GpcCVaplU7Q9XpQ4/SEBuoydVcll+KjprpI05Vb4czTberA5aBGv9ZYLVlpZ+boCjXncnxSoVP1+UqD/OX8oH5qzCVhOR01utaNyX/jOI0r8kVDDVzFKAtnstpzUfh/+2h+nTszRI24KPetpUl1jjJ/ZutXXBZ+cmoNL/xrOs+qCZfltuaaUNQo82e+unBh0MlaWvTOPK+mXJjL8R9f9Cjz50ttz6UZd0qE+FMBjsf/1UijLFRANy7O9Iv/pZF35jkqwEVrlBD//FmgHbg8o84paWOoACfj/0qJw8xXQHcu0KBzS96YnMby60C34v9yGcPMaaF24xKNOa+sjcnpKf4o6IpmZca/UAG7c5GGnF/2xlABjmiisTEMM6dvtQeXacQFsWwMFRBQ/AsVsCcXSvwjnSfVkAvNMv7PxjjMfAX05FID1yfWjaECMtRYz8Q8zJwWaT8uNmCXxb4xOT1BBWQT/zEJDDNfAftzuYG6PJGNyelxKiCU+Bf+XfgALjhAVyS2MVRA6vEfneAw8xVwEJccmL8nujE5PaYGXHI6GunphIeZr4CDueiAXJn4xlABqcV/VArDzOlHHcJlB6FC16ayMVRAChrokZSGmdNiHc2FBxD/fqltTE6PUgFJqp9i/AsVcCyX7nn8r0t1Y3J6hApILv4jUx5mvgKO4+I9jv/1qW9MTverHlefRPwfzmCY+Qo4nsv3NP43ZrIxVEAi8R+R0TBzWqJeDID4Rzr3UQGhxD9/lvJUeO/i3z/TjcnpXj6FKi719FDGw8xXwOkMwhuVujPzjaECYov/gw4MM18BZzAML1RpgBMbQwXEMsxhjgwzXwFnMRAPNmaQMxuT0z1UQCjxL1TA2QzF8Y0Z7NTG5HQ3FVD6MIc6Nsx8BfRmMA5vzBDnNoYKKHmYdzk4zPy5kOGwMZHOcCrA/5dy1c9FDMjBXxbf7/DGDFcVIwol/vlzMUNyLP4POL4xw6gAP3+PW9u5hEE5o74jfype9blTlYyqbpUa6MEw8+cqhuVI/B/yZGOogCLiP8CTYVIBrsR/hEcbcwcVsCoVutmjYeZPX4aWcfwf9mxjbqcCao9/f8+GmT9XM7jMNMjgCRFUQGLxv8nDYebPNQwvE430lKcbcxsVsHL8b/F0mPnzD1UwwpQ1TuHZ0Mmd/mzM8i71eJgMlPhHP39miMscoqWejzOnG6iA1MT9obDZPGdqXwZZ0EJfej9OXgWkp2mMHwmf5flMTRhm3v8EMU5+uZPWd/9ngtkXfgyQ1FwLgxkoFZC0ZnoxoG2Zp/qM9KiABpo/Q/mnj8SsoZcC25aeDHVwYCPNaSAVkFD8Xw5uV65lrFODG2pOQ6iABH5UfDXATRnDYBcEOFYeBhl//F8Jck+mWh9s/SDHypPg4tVSEwPdkrnWR1uhRcFWAB8PFY8WGh/sjsxgvB8GO1w+Kjqe+E8IeEOeY8CjAx5vTiP4S29Z1tYbQe/Hvxjx+UEPOKfH1ZAhl6hV4PHP6WCG3CnwEef0GBVQktZ6O/DN+F6rM2ZpVPAV8KQaMebI8X8r+L3ox5jzugTwz8B1nWfVlEHz3X+5s1CtGXTBHcEPO6fRasygi9RO7xjYiD8y6F80DPBd3jX9yYef+IqxrmYY2IZBDLq6tpppYOhj+UGgTuvpXQOb8Ay/GF7R+iYG/6KaMWrzW8A3glq638JLv/Fqwahrjf97BjaAXwjXqo2mGFiACWrJqGvQ3kT8+ZNwHRXwtoElmEgF1BD/9w1M/gniXxcLbwDJaZLWZNTVdDDxS2DeFl6UVnrTwDK8prUY9c821scGJs5bwiNUwBsGFmIyFfCTTfSJgWk/yr+GR7G2XjewFFPUxvykN9WnBibNkyEiC/k5MMvOVK1D/IM/PBuqxAp41cByTFNbsxPeTJ8ZmPC9xL9UoT4LdsUKaEf8gz08HLbMCrDwb0LTDVZAJ80yMNnhxL9c4X0cVE1npjqYmurW+sLAVIcR/3gqYJyBZflAG5iZ6DYm4s+nRMYmpI+EXlUFbGgk/nMNTPN2Pic63goYY2BpPtRGwU9yWxPx52PiY9c48E8QKJyPAq+A7TTPwBRvJf7JVMDTJiqgY7AT7Gwi/rcQ/+QqYJSBBZqlzYOcXhfNNzC9m1VBUJPTSE8ZWKLZ2iK4ye2orwxMrj/xT1oDjTRRAVsGNbWd9LWBqV1DPNNQXw8bWKbPtVUwE9vZRPz/j2imVwEjDCzUnEAqYBcT8e9LLNOtgAcNLNV8dfF+Uj30jYFJ/S+RTL8CHjBRAV2Jv/PnKuKYhXq638ByfantvZ3QXvrOwIQuJYpZqdJdJiqgG/F39lxCDLOtgMEGlmyBdvBuMnvrewOT+SsRzL4CBpmogO7E37lzEfFzowIGGli2hdrNm4nsYyL+FxI9dypggIkK2N2LafxWi4KfxVL1JnYuqVB/AxXwrfZwfhL7moj/2UTOvQq40UQF7On0FA7VjwbifxZxc7MCbjBRAT2dncDvTMT/TKLmbgVcb6ACFmk/J2//MP3bQPxPJ2ZuV0A/ExWwv3M3f7iJ+J9GxNyvgH8aqIAfdIBTt36EgfgvUS/i5YcrTVTAQc7c95EG4r9YxxMsf/zdRAUc7MRdH6XFBuL/e0Lll78ZqIAfdUjm93yClhiI/7EEyj+XG6iAxTo60zs+0UT8jyFMfupjogKy++50kon4H02Q/HWBiQo4LpO7/YOB+LvwQxaoAAd/Q32ylvKXFvjgTwYqIO2/UZ9iIv4HEp4wnGegAtJ8l1pvE/E/gOCE41wTFZDO+9TP4c3W8M85JirgTKo04H+3QllONfDCNen/Vbfww5TL/3ANfnWV4dNqzueRK/Cbhb9dJ/W8ugtMxH8PQhI2C+9eS+KJtRbi78tjV1GWE01UQLzPrO9jIv67EQ4bTjBRARfHdl+XmYj/rgTDjqMMPMIiro+ttPBflT5++BrKcqSJCij/g6uvMBH/bgTCnsOpgDpZeLKSzx/AjrIcZqIC+pZ8P1eaiH9XgmCXhY+yyOnqEm7GxtOV56sLIbDtUBMVcE3k+PczEf/OBAAWPs4yp/6qiBD/6wzcyBxtxfJDP32gtYXPs7+5yAqw8QFrnxN/LLOPiQq4RZVFxN/CpyzP1pYsParb20QF3FpHBViJ/xYsPFa0l74zsPy3raICKtTfwA3M0uYsO+xWwO21VEClBhj46j9WRxYdtemhbwyEYKhWW+krrzIR/4+IP1ZtFxMVMGyFCqjSIANf9YfaiAVHXXbW1wbCcHe1CqjSYBPx35DlRjF2MlEB9/xcAVUaYuCr/UAbsNgo1o76ykAo7lU9VekuA1/pTHVgqRFFdxMVcJ/uM/BVTte6LDSi6qx5BsIR/nlH7VhmlGI7KsD7M01tWWSUalvNJUTEH3Ztoy8IkqdnqtZhgVGurakAL88UtWF5EYdOmkWgPDuTtRaLi7hsps8IlUfnNeKPuCvgU4LlyZmkNVlYxG1TKsCLM5H4Ixmb6BMC5viZoJYsKpKysT4mZE7HvwVLiiR10EyC5uh5Uc1YUCStvd4nbA6eF7Q6y4k0rK/3CJxj53nijzQr4F1C59B5Tk1ZSqRpPSrAmTOW+COLCphB+Bw4z6oJy4gstNHbBDDj86QasYjISmsqINPzuBqyhMi2At4iiBmdx4g/stdKbxJG4g/LFfAGgUz5PKIGLB5csbZeJ5QpnpHEH25pofEEM6WT/0ATwDHN9SrhTOHcQ/zhagW8QkATPnfX8NHmgCPW0MuENMEznPjD9Qp4iaAmdIYRf7ivmcYR1gTOHapkueCDJnqGwMZ8bif+8KkCxhDaGM+/iD/80lijCW5M51biDx8r4GnCG8O5RRUsE/ysgFEEuMzTn/jDXw00khCXcf5B/EEFWD3XsD7wX32NIMwlnKtZHYRSAQ8R6IinL2uDkCrgQUId4VzFyiAs9fQAwSb+sKtKQwl3EedSVgWhVsAQAl7HuZg1QcgVMJiQr+L8lRVB6BUwiKDXci5iPWChAgYQ9hrOX1gN2FCpOwn8cmeperMWsKNCNxH7avH/IysBaxVwI9H/Of5nsQ6wWAE3EH8t1RmsAqxWwHXm4386awDLFdDPdPxPYwVgvQKuNRr/JerF+AHpSoPxX6zjGTxQcIW5+B/H0IFl/mYq/scycGB5l5mJ/zEMG1hZHxPxP4pBAzUL/zMFhzNkwO4rAJ74A9ToAjO/BLyEYQPL+5OpPwNSAYDZ+FMBQDXn8/hPgPhTAYAx5/EUYID4UwGAMefyRCAeBg7iTwUAxvw3wa92LmQhQPypAMCAcwg8nwwE4s+hAmBMb4K+ivNnFgTEnwoAiL/RcwGLghCdraXEmwqATacQfz4tGFadTPypABB/Dh8aDmP+QPypABB/TvQKOJMFAvGnAgAPnaQlhLjsCjiDRQLxpwIAj5xI/GOsgNNZKBB/KgDwwAnEnwoA8efEWwGnsVwg/lQA4Kj/Iv4JV8CpLBmIPxUAOKYX8U+pAk5h2UD8qQDAEUdqMcFM8SzR8SwdiD8VABB/oxXwe5YPWTtC/yaMGZ3FVACIPxUAZOJw4u9ABRzHIoL4UwEA8TdaAceykEjTYcSfCgDx51ABMOZ3xN/RCjiG5QTxpwIA4m+0Ao5mSZGUQ/UjIaMCQPw5LlfAUSwr4nYI8acCQPw5flTAkSwtiD8VAJRpXy0iUB6eH3Uwy4ty/Zb4e1wBB7HAIP5UAFCCfYg/FQCrDtAPwcfjFt0c/Nf4gw5gmcF3/5XP7apUhW40UAEHstCIYm99byL+eTYqgFcBIP41xJ8KAMzF/45q8S9UwE1UACD9xmD87VTA/iw4rMf/zhriTwUA2stA/Iepqtavv0L9qQAQf5vxt1MB+7HssBj/4VqtznuoMPHWICoAy/m1viP+hipgkfZl6WEp/ncXGX8qAMTfdPzzKjWACoAFPbQw+FW/J2L8rVTAd+pJAIg/8a+tAgZSAQg7/t8Ev+L3lhj/vCoTFbAnQbBpF+JPBSinb6kA4k/8a6+AQVQAiL9/5z7Vi+WubFTAHoTCjp0NxP/+mOJPBYD4m45/oQIGUwEg/jbjb6cCdicgYdtJXwe/xo+oQSJ3RwWA+Dt/Hk0o/oUKGEIFgPi7ex5LMP52KmA3whKeHYk/FVDkWUgFEH/iX3sF3EUFgPi7dR5Xw9Tu00YF7EpwwtBdXxF/KoAKIP7EP84KGGqgAnoQIOLv+nkig/hTAfBAZ80PfkWfzCj+hQoYFvz9fqUdCBLxJ/5UALyynYn4N8r8nuvpgeDveYG6ESjf4j8v+LV8yoH4UwEg/qbjX6iAB6kAuGJbA/Ef5VD87VTA9oSL+LtwxqqJc/dOBYD4p3KeU1Mn754KQMa20Vzin6H6eij4+/9SXQka8Sf+VACIf8rnecfjX6iAEVQAiL/N+NupgC6Ezh1bG4j/C1rdm3lQAUg1/l8QfyqACiD+xN+lCng4+LnMV2cCmK1fGYj/ix7GnwoA8TcdfyoACeukWcGv1ziP41+ogJHBz2iOtiKM6dvMRPybeT8nKgDE32z8qQAQ/5LOBLUIZl4NqADEGf/PiL93FfAIFQDiX9yZGFj87VTAlgQ0WZuaiH/LIGdnoQI+pwKIf3lnUqDxz2ukUVQAiL/N+NupgC0IaxLx/5T4UwFUgE2bGIj/a1rTxCwb6WkqAMTfZvzzGhuogNnanOASf+JPBaAsGxuI/2Rj8S9UwGgqAHXH/xMD8V/L5GypABB/s/G3UwGdCDLxr+28bjj+VipgFhVQio7E30gFjKECsKIOmhn8WkxVGwZtpAI+VkcGXbz2xJ8KoAKIP/G3UwHPGKiAjRg08S/Efx0GvYImBirgIyqg7vi/H/waTCP+VABqsj7xpwKoAOJP/O1WwLMGKmBDBm0z/u+oLYOmAvQhFbCilprBr/7wk2YaF/wuzDDw6JcIVjPwz6F894/yKmBs8PswVvUZ9C8uNfCzP/HnVcDy5xLGXNBKXwc+6ulqx5gjV8BLgW/FN/xIWHBt8PHnu38p1tDLgW/GdQxZqgz8Yd8z+O7Pq4BazlytxpC7Bz3imerAiHkVUOvZgxGfF/B439W6DLjsCngl4A25jAGH+xuAD/juz6uAOs5Axjs80NG+p/UYbkya69Vg3w1g3pBA3+y5AaPlB4E6z5OM9mriD7MVcCeD7R3gb/7bM9YEtNCE4HalD2Pdiv/0QtG/CwjtVUA3hqqg/g2Y+PPrwOLPbFUyUqlPQH/442f/pLXUxGD25XLGmddUs3nYE8y9CpijZgyz4BQe9IRIrwImBbAxJzHIZW72fJg88z3tVwHj+QNgSOp7/SGRxD99a+o1jzdmDM8DWpG/Hw/Fhz7xKiDaeUGrM76aKsDHp8Lzya/Z8fOtQS8S/9r498EQxJ8KIP6xVoBPT4WfTfypAOIfdwWM9Sb+mzMuKiDCGcdf/sOpAOLvjrX1BvEPifsPgyT+VEC0M0EtGFOUCnD5MVCfawtGRAVEOBOJf1TuPgmO+FMBUePPJwEGUwHEnwqIdiYR/9Ir4BXn4r8lY3G6At4k/lRAcv/ASfxd18qpCiD+ZXPnv7/naCvGQQVEOK9pTcYRSgUQfyqA+GdWAeOJPyJVwFvEnwqI68zXdoyACohwJhP/uGX3ju/56sz1UwGR4r8W1x9KBRB/KiDaeZ34J1cBaT8S+kt14do91lpvp7wxU9Saa09Ouu/1Iv5UQLQzVW248lAqgPhTAcTfyQp4M5X4d+WqqYBI8V+Hq07rlztvEn84VQHTiH84FbBA23PFwVXAFOIfVgW8RfwRQZvEKmCa2nK9oVQA8acCop13iH84P9ktUDeulQog/jYrgPiHb13NiHFjphP/cCrgK+3AdVIBkeLfjut0oQKmEH+kXgHEP6Cf7BaqB9doqgLeLXNjZhD/cDqd+NuzXlkVMFMduMJQOn2hduX6qIAI5wPiH85AiT8bQ/zNDnShduPa2JgI50NtwLW5PND3IgzzW+LPxkTaGOLvvPWLHui32p3rQoSNIf5eaF/Ufwou0C5cFX6ugMlFvem3PVflh9X1UJ3D5Dn/WKaJ7qtjY57gUZ8+qdRxmlnre/4uVVOuCMup0MG1vp1suo5QBVfkm/o6USP1XbVBLtY4XUiToxZVOkSDNLfaxszTUB2pelyNvxprG+2rXjpQ3fmkVhRVA23VRT3VVe1UxXUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARfsPz9baUaZNJjYAAAAASUVORK5CYII=",alt:"close"})})]})}Toast.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{toast:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"{\n  id: PropTypes.string,\n  variant: PropTypes.string,\n  content: PropTypes.string,\n  heading: PropTypes.string,\n  color: PropTypes.string,\n  animation: PropTypes.string,\n  gap: PropTypes.string,\n}"}},required:!0},onCloseToastClick:{description:"",type:{name:"func"},required:!0}}};var Toast_Toast=Toast;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.jsx"]={name:"Toast",docgenInfo:Toast.__docgenInfo,path:"src/components/Toast/Toast.jsx"});var ToastPoartal_styled_templateObject,toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),info_namespaceObject=__webpack_require__.p+"980633d554f116d50975.png",warning_namespaceObject=__webpack_require__.p+"f1679a7a6f71981d6812.png",error_namespaceObject=__webpack_require__.p+"e6f91f2edb882952a1ec.png",success_namespaceObject=__webpack_require__.p+"a354462edb2c84268bb5.png",shared_getDefaultToast=function getDefaultToast(toastVariant){switch(toastVariant){case TOASTS_INFO:return{icon:info_namespaceObject,heading:"Info toast",content:"Info toast description",color:"".concat(toastColors_purple)};case TOASTS_WARNING:return{icon:warning_namespaceObject,heading:"Warning toast",content:"Warning toast description",color:"".concat(toastColors_yellow)};case TOASTS_ERROR:return{icon:error_namespaceObject,heading:"Error toast",content:"Error toast description",color:"".concat(toastColors_tomato)};case TOASTS_SUCCESS:return{icon:success_namespaceObject,heading:"Success toast",content:"Success toast description",color:"".concat(toastColors_green)};default:return{}}},ToastSingletone_ToastSingletone=new(function(){function ToastSingletone(){if((0,classCallCheck.Z)(this,ToastSingletone),ToastSingletone.instance)throw new Error("Toast cannot have more then one instance");ToastSingletone.instance=this,this.toasts=[]}return(0,createClass.Z)(ToastSingletone,[{key:"getToastProperties",value:function getToastProperties(properties){var defaultPeoperties=shared_getDefaultToast(properties.variant);return(0,objectSpread2.Z)((0,objectSpread2.Z)({},properties),{},{id:(0,v4.Z)(),icon:defaultPeoperties.icon,heading:properties.heading||defaultPeoperties.heading,content:properties.content||defaultPeoperties.content,color:properties.color||defaultPeoperties.color})}},{key:"removeToast",value:function removeToast(id){return this.toasts=this.toasts.filter((function(t){return t.id!==id})),this.toasts}},{key:"getToasts",value:function getToasts(properties){return this.toasts.length<3&&(this.toasts=[].concat((0,toConsumableArray.Z)(this.toasts),[this.getToastProperties(properties)])),this.toasts}}]),ToastSingletone}()),hooks_useToastAutoClose=function useToastAutoClose(toasts,removeToast,autoCloseTime){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),removing=_useState2[0],setRemoving=_useState2[1];(0,react.useEffect)((function(){removing&&removeToast(removing)}),[removing]),(0,react.useEffect)((function(){if(toasts.length){var id=toasts[toasts.length-1].id;setTimeout((function(){return setRemoving(id)}),autoCloseTime)}}))},hooks_useToastPortal=function useToastPortal(position){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),loaded=_useState2[0],setLoaded=_useState2[1],_useState3=(0,react.useState)("toast-portal-".concat((0,v4.Z)())),portalId=(0,slicedToArray.Z)(_useState3,1)[0];return(0,react.useLayoutEffect)((function(){var div=document.createElement("div");return div.id=portalId,div.style.cssText="\n      position: fixed;\n      left: ".concat(position.includes("left")?"".concat(spaces_xs,"px"):null,";\n      right: ").concat(position.includes("right")?"".concat(spaces_xs,"px"):null,";\n      top: ").concat(position.includes("top")?"".concat(spaces_xs,"px"):null,";\n      bottom: ").concat(position.includes("bottom")?"".concat(spaces_xs,"px"):null,";\n      z-index: 1000;\n    "),document.getElementsByTagName("body")[0].prepend(div),setLoaded(!0),function(){document.getElementsByTagName("body")[0].removeChild(div)}}),[portalId,position]),{loaded:loaded,portalId:portalId}},ToastPoartal_styled_Container=styled_components_browser_esm.ZP.div(ToastPoartal_styled_templateObject||(ToastPoartal_styled_templateObject=(0,taggedTemplateLiteral.Z)(["\n  gap: ",";\n  display: flex;\n  flex-direction: column;\n"])),spaces_xxs),ToastPortal=(0,react.forwardRef)((function(_ref,ref){var position=_ref.position,autoCloseTime=_ref.autoCloseTime,_useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),toastList=_useState2[0],setToastList=_useState2[1],_useToastPortal=hooks_useToastPortal(position),loaded=_useToastPortal.loaded,portalId=_useToastPortal.portalId,removeToast=function removeToast(id){setToastList(ToastSingletone_ToastSingletone.removeToast(id))};return(0,react.useImperativeHandle)(ref,(function(){return{addToasts:function addToasts(args){setToastList(ToastSingletone_ToastSingletone.getToasts(args))}}})),hooks_useToastAutoClose(toastList,removeToast,autoCloseTime),loaded?(0,react_dom.createPortal)((0,jsx_runtime.jsx)(ToastPoartal_styled_Container,{children:toastList.map((function(t){return(0,jsx_runtime.jsx)(Toast_Toast,{toast:t,onCloseToastClick:removeToast},t.id)}))}),document.getElementById(portalId)):null}));ToastPortal.__docgenInfo={description:"",methods:[],displayName:"ToastPortal",props:{autoCloseTime:{description:"",type:{name:"number"},required:!0},position:{description:"",type:{name:"string"},required:!0}}};var ToastPoartal_ToastPortal=ToastPortal;function ToastContainer(args){var toastRef=(0,react.useRef)();return(0,jsx_runtime.jsxs)(ErrorBoundary_ErrorBoundary,{children:[(0,jsx_runtime.jsx)(ToastPoartal_ToastPortal,(0,objectSpread2.Z)({ref:toastRef},args)),(0,jsx_runtime.jsx)(Button_Button,{handleOnShow:function handleOnShow(){return function handleShowToastClick(properties){toastRef.current.addToasts(properties)}(args)}})]})}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToastPoartal/ToastPortal.jsx"]={name:"ToastPortal",docgenInfo:ToastPortal.__docgenInfo,path:"src/components/ToastPoartal/ToastPortal.jsx"}),ToastContainer.__docgenInfo={description:"",methods:[],displayName:"ToastContainer"};var ToastContainer_ToastContainer=ToastContainer;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToastContainer/ToastContainer.jsx"]={name:"ToastContainer",docgenInfo:ToastContainer.__docgenInfo,path:"src/components/ToastContainer/ToastContainer.jsx"});var Toast_stories={title:"Toast",component:ToastContainer_ToastContainer,argTypes:{color:{description:"Color",control:{type:"color"}},"space between toasts":{description:"Gap between toasts",default:GAP_MEDIUM,options:gaps,control:{type:"radio"}},animation:{description:"Toast position",default:ANIMATION_BOTTOM,options:animations,control:{type:"radio"}},autoCloseTime:{description:"Toast position",default:AUTO_CLOSE_5,options:autoCloseTime,control:{type:"radio"}},position:{description:"Toast position",default:POSITION_TOP_RIGHT,options:positions,control:{type:"radio"}},variant:{type:"string",description:"Toast type",default:TOASTS_INFO,options:variants,control:{type:"radio"}}}},Default=function Default(args){return(0,jsx_runtime.jsx)(ToastContainer_ToastContainer,(0,objectSpread2.Z)({},args))};Default.args={variant:TOASTS_INFO,position:POSITION_TOP_RIGHT,autoCloseTime:AUTO_CLOSE_5,animation:ANIMATION_BOTTOM,"space between toasts":GAP_MEDIUM,heading:"",content:""},Default.parameters=(0,objectSpread2.Z)({storySource:{source:"function Default(args) {\n  return <ToastContainer {...args} />;\n}"}},Default.parameters);var __namedExportsOrder=["Default"];Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Toast.stories.jsx"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"src/stories/Toast.stories.jsx"})},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Toast.stories.jsx":"./src/stories/Toast.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[361],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);