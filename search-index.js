var searchIndex = JSON.parse('{\
"egg":{"doc":"<code>egg</code> (<strong>e</strong>-<strong>g</strong>raphs <strong>g</strong>ood) is a e-graph library optimized for …","i":[[0,"tutorials","egg","A Guide-level Explanation of <code>egg</code><code>egg</code> is a e-graph library …",null,null],[0,"_01_background","egg::tutorials","Concepts: e-graphs and equality saturationAn <em>e-graph</em> is a …",null,null],[0,"_02_getting_started","","My first <code>egg</code> 🐣This tutorial is aimed at getting you up …",null,null],[3,"Id","egg","A key to identify [<code>EClass</code>]es within an [<code>EGraph</code>].",null,null],[3,"Dot","","A wrapper for an [<code>EGraph</code>] that can output GraphViz for …",null,null],[12,"config","","A list of strings to be output top part of the dot file.",0,null],[12,"use_anchors","","Whether or not to anchor the edges in the output. True by …",0,null],[3,"EClass","","An equivalence class of enodes.",null,null],[12,"id","","This eclass\'s id.",1,null],[12,"nodes","","The equivalent enodes in this equivalence class.",1,null],[12,"data","","The analysis data associated with this eclass.",1,null],[3,"EGraph","","A data structure to keep track of equalities between …",null,null],[12,"analysis","","The <code>Analysis</code> given when creating this <code>EGraph</code>.",2,null],[3,"Extractor","","Extracting a single [<code>RecExpr</code>] from an [<code>EGraph</code>].",null,null],[8,"CostFunction","","A cost function that can be used by an [<code>Extractor</code>].",null,null],[16,"Cost","","The <code>Cost</code> type. It only requires <code>PartialOrd</code> so you can use …",3,null],[10,"cost","","Calculates the cost of an enode whose children are <code>Cost</code>s.",3,[[]]],[11,"cost_rec","","Calculates the total cost of a [<code>RecExpr</code>].",3,[[["recexpr",3]]]],[3,"AstSize","","A simple [<code>CostFunction</code>] that counts total ast size.",null,null],[3,"AstDepth","","A simple [<code>CostFunction</code>] that counts maximum ast depth.",null,null],[8,"Language","","Trait that defines a Language whose terms will be in the […",null,null],[10,"matches","","Returns true if this enode matches another enode. This …",4,[[],["bool",15]]],[10,"children","","Returns the children of this e-node.",4,[[]]],[10,"children_mut","","Returns a mutable slice of the children of this e-node.",4,[[]]],[11,"for_each","","Runs a given function on each child <code>Id</code>.",4,[[["fnmut",8]]]],[11,"for_each_mut","","Runs a given function on each child <code>Id</code>, allowing mutation …",4,[[["fnmut",8]]]],[11,"try_for_each","","Runs a falliable function on each child, stopping if the …",4,[[],["result",4]]],[11,"len","","Returns the number of the children this enode has.",4,[[],["usize",15]]],[11,"is_leaf","","Returns true if this enode has no children.",4,[[],["bool",15]]],[11,"update_children","","Runs a given function to replace the children.",4,[[["fnmut",8]]]],[11,"map_children","","Creates a new enode with children determined by the given …",4,[[["fnmut",8]]]],[11,"fold","","Folds over the children, given an initial accumulator.",4,[[]]],[11,"all","","Returns true if the predicate is true on all children. …",4,[[["fnmut",8]],["bool",15]]],[11,"any","","Returns true if the predicate is true on any children. …",4,[[["fnmut",8]],["bool",15]]],[11,"to_recexpr","","Make a <code>RecExpr</code> converting this enodes children to <code>RecExpr</code>s",4,[[],["recexpr",3]]],[8,"FromOp","","A trait for parsing e-nodes. This is implemented …",null,null],[16,"Error","","The error type returned by <code>from_op</code> if its arguments do not…",5,null],[10,"from_op","","Parse an e-node with operator <code>op</code> and children <code>children</code>.",5,[[["vec",3],["id",3],["str",15]],["result",4]]],[3,"FromOpError","","A generic error for failing to parse an operator. This is …",null,null],[8,"LanguageChildren","","A marker that defines acceptable children types for […",null,null],[11,"is_empty","","Checks if there are no children.",6,[[],["bool",15]]],[10,"len","","Returns the number of children.",6,[[],["usize",15]]],[10,"can_be_length","","Checks if n is an acceptable number of children for this …",6,[[["usize",15]],["bool",15]]],[10,"from_vec","","Create an instance of this type from a <code>Vec<Id></code>, with the …",6,[[["vec",3],["id",3]]]],[10,"as_slice","","Returns a slice of the children <code>Id</code>s.",6,[[]]],[10,"as_mut_slice","","Returns a mutable slice of the children <code>Id</code>s.",6,[[]]],[3,"RecExpr","","A recursive expression from a user-defined [<code>Language</code>].",null,null],[4,"RecExprParseError","","An error type for failures when attempting to parse an …",null,null],[13,"EmptySexp","","An empty s-expression was found. Usually this is caused …",7,null],[13,"HeadList","","A list was found where an operator was expected. This is …",7,null],[13,"BadOp","","Attempting to parse an operator into a value of type <code>L</code> …",7,null],[13,"BadSexp","","An error occurred while parsing the s-expression itself, …",7,null],[3,"DidMerge","","Arbitrary data associated with an [<code>EClass</code>].",null,null],[12,"0","","",8,null],[12,"1","","",8,null],[8,"Analysis","","",null,null],[16,"Data","","The per-[<code>EClass</code>] data for this analysis.",9,null],[10,"make","","Makes a new [<code>Analysis</code>] for a given enode [<code>Analysis</code>].",9,[[["egraph",3]]]],[11,"pre_union","","An optional hook that allows inspection before a <code>union</code> …",9,[[["egraph",3],["id",3]]]],[10,"merge","","Defines how to merge two <code>Data</code>s when their containing […",9,[[],["didmerge",3]]],[11,"modify","","A hook that allows the modification of the [<code>EGraph</code>]",9,[[["egraph",3],["id",3]]]],[5,"merge_max","","A utility for implementing [<code>Analysis::merge</code>] when the <code>Data</code>…",null,[[["ord",8]],["didmerge",3]]],[5,"merge_min","","A utility for implementing [<code>Analysis::merge</code>] when the <code>Data</code>…",null,[[["ord",8]],["didmerge",3]]],[3,"SymbolLang","","A simple language used for testing.",null,null],[12,"op","","The operator for an enode",10,null],[12,"children","","The enode\'s children <code>Id</code>s",10,null],[4,"ENodeOrVar","","The language of [<code>Pattern</code>]s.",null,null],[13,"ENode","","An enode from the underlying [<code>Language</code>]",11,null],[13,"Var","","A pattern variable",11,null],[3,"Pattern","","A pattern that can function as either a [<code>Searcher</code>] or […",null,null],[12,"ast","","The actual pattern as a [<code>RecExpr</code>]",12,null],[6,"PatternAst","","A [<code>RecExpr</code>] that represents a [<code>Pattern</code>].",null,null],[3,"SearchMatches","","The result of searching a [<code>Searcher</code>] over one eclass.",null,null],[12,"eclass","","The eclass id that these matches were found in.",13,null],[12,"substs","","The matches themselves.",13,null],[8,"Applier","","The righthand side of a [<code>Rewrite</code>].",null,null],[11,"apply_matches","","Apply many substititions.",14,[[["egraph",3]],[["vec",3],["id",3]]]],[10,"apply_one","","Apply a single substitition.",14,[[["subst",3],["egraph",3],["id",3]],[["vec",3],["id",3]]]],[11,"vars","","Returns a list of variables that this Applier assumes are …",14,[[],[["vec",3],["var",3]]]],[8,"Condition","","A condition to check in a [<code>ConditionalApplier</code>].",null,null],[10,"check","","Check a condition.",15,[[["subst",3],["egraph",3],["id",3]],["bool",15]]],[11,"vars","","Returns a list of variables that this Condition assumes …",15,[[],[["vec",3],["var",3]]]],[3,"ConditionEqual","","A [<code>Condition</code>] that checks if two terms are equivalent.",null,null],[12,"0","","",16,null],[12,"1","","",16,null],[3,"ConditionalApplier","","An [<code>Applier</code>] that checks a [<code>Condition</code>] before applying.",null,null],[12,"condition","","The [<code>Condition</code>] to <code>check</code> before calling <code>apply_one</code> on …",17,null],[12,"applier","","The inner [<code>Applier</code>] to call once <code>condition</code> passes.",17,null],[3,"Rewrite","","A rewrite that searches for the lefthand side and applies …",null,null],[12,"name","","The name of the rewrite.",18,null],[12,"searcher","","The searcher (left-hand side) of the rewrite.",18,null],[12,"applier","","The applier (right-hand side) of the rewrite.",18,null],[8,"Searcher","","The lefthand side of a [<code>Rewrite</code>].",null,null],[10,"search_eclass","","Search one eclass, returning None if no matches can be …",19,[[["egraph",3],["id",3]],[["option",4],["searchmatches",3]]]],[11,"search","","Search the whole [<code>EGraph</code>], returning a list of all the […",19,[[["egraph",3]],[["searchmatches",3],["vec",3]]]],[10,"vars","","Returns a list of the variables bound by this Searcher",19,[[],[["vec",3],["var",3]]]],[3,"Runner","","Faciliates running rewrites over an [<code>EGraph</code>].",null,null],[12,"egraph","","The [<code>EGraph</code>] used.",20,null],[12,"iterations","","Data accumulated over each [<code>Iteration</code>].",20,null],[12,"roots","","The roots of expressions added by the <code>with_expr</code> method, …",20,null],[12,"stop_reason","","Why the <code>Runner</code> stopped. This will be <code>None</code> if it hasn\'t …",20,null],[12,"hooks","","The hooks added by the <code>with_hook</code> method, in insertion …",20,null],[4,"StopReason","","Error returned by [<code>Runner</code>] when it stops.",null,null],[13,"Saturated","","The egraph saturated, i.e., there was an iteration where …",21,null],[13,"IterationLimit","","The iteration limit was hit. The data is the iteration …",21,null],[13,"NodeLimit","","The enode limit was hit. The data is the enode limit.",21,null],[13,"TimeLimit","","The time limit was hit. The data is the time limit in …",21,null],[13,"Other","","Some other reason to stop.",21,null],[3,"Iteration","","Data generated by running a [<code>Runner</code>] one iteration.",null,null],[12,"egraph_nodes","","The number of enodes in the egraph at the start of this …",22,null],[12,"egraph_classes","","The number of eclasses in the egraph at the start of this …",22,null],[12,"applied","","A map from rule name to number of times it was <em>newly</em> …",22,null],[12,"hook_time","","Seconds spent running hooks.",22,null],[12,"search_time","","Seconds spent searching in this iteration.",22,null],[12,"apply_time","","Seconds spent applying rules in this iteration.",22,null],[12,"rebuild_time","","Seconds spent <code>rebuild</code>ing the egraph in this iteration.",22,null],[12,"total_time","","Total time spent in this iteration, including data …",22,null],[12,"data","","The user provided annotation for this iteration",22,null],[12,"n_rebuilds","","The number of rebuild iterations done after this …",22,null],[12,"stop_reason","","If the runner stopped on this iterations, this is the …",22,null],[8,"RewriteScheduler","","A way to customize how a [<code>Runner</code>] runs [<code>Rewrite</code>]s.",null,null],[11,"can_stop","","Whether or not the [<code>Runner</code>] is allowed to say it has …",23,[[["usize",15]],["bool",15]]],[11,"search_rewrite","","A hook allowing you to customize rewrite searching …",23,[[["usize",15],["egraph",3],["rewrite",3]],[["searchmatches",3],["vec",3]]]],[11,"apply_rewrite","","A hook allowing you to customize rewrite application …",23,[[["usize",15],["egraph",3],["searchmatches",3],["rewrite",3],["vec",3]],["usize",15]]],[3,"SimpleScheduler","","A very simple [<code>RewriteScheduler</code>] that runs every rewrite …",null,null],[3,"BackoffScheduler","","A [<code>RewriteScheduler</code>] that implements exponentional rule …",null,null],[8,"IterationData","","Custom data to inject into the [<code>Iteration</code>]s recorded by a …",null,null],[10,"make","","Given the current [<code>Runner</code>], make the data to be put in …",24,[[["runner",3]]]],[3,"Subst","","A substitition mapping [<code>Var</code>]s to eclass [<code>Id</code>]s.",null,null],[3,"Var","","A variable for use in [<code>Pattern</code>]s or [<code>Subst</code>]s.",null,null],[3,"Symbol","","An interned string.",null,null],[14,"define_language","","A macro to easily create a [<code>Language</code>].",null,null],[14,"rewrite","","A macro to easily make [<code>Rewrite</code>]s.",null,null],[14,"test_fn","","Make a test function",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",25,[[]]],[11,"into","","",25,[[]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"from","","",27,[[]]],[11,"into","","",27,[[]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"from","","",28,[[]]],[11,"into","","",28,[[]]],[11,"to_string","","",28,[[],["string",3]]],[11,"borrow","","",28,[[]]],[11,"borrow_mut","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"from","","",29,[[]]],[11,"into","","",29,[[]]],[11,"to_owned","","",29,[[]]],[11,"clone_into","","",29,[[]]],[11,"to_string","","",29,[[],["string",3]]],[11,"borrow","","",29,[[]]],[11,"borrow_mut","","",29,[[]]],[11,"try_from","","",29,[[],["result",4]]],[11,"try_into","","",29,[[],["result",4]]],[11,"type_id","","",29,[[],["typeid",3]]],[11,"equivalent","","",29,[[],["bool",15]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"equivalent","","",10,[[],["bool",15]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"to_string","","",12,[[],["string",3]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"to_string","","",11,[[],["string",3]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"equivalent","","",11,[[],["bool",15]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"to_owned","","",21,[[]]],[11,"clone_into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"from","","",22,[[]]],[11,"into","","",22,[[]]],[11,"to_owned","","",22,[[]]],[11,"clone_into","","",22,[[]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"from","","",30,[[]]],[11,"into","","",30,[[]]],[11,"borrow","","",30,[[]]],[11,"borrow_mut","","",30,[[]]],[11,"try_from","","",30,[[],["result",4]]],[11,"try_into","","",30,[[],["result",4]]],[11,"type_id","","",30,[[],["typeid",3]]],[11,"from","","",31,[[]]],[11,"into","","",31,[[]]],[11,"borrow","","",31,[[]]],[11,"borrow_mut","","",31,[[]]],[11,"try_from","","",31,[[],["result",4]]],[11,"try_into","","",31,[[],["result",4]]],[11,"type_id","","",31,[[],["typeid",3]]],[11,"from","","",32,[[]]],[11,"into","","",32,[[]]],[11,"to_owned","","",32,[[]]],[11,"clone_into","","",32,[[]]],[11,"to_string","","",32,[[],["string",3]]],[11,"borrow","","",32,[[]]],[11,"borrow_mut","","",32,[[]]],[11,"try_from","","",32,[[],["result",4]]],[11,"try_into","","",32,[[],["result",4]]],[11,"type_id","","",32,[[],["typeid",3]]],[11,"equivalent","","",32,[[],["bool",15]]],[11,"from","","",33,[[]]],[11,"into","","",33,[[]]],[11,"to_owned","","",33,[[]]],[11,"clone_into","","",33,[[]]],[11,"borrow","","",33,[[]]],[11,"borrow_mut","","",33,[[]]],[11,"try_from","","",33,[[],["result",4]]],[11,"try_into","","",33,[[],["result",4]]],[11,"type_id","","",33,[[],["typeid",3]]],[11,"equivalent","","",33,[[],["bool",15]]],[11,"from","","",34,[[]]],[11,"into","","",34,[[]]],[11,"to_owned","","",34,[[]]],[11,"clone_into","","",34,[[]]],[11,"to_string","","",34,[[],["string",3]]],[11,"borrow","","",34,[[]]],[11,"borrow_mut","","",34,[[]]],[11,"try_from","","",34,[[],["result",4]]],[11,"try_into","","",34,[[],["result",4]]],[11,"type_id","","",34,[[],["typeid",3]]],[11,"equivalent","","",34,[[],["bool",15]]],[11,"from","","",35,[[]]],[11,"into","","",35,[[]]],[11,"to_owned","","",35,[[]]],[11,"clone_into","","",35,[[]]],[11,"to_string","","",35,[[],["string",3]]],[11,"borrow","","",35,[[]]],[11,"borrow_mut","","",35,[[]]],[11,"try_from","","",35,[[],["result",4]]],[11,"try_into","","",35,[[],["result",4]]],[11,"type_id","","",35,[[],["typeid",3]]],[11,"equivalent","","",35,[[],["bool",15]]],[11,"cost","","",26,[[]]],[11,"cost","","",27,[[]]],[11,"matches","","",10,[[],["bool",15]]],[11,"children","","",10,[[]]],[11,"children_mut","","",10,[[]]],[11,"matches","","",11,[[],["bool",15]]],[11,"children","","",11,[[]]],[11,"children_mut","","",11,[[]]],[11,"from_op","","",10,[[["vec",3],["id",3],["str",15]],["result",4]]],[11,"from_op","","",11,[[["vec",3],["id",3],["str",15]],["result",4]]],[11,"len","","",35,[[],["usize",15]]],[11,"can_be_length","","",35,[[["usize",15]],["bool",15]]],[11,"from_vec","","",35,[[["vec",3],["id",3]]]],[11,"as_slice","","",35,[[]]],[11,"as_mut_slice","","",35,[[]]],[11,"search","","",12,[[["egraph",3]],[["searchmatches",3],["vec",3]]]],[11,"search_eclass","","",12,[[["egraph",3],["id",3]],[["option",4],["searchmatches",3]]]],[11,"vars","","",12,[[],[["vec",3],["var",3]]]],[11,"apply_one","","",12,[[["egraph",3],["subst",3],["id",3]],[["vec",3],["id",3]]]],[11,"vars","","",12,[[],[["vec",3],["var",3]]]],[11,"apply_matches","","",12,[[["egraph",3]],[["vec",3],["id",3]]]],[11,"apply_one","","",17,[[["subst",3],["egraph",3],["id",3]],[["vec",3],["id",3]]]],[11,"vars","","",17,[[],[["vec",3],["var",3]]]],[11,"check","","",16,[[["subst",3],["egraph",3],["id",3]],["bool",15]]],[11,"vars","","",16,[[],[["vec",3],["var",3]]]],[11,"can_stop","","",31,[[["usize",15]],["bool",15]]],[11,"search_rewrite","","",31,[[["usize",15],["egraph",3],["rewrite",3]],[["searchmatches",3],["vec",3]]]],[11,"as_ref","","",29,[[]]],[11,"from","","",29,[[["vec",3]]]],[11,"from","","",12,[[]]],[11,"from","","",12,[[["patternast",6]]]],[11,"from","","",34,[[]]],[11,"from","","",35,[[["usize",15]],["id",3]]],[11,"clone","","",1,[[],["eclass",3]]],[11,"clone","","",2,[[],["egraph",3]]],[11,"clone","","",29,[[],["recexpr",3]]],[11,"clone","","",10,[[],["symbollang",3]]],[11,"clone","","",12,[[],["pattern",3]]],[11,"clone","","",11,[[],["enodeorvar",4]]],[11,"clone","","",18,[[],["rewrite",3]]],[11,"clone","","",17,[[],["conditionalapplier",3]]],[11,"clone","","",21,[[],["stopreason",4]]],[11,"clone","","",22,[[],["iteration",3]]],[11,"clone","","",32,[[],["var",3]]],[11,"clone","","",33,[[],["subst",3]]],[11,"clone","","",34,[[],["symbol",3]]],[11,"clone","","",35,[[],["id",3]]],[11,"default","","",2,[[]]],[11,"default","","",29,[[]]],[11,"default","","",20,[[]]],[11,"default","","",31,[[]]],[11,"default","","",33,[[],["subst",3]]],[11,"default","","",35,[[],["id",3]]],[11,"cmp","","",29,[[["recexpr",3]],["ordering",4]]],[11,"cmp","","",10,[[["symbollang",3]],["ordering",4]]],[11,"cmp","","",11,[[["enodeorvar",4]],["ordering",4]]],[11,"cmp","","",32,[[["var",3]],["ordering",4]]],[11,"cmp","","",33,[[["subst",3]],["ordering",4]]],[11,"cmp","","",34,[[["symbol",3]],["ordering",4]]],[11,"cmp","","",35,[[["id",3]],["ordering",4]]],[11,"eq","","",29,[[["recexpr",3]],["bool",15]]],[11,"ne","","",29,[[["recexpr",3]],["bool",15]]],[11,"eq","","",10,[[["symbollang",3]],["bool",15]]],[11,"ne","","",10,[[["symbollang",3]],["bool",15]]],[11,"eq","","",12,[[["pattern",3]],["bool",15]]],[11,"ne","","",12,[[["pattern",3]],["bool",15]]],[11,"eq","","",11,[[["enodeorvar",4]],["bool",15]]],[11,"ne","","",11,[[["enodeorvar",4]],["bool",15]]],[11,"eq","","",32,[[["var",3]],["bool",15]]],[11,"ne","","",32,[[["var",3]],["bool",15]]],[11,"eq","","",33,[[["subst",3]],["bool",15]]],[11,"ne","","",33,[[["subst",3]],["bool",15]]],[11,"eq","","",34,[[["symbol",3]],["bool",15]]],[11,"ne","","",34,[[["symbol",3]],["bool",15]]],[11,"eq","","",35,[[["id",3]],["bool",15]]],[11,"ne","","",35,[[["id",3]],["bool",15]]],[11,"partial_cmp","","",29,[[["recexpr",3]],[["option",4],["ordering",4]]]],[11,"lt","","",29,[[["recexpr",3]],["bool",15]]],[11,"le","","",29,[[["recexpr",3]],["bool",15]]],[11,"gt","","",29,[[["recexpr",3]],["bool",15]]],[11,"ge","","",29,[[["recexpr",3]],["bool",15]]],[11,"partial_cmp","","",10,[[["symbollang",3]],[["option",4],["ordering",4]]]],[11,"lt","","",10,[[["symbollang",3]],["bool",15]]],[11,"le","","",10,[[["symbollang",3]],["bool",15]]],[11,"gt","","",10,[[["symbollang",3]],["bool",15]]],[11,"ge","","",10,[[["symbollang",3]],["bool",15]]],[11,"partial_cmp","","",11,[[["enodeorvar",4]],[["option",4],["ordering",4]]]],[11,"lt","","",11,[[["enodeorvar",4]],["bool",15]]],[11,"le","","",11,[[["enodeorvar",4]],["bool",15]]],[11,"gt","","",11,[[["enodeorvar",4]],["bool",15]]],[11,"ge","","",11,[[["enodeorvar",4]],["bool",15]]],[11,"partial_cmp","","",32,[[["var",3]],[["option",4],["ordering",4]]]],[11,"lt","","",32,[[["var",3]],["bool",15]]],[11,"le","","",32,[[["var",3]],["bool",15]]],[11,"gt","","",32,[[["var",3]],["bool",15]]],[11,"ge","","",32,[[["var",3]],["bool",15]]],[11,"partial_cmp","","",33,[[["subst",3]],[["option",4],["ordering",4]]]],[11,"lt","","",33,[[["subst",3]],["bool",15]]],[11,"le","","",33,[[["subst",3]],["bool",15]]],[11,"gt","","",33,[[["subst",3]],["bool",15]]],[11,"ge","","",33,[[["subst",3]],["bool",15]]],[11,"partial_cmp","","",34,[[["symbol",3]],[["option",4],["ordering",4]]]],[11,"lt","","",34,[[["symbol",3]],["bool",15]]],[11,"le","","",34,[[["symbol",3]],["bool",15]]],[11,"gt","","",34,[[["symbol",3]],["bool",15]]],[11,"ge","","",34,[[["symbol",3]],["bool",15]]],[11,"partial_cmp","","",35,[[["id",3]],[["option",4],["ordering",4]]]],[11,"lt","","",35,[[["id",3]],["bool",15]]],[11,"le","","",35,[[["id",3]],["bool",15]]],[11,"gt","","",35,[[["id",3]],["bool",15]]],[11,"ge","","",35,[[["id",3]],["bool",15]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",25,[[["formatter",3]],["result",6]]],[11,"fmt","","",26,[[["formatter",3]],["result",6]]],[11,"fmt","","",27,[[["formatter",3]],["result",6]]],[11,"fmt","","",28,[[["formatter",3]],["result",6]]],[11,"fmt","","",29,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",20,[[["formatter",3]],["result",6]]],[11,"fmt","","",21,[[["formatter",3]],["result",6]]],[11,"fmt","","",22,[[["formatter",3]],["result",6]]],[11,"fmt","","",30,[[["formatter",3]],["result",6]]],[11,"fmt","","",31,[[["formatter",3]],["result",6]]],[11,"fmt","","",32,[[["formatter",3]],["result",6]]],[11,"fmt","","",33,[[["formatter",3]],["result",6]]],[11,"fmt","","",34,[[["formatter",3]],["result",6]]],[11,"fmt","","",35,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",28,[[["formatter",3]],["result",6]]],[11,"fmt","","",29,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",32,[[["formatter",3]],["result",6]]],[11,"fmt","","",34,[[["formatter",3]],["result",6]]],[11,"fmt","","",35,[[["formatter",3]],["result",6]]],[11,"bitor","","",8,[[]]],[11,"index","","",2,[[["id",3]]]],[11,"index","","",29,[[["id",3]]]],[11,"index","","",33,[[["var",3]]]],[11,"index_mut","","",2,[[["id",3]]]],[11,"index_mut","","",29,[[["id",3]]]],[11,"hash","","",29,[[]]],[11,"hash","","",10,[[]]],[11,"hash","","",11,[[]]],[11,"hash","","",32,[[]]],[11,"hash","","",33,[[]]],[11,"hash","","",34,[[]]],[11,"hash","","",35,[[]]],[11,"try_from","","",29,[[["pattern",3]],["result",4]]],[11,"from_str","","",29,[[["str",15]],["result",4]]],[11,"from_str","","",12,[[["str",15]],["result",4]]],[11,"from_str","","",32,[[["str",15]],["result",4]]],[11,"from_str","","",34,[[["str",15]],["result",4]]],[11,"source","","",7,[[],[["option",4],["error",8]]]],[11,"to_dot","","Writes the <code>Dot</code> to a .dot file with the given filename. …",0,[[],["result",6]]],[11,"with_config_line","","Adds a line to the dot output. Indentation and a newline …",0,[[]]],[11,"with_anchors","","Set whether or not to anchor the edges in the output.",0,[[["bool",15]]]],[11,"to_png","","Renders the <code>Dot</code> to a .png file with the given filename. …",0,[[],["result",6]]],[11,"to_svg","","Renders the <code>Dot</code> to a .svg file with the given filename. …",0,[[],["result",6]]],[11,"to_pdf","","Renders the <code>Dot</code> to a .pdf file with the given filename. …",0,[[],["result",6]]],[11,"run_dot","","Invokes <code>dot</code> with the given arguments, piping this …",0,[[],["result",6]]],[11,"run","","Invokes some program with the given arguments, piping this…",0,[[],["result",6]]],[11,"is_empty","","Returns <code>true</code> if the <code>eclass</code> is empty.",1,[[],["bool",15]]],[11,"len","","Returns the number of enodes in this eclass.",1,[[],["usize",15]]],[11,"iter","","Iterates over the enodes in this eclass.",1,[[]]],[11,"leaves","","Iterates over the childless enodes in this eclass.",1,[[]]],[11,"assert_unique_leaves","","Asserts that the childless enodes in this eclass are …",1,[[]]],[11,"new","","Creates a new, empty <code>EGraph</code> with the given <code>Analysis</code>",2,[[]]],[11,"classes","","Returns an iterator over the eclasses in the egraph.",2,[[]]],[11,"classes_mut","","Returns an mutating iterator over the eclasses in the …",2,[[]]],[11,"is_empty","","Returns <code>true</code> if the egraph is empty",2,[[],["bool",15]]],[11,"total_size","","Returns the number of enodes in the <code>EGraph</code>.",2,[[],["usize",15]]],[11,"total_number_of_nodes","","Iterates over the classes, returning the total number of …",2,[[],["usize",15]]],[11,"number_of_classes","","Returns the number of eclasses in the egraph.",2,[[],["usize",15]]],[11,"find","","Canonicalizes an eclass id.",2,[[["id",3]],["id",3]]],[11,"dot","","Creates a [<code>Dot</code>] to visualize this egraph. See [<code>Dot</code>].",2,[[],["dot",3]]],[11,"add_expr","","Adds a [<code>RecExpr</code>] to the [<code>EGraph</code>].",2,[[["recexpr",3]],["id",3]]],[11,"lookup","","Lookup the eclass of the given enode.",2,[[],[["id",3],["option",4]]]],[11,"lookup_expr","","Lookup the eclass of the given [<code>RecExpr</code>].",2,[[["recexpr",3]],[["id",3],["option",4]]]],[11,"add","","Adds an enode to the [<code>EGraph</code>].",2,[[],["id",3]]],[11,"equivs","","Checks whether two [<code>RecExpr</code>]s are equivalent. Returns a …",2,[[["recexpr",3]],[["vec",3],["id",3]]]],[11,"union","","Unions two eclasses given their ids.",2,[[["id",3]]]],[11,"dump","","Returns a more debug-able representation of the egraph.",2,[[]]],[11,"check_goals","","Panic if the given eclass doesn\'t contain the given …",2,[[["id",3]]]],[11,"rebuild","","Restores the egraph invariants of congruence and enode …",2,[[],["usize",15]]],[11,"cost_rec","","Calculates the total cost of a [<code>RecExpr</code>].",3,[[["recexpr",3]]]],[11,"new","","Create a new <code>Extractor</code> given an <code>EGraph</code> and a <code>CostFunction</code>.",25,[[["egraph",3]]]],[11,"find_best","","Find the cheapest (lowest cost) represented <code>RecExpr</code> in the…",25,[[["id",3]]]],[11,"find_best_with_ids","","Find the cheapest (lowest cost) represented <code>RecExpr</code> in the…",25,[[["id",3]]]],[11,"find_best_node","","Find the cheapest e-node in the given e-class.",25,[[["id",3]]]],[11,"find_best_cost","","Find the cost of the term that would be extracted from …",25,[[["id",3]]]],[11,"for_each","","Runs a given function on each child <code>Id</code>.",4,[[["fnmut",8]]]],[11,"for_each_mut","","Runs a given function on each child <code>Id</code>, allowing mutation …",4,[[["fnmut",8]]]],[11,"try_for_each","","Runs a falliable function on each child, stopping if the …",4,[[],["result",4]]],[11,"len","","Returns the number of the children this enode has.",4,[[],["usize",15]]],[11,"is_leaf","","Returns true if this enode has no children.",4,[[],["bool",15]]],[11,"update_children","","Runs a given function to replace the children.",4,[[["fnmut",8]]]],[11,"map_children","","Creates a new enode with children determined by the given …",4,[[["fnmut",8]]]],[11,"fold","","Folds over the children, given an initial accumulator.",4,[[]]],[11,"all","","Returns true if the predicate is true on all children. …",4,[[["fnmut",8]],["bool",15]]],[11,"any","","Returns true if the predicate is true on any children. …",4,[[["fnmut",8]],["bool",15]]],[11,"to_recexpr","","Make a <code>RecExpr</code> converting this enodes children to <code>RecExpr</code>s",4,[[],["recexpr",3]]],[11,"new","","Create a new <code>FromOpError</code> representing a failed call …",28,[[["vec",3],["id",3],["str",15]]]],[11,"is_empty","","Checks if there are no children.",6,[[],["bool",15]]],[11,"add","","Adds a given enode to this <code>RecExpr</code>. The enode\'s children …",29,[[],["id",3]]],[11,"pretty","","Pretty print with a maximum line length.",29,[[["usize",15]],["string",3]]],[11,"pre_union","","An optional hook that allows inspection before a <code>union</code> …",9,[[["egraph",3],["id",3]]]],[11,"modify","","A hook that allows the modification of the [<code>EGraph</code>]",9,[[["egraph",3],["id",3]]]],[11,"new","","Create an enode with the given string and children",10,[[["vec",3],["id",3]]]],[11,"leaf","","Create childless enode with the given string",10,[[]]],[11,"vars","","Returns a list of the [<code>Var</code>]s in this pattern.",12,[[],[["vec",3],["var",3]]]],[11,"pretty","","Pretty print this pattern as a sexp with the given width",12,[[["usize",15]],["string",3]]],[11,"name","","Returns the name of the rewrite.",18,[[],["str",15]]],[11,"new","","Create a new [<code>Rewrite</code>]. You typically want to use the […",18,[[],[["result",4],["string",3]]]],[11,"search","","Call <code>search</code> on the [<code>Searcher</code>].",18,[[["egraph",3]],[["searchmatches",3],["vec",3]]]],[11,"apply","","Call <code>apply_matches</code> on the [<code>Applier</code>].",18,[[["egraph",3]],[["vec",3],["id",3]]]],[11,"search","","Search the whole [<code>EGraph</code>], returning a list of all the […",19,[[["egraph",3]],[["searchmatches",3],["vec",3]]]],[11,"apply_matches","","Apply many substititions.",14,[[["egraph",3]],[["vec",3],["id",3]]]],[11,"vars","","Returns a list of variables that this Applier assumes are …",14,[[],[["vec",3],["var",3]]]],[11,"vars","","Returns a list of variables that this Condition assumes …",15,[[],[["vec",3],["var",3]]]],[11,"parse","","Create a ConditionEqual by parsing two pattern strings.",16,[[["str",15]]]],[11,"new","","Create a new <code>Runner</code> with the given analysis and default …",20,[[]]],[11,"with_iter_limit","","Sets the iteration limit. Default: 30",20,[[["usize",15]]]],[11,"with_node_limit","","Sets the egraph size limit (in enodes). Default: 10,000",20,[[["usize",15]]]],[11,"with_time_limit","","Sets the runner time limit. Default: 5 seconds",20,[[["duration",3]]]],[11,"with_hook","","Add a hook to instrument or modify the behavior of a […",20,[[]]],[11,"with_scheduler","","Change out the [<code>RewriteScheduler</code>] used by this [<code>Runner</code>]. …",20,[[]]],[11,"with_expr","","Add an expression to the egraph to be run.",20,[[["recexpr",3]]]],[11,"with_egraph","","Replace the [<code>EGraph</code>] of this <code>Runner</code>.",20,[[["egraph",3]]]],[11,"run","","Run this <code>Runner</code> until it stops. After this, the field …",20,[[]]],[11,"print_report","","Prints some information about a runners run.",20,[[]]],[11,"can_stop","","Whether or not the [<code>Runner</code>] is allowed to say it has …",23,[[["usize",15]],["bool",15]]],[11,"search_rewrite","","A hook allowing you to customize rewrite searching …",23,[[["usize",15],["egraph",3],["rewrite",3]],[["searchmatches",3],["vec",3]]]],[11,"apply_rewrite","","A hook allowing you to customize rewrite application …",23,[[["usize",15],["egraph",3],["searchmatches",3],["rewrite",3],["vec",3]],["usize",15]]],[11,"with_initial_match_limit","","Set the initial match limit after which a rule will be …",31,[[["usize",15]]]],[11,"with_ban_length","","Set the initial ban length. Default: 5 iterations",31,[[["usize",15]]]],[11,"do_not_ban","","Never ban a particular rule.",31,[[["str",15]]]],[11,"rule_match_limit","","Set the initial match limit for a rule.",31,[[["usize",15],["str",15]]]],[11,"rule_ban_length","","Set the initial ban length for a rule.",31,[[["usize",15],["str",15]]]],[11,"with_capacity","","Create a <code>Subst</code> with the given initial capacity",33,[[["usize",15]]]],[11,"insert","","Insert something, returning the old <code>Id</code> if present.",33,[[["id",3],["var",3]],[["id",3],["option",4]]]],[11,"get","","Retrieve a <code>Var</code>, returning <code>None</code> if not present.",33,[[["var",3]],[["id",3],["option",4]]]],[11,"as_str","","Get the string that this symbol represents",34,[[],["str",15]]]],"p":[[3,"Dot"],[3,"EClass"],[3,"EGraph"],[8,"CostFunction"],[8,"Language"],[8,"FromOp"],[8,"LanguageChildren"],[4,"RecExprParseError"],[3,"DidMerge"],[8,"Analysis"],[3,"SymbolLang"],[4,"ENodeOrVar"],[3,"Pattern"],[3,"SearchMatches"],[8,"Applier"],[8,"Condition"],[3,"ConditionEqual"],[3,"ConditionalApplier"],[3,"Rewrite"],[8,"Searcher"],[3,"Runner"],[4,"StopReason"],[3,"Iteration"],[8,"RewriteScheduler"],[8,"IterationData"],[3,"Extractor"],[3,"AstSize"],[3,"AstDepth"],[3,"FromOpError"],[3,"RecExpr"],[3,"SimpleScheduler"],[3,"BackoffScheduler"],[3,"Var"],[3,"Subst"],[3,"Symbol"],[3,"Id"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);