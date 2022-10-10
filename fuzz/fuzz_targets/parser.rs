#![no_main]
use libfuzzer_sys::fuzz_target;

use egg::*;
define_language! {
    enum SimpleLanguage {
        Num(i32),
        "+" = Add([Id; 2]),
        "*" = Mul([Id; 2]),
        Symbol(Symbol),
    }
}
fn make_rules() -> Vec<Rewrite<SimpleLanguage, ()>> {
    vec![
        rewrite!("commute-add"; "(+ ?a ?b)" => "(+ ?b ?a)"),
        rewrite!("commute-mul"; "(* ?a ?b)" => "(* ?b ?a)"),
        rewrite!("add-0"; "(+ ?a 0)" => "?a"),
        rewrite!("mul-0"; "(* ?a 0)" => "0"),
        rewrite!("mul-1"; "(* ?a 1)" => "?a"),
    ]
}

fuzz_target!(|data: &str| {
    let mut expr = RecExpr::default();
let a = expr.add(SymbolLang::leaf(data));
let mut egraph: EGraph<SymbolLang, ()> = Default::default();
let a = egraph.add(SymbolLang::leaf(data));
let foo2 = egraph.add_expr(&expr);
});
