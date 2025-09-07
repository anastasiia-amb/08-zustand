module.exports = [
"[project]/08-zustand/components/NoteForm/NoteForm.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "NoteForm-module__K1q7iW__actions",
  "cancelButton": "NoteForm-module__K1q7iW__cancelButton",
  "error": "NoteForm-module__K1q7iW__error",
  "form": "NoteForm-module__K1q7iW__form",
  "formGroup": "NoteForm-module__K1q7iW__formGroup",
  "input": "NoteForm-module__K1q7iW__input",
  "select": "NoteForm-module__K1q7iW__select",
  "submitButton": "NoteForm-module__K1q7iW__submitButton",
  "textarea": "NoteForm-module__K1q7iW__textarea",
});
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/08-zustand/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNote",
    ()=>createNote,
    "deleteNote",
    ()=>deleteNote,
    "fetchNoteById",
    ()=>fetchNoteById,
    "fetchNotes",
    ()=>fetchNotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/08-zustand/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const fetchNotes = async (page, query, tag)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`https://notehub-public.goit.study/api/notes`, {
        params: {
            page: page,
            perPage: 12,
            search: query,
            tag: tag
        },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYmFybm92YTk0QGdtYWlsLmNvbSIsImlhdCI6MTc1NTI2OTg3M30.m8QD7pm1ITqh3vce6ypvZky3Nmj4fOQeLM_vNkQ8M3Q")}`
        }
    });
    return response.data;
};
const fetchNoteById = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`https://notehub-public.goit.study/api/notes/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYmFybm92YTk0QGdtYWlsLmNvbSIsImlhdCI6MTc1NTI2OTg3M30.m8QD7pm1ITqh3vce6ypvZky3Nmj4fOQeLM_vNkQ8M3Q")}`
        }
    });
    return response.data;
};
const createNote = async (newNote)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`https://notehub-public.goit.study/api/notes`, newNote, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYmFybm92YTk0QGdtYWlsLmNvbSIsImlhdCI6MTc1NTI2OTg3M30.m8QD7pm1ITqh3vce6ypvZky3Nmj4fOQeLM_vNkQ8M3Q")}`
        }
    });
    return response.data;
};
const deleteNote = async (id)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`https://notehub-public.goit.study/api/notes/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYmFybm92YTk0QGdtYWlsLmNvbSIsImlhdCI6MTc1NTI2OTg3M30.m8QD7pm1ITqh3vce6ypvZky3Nmj4fOQeLM_vNkQ8M3Q")}`
        }
    });
    return response.data;
};
}),
"[project]/08-zustand/lib/store/noteStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNoteStore",
    ()=>useNoteStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/08-zustand/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/08-zustand/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const initialDraft = {
    title: "",
    content: "",
    tag: "Todo"
};
const useNoteStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        draft: initialDraft,
        setDraft: (draft)=>set({
                draft
            }),
        clearDraft: ()=>set({
                draft: initialDraft
            })
    }), {
    name: "note-draft",
    partialize: (state)=>({
            draft: state.draft
        })
}));
}),
"[project]/08-zustand/components/NoteForm/NoteForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NoteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/08-zustand/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/08-zustand/components/NoteForm/NoteForm.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/08-zustand/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/08-zustand/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/08-zustand/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/08-zustand/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$lib$2f$store$2f$noteStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/08-zustand/lib/store/noteStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function NoteForm() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { draft, setDraft, clearDraft } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$lib$2f$store$2f$noteStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNoteStore"])();
    const createNoteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNote"],
        onSuccess: ()=>{
            clearDraft();
            queryClient.invalidateQueries({
                queryKey: [
                    "notes"
                ]
            });
            router.back();
        }
    });
    const handleChange = (event)=>{
        setDraft({
            ...draft,
            [event.target.name]: event.target.value
        });
    };
    const createNewNote = (formData)=>{
        const newNote = {
            title: String(formData.get("title") ?? ""),
            content: String(formData.get("content") ?? ""),
            tag: String(formData.get("tag"))
        };
        createNoteMutation.mutate(newNote);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
        action: createNewNote,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "title",
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "title",
                        type: "text",
                        name: "title",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                        value: draft?.title,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "content",
                        children: "Content"
                    }, void 0, false, {
                        fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "content",
                        name: "content",
                        rows: 8,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea,
                        value: draft?.content,
                        onChange: handleChange,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "tag",
                        children: "Tag"
                    }, void 0, false, {
                        fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "tag",
                        name: "tag",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                        onChange: handleChange,
                        value: draft?.tag,
                        required: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Todo",
                                children: "Todo"
                            }, void 0, false, {
                                fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Work",
                                children: "Work"
                            }, void 0, false, {
                                fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Personal",
                                children: "Personal"
                            }, void 0, false, {
                                fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Meeting",
                                children: "Meeting"
                            }, void 0, false, {
                                fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Shopping",
                                children: "Shopping"
                            }, void 0, false, {
                                fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelButton,
                        onClick: ()=>router.back(),
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$08$2d$zustand$2f$components$2f$NoteForm$2f$NoteForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                        disabled: false,
                        children: "Create note"
                    }, void 0, false, {
                        fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/08-zustand/components/NoteForm/NoteForm.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a9d72b6e._.js.map