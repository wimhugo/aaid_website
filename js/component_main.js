function make_docs_list_item(args) {
    
    var docs_list_item='';
    
    docs_list_item=docs_list_item+'<ul class="collapsible collapsible-accordion">';
    docs_list_item=docs_list_item+'<li>';
    docs_list_item=docs_list_item+'<a class="collapsible-header grey lighten-2">General Guidance<i class="material-icons">arrow_drop_down</i></a>';
    docs_list_item=docs_list_item+'<div class="collapsible-body">';
    docs_list_item=docs_list_item+'<ul>';
    docs_list_item=docs_list_item+'<li><a href="#!">Open Data</a></li>';
    docs_list_item=docs_list_item+'<li><a href="#!">Distributed, Open Architecture</a></li>';                  
    docs_list_item=docs_list_item+'<li><a href="#!">Persistent Identifiers</a></li>';
    docs_list_item=docs_list_item+'<li><a href="#!">Data Management Plans</a></li>';
    docs_list_item=docs_list_item+'<li><a href="#!">Data Curation</a></li>';
    docs_list_item=docs_list_item+'<li><a href="#!">Accreditation and Trust</a></li>';              
    docs_list_item=docs_list_item+'</ul>';
    docs_list_item=docs_list_item+'</div>';
    docs_list_item=docs_list_item+'</li>';
    docs_list_item=docs_list_item+'</ul>';
    
    return docs_list_item;
}