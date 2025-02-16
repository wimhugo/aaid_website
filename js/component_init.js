function component_initialise(){
    
    
    
    <!-- Sidebar Construction-->
    var layout_sidebar = 'Test';
    //alert(layout_sidebar);
    layout_sidebar = make_docs_list_item('');
    //alert(document.getElementById('frame_sidebar').innerHTML);
    document.getElementById('frame_sidebar').innerHTML = layout_sidebar;
    
}