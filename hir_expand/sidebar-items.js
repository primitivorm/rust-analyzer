initSidebarItems({"enum":[["ExpandError",""],["ExpandTo","In Rust, macros expand token trees to token trees. When we want to turn a token tree into an AST node, we need to figure out what kind of AST node we want: something like `foo` can be a type, an expression, or a pattern."],["MacroCallKind",""],["MacroDefKind",""],["Origin",""]],"macro":[["__known_path",""],["__path",""],["name",""],["quote","FIXME: It probably should implement in proc-macro"]],"mod":[["ast_id_map","`AstIdMap` allows to create stable IDs for “large” syntax nodes like items and macro calls."],["builtin_attr_macro","Builtin attributes."],["builtin_derive_macro","Builtin derives."],["builtin_fn_macro","Builtin macro"],["db","Defines database & queries for macro expansion."],["eager","Eager expansion related utils"],["hygiene","This modules handles hygiene information."],["mod_path","A lowering for `use`-paths (more generally, paths without angle-bracketed segments)."],["name","See [`Name`]."],["proc_macro","Proc Macro Expander stub"],["quote","A simplified version of quote-crate like quasi quote macro"]],"struct":[["ExpandResult",""],["ExpansionInfo","ExpansionInfo mainly describes how to map text range between src and expanded macro"],["HirFileId","Input to the analyzer is a set of files, where each file is identified by `FileId` and contains source code. However, another source of source code in Rust are macros: each macro can be thought of as producing a “temporary file”. To assign an id to such a file, we use the id of the macro call that produced the file. So, a `HirFileId` is either a `FileId` (source code written by user), or a `MacroCallId` (source code produced by macro)."],["InFile","`InFile<T>` stores a value of `T` inside a particular file/syntax tree."],["MacroCallId","`MacroCallId` identifies a particular macro invocation, like `println!(\"Hello, {}\", world)`."],["MacroCallLoc",""],["MacroDefId",""],["MacroFile",""],["UnresolvedMacro",""]],"type":[["AstId","`AstId` points to an AST node in any file."]]});