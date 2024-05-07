import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './inter2.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VAvatar', typeof __VLS_localComponents, "VAvatar", "vAvatar", "v-avatar"> &
__VLS_WithComponent<'VIcon', typeof __VLS_localComponents, "VIcon", "vIcon", "v-icon">;
__VLS_intrinsicElements.div;
__VLS_components.VAvatar; __VLS_components.VAvatar; __VLS_components.vAvatar; __VLS_components.vAvatar; __VLS_components["v-avatar"]; __VLS_components["v-avatar"];
// @ts-ignore
[VAvatar, VAvatar,];
__VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components["v-icon"]; __VLS_components["v-icon"];
// @ts-ignore
[VIcon, VIcon,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("d-flex align-center justify-space-around"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("d-flex align-center justify-space-around"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'VAvatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': typeof __VLS_ctx.VAvatar; } : 'vAvatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': typeof __VLS_ctx.vAvatar; } : 'v-avatar' extends keyof typeof __VLS_ctx ? { 'VAvatar': (typeof __VLS_ctx)["v-avatar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VAvatar;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, color: ("info"), }));
({} as { VAvatar: typeof __VLS_5; }).VAvatar;
({} as { VAvatar: typeof __VLS_5; }).VAvatar;
const __VLS_7 = __VLS_6({ ...{}, color: ("info"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, color: ("info"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'VIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.VIcon; } : 'vIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.vIcon; } : 'v-icon' extends keyof typeof __VLS_ctx ? { 'VIcon': (typeof __VLS_ctx)["v-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VIcon;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, icon: ("mdi-account-circle"), }));
({} as { VIcon: typeof __VLS_10; }).VIcon;
({} as { VIcon: typeof __VLS_10; }).VIcon;
const __VLS_12 = __VLS_11({ ...{}, icon: ("mdi-account-circle"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, icon: ("mdi-account-circle"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
